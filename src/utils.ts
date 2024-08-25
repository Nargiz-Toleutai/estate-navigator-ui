export function checkAvitoRealEstateUrl(url: string): boolean {
  const pattern =
    /^https:\/\/www\.avito\.ru\/.*?\/kommercheskaya_nedvizhimost\/[a-z0-9_\-.]+$/;
  return pattern.test(url);
}
