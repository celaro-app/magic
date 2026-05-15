import * as React from "react";
import {
  Button,
  Column,
  Img,
  Row,
  Section,
  Text,
} from "@react-email/components";

// -------------------------------------------------------------------------- //
// Hero
// -------------------------------------------------------------------------- //

export interface HeroProps {
  label: string;
  image?: string;
  headline: string;
  description: string;
  link: { label: string; url: string };
}

export const Hero = ({
  label,
  image,
  headline,
  description,
  link,
}: HeroProps) => {
  return (
    <Section className="overflow-hidden rounded-t-[8px] border border-solid border-neutral-800 border-b bg-neutral-900">
      <Section className="px-10 pt-14 pb-12 text-left">
        <Section className="pb-9 text-left">
          {label ? (
            <Row className="pb-6">
              <Column className="w-[12px] pr-1 align-middle">
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.45)",
                  }}
                />
              </Column>
              <Column className="align-middle">
                <Text className="m-0 font-sans text-[14px] font-medium text-[rgba(255,255,255,0.45)]">
                  {label}
                </Text>
              </Column>
            </Row>
          ) : null}

          {headline ? (
            <Text
              className={
                description
                  ? "m-0 max-w-[320px] pb-[30px] font-sans text-[42px] font-medium leading-[1.125] tracking-tight text-[#f0f0f0] opacity-90"
                  : "m-0 max-w-[320px] font-sans text-[42px] font-medium leading-[1.125] tracking-tight text-[#f0f0f0] opacity-90"
              }
              style={{ whiteSpace: "pre-line" }}
            >
              {headline}
            </Text>
          ) : null}

          {description ? (
            <Text className="m-0 max-w-[360px] font-sans text-[14px] leading-[1.55] text-[rgba(255,255,255,0.5)]">
              {description}
            </Text>
          ) : null}
        </Section>

        {link.label ? (
          <Section className="text-left">
            <Button
              href={link.url ? link.url : "#"}
              className="inline-block rounded-full border border-solid border-neutral-600 bg-neutral-800 px-4 py-2 text-center font-sans text-[14px] font-medium leading-tight text-neutral-200 no-underline"
            >
              {link.label}
            </Button>
          </Section>
        ) : null}
      </Section>

      {image ? (
        <Section className="px-10 pb-10 pt-0">
          <Section className="mt-8 overflow-hidden rounded-[12px] border border-solid border-[rgba(255,255,255,0.2)]">
            <Img
              src={image}
              alt=""
              width={608}
              className="block w-full max-w-[608px] border-none"
            />
          </Section>
        </Section>
      ) : null}
    </Section>
  );
};
