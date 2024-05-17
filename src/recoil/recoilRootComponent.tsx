"use client";
import { RecoilRoot } from "recoil";

export default function RecoilRootComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
