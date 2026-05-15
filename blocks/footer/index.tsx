import * as React from "react";
import { Column, Img, Link, Row, Section, Text } from "@react-email/components";

// -------------------------------------------------------------------------- //
// Footer
// -------------------------------------------------------------------------- //

const MAGIC_SOCIAL_ICONS = {
  instagram: "https://celaro.co/magic-assets/instagram-light.png",
  x: "https://celaro.co/magic-assets/x-light.png",
  linkedin: "https://celaro.co/magic-assets/linkedin-light.png",
  facebook: "https://celaro.co/magic-assets/facebook-light.png",
} as const;

export interface FooterProps {
  tagline: string;
  siteUrl: string;
  companyDisplayName: string;
  instagramUrl: string;
  xUrl: string;
  linkedinUrl: string;
  facebookUrl: string;
  addressLine1: string;
  addressLine2: string;
}

export const Footer = ({
  tagline,
  siteUrl,
  companyDisplayName,
  instagramUrl,
  xUrl,
  linkedinUrl,
  facebookUrl,
  addressLine1,
  addressLine2,
}: FooterProps) => {
  const href = siteUrl ?? "#";

  const socialRows = (
    [
      {
        url: instagramUrl,
        alt: "Instagram",
        icon: MAGIC_SOCIAL_ICONS.instagram,
      },
      { url: xUrl, alt: "X", icon: MAGIC_SOCIAL_ICONS.x },
      {
        url: linkedinUrl,
        alt: "LinkedIn",
        icon: MAGIC_SOCIAL_ICONS.linkedin,
      },
      {
        url: facebookUrl,
        alt: "Facebook",
        icon: MAGIC_SOCIAL_ICONS.facebook,
      },
    ] as const
  ).filter((row) => row.url);

  return (
    <Section className="overflow-hidden rounded-b-[8px] border border-solid border-neutral-800 border-t bg-neutral-900 pt-14">
      <Section className="px-10 pb-8">
        {tagline ? (
          <Text className="m-0 max-w-[320px] font-sans text-[13px] leading-normal text-neutral-500">
            {tagline}
          </Text>
        ) : null}

        <Row align="left">
          <Column className="w-full align-top">
            {socialRows.length > 0 ? (
              <Section align="left" className="mt-8 w-[152px]">
                <Row align="left">
                  {socialRows.map((row, i) => (
                    <Column
                      key={row.alt}
                      className={
                        i < socialRows.length - 1
                          ? "w-[20px] pr-8"
                          : "w-[20px]"
                      }
                    >
                      <Link href={row.url} className="inline-block">
                        <Img
                          src={row.icon}
                          alt={row.alt}
                          width={20}
                          height={20}
                          className="block border-none"
                        />
                      </Link>
                    </Column>
                  ))}
                </Row>
              </Section>
            ) : null}
          </Column>
        </Row>

        <Row align="left">
          <Column className="w-full pt-8 align-top">
            <Text className="m-0 font-sans text-[11px] leading-normal text-neutral-500">
              {addressLine1}
              <br />
              {addressLine2}
            </Text>
          </Column>
        </Row>
      </Section>

      <Section className="border-t border-solid border-neutral-800 px-10 py-8">
        <Row align="left">
          <Column className="w-full align-top">
            <Text className="m-0 max-w-[260px] font-sans text-[11px] leading-normal text-neutral-500">
              <Link href={href} className="text-neutral-400 no-underline">
                Unsubscribe
              </Link>{" "}
              from {companyDisplayName} marketing emails.
            </Text>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};
