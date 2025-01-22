import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Video, FileText, Users } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Video Lectures',
      description: 'Access high-quality video lectures from expert instructors',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Study Materials',
      description: 'Download comprehensive study materials and notes',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Interactive Learning',
      description: 'Engage with interactive content and assessments',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community',
      description: 'Join a community of learners and educators',
    },
  ];

  return (
    <div className="space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
          Welcome to AbhishekLearningHub
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Your one-stop platform for quality education and learning resources
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/register"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to start learning?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Join thousands of students already learning on AbhishekLearningHub
        </p>
        <Link
          to="/register"
          className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-block"
        >
          Create Free Account
        </Link>
      </section>
    </div>
  );
}