import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import RecoilRootComponent from "@/recoil/recoilRootComponent";

const noto_sans_kr = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A-important",
  description: "Ai를 통한 영어교육격차 해결",
  icons: {
    icon: "favicon.ico",
  },
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
