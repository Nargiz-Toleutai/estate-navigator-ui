export function checkAvitoRealEstateUrl(url: string): boolean {
  const pattern =
    /^https:\/\/www\.avito\.ru\/.*?\/kommercheskaya_nedvizhimost\/[a-z0-9_\-.]+$/;
  return pattern.test(url);
}

type ClassItem =
  | string
  | (string | undefined | null)[]
  | { [name: string]: boolean }
  | undefined
  | null;

export function processClassNames(...items: ClassItem[]): string {
  return items
    .flatMap((item) => {
      if (typeof item === "string") {
        return item;
      }
      if (Array.isArray(item)) {
        return item.filter(Boolean);
      }
      if (item && typeof item === "object") {
        return Object.keys(item).filter((key) => item[key]);
      }
      return [];
    })
    .join(" ");
}
