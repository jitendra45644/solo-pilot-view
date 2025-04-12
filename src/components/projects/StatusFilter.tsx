
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Status } from "@/types";

type StatusFilterProps = {
  activeFilter: string | null;
  onFilterChange: (status: string | null) => void;
};

const StatusFilter = ({ activeFilter, onFilterChange }: StatusFilterProps) => {
  const statuses: { value: string | null; label: string }[] = [
    { value: null, label: "All" },
    { value: "planned", label: "Planned" },
    { value: "in-progress", label: "In Progress" },
    { value: "completed", label: "Completed" },
    { value: "on-hold", label: "On Hold" },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {statuses.map((status) => (
        <Button
          key={status.label}
          variant={activeFilter === status.value ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange(status.value)}
          className="text-xs h-8"
        >
          {status.label}
        </Button>
      ))}
    </div>
  );
};

export default StatusFilter;
