import { ModeToggle } from "@/components/ModeToggle";
import { SearchForm } from "@/components/SearchForm";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <div className="w-screen min-h-screen fixed flex justify-center pointer-events-none">
        <div className="absolute inset-0 opacity-40 z-2 dark:bg-radial-dark bg-radial" />
        <div className="absolute inset-0 opacity-40 bg-[url('/images/grid.svg')] invert dark:invert-0" />
      </div>
      <div className="fixed z-10 right-4 top-6">
        <ModeToggle />
      </div>
      <main className="flex flex-col relative min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default RootLayout;
