import Config from "../config";

export const getOneRandomPic = () => {
  /* eslint-disable no-undef */
  return fetch(Config.apiUrl + "/api/oneRandomPic", {
    method: "GET"
  });
};
