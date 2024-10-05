import { ThemeProvider } from "@/components/ThemeProvider";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";

const inter = Roboto({
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Component {...pageProps} className={inter.className} />
    </ThemeProvider>
  );
}
