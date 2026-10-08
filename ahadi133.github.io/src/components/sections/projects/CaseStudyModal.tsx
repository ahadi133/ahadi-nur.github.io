"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { buttonClasses } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

type CaseStudyModalProps = {
  slug: string;
  title: string;
  tool: string;
  children: React.ReactNode;
};

export function CaseStudyModal({ slug, title, tool, children }: CaseStudyModalProps) {
  return (
    <Modal
      title={title}
      description={`Case study · ${tool}`}
      trigger={
        <button type="button" className={buttonClasses("solid")}>
          <BookOpen size={16} aria-hidden /> Read Case Study
        </button>
      }
    >
      {children}
      <div className="mt-10 border-t border-card-border pt-6">
        <Link
          href={`/projects/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary-soft hover:text-text"
        >
          Open full page <ArrowRight size={16} aria-hidden />
        </Link>
      </div>
    </Modal>
  );
}
