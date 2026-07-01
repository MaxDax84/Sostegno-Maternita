import { postTranslations } from "../data/posts.en";

export function localizePost(post, locale) {
  if (locale !== "en") return post;
  const translation = postTranslations[post.slug];
  return translation ? { ...post, ...translation } : post;
}
