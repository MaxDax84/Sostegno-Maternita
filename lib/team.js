import { teamTranslations } from "../data/team.en";

export function localizeMember(member, locale) {
  if (locale !== "en") return member;
  const translation = teamTranslations[member.slug];
  return translation ? { ...member, ...translation } : member;
}
