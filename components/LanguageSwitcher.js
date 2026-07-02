import Link from "next/link";
import { useRouter } from "next/router";
import { localeHref } from "../lib/locale";
import { FlagGB, FlagIT } from "./FlagIcons";

const FLAGS = { en: FlagGB, it: FlagIT };

export default function LanguageSwitcher({ className }) {
  const router = useRouter();
  const otherLocale = router.locale === "en" ? "it" : "en";
  const Flag = FLAGS[otherLocale];

  return (
    <Link
      href={localeHref(otherLocale, router.asPath)}
      locale={false}
      className={`lang-flag${className ? ` ${className}` : ""}`}
      aria-label={otherLocale === "en" ? "Switch to English" : "Passa all'italiano"}
      title={otherLocale === "en" ? "Switch to English" : "Passa all'italiano"}
    >
      <Flag className="lang-flag-icon" />
    </Link>
  );
}
