'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  href?: string;
  linkLabel?: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3 pt-4">
      {items.map((item, index) => (
        <div
          key={item.question}
          className="bg-brand-subtle border border-brand-border rounded-custom overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-brand-canvas transition-colors duration-200"
          >
            <h3 className="font-display text-lg text-brand-neutral font-normal text-left">
              {item.question}
            </h3>
            <span
              className={`flex-shrink-0 ml-4 text-brand-neutral transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </button>

          {openIndex === index && (
            <div className="px-6 pb-4 border-t border-brand-border pt-4">
              <p className="text-[15px] text-brand-muted leading-relaxed">
                {item.answer}
                {item.href && item.linkLabel ? (
                  <>
                    {" "}
                    <a href={item.href} className="text-brand-green font-medium">
                      {item.linkLabel}
                    </a>
                  </>
                ) : null}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
