import type { ReactNode } from "react";
import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

type AppLayoutProps = {
  children: React.JSX.Element | ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      <main className="h-full flex-1 container mx-auto px-4 max-w-6xl mt-4 mb-8">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
