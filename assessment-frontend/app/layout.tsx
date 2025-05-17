import "./globals.css";
import NavbarWrapper from "./components/NavbarWrapper";
import { Toaster } from 'sonner';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <Toaster richColors position="top-right" />
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}
