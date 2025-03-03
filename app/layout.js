import { League_Spartan } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import ModeToggle from "@/components/ModeToggle";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
});

export const metadata = {
  title: "Sync",
  description: "Welcome to Sync",
};

export default function RootLayout({ children }) {
  return (
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
          <ModeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}