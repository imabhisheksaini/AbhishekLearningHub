export interface Course {
  id: string;
  title: string;
  description: string | null;
  thumbnail_url: string | null;
  instructor_id: string;
  created_at: string;
  updated_at: string;
}

export interface Lesson {
  id: string;
  course_id: string;
  title: string;
  description: string | null;
  content_type: 'video' | 'document';
  content_url: string;
  duration: number | null;
  order: number;
  created_at: string;
  updated_at: string;
}

export interface Progress {
  id: string;
  user_id: string;
  lesson_id: string;
  progress: number;
  last_position: number;
  completed: boolean;
  updated_at: string;
}