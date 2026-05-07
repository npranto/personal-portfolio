import type { SkillGroup, Skill } from '@/lib/content/types';

const LEVEL_STYLES: Record<NonNullable<Skill['level']>, string> = {
  core: 'bg-[var(--color-accent-glow,rgba(99,102,241,0.15))] text-[var(--color-accent-light)] border border-[var(--color-accent-dark)]',
  proficient:
    'bg-[var(--color-elevated)] text-[var(--color-text-secondary)] border border-[var(--color-border)]',
  familiar:
    'bg-transparent text-[var(--color-muted)] border border-[var(--color-border-subtle)]',
};

interface SkillGroupCardProps {
  group: SkillGroup;
}

export function SkillGroupCard({ group }: SkillGroupCardProps) {
  return (
    <div className="card p-5">
      <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--color-accent)] mb-4">
        {group.label}
      </h2>
      <ul
        className="flex flex-wrap gap-2"
        role="list"
        aria-label={`${group.label} skills`}
      >
        {group.skills.map((skill) => {
          const levelStyle = skill.level
            ? LEVEL_STYLES[skill.level]
            : LEVEL_STYLES.proficient;
          return (
            <li key={skill.name}>
              <span
                className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${levelStyle}`}
              >
                {skill.name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
