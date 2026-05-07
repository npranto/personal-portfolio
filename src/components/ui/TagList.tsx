import { Badge } from '@/components/ui/Badge';

interface TagListProps {
  tags: string[];
  label?: string;
  variant?: 'default' | 'accent' | 'outline';
  className?: string;
  limit?: number;
}

export function TagList({
  tags,
  label = 'Tags',
  variant = 'default',
  className = '',
  limit,
}: TagListProps) {
  if (!tags || tags.length === 0) return null;
  const visible = limit ? tags.slice(0, limit) : tags;
  const remaining = limit ? tags.length - limit : 0;

  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`} aria-label={label}>
      {visible.map((tag) => (
        <Badge key={tag} variant={variant}>
          {tag}
        </Badge>
      ))}
      {remaining > 0 && (
        <Badge variant="outline" className="text-[var(--color-faint)]">
          +{remaining} more
        </Badge>
      )}
    </div>
  );
}
