import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ExternalLink, Globe, Home as HomeIcon } from "lucide-react";
import { Link, useLocation } from "wouter";

type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  subtitle: string;
  details: string;
  tags: string[];
  timeline: string;
  role: string;
  image: string;
  gallery: string[];
  link?: string;
};

const projects: Project[] = [
  {
    id: "gradeko",
    category: "Product Design",
    title: "GradeKo",
    description:
      "A platform for parents to connect with teachers and follow student progress in real time.",
    subtitle: "A platform for parents to connect with teachers.",
    details:
      "GradeKo grading System is a comprehensive platform designed to help students, teachers, administrators, and parents efficiently manage and track grades. It provides real-time access to students' performance, allowing all users to monitor grades throughout the term and track final grades seamlessly.",
    tags: ["HTML", "CSS", "Javascript","PHP","MYSQL"],
    timeline: "November 2025",
    role: "Mobile & Web",
    image:
      "/GradeKo/Login.png?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "/GradeKo/1.png?auto=format&fit=crop&w=1400&q=80",
      "/GradeKo/2.png?auto=format&fit=crop&w=1400&q=80",
      "/GradeKo/3.png?auto=format&fit=crop&w=1400&q=80",
      "/GradeKo/4.png?auto=format&fit=crop&w=1400&q=80",
      "/GradeKo/5.png?auto=format&fit=crop&w=1400&q=80",
      "/GradeKo/6.png?auto=format&fit=crop&w=1400&q=80",
      "/GradeKo/7.png?auto=format&fit=crop&w=1400&q=80",
      "/GradeKo/8.png?auto=format&fit=crop&w=1400&q=80",
      "/GradeKo/9.png?auto=format&fit=crop&w=1400&q=80",
      "/GradeKo/10.png?auto=format&fit=crop&w=1400&q=80",
      
    ],
    link: "https://nadhir.dev/projects/edulink",
  },
  {
    id: "cargo",
    category: "Productivity",
    title: "Car-Go",
    description:
      "Car-go is a streamlined car rental platform that simplifies bookings, payments, and due date management for a hassle-free experience.",
    subtitle: "An inspiration library powered by collaborative bookmarking.",
    details:
      "Car-go is an innovative car rental system designed to streamline transactions for both customers and owners, offering a seamless online experience with secure payment options and hassle-free due date management.",
    tags: ["HTML", "CSS", "Javascript","PHP","MYSQL"],
    timeline: "October 2025",
    role: "Web Application",
    image:
      "/CarGo/HeroSection.png?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "/CarGo/1.png?auto=format&fit=crop&w=1400&q=80",
      "/CarGo/2.png?auto=format&fit=crop&w=1400&q=80",
      "/CarGo/3.png?auto=format&fit=crop&w=1400&q=80",
      "/CarGo/4.png?auto=format&fit=crop&w=1400&q=80",
      "/CarGo/5.png?auto=format&fit=crop&w=1400&q=80",
      "/CarGo/6.png?auto=format&fit=crop&w=1400&q=80",
      "/CarGo/7.png?auto=format&fit=crop&w=1400&q=80",
      "/CarGo/8.png?auto=format&fit=crop&w=1400&q=80",
      "/CarGo/9.png?auto=format&fit=crop&w=1400&q=80",
      "/CarGo/10.png?auto=format&fit=crop&w=1400&q=80",
      "/CarGo/11.png?auto=format&fit=crop&w=1400&q=80",
      "/CarGo/12.png?auto=format&fit=crop&w=1400&q=80",
      "/CarGo/13.png?auto=format&fit=crop&w=1400&q=80",
      "/CarGo/14.png?auto=format&fit=crop&w=1400&q=80",


    ],
    link: "https://nadhir.dev/projects/flowy",
  },
  {
    id: "equiptrack",
    category: "DevOps",
    title: "EquipTrack",
    description:
      "Blueprints and scripts to spin up Docker and Kubernetes clusters on any cloud in minutes.",
    subtitle: "Infrastructure playbooks for container-first teams.",
    details:
      "EquipTrack is a robust system designed to manage and record school equipment, allowing users to efficiently track the availability, condition, and usage of various resources. It streamlines the process of monitoring equipment, ensuring proper allocation and timely maintenance.",
    tags: ["Flutterflow", "Dart", "Firebase"],
    timeline: "March 2025",
    role: "Mobile & Web",
    image:
      "EquipTrack/Login.png?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "EquipTrack/1.png?auto=format&fit=crop&w=1400&q=80",
      "EquipTrack/2.png?auto=format&fit=crop&w=1400&q=80",
      "EquipTrack/3.png?auto=format&fit=crop&w=1400&q=80",
      "EquipTrack/4.png?auto=format&fit=crop&w=1400&q=80",
      "EquipTrack/5.png?auto=format&fit=crop&w=1400&q=80",
      "EquipTrack/6.png?auto=format&fit=crop&w=1400&q=80",
      "EquipTrack/7.png?auto=format&fit=crop&w=1400&q=80",
      "EquipTrack/8.png?auto=format&fit=crop&w=1400&q=80",

    ],
    link: "https://nadhir.dev/projects/deploy-kit",
  },
  {
    id: "mindlink",
    category: "Platform",
    title: "MindLink",
    description:
      "A dashboard that unifies developer bookmarks, tracking tools, and documentation.",
    subtitle: "A personal control hub for high-output developers.",
    details:
      "MindLink is an innovative student helper app designed to support learners by providing personalized study tools, resources, and real-time assistance. It offers features like task management, study reminders, and interactive learning aids, empowering students to enhance their productivity and academic success.",
    tags: ["HTML", "CSS", "Javascript","PHP","MYSQL"],
    timeline: "October 2025",
    role: "Mobile & Web",
    image:
      "MindLink/Login.png?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "MindLink/1.png?auto=format&fit=crop&w=1400&q=80",
      "MindLink/2.png?auto=format&fit=crop&w=1400&q=80",
      "MindLink/3.png?auto=format&fit=crop&w=1400&q=80",
      "MindLink/4.png?auto=format&fit=crop&w=1400&q=80",
      "MindLink/5.png?auto=format&fit=crop&w=1400&q=80",
      "MindLink/6.png?auto=format&fit=crop&w=1400&q=80",
      "MindLink/7.png?auto=format&fit=crop&w=1400&q=80",
      "MindLink/8.png?auto=format&fit=crop&w=1400&q=80",
      "MindLink/9.png?auto=format&fit=crop&w=1400&q=80",

    ],
    link: "https://nadhir.dev/projects/atlas",
  },
    {
    id: "reneweco",
    category: "Platform",
    title: "RenewEco",
    description:
      "A dashboard that unifies developer bookmarks, tracking tools, and documentation.",
    subtitle: "A personal control hub for high-output developers.",
    details:
      "Renew Eco is a specialized system designed to assist municipalities and cities in scheduling waste collection and efficiently tracking customer information. It streamlines garbage management, ensuring timely pickups and providing real-time tracking for improved service delivery and customer satisfaction.",
    tags: ["Flutterflow", "Dart", "Firebase"],
    timeline: "March 2025",
    role: "Mobile & Web",
    image:
      "RenewEco/Login.png?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "RenewEco/1.png?auto=format&fit=crop&w=1400&q=80",
      "RenewEco/2.png?auto=format&fit=crop&w=1400&q=80",
      "RenewEco/3.png?auto=format&fit=crop&w=1400&q=80",
      "RenewEco/4.png?auto=format&fit=crop&w=1400&q=80",
      "RenewEco/5.png?auto=format&fit=crop&w=1400&q=80",
      "RenewEco/6.png?auto=format&fit=crop&w=1400&q=80",


    ],
    link: "https://nadhir.dev/projects/atlas",
  },
      {
    id: "styleTransfer",
    category: "Platform",
    title: "NeuralStyleTransfer",
    description:
      "A dashboard that unifies developer bookmarks, tracking tools, and documentation.",
    subtitle: "A personal control hub for high-output developers.",
    details:
      "Mobile-based Real-Time Neural Style Transfer is an innovative system that leverages advanced neural networks to apply artistic styles to images in real time. With seamless mobile integration, users can instantly transform their photos into unique artworks, enhancing creativity on the go.",
    tags: ["Flutterflow", "Dart", "Firebase"],
    timeline: "March 2025",
    role: "Mobile Development",
    image:
      "StyleTransfer/mosaic.png?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "StyleTransfer/1.png??auto=format&fit=crop&w=1400&q=80",
      "StyleTransfer/2.png??auto=format&fit=crop&w=1400&q=80",
      "StyleTransfer/3.png??auto=format&fit=crop&w=1400&q=80",
      "StyleTransfer/4.png??auto=format&fit=crop&w=1400&q=80",
      "StyleTransfer/5.png??auto=format&fit=crop&w=1400&q=80",
      "StyleTransfer/6.png??auto=format&fit=crop&w=1400&q=80",
      "StyleTransfer/7.png??auto=format&fit=crop&w=1400&q=80",



    ],
    link: "https://nadhir.dev/projects/atlas",
  },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
];

