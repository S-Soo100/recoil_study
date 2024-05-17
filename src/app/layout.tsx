import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { RecoilRoot } from "recoil";
import RecoilRootComponent from "@/recoil/recoilRootComponent";

const noto_sans_kr = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI English Study Project",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto_sans_kr.className}>
        <RecoilRootComponent>
          <AntdRegistry>{children}</AntdRegistry>
        </RecoilRootComponent>
      </body>
    </html>
  );
}
