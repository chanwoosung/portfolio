/*
 * Design Philosophy: Technical Minimalism with Warm Accents
 * - Warm cream background (oklch(0.99 0.005 80)) with indigo/emerald accents
 * - Pretendard font for Korean, JetBrains Mono for code/tech
 * - Timeline layout: left company info + right project cards
 * - Troubleshooting: 3-step flow (Problem → Cause → Solution → Result)
 * - Scroll-triggered fade-in animations via IntersectionObserver
 */

import { TaskList } from "@/components/ui/taskModal";
import type { SkillLevel, TroubleShooting } from "@/data/resume";
import {
  careers,
  coreCompetencies,
  profile,
  skillLevels,
  skills,
} from "@/data/resume";
import {
  AlertTriangle,
  ArrowRight,
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Code2,
  ExternalLink,
  Lightbulb,
  Link2,
  MapPin,
  Menu,
  Tag,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ─── Scroll Animation Hook ────────────────────────────────────────────────────
function useScrollAnimation(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

// ─── Skill Level Dots ─────────────────────────────────────────────────────────
function SkillDots({ level }: { level: SkillLevel }) {
  return (
    <div className="flex gap-1 items-center">
      {[1, 2, 3, 4].map(i => (
        <span
          key={i}
          className={`skill-dot ${i <= level ? "filled" : "empty"}`}
        />
      ))}
    </div>
  );
}

// ─── Tech Tag ─────────────────────────────────────────────────────────────────
function TechTag({ name }: { name: string }) {
  return <span className="tech-tag">{name}</span>;
}

// ─── Trouble Shooting Card ────────────────────────────────────────────────────
function TroubleShootingCard({ ts }: { ts: TroubleShooting }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="trouble-card mb-3 overflow-hidden">
      <button
        className="trouble-card-header w-full text-left"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <AlertTriangle size={13} className="text-amber-500 flex-shrink-0" />
        <span className="flex-1 text-slate-700 font-medium normal-case tracking-normal text-[0.8rem]">
          {ts.title}
        </span>
        <ChevronDown
          size={14}
          className={`flex-shrink-0 text-slate-400 transition-transform duration-200 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          expanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 space-y-4">
          {/* Problem */}
          <div className="flex gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-6 h-6 rounded-full bg-red-50 border border-red-200 flex items-center justify-center">
                <AlertTriangle size={11} className="text-red-500" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-[0.7rem] font-bold text-red-500 uppercase tracking-widest mb-1">
                문제 상황
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                {ts.problem}
              </p>
            </div>
          </div>

          {/* Cause */}
          {ts.cause && (
            <div className="flex gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-6 h-6 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center">
                  <Lightbulb size={11} className="text-amber-500" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[0.7rem] font-bold text-amber-500 uppercase tracking-widest mb-1">
                  원인 분석
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {ts.cause}
                </p>
              </div>
            </div>
          )}

          {/* Solution */}
          <div className="flex gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <CheckCircle2 size={11} className="text-emerald-500" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-[0.7rem] font-bold text-emerald-600 uppercase tracking-widest mb-1">
                해결 방법
              </p>
              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                {ts.solution}
              </p>
            </div>
          </div>

          {/* Result */}
          {ts.result && (
            <div className="flex gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-6 h-6 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center">
                  <Zap size={11} className="text-indigo-500" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[0.7rem] font-bold text-indigo-500 uppercase tracking-widest mb-1">
                  결과 / 성과
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {ts.result}
                </p>
              </div>
            </div>
          )}

          {/* Tags + Link */}
          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2">
            {ts.tags?.map(tag => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-[0.7rem] px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-mono"
              >
                <Tag size={9} />
                {tag}
              </span>
            ))}
            {ts.link && (
              <a
                href={ts.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 transition-colors font-medium ml-auto"
              >
                <Link2 size={11} />
                {ts.link.text}
                <ExternalLink size={10} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────
function SectionHeader({
  children,
  id,
  sub,
}: {
  children: React.ReactNode;
  id?: string;
  sub?: string;
}) {
  return (
    <div id={id} className="mb-10">
      <div className="flex items-center gap-3 mb-1">
        <div className="w-1 h-8 rounded-full bg-indigo-500" />
        <h2 className="text-2xl font-black text-slate-900">{children}</h2>
      </div>
      {sub && <p className="text-sm text-slate-400 ml-4">{sub}</p>}
    </div>
  );
}

// ─── Animated Section ─────────────────────────────────────────────────────────
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useScrollAnimation(delay);
  return (
    <div ref={ref} className={`fade-in-up ${className}`}>
      {children}
    </div>
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navItems = [
    { label: "소개", href: "#about" },
    { label: "기술 스택", href: "#skills" },
    { label: "경력", href: "#career" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="#about" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
              <Code2 size={14} className="text-white" />
            </div>
            <span className="font-bold text-slate-900 text-sm">
              성찬우
              <span className="text-slate-400 mx-1 font-normal">/</span>
              <span className="font-mono text-xs text-indigo-500">FE Dev</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-600 hover:text-indigo-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-3">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="about"
      className="pt-24 pb-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(150deg, oklch(0.99 0.005 80) 0%, oklch(0.97 0.01 264) 60%, oklch(0.98 0.008 160) 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.75 0.12 264) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.75 0.12 160) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="container relative">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-indigo-100 shadow-sm mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-indigo-700 font-mono">
              재직중 · 트래블월렛 (2024.09 ~)
            </span>
          </div>

          {/* Name */}
          <h1 className="text-6xl font-black text-slate-900 mb-3 tracking-tight leading-none">
            성찬우
          </h1>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl font-semibold text-slate-400">
              Sung ChanWoo
            </span>
          </div>

          {/* Title */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl font-bold text-slate-700">
              6년차 프론트엔드 개발자
            </span>
            <span className="text-slate-300">·</span>
            <code className="text-base font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
              TypeScript / React / Next.js
            </code>
          </div>

          {/* Summary */}
          <p className="text-base text-slate-600 leading-relaxed mb-10 max-w-2xl border-l-2 border-indigo-200 pl-4">
            {profile.summary}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap gap-5 text-sm text-slate-500 mb-12">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-indigo-400" />
              {profile.birth}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-indigo-400" />
              대한민국
            </span>
          </div>

          {/* Core competencies */}
          <div>
            <p className="text-[0.7rem] font-bold text-slate-400 uppercase tracking-widest mb-4">
              핵심 역량
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {coreCompetencies.map((comp, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-slate-700 bg-white/60 rounded-lg px-3 py-2 border border-white/80 backdrop-blur-sm"
                >
                  <ArrowRight
                    size={13}
                    className="text-indigo-400 flex-shrink-0 mt-0.5"
                  />
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Skills Section ───────────────────────────────────────────────────────────
function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            id="skills-header"
            sub="숙련도: Basic(1) · Demonstrating(2) · Proficient(3) · Expert(4)"
          >
            기술 스택
          </SectionHeader>
        </AnimatedSection>

        {/* Level legend */}
        <AnimatedSection className="mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {(
              Object.entries(skillLevels) as [
                string,
                { label: string; desc: string },
              ][]
            ).map(([level, { label, desc }]) => (
              <div
                key={level}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100"
              >
                <SkillDots level={parseInt(level) as SkillLevel} />
                <div>
                  <p className="text-xs font-bold text-slate-700">{label}</p>
                  <p className="text-[0.65rem] text-slate-400 leading-tight mt-0.5">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Skill grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((cat, ci) => (
            <AnimatedSection key={ci} delay={ci * 60}>
              <div className="p-5 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-50">
                  <div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center">
                    <Code2 size={14} className="text-indigo-500" />
                  </div>
                  <h3 className="text-xs font-bold text-slate-600 uppercase tracking-widest">
                    {cat.category}
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {cat.skills.map((skill, si) => (
                    <div
                      key={si}
                      className="flex items-center justify-between gap-3"
                    >
                      <span className="text-sm font-mono text-slate-700 truncate">
                        {skill.name}
                      </span>
                      <SkillDots level={skill.level} />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Career Section ───────────────────────────────────────────────────────────
function CareerSection() {
  return (
    <section
      id="career"
      className="py-20"
      style={{ background: "oklch(0.985 0.003 80)" }}
    >
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            id="career-header"
            sub="총 경력 약 6년 · 핀테크 도메인"
          >
            경력 사항
          </SectionHeader>
        </AnimatedSection>

        {/* Career summary bar */}
        <AnimatedSection className="mb-12">
          <div className="flex flex-wrap gap-3">
            {careers.map((c, i) => (
              <a href={`#${c.company}`}>
                <div
                  key={i}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border ${
                    c.isCurrentJob
                      ? "bg-indigo-50 border-indigo-200 text-indigo-700"
                      : "bg-white border-slate-200 text-slate-600"
                  }`}
                >
                  {c.isCurrentJob && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  )}
                  <span className="font-bold">{c.company}</span>
                  <span className="text-slate-400 font-mono">{c.period}</span>
                </div>
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical rail */}
          <div
            className="hidden lg:block absolute top-0 bottom-0 w-px"
            style={{
              left: "220px",
              background:
                "linear-gradient(to bottom, oklch(0.52 0.22 264), oklch(0.88 0.02 264) 60%, transparent)",
            }}
          />

          <div className="space-y-16">
            {careers.map((career, ci) => (
              <AnimatedSection key={ci} delay={ci * 80}>
                <div className="lg:flex gap-0 pt-15" id={career.company}>
                  {/* Left: Company info */}
                  <div className="lg:w-[220px] lg:pr-10 mb-5 lg:mb-0 flex-shrink-0">
                    <div className="lg:text-right">
                      {career.isCurrentJob && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[0.65rem] font-bold text-emerald-700 mb-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          재직중
                        </span>
                      )}
                      <p className="text-[0.7rem] font-mono text-slate-400 mb-1 block">
                        {career.period}
                      </p>
                      <h3 className="text-xl font-black text-slate-900 leading-tight">
                        {career.company}
                      </h3>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden absolute left-50 lg:flex items-start justify-center w-10 flex-shrink-0 pt-1.5">
                    <div
                      className="w-3 h-3 rounded-full border-2 border-white shadow-md flex-shrink-0"
                      style={{
                        background: career.isCurrentJob
                          ? "oklch(0.52 0.22 264)"
                          : "oklch(0.75 0.10 264)",
                        boxShadow: career.isCurrentJob
                          ? "0 0 0 4px oklch(0.88 0.04 264)"
                          : "0 0 0 3px oklch(0.92 0.02 264)",
                      }}
                    />
                  </div>

                  {/* Right: Projects */}
                  <div className="flex-1 lg:pl-8">
                    {/* Company description */}
                    <p className="text-sm text-slate-500 mb-2 italic leading-relaxed">
                      {career.companyDesc}
                    </p>
                    {career.note && (
                      <p className="text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded-md px-3 py-1.5 mb-4 inline-block">
                        ※ {career.note}
                      </p>
                    )}

                    {career.projects.map((project, pi) => (
                      <div
                        key={pi}
                        className="mt-4 rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden"
                      >
                        {/* Project header */}
                        <div className="px-6 pt-6 pb-4 border-b border-slate-50">
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                              <Briefcase
                                size={16}
                                className="text-indigo-500"
                              />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 text-[0.95rem] leading-snug">
                                {project.name}
                              </h4>
                              <span className="text-xs font-mono text-indigo-500 mt-0.5 block">
                                {project.role}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-slate-500 leading-relaxed mt-3">
                            {project.description}
                          </p>
                        </div>

                        <div className="px-6 py-5 space-y-5">
                          {/* Tech stacks */}
                          {project.stacks && project.stacks.length > 0 && (
                            <div>
                              <p className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest mb-2.5">
                                Tech Stack
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {project.stacks.map(stack => (
                                  <TechTag key={stack} name={stack} />
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Tasks */}
                          <div>
                            <p className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest mb-2.5">
                              주요 업무
                            </p>
                            <TaskList tasks={project.tasks} />
                          </div>

                          {/* Troubleshootings */}
                          {project.troubleshootings.length > 0 && (
                            <div>
                              <p className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest mb-2.5">
                                트러블슈팅
                              </p>
                              <div className="space-y-2">
                                {project.troubleshootings.map((ts, ti) => (
                                  <TroubleShootingCard key={ti} ts={ts} />
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Links */}
                          {project.links && project.links.length > 0 && (
                            <div className="flex flex-wrap gap-3 pt-3 border-t border-slate-100">
                              {project.links.map((link, li) => (
                                <a
                                  key={li}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-xs text-indigo-600 hover:text-indigo-800 font-semibold transition-colors group"
                                >
                                  <ExternalLink
                                    size={12}
                                    className="group-hover:scale-110 transition-transform"
                                  />
                                  {link.text}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-12 bg-slate-900 text-slate-400">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Code2 size={14} className="text-white" />
              </div>
              <p className="text-white font-black text-lg">성찬우</p>
            </div>
            <p className="text-sm font-mono text-slate-500">
              Frontend Developer · 6 Years Experience
            </p>
            <p className="text-xs text-slate-600 mt-1">
              TypeScript · React · Next.js · Monorepo · MFE
            </p>
          </div>

          {/* Right: Links */}
          <div>
            <p className="text-[0.65rem] font-bold text-slate-600 uppercase tracking-widest mb-3">
              관련 링크
            </p>
            <div className="space-y-2">
              {[
                { label: "lifecatch.co.kr", url: profile.links.lifecatch },
                { label: "konkrit.io (KONKIRT)", url: profile.links.konkrit },
                {
                  label: "Remote Component 제어 방식",
                  url: profile.links.remoteComponent,
                },
                {
                  label: "Windee 배포 관련 기사",
                  url: profile.links.windeeArticle,
                },
                {
                  label: "PIXELIA 갤러리 공모글",
                  url: profile.links.pixeliaGallery,
                },
              ].map(link => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-indigo-400 transition-colors"
                >
                  <ExternalLink size={11} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-700">
          © 2025 성찬우. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(0.99 0.005 80)" }}
    >
      <Nav />
      <HeroSection />
      <SkillsSection />
      <CareerSection />
      <Footer />
    </div>
  );
}
