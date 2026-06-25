import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem, RevealText } from "@/components/ui/reveal";
import { ContactForm } from "@/components/ui/contact-form";
import { expertNetwork, cta } from "@/content/site";

export function ExpertNetwork() {
  return (
    <Section id="expert-network" tone="muted">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Expert network"
            title={expertNetwork.heading}
            intro={expertNetwork.intro}
            id="expert-network-heading"
          />

          <Reveal delay={0.12}>
            <div className="mt-8">
              <ContactForm type="experts" />
            </div>
          </Reveal>
        </div>

        <div>
          <RevealGroup className="grid gap-3 sm:grid-cols-2 min-[1100px]:grid-cols-3">
            {expertNetwork.domains.map((domain) => (
              <RevealItem key={domain}>
                <article className="group flex min-h-[170px] flex-col justify-between border border-[#1c1612]/12 bg-[#f0ece4] p-6 transition-all duration-200 hover:border-[#1c1612]/20 hover:bg-[#f8f6f2]">
                  <span className="h-px w-10 bg-[#1c1612]/15 transition-all duration-200 group-hover:w-14 group-hover:bg-[#1c1612]/35" />
                  <p className="font-display text-[24px] leading-[1.12] tracking-[-0.015em] text-[#1c1612]">
                    <RevealText>{domain}</RevealText>
                  </p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </Section>
  );
}
