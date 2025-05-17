import "./globals.css";
import NavbarWrapper from "./components/NavbarWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}
