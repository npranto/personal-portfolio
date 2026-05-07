import type { ProjectCaseStudy as CaseStudyType } from '@/lib/content/types';

interface ProjectCaseStudyProps {
  caseStudy: CaseStudyType;
}

interface SectionProps {
  title: string;
  content: string | undefined;
}

function CaseStudySection({ title, content }: SectionProps) {
  if (!content?.trim()) return null;
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-accent)] mb-2">
        {title}
      </h3>
      <p className="text-sm text-[var(--color-muted)] leading-relaxed">
        {content}
      </p>
    </div>
  );
}

export function ProjectCaseStudy({ caseStudy }: ProjectCaseStudyProps) {
  return (
    <div className="space-y-6">
      <CaseStudySection title="Problem" content={caseStudy.problem} />
      <CaseStudySection title="Constraints" content={caseStudy.constraints} />
      <CaseStudySection title="Solution" content={caseStudy.solution} />
      <CaseStudySection
        title="Architecture"
        content={caseStudy.architectureNotes}
      />
      <CaseStudySection
        title="Technical Decisions"
        content={caseStudy.technicalDecisions}
      />
      <CaseStudySection title="Impact" content={caseStudy.impact} />
      <CaseStudySection
        title="Lessons Learned"
        content={caseStudy.lessonsLearned}
      />
    </div>
  );
}
