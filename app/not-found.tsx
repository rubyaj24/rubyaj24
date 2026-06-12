import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="bg-glow">
        <div className="bg-orb" />
        <div className="bg-orb" />
        <div className="bg-orb" />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center px-6">
        <span className="mb-4 text-[8rem] font-black leading-none text-white/5">404</span>
        <h1 className="mb-2 text-2xl font-bold">Page not found</h1>
        <p className="mb-8 text-sm text-white/50">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition-colors hover:border-white/40"
        >
          Go home
        </Link>
      </div>
    </>
  );
}
