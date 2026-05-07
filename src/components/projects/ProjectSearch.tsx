'use client';

import { ChangeEvent } from 'react';
import { Input } from '@/components/ui/Input';

interface ProjectSearchProps {
  value: string;
  onChange: (value: string) => void;
}

function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

export function ProjectSearch({ value, onChange }: ProjectSearchProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Input
      label="Search projects"
      hideLabel
      placeholder="Search by name, tech, or category…"
      value={value}
      onChange={handleChange}
      leftIcon={<SearchIcon />}
      aria-label="Search projects"
      type="search"
      autoComplete="off"
      spellCheck={false}
    />
  );
}
