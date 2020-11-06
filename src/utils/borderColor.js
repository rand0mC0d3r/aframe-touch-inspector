export default (str) => {
  if(str === undefined ||  str.length === 0) return;
  let hash = [...str].reduce((acc, value) => {
    acc = value.charCodeAt(0) + ((acc << 5) - acc);
    return acc;
  }, 0);
  return [...Array(3)].reduce((acc, _, i) => {
    let value = (hash >> (i * 8)) & 0xFF;
    acc += ('00' + value.toString(16)).substr(-2);
    return acc;
  }, '#');
};