import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, Twitter, Code2, Palette, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { setupSmoothScroll } from "@/components/SmoothScroll";
import { Link, useLocation } from "wouter";

/**
 * Home Page - Portfolio Landing
 * 
 * Design Philosophy: Cyberpunk Minimalism
 * - Deep navy background with neon purple and cyan accents
 * - Asymmetric layout with hero on left, profile image on right
 * - Geometric shapes and smooth transitions
 * - Glow effects and neon text highlights
 */

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const { elementRef: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const [location] = useLocation();
  const [contactInView, setContactInView] = useState(false);
  const contactSectionRef = useRef<HTMLElement | null>(null);
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
  ];
  const socialLinks = [
    { label: "Email", href: "mailto:walran207@gmail.com", icon: Mail },
    { label: "GitHub", href: "https://github.com/nadhir", icon: Github },
    { label: "LinkedIn", href: "https://linkedin.com/in/nadhir", icon: Linkedin },
    { label: "Twitter", href: "https://twitter.com/nadhir", icon: Twitter },
  ];

  const navLinkClasses = (
    href: string,
    options?: { forceActive?: boolean; forceInactive?: boolean }
  ) => {
    const isRouteActive = location === href;
    const active = options?.forceActive ?? (options?.forceInactive ? false : isRouteActive);
    return [
      "px-4 py-2 rounded-full font-mono text-sm transition-all",
      active
        ? "bg-white/10 text-white shadow-lg shadow-primary/20"
        : "text-foreground hover:glow-purple",
    ].join(" ");
  };

  useEffect(() => {
    const target = contactSectionRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setContactInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(target);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    setupSmoothScroll();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground gradient-bg">
      {/* Navigation */}
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
              <Link
                key={item.href}
                href={item.href}
                className={navLinkClasses(item.href, item.href === "/" ? { forceInactive: contactInView } : undefined)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#contact"
              className={navLinkClasses("#contact", { forceActive: contactInView })}
            >
              Contact
            </a>
          </div>

          <button className="text-foreground hover:glow-purple transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m6.364 1.636l-.707.707M21 12h-1m-1.636 6.364l-.707-.707M12 21v-1m-6.364-1.636l.707-.707M3 12h1m1.636-6.364l.707.707" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
        <HeroBouncingBackground />
        <div className="container max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center gap-8 md:gap-12">
            <div className="flex flex-shrink-0">
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-pulse" />
                <div className="absolute inset-4 rounded-full border-2 border-secondary/50" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                  <img
                    src="src/pages/Profile.jpg"
                    alt="profile"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6 max-w-3xl">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-mono font-bold leading-tight">
                  Hey, I&apos;m <span className="glow-purple">Kierven</span>
                  <span className="ml-2 text-3xl">✨</span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-mono font-bold text-white/80">
                  A <span className="glow-purple">Software Developer</span>
                </h2>
              </div>

              <p className="text-white/80 text-lg leading-relaxed">
                A <span className="font-semibold text-white">fullstack developer</span> with solid foundations in design,
                passionate about crafting seamless user experiences. I thrive at the intersection of creativity and functionality.
              </p>

              <div className="flex flex-wrap gap-4 pt-4 justify-center">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono border-glow-purple" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-border hover:border-primary text-foreground font-mono"
                  size="lg"
                >
                  <Link href="/projects">
                    <Code2 className="w-4 h-4 mr-2" />
                    View Projects
                  </Link>
                </Button>
              </div>

              <div className="flex gap-6 pt-4 justify-center text-white/70">
                <a href="#" className="hover:text-white transition-all">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white transition-all">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white transition-all">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      {/* Skills Section */}
      <section ref={skillsRef} className={`py-20 px-4 md:px-8 transition-all duration-1000 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 glow-purple">
            Building Digital Experiences
          </h2>
          <p className="text-foreground/70 mb-12 max-w-2xl">
            I specialize in creating stunning user interfaces and developing high-quality applications that stand out.
          </p>

          {/* Skills Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-1000 delay-200">
            {/* Card 1 */}
            <div
              className="group relative p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
              onMouseEnter={() => setHoveredCard("design")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-mono font-bold mb-3">What I can do</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  I can help develop solutions that will help you grow your business.
                </p>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li>• UI/UX Design</li>
                  <li>• Fullstack Web Development</li>
                  <li>• Mobile App Development</li>
                  <li>• API Integration</li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="group relative p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
              onMouseEnter={() => setHoveredCard("tools")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-mono font-bold mb-3">Tools I Use</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  I use the latest tech and technologies to build functional and scalable products.
                </p>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li>• Frontend: HTML, CSS, React, TypeScript</li>
                  <li>• Backend: Node.js, Fastify, MongoDB, PostgreSQL</li>
                  <li>• Design: Figma, Photoshop</li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="group relative p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
              onMouseEnter={() => setHoveredCard("ux")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-mono font-bold mb-3">UI/UX Design</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  I am passionate about creating beautiful and user-centric design. I can help design clean and modern user interfaces.
                </p>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li>• User-Centered Design</li>
                  <li>• Modern & Clean UI</li>
                  <li>• Responsive Layouts</li>
                  <li>• Wireframes & Prototypes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* View Projects Button */}
          <div className="flex justify-end mt-12">
            <Button
              asChild
              variant="outline"
              className="border-border hover:border-primary text-foreground font-mono"
            >
              <Link href="/projects">View My Projects →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" ref={contactSectionRef} className="py-20 px-4 md:px-8">
        <div className="container max-w-6xl mx-auto">
          <div className="relative grid grid-cols-1 gap-8 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#1b0b2c] via-[#0a0918] to-[#050508] p-8 md:p-12 md:grid-cols-[1.2fr_0.8fr] overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="absolute -left-16 top-16 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
              <div className="absolute right-10 bottom-0 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
            </div>
            <div className="relative z-10 space-y-6">
              <p className="text-sm font-mono uppercase tracking-[0.4em] text-white/70">Let&apos;s collaborate</p>
              <h2 className="text-4xl md:text-5xl font-mono font-bold text-white leading-tight">
                <span className="glow-purple block">Bringing your ideas to life.</span>
                Let&apos;s turn your vision into reality
              </h2>
              <p className="text-lg text-white/70 max-w-2xl">
                Have a project in mind or just want to chat? Reach out and let&apos;s craft an experience that feels effortless and futuristic.
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
                  <Link href="/projects">View Projects</Link>
                </Button>
              </div>
            </div>
            <div className="relative z-10 rounded-2xl bg-card/80 border border-white/10 p-6 md:p-8 shadow-2xl">
              <p className="text-sm font-mono uppercase tracking-[0.4em] text-white/70 mb-4">Connect with me</p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-mono text-white/80 transition-all hover:border-primary hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all group-hover:bg-primary/30">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div className="flex flex-col leading-tight">
                      <span className="text-xs uppercase text-white/50">Reach out</span>
                      <span className="font-semibold">{label}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 md:px-8 bg-card/50">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            © 2025 Kierven. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-foreground/60 hover:glow-purple transition-all text-sm">Privacy</a>
            <a href="#" className="text-foreground/60 hover:glow-purple transition-all text-sm">Terms</a>
            <a href="#" className="text-foreground/60 hover:glow-purple transition-all text-sm">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HeroBouncingBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    const colors = [
      "rgba(157, 111, 255, 0.4)",
      "rgba(64, 207, 255, 0.35)",
      "rgba(255, 138, 216, 0.35)",
    ];

    type Orb = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    };

    let width = 0;
    let height = 0;
    let orbs: Orb[] = [];

    const randomBetween = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const createOrbs = () => {
      const count = 3;
      const newOrbs: Orb[] = [];
      for (let i = 0; i < count; i++) {
        newOrbs.push({
          x: randomBetween(0, width),
          y: randomBetween(0, height),
          vx: randomBetween(0.4, 0.9) * (Math.random() > 0.5 ? 1 : -1),
          vy: randomBetween(0.3, 0.8) * (Math.random() > 0.5 ? 1 : -1),
          radius: randomBetween(90, 170),
          color: colors[i % colors.length],
        });
      }
      return newOrbs;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width;
      canvas.height = height;
      orbs = createOrbs();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(5, 8, 27, 0.15)";
      ctx.fillRect(0, 0, width, height);

      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x - orb.radius < 0) {
          orb.x = orb.radius;
          orb.vx *= -1;
        } else if (orb.x + orb.radius > width) {
          orb.x = width - orb.radius;
          orb.vx *= -1;
        }

        if (orb.y - orb.radius < 0) {
          orb.y = orb.radius;
          orb.vy *= -1;
        } else if (orb.y + orb.radius > height) {
          orb.y = height - orb.radius;
          orb.vy *= -1;
        }

        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          orb.x - orb.radius * 0.25,
          orb.y - orb.radius * 0.25,
          orb.radius * 0.2,
          orb.x,
          orb.y,
          orb.radius
        );
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, "rgba(5, 8, 27, 0)");
        ctx.fillStyle = gradient;
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(render);
    };

    resize();
    render();

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60 mix-blend-screen"
      aria-hidden="true"
    />
  );
}
