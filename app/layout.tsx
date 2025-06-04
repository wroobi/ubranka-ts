import type { Metadata } from "next";
import { Inter, ABeeZee } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/app/components/theme-toggle";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
const abeeZee = ABeeZee({ weight: "400", style: "italic", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Wybieramy ubranka",
  description: "Aplikacja do wybierania ubranek dla Tosi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={abeeZee.className}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ThemeToggle />
            <main>{children}</main>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
