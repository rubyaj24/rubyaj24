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
      <div className=" pointer-events-none lg:text-[18rem] md:text-[8rem] mx-0 px-0 text-7xl font-expanded text-center text-white/5">
        AMALJITH.
      </div>
    </footer>
  );
}
