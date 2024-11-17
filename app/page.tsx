import React from "react";
import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col">
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/sing-in">In</Link>
      <Link href="/sing-up">up</Link>
    </div>
  );
}

export default page;
