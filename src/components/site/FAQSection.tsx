import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/faqs";
import { Reveal } from "./Reveal";
import { WhatsAppLink } from "./WhatsAppLink";
import { WA } from "@/lib/site";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="container-page py-20">
      <Reveal>
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Questions, answered</h2>
        <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
          Everything you might want to know before sending us a message.
        </p>
      </Reveal>

      <div className="mt-10 max-w-3xl">
        {faqs.map((faq, i) => (
          <Reveal key={faq.q} delay={i * 0.04} as="div">
            <div className="border-b border-border">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-display text-lg text-foreground">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-moss transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-60 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10">
          <WhatsAppLink message={WA.general}>Still have a question? Ask on WhatsApp</WhatsAppLink>
        </div>
      </Reveal>
    </section>
  );
}
