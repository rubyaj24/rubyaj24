"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Me", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

function scrollToHash(href: string) {
  const id = href.replace(/^\/?#/, "");
  const target = document.getElementById(id);
  const container = document.querySelector(".scroll-container") as HTMLElement | null;
  if (target && container) {
    container.scrollTo({ top: target.offsetTop, behavior: "smooth" });
  }
}

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => scrollToHash(hash), 100);
      }
    }
  }, [pathname]);

  function handleHashClick(href: string) {
    if (pathname === "/") {
      scrollToHash(href);
    } else {
      router.push(href);
    }
  }

  useEffect(() => {
    const container = document.querySelector(".scroll-container");

    if (container instanceof HTMLElement) {
      const onContainerScroll = () => setScrolled(container.scrollTop > 50);
      onContainerScroll();
      container.addEventListener("scroll", onContainerScroll, { passive: true });
      return () => container.removeEventListener("scroll", onContainerScroll);
    }

    const onWindowScroll = () => setScrolled(window.scrollY > 50);
    onWindowScroll();
    window.addEventListener("scroll", onWindowScroll, { passive: true });
    return () => window.removeEventListener("scroll", onWindowScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-bg/10 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          data-loader-target
          className="relative inline-flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Amaljith logo"
            width={96}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isHash = link.href.startsWith("/#");
            return (
            <Link
              key={link.href}
              href={link.href}
              scroll={!isHash}
              prefetch={!isHash}
              onClick={(e) => {
                if (isHash) {
                  e.preventDefault();
                  handleHashClick(link.href);
                }
              }}
              className="rounded-full px-4 py-2 text-sm text-white/50 transition-all duration-300 hover:bg-white/[0.04] hover:text-white"
            >
              {link.label}
            </Link>
            );
          })}
        </nav>

        <button
          className="relative z-50 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white/70" />}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-bg transition-all duration-500 md:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
          {navLinks.map((link) => {
            const isHash = link.href.startsWith("/#");
            return (
            <Link
              key={link.href}
              href={link.href}
              scroll={!isHash}
              prefetch={!isHash}
              onClick={(e) => {
                setOpen(false);
                if (isHash) {
                  e.preventDefault();
                  handleHashClick(link.href);
                }
              }}
              className="text-3xl font-bold text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
            );
          })}
      </div>
    </header>
  );
}
