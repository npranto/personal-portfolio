import { TagList } from '@/components/ui/TagList';

interface ProjectTechStackProps {
  technologies: string[];
  limit?: number;
  className?: string;
}

export function ProjectTechStack({
  technologies,
  limit,
  className,
}: ProjectTechStackProps) {
  if (!technologies || technologies.length === 0) return null;
  return (
    <TagList
      tags={technologies}
      label="Tech stack"
      variant="default"
      limit={limit}
      className={className}
    />
  );
}
