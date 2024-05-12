export const fetchDemo = async () => {
  const res = await fetch("http://localhost:3000/api/demo");

  console.log("api 호출");
  console.log(res);
  const data = await res.json();
  console.log(data);
  return data;
};
