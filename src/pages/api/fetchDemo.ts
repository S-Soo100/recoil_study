export const fetchDemo = async () => {
  const res = await fetch("/api/demo");
  const data = await res.json();
  return data;
};
