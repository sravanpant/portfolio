"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SearchAndSort = ({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
}: {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative flex items-center gap-4 p-2 rounded-lg bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border border-blue-200/20 dark:border-blue-800/20 shadow-lg">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <Input
            type="text"
            placeholder="Search projects by name, description, or technology..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/50 dark:bg-gray-900/50 border-blue-200/20 dark:border-blue-800/20 rounded-md
              text-blue-900 dark:text-blue-100
              placeholder:text-blue-500/70 dark:placeholder:text-blue-400/70
              focus:border-blue-400 dark:focus:border-blue-500
              focus:ring-blue-400/30 dark:focus:ring-blue-500/30
              hover:bg-white/70 dark:hover:bg-gray-900/70
              transition-colors duration-200"
          />
        </div>
        <div className="h-8 w-[1px] bg-blue-200/20 dark:bg-blue-800/20" />
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger
            className="w-[160px] bg-white/50 dark:bg-gray-900/50 border-blue-200/20 dark:border-blue-800/20 rounded-md
              text-blue-900 dark:text-blue-100
              hover:bg-white/70 dark:hover:bg-gray-900/70
              focus:ring-blue-400/30 dark:focus:ring-blue-500/30
              transition-colors duration-200"
          >
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent
            className="bg-white dark:bg-gray-900 border-blue-200/20 dark:border-blue-800/20
              shadow-lg backdrop-blur-lg"
          >
            <SelectItem
              value="newest"
              className="text-blue-900 dark:text-blue-100 focus:bg-blue-50 dark:focus:bg-blue-900/50"
            >
              Newest First
            </SelectItem>
            <SelectItem
              value="oldest"
              className="text-blue-900 dark:text-blue-100 focus:bg-blue-50 dark:focus:bg-blue-900/50"
            >
              Oldest First
            </SelectItem>
            <SelectItem
              value="az"
              className="text-blue-900 dark:text-blue-100 focus:bg-blue-50 dark:focus:bg-blue-900/50"
            >
              A-Z
            </SelectItem>
            <SelectItem
              value="za"
              className="text-blue-900 dark:text-blue-100 focus:bg-blue-50 dark:focus:bg-blue-900/50"
            >
              Z-A
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
