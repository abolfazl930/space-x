import { APP_ENV_PRODUCTION } from "../configs/enums";

const development = {
  endPointAdmin: "https://api.spacexdata.com/",
};

const production = {
  endPointAdmin: "https://api.spacexdata.com/",
};

export default {
  ...(process.env.NODE_ENV === APP_ENV_PRODUCTION ? production : development),
};
