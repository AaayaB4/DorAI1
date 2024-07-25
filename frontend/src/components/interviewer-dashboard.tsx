// src/components/InterviewerDashboard.tsx
import React from 'react';
import Link from 'next/link'; // Ensure Link is imported from 'next/link'
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function InterviewerDashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#f0f4fc] items-center">
      <header className="flex items-center justify-between w-full p-6 bg-[#f0f4fc]">
        <h1 className="text-3xl font-bold text-[#5b21b6]">Interviewer Dashboard</h1>
        <Link href="/newjob" passHref> {/* Ensure the correct path is used */}
          <Button variant="primary" className="bg-[#d8b4fe] text-[#5b21b6]">
            Upload Job
          </Button>
        </Link>
      </header>
      <div className="w-full max-w-5xl mt-8">
        <Tabs defaultValue="jobs">
          <TabsList className="flex justify-center">
            <TabsTrigger value="jobs" className="px-4 py-2 text-[#5b21b6]">Jobs</TabsTrigger>
            <TabsTrigger value="candidates" className="px-4 py-2 text-[#5b21b6]">Candidates</TabsTrigger>
            <TabsTrigger value="feedback" className="px-4 py-2 text-[#5b21b6]">Feedback</TabsTrigger>
          </TabsList>
          <TabsContent value="jobs" className="mt-8">
            <Card className="shadow-md">
              <CardHeader className="bg-[#5b21b6] text-white">
                <CardTitle>Job Postings</CardTitle>
                <CardDescription>Manage your job postings and view candidate applications.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Job Title</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Skills</TableHead>
                      <TableHead>Number of Candidates</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Software Engineer</TableCell>
                      <TableCell>We are looking for a talented software engineer to join our team.</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-[#d8b4fe] text-[#5b21b6]">JavaScript</Badge>
                        <Badge variant="outline" className="bg-[#d8b4fe] text-[#5b21b6]">React</Badge>
                        <Badge variant="outline" className="bg-[#d8b4fe] text-[#5b21b6]">Node.js</Badge>
                      </TableCell>
                      <TableCell>12 Candidates</TableCell>
                      <TableCell>
                        <Button variant="outline" className="text-[#5b21b6] border-[#5b21b6]">
                          Check Performance
                        </Button>
                      </TableCell>
                    </TableRow>
                    {/* Additional rows */}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="candidates" className="mt-8">
            <Card className="shadow-md">
              <CardHeader className="bg-[#5b21b6] text-white">
                <CardTitle>Candidate Applications</CardTitle>
                <CardDescription>Review and manage candidate applications for your job postings.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Candidate</TableHead>
                      <TableHead>Job</TableHead>
                      <TableHead>Skills</TableHead>
                      <TableHead>Ranking</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="font-medium">John Doe</div>
                          <div className="text-muted-foreground text-sm">Software Engineer</div>
                        </div>
                      </TableCell>
                      <TableCell>Software Engineer</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-[#d8b4fe] text-[#5b21b6]">JavaScript</Badge>
                        <Badge variant="outline" className="bg-[#d8b4fe] text-[#5b21b6]">React</Badge>
                        <Badge variant="outline" className="bg-[#d8b4fe] text-[#5b21b6]">Node.js</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="font-medium">4</div>
                          <Progress value={80} className="flex-1" />
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" className="text-[#5b21b6] border-[#5b21b6]">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                    {/* Additional rows */}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="feedback" className="mt-8">
            <Card className="shadow-md">
              <CardHeader className="bg-[#5b21b6] text-white">
                <CardTitle>Feedback</CardTitle>
                <CardDescription>Provide and view feedback for candidates.</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Feedback content */}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
