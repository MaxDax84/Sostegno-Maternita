import Link from "next/link";
import { useRouter } from "next/router";
import { localeHref } from "../lib/locale";

export default function LanguageSwitcher({ className }) {
  const router = useRouter();
  const otherLocale = router.locale === "en" ? "it" : "en";

  return (
    <Link
      href={localeHref(otherLocale, router.asPath)}
      locale={false}
      className={className}
      aria-label={otherLocale === "en" ? "Switch to English" : "Passa all'italiano"}
    >
      {otherLocale.toUpperCase()}
    </Link>
  );
}
