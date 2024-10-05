import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Link href="/" className="absolute top-4 left-4 z-10 font-black text-lg">
        Logo
      </Link>
      <div className="w-screen min-h-screen fixed flex justify-center pointer-events-none">
        <div className="absolute inset-0 opacity-40 z-2 dark:bg-radial-dark bg-radial" />
        <div className="absolute inset-0 opacity-40 bg-[url('/images/grid.svg')] invert dark:invert-0" />
      </div>
      <div className="fixed z-10 right-4 top-4">
        <ModeToggle />
      </div>
      <main className="flex flex-col relative min-h-screen overflow-hidden max-h-screen">{children}</main>
    </div>
  );
};

export default RootLayout;
