export const convertQueryStringToObject = (query) => {
  let res = query.substring(1);
  res = JSON.parse(
    '{"' + decodeURI(res.replace(/&/g, '","').replace(/=/g, '":"')) + '"}'
  );
  return res;
};
