import type { ReactNode } from "react";
import ScrollToTop from "../ScrollToTop";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
}
