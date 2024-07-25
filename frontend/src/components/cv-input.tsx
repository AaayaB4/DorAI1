// src/components/CvInput.tsx
"use client"; 
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function CvInput() {
  const [cvData, setCVData] = useState({
    name: "",
    email: "",
    phone: "",
    education: [],
    workExperience: [],
    otherDetails: "",
  });
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  const handleCVChange = (field, value) => {
    setCVData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleAddEducation = () => {
    setCVData((prevData) => ({
      ...prevData,
      education: [...prevData.education, { school: "", degree: "", graduationYear: "" }],
    }));
  };

  const handleRemoveEducation = (index) => {
    setCVData((prevData) => ({
      ...prevData,
      education: prevData.education.filter((_, i) => i !== index),
    }));
  };

  const handleAddWorkExperience = () => {
    setCVData((prevData) => ({
      ...prevData,
      workExperience: [...prevData.workExperience, { company: "", position: "", startYear: "", endYear: "" }],
    }));
  };

  const handleRemoveWorkExperience = (index) => {
    setCVData((prevData) => ({
      ...prevData,
      workExperience: prevData.workExperience.filter((_, i) => i !== index),
    }));
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills((prevSkills) => [...prevSkills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillIndex) => {
    setSkills((prevSkills) => prevSkills.filter((_, i) => i !== skillIndex));
  };

  return (
    <div className="flex flex-col gap-8 p-6 md:p-10 bg-[#f0f4fc] text-[#374151]">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={cvData.name}
              onChange={(e) => handleCVChange("name", e.target.value)}
              className="bg-white text-[#374151] border border-[#5b21b6]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={cvData.email}
              onChange={(e) => handleCVChange("email", e.target.value)}
              className="bg-white text-[#374151] border border-[#5b21b6]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              value={cvData.phone}
              onChange={(e) => handleCVChange("phone", e.target.value)}
              className="bg-white text-[#374151] border border-[#5b21b6]"
            />
          </div>
          <div className="space-y-2">
            <Label>Education</Label>
            <div className="space-y-4">
              {cvData.education.map((edu, index) => (
                <div key={index} className="grid grid-cols-[1fr_1fr_100px] gap-4">
                  <Input
                    placeholder="School"
                    value={edu.school}
                    onChange={(e) => {
                      const updatedEducation = [...cvData.education];
                      updatedEducation[index].school = e.target.value;
                      setCVData((prevData) => ({ ...prevData, education: updatedEducation }));
                    }}
                    className="bg-white text-[#374151] border border-[#5b21b6]"
                  />
                  <Input
                    placeholder="Degree"
                    value={edu.degree}
                    onChange={(e) => {
                      const updatedEducation = [...cvData.education];
                      updatedEducation[index].degree = e.target.value;
                      setCVData((prevData) => ({ ...prevData, education: updatedEducation }));
                    }}
                    className="bg-white text-[#374151] border border-[#5b21b6]"
                  />
                  <Input
                    placeholder="Graduation Year"
                    value={edu.graduationYear}
                    onChange={(e) => {
                      const updatedEducation = [...cvData.education];
                      updatedEducation[index].graduationYear = e.target.value;
                      setCVData((prevData) => ({ ...prevData, education: updatedEducation }));
                    }}
                    className="bg-white text-[#374151] border border-[#5b21b6]"
                  />
                  <Button variant="ghost" size="icon" onClick={() => handleRemoveEducation(index)}>
                    <TrashIcon className="w-5 h-5" />
                  </Button>
                </div>
              ))}
              <Button variant="outline" className="border-[#5b21b6] text-[#5b21b6]" onClick={handleAddEducation}>
                Add Education
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Work Experience</Label>
            <div className="space-y-4">
              {cvData.workExperience.map((exp, index) => (
                <div key={index} className="grid grid-cols-[1fr_1fr_100px] gap-4">
                  <Input
                    placeholder="Company"
                    value={exp.company}
                    onChange={(e) => {
                      const updatedExperience = [...cvData.workExperience];
                      updatedExperience[index].company = e.target.value;
                      setCVData((prevData) => ({ ...prevData, workExperience: updatedExperience }));
                    }}
                    className="bg-white text-[#374151] border border-[#5b21b6]"
                  />
                  <Input
                    placeholder="Position"
                    value={exp.position}
                    onChange={(e) => {
                      const updatedExperience = [...cvData.workExperience];
                      updatedExperience[index].position = e.target.value;
                      setCVData((prevData) => ({ ...prevData, workExperience: updatedExperience }));
                    }}
                    className="bg-white text-[#374151] border border-[#5b21b6]"
                  />
                  <div className="grid grid-cols-[1fr_1fr] gap-2">
                    <Input
                      placeholder="Start Year"
                      value={exp.startYear}
                      onChange={(e) => {
                        const updatedExperience = [...cvData.workExperience];
                        updatedExperience[index].startYear = e.target.value;
                        setCVData((prevData) => ({
                          ...prevData,
                          workExperience: updatedExperience,
                        }));
                      }}
                      className="bg-white text-[#374151] border border-[#5b21b6]"
                    />
                    <Input
                      placeholder="End Year"
                      value={exp.endYear}
                      onChange={(e) => {
                        const updatedExperience = [...cvData.workExperience];
                        updatedExperience[index].endYear = e.target.value;
                        setCVData((prevData) => ({ ...prevData, workExperience: updatedExperience }));
                      }}
                      className="bg-white text-[#374151] border border-[#5b21b6]"
                    />
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => handleRemoveWorkExperience(index)}>
                    <TrashIcon className="w-5 h-5" />
                  </Button>
                </div>
              ))}
              <Button variant="outline" className="border-[#5b21b6] text-[#5b21b6]" onClick={handleAddWorkExperience}>
                Add Work Experience
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="other-details">Other Details</Label>
            <Textarea
              id="other-details"
              rows={3}
              value={cvData.otherDetails}
              onChange={(e) => handleCVChange("otherDetails", e.target.value)}
              className="bg-white text-[#374151] border border-[#5b21b6]"
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Skills</Label>
            <div className="flex gap-2">
              <Input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddSkill();
                  }
                }}
                placeholder="Add a new skill"
                className="bg-white text-[#374151] border border-[#5b21b6]"
              />
              <Button variant="outline" className="border-[#5b21b6] text-[#5b21b6]" onClick={handleAddSkill}>
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 rounded-full bg-[#d8b4fe] px-3 py-1 text-sm text-[#374151]">
                  {skill}
                  <Button variant="ghost" size="icon" onClick={() => handleRemoveSkill(index)}>
                    <XIcon className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="outline" className="border-[#5b21b6] text-[#5b21b6]">Cancel</Button>
        <Button className="bg-[#a474ab] text-white">Save</Button>
      </div>
    </div>
  );
}

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
