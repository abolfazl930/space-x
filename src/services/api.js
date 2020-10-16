import axios from "axios";
import urls from "../configs/urls";
import { convertObjectToQueryString } from "../utils/convert-obj-to-query";

export const get = async ({ api, model, config, singleMode } = {}) => {
  const query = convertObjectToQueryString(model);
  try {
    const response = await axios.get(
      `${urls.endPointAdmin}${api}${singleMode ? `/${model}` : `?${query}`}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        ...config,
      }
    );
    return response;
  } catch (e) {
    console.error(e);
  }
};

export const post = async ({ api, model, config } = {}) => {
  try {
    const response = await axios.post(`${urls.endPointAdmin}${api}`, model, {
      headers: {
        "Content-Type": "application/json",
      },
      ...config,
    });
    return response;
  } catch (e) {
    console.error(e);
  }
};
