"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface UserProfile {
  id: number;
  name: string;
  email: string;
  role: string;
  studentData?: {
    enrollments: Array<{
      Enrollment_id: number;
      Course_id: string;
      Semester: string;
      Final_grade: string;
      fieldt_course: {
        Name: string;
        Duration: string;
      };
    }>;
  };
  employeeData?: {
    Position: string;
    Salary: number;
  };
  coordinatorData?: {
    organizations: Array<{
      Org_id: number;
      Name: string;
      Contact_info: string;
    }>;
    mentors: Array<{
      Mentor_id: number;
      person: {
        Name: string;
        Email: string;
      };
    }>;
  };
}

export default function ProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth/login");
      return;
    }

    fetchProfile();
  }, [router]);

  const fetchProfile = async () => {
    try {
      const response = await fetch("/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("userRole");
          router.push("/auth/login");
          return;
        }
        throw new Error("Failed to fetch profile");
      }

      const data = await response.json();
      setProfile(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    router.push("/auth/login");
  };

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;
  if (!profile) return null;

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm text-red-600 hover:text-red-800"
            >
              Logout
            </button>
          </div>

          {/* Basic Profile Information */}
          <div className="space-y-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1 text-gray-900">{profile.name}</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1 text-gray-900">{profile.email}</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <div className="mt-1 text-gray-900 capitalize">
                {profile.role}
              </div>
            </div>
          </div>

          {/* Role-specific Information */}
          {profile.role === "student" && profile.studentData && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">My Courses</h2>
              <div className="space-y-4">
                {profile.studentData.enrollments.map((enrollment) => (
                  <div
                    key={enrollment.Enrollment_id}
                    className="border rounded-lg p-4"
                  >
                    <h3 className="font-medium">
                      {enrollment.fieldt_course.Name}
                    </h3>
                    <div className="text-sm text-gray-600">
                      <p>Course ID: {enrollment.Course_id}</p>
                      <p>Semester: {enrollment.Semester}</p>
                      <p>Duration: {enrollment.fieldt_course.Duration}</p>
                      {enrollment.Final_grade && (
                        <p>Grade: {enrollment.Final_grade}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {profile.role === "employee" && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Admin Access</h2>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/students"
                  className="p-4 border rounded-lg hover:bg-gray-50"
                >
                  Manage Students
                </Link>
                <Link
                  href="/coordinators"
                  className="p-4 border rounded-lg hover:bg-gray-50"
                >
                  Manage Coordinators
                </Link>
                <Link
                  href="/mentors"
                  className="p-4 border rounded-lg hover:bg-gray-50"
                >
                  Manage Mentors
                </Link>
                <Link
                  href="/organizations"
                  className="p-4 border rounded-lg hover:bg-gray-50"
                >
                  Manage Organizations
                </Link>
                <Link
                  href="/fieldt-courses"
                  className="p-4 border rounded-lg hover:bg-gray-50"
                >
                  Manage Courses
                </Link>
                <Link
                  href="/enrollments"
                  className="p-4 border rounded-lg hover:bg-gray-50"
                >
                  Manage Enrollments
                </Link>
              </div>
            </div>
          )}

          {profile.role === "coordinator" && profile.coordinatorData && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Coordinator Access</h2>

              {/* Organizations Section */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-3">My Organizations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {profile.coordinatorData.organizations.map((org) => (
                    <div key={org.Org_id} className="border rounded-lg p-4">
                      <h4 className="font-medium">{org.Name}</h4>
                      <p className="text-sm text-gray-600">
                        {org.Contact_info}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mentors Section */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-3">My Mentors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {profile.coordinatorData.mentors.map((mentor) => (
                    <div
                      key={mentor.Mentor_id}
                      className="border rounded-lg p-4"
                    >
                      <h4 className="font-medium">{mentor.person.Name}</h4>
                      <p className="text-sm text-gray-600">
                        {mentor.person.Email}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Access Links */}
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/students"
                  className="p-4 border rounded-lg hover:bg-gray-50"
                >
                  View Students
                </Link>
                <Link
                  href="/fieldt-courses"
                  className="p-4 border rounded-lg hover:bg-gray-50"
                >
                  View Courses
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
