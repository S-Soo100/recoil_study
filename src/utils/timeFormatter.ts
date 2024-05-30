export const timeFormatter = (seconds: number): string => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  let formattedTime = "";

  if (hrs > 0) {
    formattedTime += `${hrs}시간 `;
  }

  if (mins > 0) {
    formattedTime += `${mins}분 `;
  }

  formattedTime += `${secs}초`;

  return formattedTime;
};
