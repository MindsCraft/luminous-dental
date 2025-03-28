"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function StaffPage() {
  const [staff, setStaff] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('/api/staff')
      .then((res) => res.json())
      .then((data) => setStaff(data));
  }, []);

  const filteredStaff = staff.filter((member) =>
    member.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-aws-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-light text-aws-navy">Manage Staff</h2>
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Search staff..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-aws-darkGray focus:border-aws-orange"
          />
          <Button className="bg-aws-orange text-aws-navy hover:bg-orange-600">Add Staff</Button>
        </div>
      </div>
      <ul className="space-y-2">
        {filteredStaff.map((member) => (
          <li key={member.id} className="p-4 bg-aws-lightGray rounded-lg flex justify-between items-center">
            <div>
              <p className="text-aws-navy font-medium">{member.name}</p>
              <p className="text-aws-darkGray text-sm">{member.role}</p>
            </div>
            <Button variant="outline" className="border-aws-orange text-aws-orange hover:bg-orange-100">
              Edit
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
