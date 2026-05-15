import * as React from "react";
import { Column, Img, Link, Row, Section, Text } from "@react-email/components";

// -------------------------------------------------------------------------- //
// Cards
// -------------------------------------------------------------------------- //

export interface CardsProps {
  card1Image: string;
  card1Title: string;
  card1Description: string;
  card1Link: { label: string; url: string };
  card2Image: string;
  card2Title: string;
  card2Description: string;
  card2Link: { label: string; url: string };
}

export const Cards = ({
  card1Image,
  card1Title,
  card1Description,
  card1Link,
  card2Image,
  card2Title,
  card2Description,
  card2Link,
}: CardsProps) => {
  return (
    <Section className="border-x border-solid border-neutral-800 border-b bg-neutral-900 px-10 pb-14 pt-14">
      <Row>
        <Column className="w-1/2 align-top pr-4">
          <Section className="overflow-hidden rounded-[12px] border border-solid border-[rgba(255,255,255,0.2)]">
            <Section
              className="m-0 overflow-hidden p-0 leading-0"
              style={{ height: 160 }}
            >
              <Img
                src={card1Image ?? ""}
                alt=""
                width={264}
                height={160}
                className="block h-[160px] w-full border-none object-cover"
                style={{ objectFit: "cover" }}
              />
            </Section>
            <Section className="px-4 pb-5 pt-5">
              <Text className="m-0 pb-2 font-sans text-[15px] font-medium leading-normal text-[#f0f0f0]">
                {card1Title}
              </Text>
              <Text
                className={
                  card1Link.label
                    ? "m-0 pb-2 font-sans text-[14px] leading-[1.55] text-[rgba(255,255,255,0.5)]"
                    : "m-0 font-sans text-[14px] leading-[1.55] text-[rgba(255,255,255,0.5)]"
                }
              >
                {card1Description}
              </Text>
              {card1Link.label ? (
                <Link
                  href={card1Link.url ? card1Link.url : "#"}
                  className="m-0 inline-block font-sans text-[14px] leading-normal text-[rgba(255,255,255,0.65)] no-underline"
                >
                  {card1Link.label}
                </Link>
              ) : null}
            </Section>
          </Section>
        </Column>

        <Column className="w-1/2 align-top">
          <Section className="overflow-hidden rounded-[12px] border border-solid border-[rgba(255,255,255,0.2)]">
            <Section
              className="m-0 overflow-hidden p-0 leading-0"
              style={{ height: 160 }}
            >
              <Img
                src={card2Image ?? ""}
                alt=""
                width={264}
                height={160}
                className="block h-[160px] w-full border-none object-cover"
                style={{ objectFit: "cover" }}
              />
            </Section>
            <Section className="px-4 pb-5 pt-5">
              <Text className="m-0 pb-2 font-sans text-[15px] font-medium leading-normal text-[#f0f0f0]">
                {card2Title}
              </Text>
              <Text
                className={
                  card2Link.label
                    ? "m-0 pb-2 font-sans text-[14px] leading-[1.55] text-[rgba(255,255,255,0.5)]"
                    : "m-0 font-sans text-[14px] leading-[1.55] text-[rgba(255,255,255,0.5)]"
                }
              >
                {card2Description}
              </Text>
              {card2Link.label ? (
                <Link
                  href={card2Link.url ? card2Link.url : "#"}
                  className="m-0 inline-block font-sans text-[14px] leading-normal text-[rgba(255,255,255,0.65)] no-underline"
                >
                  {card2Link.label}
                </Link>
              ) : null}
            </Section>
          </Section>
        </Column>
      </Row>
    </Section>
  );
};
