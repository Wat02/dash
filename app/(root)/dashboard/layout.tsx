import React from "react";
import Sidebar from "@/components/Siderbar";
import MobileNav from "@/components/MobileNav";
import Header from "@/components/Header";

function layout({ childern }: { childern: React.ReactNode }) {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <section className="flex h-screen flex-1 flex-col">
        <MobileNav /> <Header />
        <div className="main-content">{childern}</div>
      </section>
    </main>
  );
}

export default layout;
