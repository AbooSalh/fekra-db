"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Home() {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token") || Cookies.get("token");
    const role = localStorage.getItem("userRole");

    if (!token) {
      router.push("/auth/login");
      return;
    }

    setUserRole(role);
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen p-8 bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  // Student View
  if (userRole === "student") {
    return (
      <main className="min-h-screen p-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Welcome to Fekra DB
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/students/courses"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                My Courses
              </h2>
              <p className="text-gray-600">
                View and manage your enrolled courses
              </p>
            </Link>
            <Link
              href="/students/evaluations"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                My Evaluations
              </h2>
              <p className="text-gray-600">
                View your course evaluations and grades
              </p>
            </Link>
            <Link
              href="/profile"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                My Profile
              </h2>
              <p className="text-gray-600">
                View and update your profile information
              </p>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Mentor View
  if (userRole === "mentor") {
    return (
      <main className="min-h-screen p-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Welcome to Fekra DB
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/mentors/courses"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                My Courses
              </h2>
              <p className="text-gray-600">Manage your assigned courses</p>
            </Link>
            <Link
              href="/mentors/students"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                My Students
              </h2>
              <p className="text-gray-600">View and manage your students</p>
            </Link>
            <Link
              href="/profile"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                My Profile
              </h2>
              <p className="text-gray-600">
                View and update your profile information
              </p>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Employee View
  if (userRole === "employee") {
    return (
      <main className="min-h-screen p-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Welcome to Fekra DB
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/students"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Students
              </h2>
              <p className="text-gray-600">
                Manage student records and information
              </p>
            </Link>
            <Link
              href="/persons"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Persons
              </h2>
              <p className="text-gray-600">
                Manage person records and information
              </p>
            </Link>
            <Link
              href="/coordinators"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Coordinators
              </h2>
              <p className="text-gray-600">Manage coordinator information</p>
            </Link>
            <Link
              href="/mentors"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Mentors
              </h2>
              <p className="text-gray-600">
                View and manage mentor information
              </p>
            </Link>
            <Link
              href="/organizations"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Organizations
              </h2>
              <p className="text-gray-600">Manage organization details</p>
            </Link>
            <Link
              href="/field-courses"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Field Courses
              </h2>
              <p className="text-gray-600">Handle field course information</p>
            </Link>
            <Link
              href="/enrollments"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Enrollments
              </h2>
              <p className="text-gray-600">Student enrollment management</p>
            </Link>
            <Link
              href="/employees/report"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                System Report
              </h2>
              <p className="text-gray-600">
                View system overview and statistics
              </p>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Default view for unauthenticated users
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome to Fekra DB
        </h1>
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">
            Please log in to access the system
          </p>
          <Link
            href="/auth/login"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
