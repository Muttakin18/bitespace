"use client";
import { useState } from "react";
import { Star, BarChart2 } from "lucide-react";

const tabs = ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"];
const subTabs = ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"];
const moreTabs = ["Productivity", "Web Development", "Data Science", "Cooking"];

const courses = [
  {
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&q=80",
  },
  {
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80",
  },
  {
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
  },
  {
    title: "Balancing Productivity and...",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&q=80",
  },
  {
    title: "Mastering Money Manage...",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80",
  },
  {
    title: "From Idea to Startup Succ...",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
  },
];

function CourseCard({ course }: { course: typeof courses[0] }) {
  const avatars = [
    'https://i.pravatar.cc/28?img=10',
    'https://i.pravatar.cc/28?img=11',
    'https://i.pravatar.cc/28?img=12',
    'https://i.pravatar.cc/28?img=13',
  ];

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative">
        <img src={course.image} alt={course.title} className="w-full h-44 object-cover" />
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 flex-wrap">
          {[`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`].map((tag) => (
            <span key={tag} className="bg-black/60 text-white text-[10px] px-2.5 py-1 rounded-full backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-bold text-gray-900 text-sm leading-snug">{course.title}</h3>
          <div className="flex items-center gap-1 flex-shrink-0">
            <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
            <Star size={13} className="text-yellow-400 fill-yellow-400" />
          </div>
        </div>
        <p className="text-xs text-[#1B3DE8] mb-3">by {course.author}</p>

        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
            <BarChart2 size={12} className="text-gray-500" />
            <span className="text-xs text-gray-600">{course.level}</span>
          </div>
          <div className="flex items-center">
            {avatars.map((src, i) => (
              <img key={i} src={src} alt="" className="w-6 h-6 rounded-full border-2 border-white -ml-1.5 first:ml-0 object-cover" />
            ))}
            <span className="bg-[#CCFF00] text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full ml-1">26+</span>
          </div>
        </div>

        <p className="text-[#1B3DE8] font-extrabold text-base">
          ${course.price}<span className="text-xs font-normal text-gray-500">/lifetime</span>
        </p>
      </div>
    </div>
  );
}

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState("Featured");

  return (
    <section id="courses" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Discover Your Passion,<br />Build Your Skills
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Tab row 1 */}
        <div className="flex flex-wrap gap-2 mb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-[#CCFF00] text-black font-bold"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab row 2 */}
        <div className="flex flex-wrap gap-2 mb-2">
          {subTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-4 py-2 rounded-full text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all"
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab row 3 */}
        <div className="flex flex-wrap gap-2 mb-10">
          {moreTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-4 py-2 rounded-full text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all"
            >
              {tab}
            </button>
          ))}
          <button className="px-4 py-2 rounded-full text-sm text-[#1B3DE8] font-semibold hover:underline">
            + More
          </button>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
