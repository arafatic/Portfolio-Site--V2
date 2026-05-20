import { ArrowRight } from "lucide-react";
import Image from "next/image";

function isLightColor(hex: string): boolean {
  if (!hex) return false;
  const color = hex.replace('#', '');
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5;
}

const PROJECTS = [
  {
    title: "Teletalk",
    description: "Redesign concept for telecommunication company Teletalk",
    tech: ["Figma", "Photoshop", "Illustrator"],
    link: "https://www.behance.net/gallery/233828921/Teletalk-Landing-page-redesign",
    github: "#",
    image: "/teletalk-rebrand-concept.jpg.jpg",
    bgColor: "#ffffff",
    containImage: true,
  },
  {
    title: "Social Media",
    description: "Social media creatives for various brands",
    tech: ["Photoshop", "Illustrator"],
    link: "https://www.behance.net/arafat7",
    github: "#",
    image: "/social-media.jpg",
    bgColor: "#000000",
    containImage: true,
  },
  {
    title: "Arch",
    description: "Brand identity for Arch.",
    tech: ["Photoshop", "Illustrator", "Logo", "Identity design"],
    link: "https://www.behance.net/gallery/194196445/ARCH-Brand-identity",
    github: "#",
    image: "/arch.jpg",
    bgColor: "#000000",
  },
  {
    title: "Dhaka 1980",
    description: "Illustration.",
    tech: ["Photoshop", "Illustrator", "Illustration"],
    link: "https://www.behance.net/gallery/202946259/Dhaka-1980s-Illustration",
    github: "#",
    image: "/Dhaka-1980.jpg",
    bgColor: "#ffffff",
  },
];

export function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 sm:px-8 py-16 md:py-24 border-t border-border/40">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Selected Works</h2>
      <div className="flex flex-col gap-12 md:gap-16 lg:gap-12">
        {PROJECTS.map((project) => {
          const lightBg = isLightColor(project.bgColor);
          
          return (
            <div
              key={project.title}
              className="group flex flex-col lg:relative lg:overflow-hidden lg:rounded-3xl lg:aspect-video lg:min-h-[600px] w-full lg:justify-center"
            >
              {/* Background Image Container */}
              <div 
                className="relative w-full h-56 md:h-72 lg:absolute lg:inset-0 lg:h-full rounded-3xl lg:rounded-none overflow-hidden shrink-0"
                style={{ backgroundColor: project.bgColor }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content Container */}
              <div className="relative z-10 px-4 py-[45px] lg:p-10 w-full max-w-4xl flex flex-col lg:justify-center">
                <h3 className={`font-bold text-3xl md:text-5xl mb-3 text-foreground ${lightBg ? 'lg:text-zinc-900' : 'lg:text-white'}`}>
                  {project.title}
                </h3>
                <p className={`md:text-lg mb-6 line-clamp-2 md:line-clamp-none max-w-2xl text-muted-foreground ${lightBg ? 'lg:text-zinc-600' : 'lg:text-zinc-300'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`inline-flex items-center rounded-full lg:bg-white/10 backdrop-blur-md border px-3 py-1 text-xs md:text-sm font-medium shadow-sm border-border text-foreground ${lightBg ? 'lg:border-zinc-400 lg:text-zinc-700' : 'lg:border-zinc-500 lg:text-zinc-200'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold hover:opacity-80 transition-opacity shadow-lg w-fit border-border text-foreground ${lightBg ? 'lg:text-zinc-900 lg:border-zinc-800' : 'lg:text-white lg:border-white'}`}
                    aria-label={`View ${project.title}`}
                  >
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
