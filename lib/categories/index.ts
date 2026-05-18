import type { Category } from "./types";
import { hearingTinnitus } from "./hearing-tinnitus";
import { dizzinessHeadache } from "./dizziness-headache";
import { sleep } from "./sleep";
import { ent } from "./ent";
import { surgery } from "./surgery";
import { iv } from "./iv";

export type { Category, SubPage, PageSection } from "./types";

export const categories: Category[] = [
  hearingTinnitus,
  dizzinessHeadache,
  sleep,
  ent,
  surgery,
  iv,
];

export const getCategory = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug);

export const getSubPage = (categorySlug: string, pageSlug: string) => {
  const category = getCategory(categorySlug);
  if (!category) return undefined;
  const page = category.pages.find((p) => p.slug === pageSlug);
  if (!page) return undefined;
  return { category, page };
};

export const allSubPagePaths = (): { category: string; slug: string }[] =>
  categories.flatMap((c) =>
    c.pages.map((p) => ({ category: c.slug, slug: p.slug })),
  );
