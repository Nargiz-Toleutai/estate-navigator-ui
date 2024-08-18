import { environment } from "@/environments/environment";

import { apiConfig } from "./api";

export const config = {
  version: environment.version,
  api: apiConfig,
};
