import "./globals.css";
import Theme from "@/components/Theme";
import DarkLight from "@/components/DarkLight";

export const metadata = {
  title: "Michael Gaitho",
  description:
    "My name is Michael Gaitho I am a fullstack and android developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <DarkLight />
          {children}
        </Theme>
      </body>
    </html>
  );
}
