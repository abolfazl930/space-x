export const getTime = (unixTimeStamp) => {
  let date = new Date(unixTimeStamp * 1000);
  let hours = "0" + date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  let formattedTime =
    hours.substr(-2) + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  return formattedTime;
};
