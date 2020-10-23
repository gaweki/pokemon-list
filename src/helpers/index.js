export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const handleFetch = async url => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return data;
}

export const getFiftyPercentPossiblity = () => {
  let mathV = Math.random()
  return mathV >= 0.5
}