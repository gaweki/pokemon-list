export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const handleFetch = url => {
  return fetch(url)
    .then(res => res.json())
    .then( data => data)
}