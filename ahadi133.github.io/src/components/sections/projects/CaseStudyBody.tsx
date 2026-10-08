import { ExpectedValueChart } from "@/components/charts/ExpectedValueChart";
import type { Project } from "@/types/content";
import { PayoffTable } from "./PayoffTable";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h3 className="text-xs font-semibold tracking-[0.2em] text-primary-soft uppercase">
        {title}
      </h3>
      <div className="leading-relaxed text-text-secondary">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="text-primary" aria-hidden>
            ▸
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Context → Problem → Data → Approach → Insights → Implication → Limitations. */
export function CaseStudyBody({ project }: { project: Project }) {
  const { caseStudy, payoffs } = project;
  return (
    <div className="space-y-8">
      <Block title="Context">
        <p>{caseStudy.context}</p>
      </Block>
      <Block title="Problem">
        <p>{caseStudy.problem}</p>
      </Block>
      <Block title="Data">
        <p>{caseStudy.data}</p>
        {payoffs && (
          <div className="mt-4">
            <PayoffTable payoffs={payoffs} />
          </div>
        )}
      </Block>
      <Block title="Approach">
        <BulletList items={caseStudy.approach} />
      </Block>
      <Block title="Insights">
        <BulletList items={caseStudy.insights} />
        {payoffs && (
          <div className="mt-6">
            <ExpectedValueChart payoffs={payoffs} />
          </div>
        )}
      </Block>
      <Block title="Business implication">
        <p className="text-text">{caseStudy.implication}</p>
      </Block>
      <Block title="Limitations">
        <p className="text-muted">{caseStudy.limitations}</p>
      </Block>
    </div>
  );
}
