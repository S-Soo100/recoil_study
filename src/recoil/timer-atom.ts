import { atom, selector } from "recoil";
export const timerAtom = atom<number>({
  key: "timerAtom",
  default: 0,
});

// export const timerSelector = selector({
//   key: "timerSelector",
//   get: ({ get }) => {
//     const records = get(timerAtom);
//     const correctCount = records.filter((record) => record === true).length;
//     const incorrectCount = records.length - correctCount;
//     const totalCount = records.length;
//     const accuracy = totalCount === 0 ? 0 : (correctCount / totalCount) * 100;

//     return {
//       correctCount,
//       incorrectCount,
//       totalCount,
//       accuracy,
//     };
//   },
// });
