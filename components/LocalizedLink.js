import Link from "next/link";
import { useRouter } from "next/router";
import { localeHref } from "../lib/locale";

export default function LocalizedLink({ href, children, ...props }) {
  const { locale } = useRouter();
  return (
    <Link href={localeHref(locale, href)} locale={false} {...props}>
      {children}
    </Link>
  );
}