export default function Projects() {
  const [location] = useLocation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [zoomData, setZoomData] = useState<{ images: string[]; index: number } | null>(null);

  const navLinkClasses = (href: string) =>
    [
      "px-4 py-2 rounded-full font-mono text-sm transition-all",
      location === href
        ? "bg-white/10 text-white shadow-lg shadow-primary/20"
        : "text-foreground/80 hover:glow-purple",
    ].join(" ");

  return (
    <div className="min-h-screen bg-background text-foreground gradient-bg">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container max-w-6xl mx-auto flex items-center justify-between h-16 px-4 md:px-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="font-mono font-bold text-lg glow-purple">DelaPeña.dev</span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClasses(item.href)}>
                {item.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 rounded-full font-mono text-sm text-foreground/80 hover:glow-purple transition-all"
            >
              Contact
            </a>
          </div>

          <button className="text-foreground hover:glow-purple transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m6.364 1.636l-.707.707M21 12h-1m-1.636 6.364l-.707-.707M12 21v-1m-6.364-1.636l.707-.707M3 12h1m1.636-6.364l.707.707"
              />
            </svg>
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="container max-w-6xl mx-auto space-y-12">
          <header className="space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-foreground/60">Selected Work</p>
            <h1 className="text-4xl md:text-5xl font-mono font-bold">Projects</h1>
            <p className="text-lg text-foreground/70 max-w-3xl">
              Here you will find a selection of projects I have worked on. Each one blends thoughtful design
              with reliable engineering to create useful digital products.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                variant="outline"
                className="border-border hover:border-primary text-foreground font-mono"
              >
                <Link href="/">
                  <HomeIcon className="w-4 h-4 mr-2" />
                  Back Home
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono"
              >
                <a href="mailto:hello@nadhir.dev">
                  Let&apos;s collaborate
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
            ))}
          </section>

          <section
            id="contact"
            className="rounded-3xl border border-white/10 bg-card/80 backdrop-blur-xl p-10 flex flex-col gap-4"
          >
            <p className="text-sm uppercase tracking-[0.4em] text-foreground/60">Next steps</p>
            <h2 className="text-3xl font-mono font-bold">Let&apos;s build something together</h2>
            <p className="text-foreground/70 max-w-3xl">
              Ready to start a project or need help pushing an idea past the finish line? Tell me what you are
              building and I will help map out the next version.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono"
              >
                <a href="mailto:walran207@gmail.com">Contact Me</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border hover:border-primary text-foreground font-mono"
              >
                <Link href="/">Return Home</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Dialog open={Boolean(selectedProject)} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent
            showCloseButton
            className="h-[85vh] max-h-[calc(100vh-2rem)] max-w-5xl overflow-hidden border border-white/10 bg-[#080412] p-0 text-white sm:max-w-5xl"
          >
            <ProjectDetails project={selectedProject} onZoom={(payload) => setZoomData(payload)} />
          </DialogContent>
        )}
      </Dialog>

      <Dialog open={Boolean(zoomData)} onOpenChange={(open) => !open && setZoomData(null)}>
        {zoomData && (
          <DialogContent
            showCloseButton
            className="h-[85vh] max-h-[calc(100vh-2rem)] max-w-5xl overflow-hidden border border-white/10 bg-[#030208] p-0 text-white sm:max-w-6xl"
          >
            <ZoomCarousel data={zoomData} />
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}

function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (project: Project) => void;
}) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(project);
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onSelect(project)}
      onKeyDown={handleKeyDown}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-primary/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 space-y-2">
          <p className="text-xs font-mono uppercase tracking-[0.4em] text-foreground/60">{project.category}</p>
          <h3 className="text-2xl font-mono font-bold">{project.title}</h3>
          <p className="text-foreground/80 text-sm">{project.description}</p>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground/80"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 text-sm text-foreground/60 font-mono">
          <span>{project.timeline}</span>
          <span className="h-1 w-1 rounded-full bg-foreground/40" />
          <span>{project.role}</span>
        </div>
      </div>
    </article>
  );
}

