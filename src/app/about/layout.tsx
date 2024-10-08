import { Suspense } from "react";
import { allAbouts } from "contentlayer/generated";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/accordion";
import { SiTypescript } from "react-icons/si";
import { FadeInStagger, FadeIn } from "@/components/atoms/fade-in";
import { AsideLink } from "@/components/atoms/aside-link";
import { siteConfig } from "@/constants";
import { Metadata } from "next";
import { useTheme } from 'next-themes';

export const metadata: Metadata = {
  title: "About Me | " + siteConfig.name,
  description: siteConfig.description,
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section 
      className="grid grid-cols-12 overflow-hidden h-full"
      style={{
        background: 'linear-gradient(to right, #bd666c, #000000 100%)',
      }}
      
      
    >
      <aside className="md:col-span-3 lg:col-span-2 border-r border-lines md:block hidden overflow-y-auto">
        <Accordion type="single" collapsible defaultValue="about">
          <AccordionItem value={"about"} defaultChecked>
            <AccordionTrigger className="border-b border-lines px-5 py-2.5 text-left">
              About Me
            </AccordionTrigger>
            <AccordionContent className="mt-5 space-y-1">
              <FadeInStagger faster>
                {allAbouts.map(({ title }) => (
                  <FadeIn key={title}>
                    <Suspense fallback={<>Loading...</>}>
                      <AsideLink href={title} key={title} title={title}>
                        <SiTypescript className="w-4 h-4 shrink-0" />
                        {title}
                      </AsideLink>
                    </Suspense>
                  </FadeIn>
                ))}
              </FadeInStagger>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </aside>
      <section className="md:col-span-9 lg:col-span-10 col-span-12 overflow-y-auto relative h-[84dvh] md:h-auto">
        {children}
      </section>
    </section>
  );
}
