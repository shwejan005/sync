import { League_Spartan } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import ModeToggle from "@/components/ModeToggle";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs"; 

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
});

export const metadata = {
  title: "Sync",
  description: "Welcome to Sync",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${leagueSpartan.className} antialiased`}
        >
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChang
          >
            <main className="min-h-screen">
              <ModeToggle />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}