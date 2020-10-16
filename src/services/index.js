import { get, post } from "./api";

export default {
  launch: {
    past: async (model, singleMode) =>
      await get({
        api: "v3/launches/past",
        model,
        singleMode,
      }),
    upcoming: async (model, singleMode) =>
      await get({
        api: "v3/launches/upcoming",
        model,
        singleMode,
      }),
  },
};