function ProjectDetails({
  project,
  onZoom,
}: {
  project: Project;
  onZoom: (payload: { images: string[]; index: number }) => void;
}) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = project.gallery.length ? project.gallery : [project.image];

  useEffect(() => {
    if (!carouselApi) return;
    const onSelect = () => setCurrentSlide(carouselApi.selectedScrollSnap());
    onSelect();
    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
      carouselApi.off("reInit", onSelect);
    };
  }, [carouselApi]);

  useEffect(() => {
    setCurrentSlide(0);
  }, [project.id]);

  return (
    <div className="grid h-full gap-0 md:grid-cols-[1.2fr_1fr]">
      <div className="min-h-0 bg-gradient-to-br from-[#1a0b24] to-[#381332] p-6 sm:p-10 flex flex-col">
        <div className="min-h-0 flex-1 rounded-3xl bg-white/5 p-4 sm:p-6 flex items-center">
          <Carousel
            setApi={setCarouselApi}
            opts={{ loop: true }}
            className="h-full w-full [&_[data-slot=carousel-content]]:h-full [&_[data-slot=carousel-content]>div]:h-full"
          >
            <CarouselContent className="h-full">
              {slides.map((image, idx) => (
                <CarouselItem key={image} className="h-full">
                  <button
                    type="button"
                    onClick={() => onZoom({ images: slides, index: idx })}
                    className="group relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#2f1a3a] to-[#120713] p-4 flex items-center justify-center cursor-zoom-in shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary flex-shrink-0"
                    aria-label={`Zoom ${project.title} screen ${idx + 1}`}
                  >
                    <img
                      src={image}
                      alt={`${project.title} screen ${idx + 1}`}
                      className="max-h-full max-w-full rounded-2xl object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 hidden md:flex border-white/20 text-white bg-white/10 hover:bg-white/20" />
            <CarouselNext className="-right-6 hidden md:flex border-white/20 text-white bg-white/10 hover:bg-white/20" />
          </Carousel>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`h-2 w-2 rounded-full ${idx === currentSlide ? "bg-white" : "bg-white/30"}`}
            />
          ))}
        </div>
      </div>

      <div className="min-h-0 space-y-6 bg-[#0d0618] p-8 sm:p-10 text-white/80 overflow-y-auto">
        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary">{project.category}</p>
          <h2 className="text-3xl font-mono font-bold text-white">{project.title}</h2>
          <p className="text-lg text-white/70">{project.subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm font-mono text-white/60">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">Timeline</p>
            <p className="text-base text-white">{project.timeline}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">Role</p>
            <p className="text-base text-white">{project.role}</p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-mono uppercase tracking-[0.3em] text-white/60">What is it?</h3>
          <p className="leading-relaxed text-white/80">{project.details}</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-mono uppercase tracking-[0.3em] text-white/60">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {project.link && (
          <div className="pt-2">
            <Button
              asChild
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/10 font-mono"
            >
              <a href={project.link} target="_blank" rel="noreferrer">
                <Globe className="w-4 h-4 mr-2" />
                Visit Project
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

function ZoomCarousel({ data }: { data: { images: string[]; index: number } }) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentSlide, setCurrentSlide] = useState(data.index);

  useEffect(() => {
    if (!carouselApi) return;
    carouselApi.scrollTo(data.index, true);
    setCurrentSlide(data.index);
  }, [data, carouselApi]);

  useEffect(() => {
    if (!carouselApi) return;
    const onSelect = () => setCurrentSlide(carouselApi.selectedScrollSnap());
    onSelect();
    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
      carouselApi.off("reInit", onSelect);
    };
  }, [carouselApi]);

  return (
    <div className="h-full p-4 sm:p-6 flex flex-col">
      <div className="min-h-0 flex-1 flex items-center">
        <Carousel setApi={setCarouselApi} opts={{ loop: true }}>
          <CarouselContent className="h-full">
            {data.images.map((image) => (
              <CarouselItem key={image} className="h-full">
                <div className="flex h-full items-center justify-center rounded-2xl bg-black/80 p-2 flex-shrink-0">
                  <img
                    src={image}
                    alt="Zoomed project visual"
                    className="max-h-full max-w-full rounded-xl object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-6 border-white/30 text-white bg-white/10 hover:bg-white/20" />
          <CarouselNext className="-right-6 border-white/30 text-white bg-white/10 hover:bg-white/20" />
        </Carousel>
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {data.images.map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-2 rounded-full ${idx === currentSlide ? "bg-white" : "bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
