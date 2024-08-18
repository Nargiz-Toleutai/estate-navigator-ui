import { WindowEnvironment } from "./types";

const WINDOW_ENVIRONMENT_KEY = "__perfectpoint_environment__";

export const windowEnvironment = // @ts-ignore-next-line
  window[WINDOW_ENVIRONMENT_KEY] as WindowEnvironment;
