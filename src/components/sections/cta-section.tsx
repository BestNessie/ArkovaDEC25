import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const CtaSection: FC = () => {
  return (
    <section className="relative overflow-hidden bg-arkova-blue py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40"></div>
        <div className="hidden sm:block absolute top-20 left-24 text-white/20 animate-float">
          <Sparkles className="h-14 w-14" />
        </div>
        <div className="hidden sm:block absolute bottom-24 right-32 text-white/15 animate-float" style={{ animationDelay: '1.5s' }}>
          <Sparkles className="h-20 w-20" />
        </div>
        <div className="hidden md:block absolute top-32 right-[15%] text-white/10 animate-float" style={{ animationDelay: '3s' }}>
          <Sparkles className="h-10 w-10" />
        </div>
        <div className="hidden md:block absolute bottom-20 left-[10%] text-white/15 animate-float" style={{ animationDelay: '2s' }}>
          <Sparkles className="h-12 w-12" />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          

          {/* Headline */}
          <h2 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
          Be First to Experience Blockchain-Verified Compliance
          </h2>
          
          {/* Subheading */}
          <p className="mb-12 text-lg sm:text-xl leading-relaxed text-white/90 max-w-2xl mx-auto">
          Join the waitlist and get early access to Arkova's revolutionary document verification platform.
          </p>
          
          {/* CTA buttons */}
          <div className="mb-20 flex flex-col items-stretch sm:flex-row sm:items-center justify-center gap-4 sm:gap-5">
            <Link
              href="/signup"
              className="group flex w-full items-center justify-center gap-2.5 rounded-lg bg-white px-8 py-4 text-base font-semibold text-arkova-dark shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0 sm:w-auto"
            >
              Sign Up for Early Access
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/whitepaper"
              className="group flex w-full items-center justify-center gap-2.5 rounded-lg border-2 border-white/50 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-1 active:translate-y-0 sm:w-auto"
            >
              Read the Whitepaper
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group flex w-full items-center justify-center gap-2.5 rounded-lg border-2 border-white/50 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-1 active:translate-y-0 sm:w-auto"
            >
              Contact the Team
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          {/* Bottom metrics */}
          <div className="flex flex-wrap items-start justify-center gap-x-16 gap-y-8 text-white">
            <div className="text-center group cursor-default">
              <p className="font-bold text-lg mb-1 group-hover:scale-110 transition-transform duration-300">Early Access</p>
              <p className="text-sm text-white/80">Be among the first</p>
            </div>
            <div className="h-12 w-px bg-white/20"></div>
            <div className="text-center group cursor-default">
              <p className="font-bold text-lg mb-1 group-hover:scale-110 transition-transform duration-300">Exclusive Benefits</p>
              <p className="text-sm text-white/80">Limited availability</p>
            </div>
            <div className="h-12 w-px bg-white/20"></div>
            <div className="text-center group cursor-default">
              <p className="font-bold text-lg mb-1 group-hover:scale-110 transition-transform duration-300">Launch Updates</p>
              <p className="text-sm text-white/80">Stay informed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
