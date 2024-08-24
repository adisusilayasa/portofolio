import {
  AnimatePresence,
  FadeIn,
  FadeInStagger,
} from "@/components/atoms/fade-in";
import ProjectCard from "@/components/molecules/project-card";
import { siteConfig } from "@/constants";
import { whoamiFetchProjects } from "@/lib/whoami";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

const projects: any = [
  {
    title: "TROLINE",
    description:
      "TROLINE is a modern e-commerce project that is based in Indonesia",
    created: "",
    image:
    "https://assets-global.website-files.com/5efb0b7816032fd33ce6059c/621961b2e092b715903037cf_bi-dashboard-mockup.png",
    designer: "Javascript Mastery",
    link: "https://troline.id/",
    category: ["Express.js", "React.js"],
  },
  {
    title: "Supply Chain Jobs",
    description:
      "Supply Chain Jobs is a platform to connect people who have interest with logistic industry.",
    created: "Jan 25, 2022",
    image:
      "https://assets-global.website-files.com/5efb0b7816032fd33ce6059c/621961b2e092b715903037cf_bi-dashboard-mockup.png",
    designer: "",
    link: "https://supplychainjobs.id/",
    category: ["Next", "Strapi"],
  },
  {
    title: "Iklanmu",
    description:
      "Iklanmu is a platform to book billboard all around Indonesia.",
    created: "Nov 1, 2022",
    image:
      "https://assets-global.website-files.com/5efb0b7816032fd33ce6059c/621961b2e092b715903037cf_bi-dashboard-mockup.png",
    link: "https://iklanmu.id/",
    category: ["Next.js", "Strapi"],
  },
  {
    title: "Bali Discount",
    description:
      "Bali discount is a platform to get hot deals all around Bali.",
    created: "Nov 1, 2022",
    image:
      "https://assets-global.website-files.com/5efb0b7816032fd33ce6059c/621961b2e092b715903037cf_bi-dashboard-mockup.png",
    designer: "B One Consulting",
    link: "https://balidiscount.co/",
    category: ["Next.js", "Express.js", "AWS"],
  },
  {
    title: "Treelogy",
    description:
      "Treelogy is e-commerce platform to sell high quality moringa from Bali to Worlwide",
    created: "Nov 1, 2022",
    image:
      "https://assets-global.website-files.com/5efb0b7816032fd33ce6059c/621961b2e092b715903037cf_bi-dashboard-mockup.png",
    designer: "B One Consulting",
    link: "https://treelogy.com",
    category: ["Next.ts", "Express.ts", "Vue.js"],
  },
  {
    title: "Pertama Property",
    description:
      "Pertama Property is property management system build using Next, Vue",
    created: "Dec 23, 2021",
    image:
      "https://assets-global.website-files.com/5efb0b7816032fd33ce6059c/621961b2e092b715903037cf_bi-dashboard-mockup.png",
    designer: "B One Consulting",
    link: "https://www.pertamaproperty.com/",
    category: ["Vue.js", "Next.js"],
  },
];

export const metadata: Metadata = {
  title: "Projects | " + siteConfig.name,
  description: "A collection of projects that I have worked on.",
};

export default async function ProjectsPage() {
  // if (!projects) return notFound();

  return (
    <section 
      className="overflow-y-auto relative h-full p-5"
      style={{ backgroundColor: '#bd666c' }}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {/* <AnimatePresence mode="wait"> */}
        {projects.map((project: any, index: number) => (
          <FadeIn key={index}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
        {/* </AnimatePresence> */}
      </div>

      <br />
    </section>
  );
}
