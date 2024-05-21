"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wrX1f17C3p1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { JSX, SVGProps, useState } from "react";
import Loader from "./Loader";

type IProps = {
  onClick: () => void;
  loading: boolean;
};

export default function Component({ onClick, loading }: IProps) {
  return (
    <main className="">
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter whitespace-pre-line sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                {"AI Learning\nabout\ncollege entrance exam english"}
              </h1>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Unlock your potential with our comprehensive English study
                program. Designed for high school students, we offer a wealth of
                resources to help you excel in the language.
              </p>
              <div className="space-x-4">
                <button
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                  onClick={() => onClick()}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                About the AI English Study Project
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our English Study project is designed to help high school
                students improve their language skills and build a strong
                foundation in English. Through a combination of interactive
                lessons, practice exercises, and engaging resources, we aim to
                make learning English an enjoyable and rewarding experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Helpful Resources
              </h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                Explore our collection of study guides, practice exercises, and
                links to valuable websites to enhance your English learning
                journey.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="rounded-lg border  p-4 shadow-sm border-gray-800 bg-gray-950">
                <h3 className="text-lg font-bold">Study Guides</h3>
                <p className="text-sm text-gray-400">
                  Comprehensive guides to improve your grammar, vocabulary, and
                  writing skills.
                </p>
                <Link
                  className="mt-2 inline-flex items-center text-sm font-medium  hover:underline text-gray-50"
                  href="#"
                >
                  Explore Guides
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="rounded-lg border p-4 shadow-sm border-gray-800 bg-gray-950">
                <h3 className="text-lg font-bold">Practice Exercises</h3>
                <p className="text-sm text-gray-400">
                  Interactive exercises to reinforce your language skills and
                  boost your confidence.
                </p>
                <Link
                  className="mt-2 inline-flex items-center text-sm font-medium  hover:underline text-gray-50"
                  href="#"
                >
                  Try Exercises
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="rounded-lg border  p-4 shadow-sm border-gray-800 bg-gray-950">
                <h3 className="text-lg font-bold">Helpful Websites</h3>
                <p className="text-sm  text-gray-400">
                  Discover a curated list of websites to enhance your English
                  language learning.
                </p>
                <Link
                  className="mt-2 inline-flex items-center text-sm font-medium  hover:underline text-gray-50"
                  href="#"
                >
                  Visit Websites
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="rounded-lg border  p-4 shadow-sm border-gray-800 bg-gray-950">
                <h3 className="text-lg font-bold">Feedback & Support</h3>
                <p className="text-sm ">
                  Share your thoughts, ask questions, or request additional
                  support.
                </p>
                <Link
                  className="mt-2 inline-flex items-center text-sm font-medium hover:underline text-gray-50"
                  href="#"
                >
                  Contact Us
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                팀 이름(미정)
              </h2>
              <p className="max-w-[900px]  md:text-xl/relaxed whitespace-pre-line lg:text-base/relaxed xl:text-xl/relaxed text-gray-400">
                {"팀 구성원 누구누구누구\n연락처 - 어디어디어디"}
              </p>
            </div>
            <div className="mx-auto w-full max-w-md space-y-2">
              <form className="grid gap-4">
                <div className="grid w-full gap-1.5" />
              </form>
            </div>
          </div>
        </div>
      </section>
      {loading ? <Loader loading={loading} /> : <div></div>}
    </main>
  );
}

function ArrowRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
