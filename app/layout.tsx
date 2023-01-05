"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const onClickHandler = (url: string) => {
    router.push(url);
  };

  return (
    <html lang="en">
      <head />
      <body>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li onClick={() => onClickHandler("/settings")}>Settings</li>
        </ul>

        {children}

        <div>Footer</div>
      </body>
    </html>
  );
}
