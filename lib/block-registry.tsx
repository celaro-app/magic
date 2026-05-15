import type { ComponentType } from "react";
import { Cards, type CardsProps } from "@blocks/cards";
import { Cta, type CtaProps } from "@blocks/cta";
import { Footer, type FooterProps } from "@blocks/footer";
import { Hero, type HeroProps } from "@blocks/hero";
import { Text as TextBlock, type TextProps } from "@blocks/text";

// -------------------------------------------------------------------------- //
// Block registry
// -------------------------------------------------------------------------- //

export type BlockSlug = "hero" | "cards" | "text" | "cta" | "footer";

type BlockEntry<P> = {
  slug: BlockSlug;
  label: string;
  Component: ComponentType<P>;
  defaultProps: P;
  previewImage: string | null;
};

const hero: BlockEntry<HeroProps> = {
  slug: "hero",
  label: "Hero",
  Component: Hero,
  previewImage: "/preview-image/hero.png",
  defaultProps: {
    label: "Product update",
    image: "https://celaro.co/magic-assets/magic-gradient.png",
    headline: "Email layouts\nwithout the drag.",
    description:
      "Compose blocks in JSON, preview instantly, and ship campaigns and transactional sends from one stack.\n\nSwap this file’s content to iterate on copy, links, and imagery.",
    link: { label: "View the docs", url: "https://celaro.co" },
  },
};

const cards: BlockEntry<CardsProps> = {
  slug: "cards",
  label: "Cards",
  Component: Cards,
  previewImage: "/preview-image/cards.png",
  defaultProps: {
    card1Image: "https://celaro.co/magic-assets/magic-gradient.png",
    card1Title: "Block-based templates",
    card1Description:
      "Register sections once.",
    card1Link: { label: "See blocks", url: "https://celaro.co" },
    card2Image: "https://celaro.co/magic-assets/magic-gradient.png",
    card2Title: "Fast local preview",
    card2Description:
      "Iterate on subject lines.",
    card2Link: { label: "Try it", url: "https://celaro.co" },
  },
};

const text: BlockEntry<TextProps> = {
  slug: "text",
  label: "Text",
  Component: TextBlock,
  previewImage: "/preview-image/text.png",
  defaultProps: {
    nodes: [
      { type: "h2", text: "Why blocks?" },
      {
        type: "p",
        text: "Magic lets you define reusable sections once and compose them from JSON.",
      },
      {
        type: "p",
        text: "Preview updates instantly while you edit copy, links, and imagery in one place.",
      },
    ],
  },
};

const cta: BlockEntry<CtaProps> = {
  slug: "cta",
  label: "CTA",
  Component: Cta,
  previewImage: "/preview-image/cta.png",
  defaultProps: {
    label: "Get started",
    headline: "Ship the next send today.",
    link: { label: "Clone & customize", url: "https://celaro.co" },
    bottomImage: "https://celaro.co/magic-assets/magic-gradient.png",
  },
};

const footer: BlockEntry<FooterProps> = {
  slug: "footer",
  label: "Footer",
  Component: Footer,
  previewImage: "/preview-image/footer.png",
  defaultProps: {
    tagline: "Better email starts with a system you can evolve.",
    siteUrl: "https://celaro.co",
    companyDisplayName: "Celaro",
    instagramUrl: "https://instagram.com/celaro",
    xUrl: "https://x.com/celaro",
    linkedinUrl: "https://linkedin.com/company/celaro",
    facebookUrl: "https://facebook.com/celaro",
    addressLine1: "Birger Jarlsgatan 57",
    addressLine2: "Stockholm 113 56, Sweden",
  },
};

const registry = { hero, cards, text, cta, footer } as const;

export const BLOCK_SLUGS: BlockSlug[] = [
  "hero",
  "cards",
  "text",
  "cta",
  "footer",
];

export function getBlock(slug: string): BlockEntry<unknown> | null {
  if (!(slug in registry)) return null;
  return registry[slug as BlockSlug] as BlockEntry<unknown>;
}

export function listBlocks(): Array<{
  slug: BlockSlug;
  label: string;
  previewImage: string | null;
}> {
  return BLOCK_SLUGS.map((slug) => ({
    slug,
    label: registry[slug].label,
    previewImage: registry[slug].previewImage,
  }));
}
