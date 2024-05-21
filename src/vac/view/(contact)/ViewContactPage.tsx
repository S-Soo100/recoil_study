"use client";
// const Main = styled.div`
//   display: flex;
//   justify-content: center;
//   min-height: 100dvh;
//   align-items: center;
//   flex-direction: row;
// `;

// const Card = styled.span`
//   display: flex;
//   flex-direction: column;
//   background-color: #fefcfa;
//   border-radius: 2rem;
//   padding: 4rem;
//   font-size: 2rem;
//   box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
//   gap: 16%;
// `;

export default function ViewContactPage() {
  return (
    <div className="bg-gray-800 flex h-[100dvh] w-[100dvw] gap-4 p-4 items-center flex-col justify-center  xl:flex-row">
      <div className="h-[100dvh] w-[50dvh]  px-4 py-12 space-y-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-100">
          Connect With Us
        </h1>
        <p className="max-w-[600px]  md:text-xl text-gray-200">
          우리 팀은 ai를 교육에 도입해 자동으로 시험문제를 해석하고, 만들고,
          제공합니다.
        </p>
      </div>
      <div className="h-[100dvh] w-[50dvh] bg-slate-50 px-4 py-12">
        {/* ViewContactPage */}

        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <input
            className="border-red-500 border-2 rounded-md p-1 m-1 px-4"
            type="email"
          />
          <input
            className="border-red-500 border-2 rounded-md p-1 m-1 px-4"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4"></div>
      </div>
    </div>
  );
}
