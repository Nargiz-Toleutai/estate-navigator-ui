import { AppEnvironmentConfig } from "./types";
import { windowEnvironment } from "./window.environment";

export const processEnvironment = (
  environment: Partial<AppEnvironmentConfig>
): Readonly<AppEnvironmentConfig> => {
  return {
    version: parseString(windowEnvironment.version),
    apiBaseUri: parseString(windowEnvironment.api_base_uri),
    ...environment,
  } as AppEnvironmentConfig;
};

function parseString(value: string, defaultValue?: string): string | undefined {
  return value === "" ? defaultValue : value;
}

// function parseNumber(value: string, defaultValue?: number): number | undefined {
//     return value === '' ? defaultValue : Number(value);
// }

// function parseBoolean(
//   value: string,
//   defaultValue?: boolean
// ): boolean | undefined {
//   return value === "" ? defaultValue : value.toLowerCase() === "true";
// }

// function parseInstallationType(
//   str: InstallationTypeString
// ): keyof typeof InstallationType | undefined {
//   return Object.values(InstallationType).find((value) => str === value) as
//     | keyof typeof InstallationType
//     | undefined;
// }
