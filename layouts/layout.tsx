import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { ComponentBooleanIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Button size={"icon"} asChild title={"Home"}>
        <Link
          href="/"
          className="absolute top-4 left-4 z-[3] font-black text-lg"
        >
          <ComponentBooleanIcon className="w-6 h-6" />
        </Link>
      </Button>
      <div className="w-screen min-h-screen fixed flex justify-center pointer-events-none">
        <div className="absolute inset-0 opacity-40 z-[2] dark:bg-radial-dark bg-radial" />
        <div className="absolute inset-0 opacity-40 bg-[url('/images/grid.svg')] invert dark:invert-0" />
      </div>
      <div className="fixed z-[3] right-4 top-4">
        <ModeToggle />
      </div>
      <main className="flex flex-col relative min-h-screen overflow-hidden max-h-screen">
        {children}
      </main>
    </div>
  );
};

export default RootLayout;
