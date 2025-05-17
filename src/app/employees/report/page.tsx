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
    totalStudents: number;
    totalMentors: number;
    totalOrganizations: number;
    totalCourses: number;
    totalEnrollments: number;
    activeEnrollments: number;
    pendingOrganizations: number;
  };
  recentEnrollments: Array<{
    Enrollment_id: number;
    Semester: string;
    student: {
      person: {
        Name: string;
      };
    };
    fieldt_course: {
      Name: string;
    };
  }>;
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {reportData.statistics.totalStudents}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Mentors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {reportData.statistics.totalMentors}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Organizations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {reportData.statistics.totalOrganizations}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {reportData.statistics.totalCourses}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Enrollments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {reportData.statistics.totalEnrollments}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Enrollments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {reportData.statistics.activeEnrollments}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Organizations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {reportData.statistics.pendingOrganizations}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Recent Enrollments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student Name</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Semester</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reportData.recentEnrollments.map((enrollment) => (
                <TableRow key={enrollment.Enrollment_id}>
                  <TableCell>{enrollment.student.person.Name}</TableCell>
                  <TableCell>{enrollment.fieldt_course.Name}</TableCell>
                  <TableCell>{enrollment.Semester}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
