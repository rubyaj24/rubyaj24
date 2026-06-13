import Image from "next/image";
import Link from "next/link";

const socials = [
  { label: "GitHub", href: "https://github.com/rubyaj24" },
  { label: "LinkedIn", href: "https://linkedin.com/in/amaljithmv2004" },
  { label: "Instagram", href: "https://instagram.com/the.prime.mover" },
  { label: "Behance", href: "https://behance.net/amaljithmv" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-0 pt-12">
      <div className="mx-auto max-w-7xl items-center justify-between gap-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div id='about'>
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} Amaljith M V
            </p>
            <p className="text-sm text-white/30">
              UI/UX Designer & Frontend Developer
            </p>
            <Link href="https://score.motion.dev/site/amaljithmv.vercel.app"><img src="https://api.motion.dev/score/badge?url=amaljithmv.vercel.app" alt="MotionScore" className="mt-2" /></Link>

          </div>
          <div id="socials" className="flex gap-6">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 transition-colors hover:text-white"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Image src="/images/amaljith-lon.png" alt="Footer logo" width={1200} height={600} className="pointer-events-none opacity-5 w-full mt-10" />
    </footer>
  );
}
