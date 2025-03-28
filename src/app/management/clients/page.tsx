"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ClientsPage() {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('/api/clients')
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, []);

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-aws-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-light text-aws-navy">Manage Clients</h2>
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Search clients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-aws-darkGray focus:border-aws-orange"
          />
          <Button className="bg-aws-orange text-aws-navy hover:bg-orange-600">Add Client</Button>
        </div>
      </div>
      <ul className="space-y-2">
        {filteredClients.map((client) => (
          <li key={client.id} className="p-4 bg-aws-lightGray rounded-lg flex justify-between items-center">
            <div>
              <p className="text-aws-navy font-medium">{client.name}</p>
              <p className="text-aws-darkGray text-sm">{client.email}</p>
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
