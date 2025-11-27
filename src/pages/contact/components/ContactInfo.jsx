import React from "react";
import { MapPin, Package, Users, Plane, Building2, Clock } from "lucide-react";
import MapCard from "./MapCard";
import DepartmentsCard from "./DepartmentsCard";
import ResponseTimeCard from "./ResponseTimeCard";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <MapCard />
      <DepartmentsCard />
      <ResponseTimeCard />
    </div>
  );
}