export function localeHref(locale, path) {
  return `/${locale}${path === "/" ? "" : path}`;
}
