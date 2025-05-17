"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

interface ReportData {
  statistics: {
    overview: {
      totalStudents: number;
      totalMentors: number;
      totalOrganizations: number;
      totalCourses: number;
      totalEnrollments: number;
      activeEnrollments: number;
      pendingOrganizations: number;
      totalCoordinators: number;
      totalEmployees: number;
      totalInternalMentors: number;
      totalExternalMentors: number;
    };
    departmentStats: Array<{
      Major_Dept: string;
      _count: {
        Student_id: number;
      };
    }>;
    courseStats: Array<{
      Course_id: string;
      Name: string;
      _count: {
        enroll: number;
        enrollment: number;
        mentor: number;
      };
    }>;
    organizationStats: Array<{
      Org_id: number;
      Name: string;
      _count: {
        fieldt_course: number;
        external_mentor: number;
      };
    }>;
    gradeDistribution: Array<{
      Final_grade: string;
      _count: {
        Enrollment_id: number;
      };
    }>;
    activeCourses: Array<{
      courseId: string;
      name: string;
      activeEnrollments: number;
    }>;
  };
}

export default function EmployeeReport() {
  const [reportData, setReportData] = useState<ReportData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const response = await fetch("/api/employees/report");
        if (!response.ok) {
          throw new Error("Failed to fetch report data");
        }
        const data = await response.json();
        setReportData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchReportData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        {error}
      </div>
    );
  }

  if (!reportData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        No data available
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">System Overview Report</h1>

      {/* Overview Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {reportData.statistics.overview.totalStudents}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Mentors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {reportData.statistics.overview.totalMentors}
            </p>
            <p className="text-sm text-gray-500">
              Internal: {reportData.statistics.overview.totalInternalMentors} |
              External: {reportData.statistics.overview.totalExternalMentors}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Organizations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {reportData.statistics.overview.totalOrganizations}
            </p>
            <p className="text-sm text-gray-500">
              Pending: {reportData.statistics.overview.pendingOrganizations}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {reportData.statistics.overview.totalCourses}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Enrollments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {reportData.statistics.overview.totalEnrollments}
            </p>
            <p className="text-sm text-gray-500">
              Active: {reportData.statistics.overview.activeEnrollments}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Coordinators</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {reportData.statistics.overview.totalCoordinators}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {reportData.statistics.overview.totalEmployees}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Department Statistics */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Department Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Department</TableHead>
                <TableHead>Number of Students</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reportData.statistics.departmentStats.map((dept) => (
                <TableRow key={dept.Major_Dept}>
                  <TableCell>{dept.Major_Dept}</TableCell>
                  <TableCell>{dept._count.Student_id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Course Statistics */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Course Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead>Enrollments</TableHead>
                <TableHead>Mentors</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reportData.statistics.courseStats.map((course) => (
                <TableRow key={course.Course_id}>
                  <TableCell>{course.Name}</TableCell>
                  <TableCell>{course._count.enrollment}</TableCell>
                  <TableCell>{course._count.mentor}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Organization Statistics */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Organization Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Organization</TableHead>
                <TableHead>Courses</TableHead>
                <TableHead>External Mentors</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reportData.statistics.organizationStats.map((org) => (
                <TableRow key={org.Org_id}>
                  <TableCell>{org.Name}</TableCell>
                  <TableCell>{org._count.fieldt_course}</TableCell>
                  <TableCell>{org._count.external_mentor}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Grade Distribution */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Grade Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Grade</TableHead>
                <TableHead>Count</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reportData.statistics.gradeDistribution.map((grade) => (
                <TableRow key={grade.Final_grade}>
                  <TableCell>{grade.Final_grade}</TableCell>
                  <TableCell>{grade._count.Enrollment_id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Active Courses */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Active Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead>Active Enrollments</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reportData.statistics.activeCourses.map((course) => (
                <TableRow key={course.courseId}>
                  <TableCell>{course.name}</TableCell>
                  <TableCell>{course.activeEnrollments}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
