import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import type { Course, Lesson } from '../types/database';

interface CourseState {
  courses: Course[];
  loading: boolean;
  error: string | null;
  fetchCourses: () => Promise<void>;
  createCourse: (course: Partial<Course>) => Promise<Course>;
  updateCourse: (id: string, updates: Partial<Course>) => Promise<void>;
  fetchLessons: (courseId: string) => Promise<Lesson[]>;
  createLesson: (lesson: Partial<Lesson>) => Promise<Lesson>;
  updateLesson: (id: string, updates: Partial<Lesson>) => Promise<void>;
  reorderLessons: (courseId: string, lessonIds: string[]) => Promise<void>;
}

export const useCourseStore = create<CourseState>((set, get) => ({
  courses: [],
  loading: false,
  error: null,

  fetchCourses: async () => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      set({ courses: data, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  createCourse: async (course) => {
    const { data, error } = await supabase
      .from('courses')
      .insert([course])
      .select()
      .single();

    if (error) throw error;
    set((state) => ({ courses: [data, ...state.courses] }));
    return data;
  },

  updateCourse: async (id, updates) => {
    const { error } = await supabase
      .from('courses')
      .update(updates)
      .eq('id', id);

    if (error) throw error;
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === id ? { ...course, ...updates } : course
      ),
    }));
  },

  fetchLessons: async (courseId) => {
    const { data, error } = await supabase
      .from('lessons')
      .select('*')
      .eq('course_id', courseId)
      .order('order', { ascending: true });

    if (error) throw error;
    return data;
  },

  createLesson: async (lesson) => {
    const { data, error } = await supabase
      .from('lessons')
      .insert([lesson])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  updateLesson: async (id, updates) => {
    const { error } = await supabase
      .from('lessons')
      .update(updates)
      .eq('id', id);

    if (error) throw error;
  },

  reorderLessons: async (courseId, lessonIds) => {
    const updates = lessonIds.map((id, index) => ({
      id,
      order: index + 1,
    }));

    const { error } = await supabase.from('lessons').upsert(updates);
    if (error) throw error;
  },
}));