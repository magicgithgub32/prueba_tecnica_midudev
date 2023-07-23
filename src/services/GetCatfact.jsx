export const GetCatFact = async () => {
  const result = await fetch("https://catfact.ninja/fact");
  const res = await result.json();

  return res.fact;
};
