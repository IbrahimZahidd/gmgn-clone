"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export function FilterSettings() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Settings className="h-4 w-4" />
          <span className="sr-only">Open filter settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Filter Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Show All Columns</DropdownMenuItem>
        <DropdownMenuItem>Hide Zero Values</DropdownMenuItem>
        <DropdownMenuItem>Reset Filters</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
