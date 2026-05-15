import * as React from "react";
import { Heading, Section, Text as EmailText } from "@react-email/components";

// -------------------------------------------------------------------------- //
// Text
// -------------------------------------------------------------------------- //

export type TextBlockNode =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "h4"; text: string }
  | { type: "p"; text: string };

export interface TextProps {
  nodes: TextBlockNode[];
}

const preLine = { whiteSpace: "pre-line" as const };

export const Text = ({ nodes }: TextProps) => {
  return (
    <Section className="border-x border-solid border-neutral-800 border-b bg-neutral-900 px-10 pb-14 pt-14 text-left">
      {nodes.map((node, i) => {
        const isLast = i === nodes.length - 1;
        switch (node.type) {
          case "h2":
            return (
              <Heading
                key={i}
                as="h2"
                className={
                  isLast
                    ? "m-0 font-sans text-[24px] font-medium leading-[1.2] tracking-tight text-[#f0f0f0]"
                    : "m-0 pb-4 font-sans text-[24px] font-medium leading-[1.2] tracking-tight text-[#f0f0f0]"
                }
                style={preLine}
              >
                {node.text}
              </Heading>
            );
          case "h3":
            return (
              <Heading
                key={i}
                as="h3"
                className={
                  isLast
                    ? "m-0 font-sans text-[20px] font-medium leading-[1.25] tracking-tight text-[#f0f0f0]"
                    : "m-0 pb-3 font-sans text-[20px] font-medium leading-[1.25] tracking-tight text-[#f0f0f0]"
                }
                style={preLine}
              >
                {node.text}
              </Heading>
            );
          case "h4":
            return (
              <Heading
                key={i}
                as="h4"
                className={
                  isLast
                    ? "m-0 font-sans text-[17px] font-medium leading-snug tracking-tight text-[#f0f0f0]"
                    : "m-0 pb-3 font-sans text-[17px] font-medium leading-snug tracking-tight text-[#f0f0f0]"
                }
                style={preLine}
              >
                {node.text}
              </Heading>
            );
          case "p":
            return (
              <EmailText
                key={i}
                className={
                  isLast
                    ? "m-0 max-w-[320px] font-sans text-[14px] leading-[1.55] text-[rgba(255,255,255,0.5)]"
                    : "m-0 max-w-[320px] pb-5 font-sans text-[14px] leading-[1.55] text-[rgba(255,255,255,0.5)]"
                }
                style={preLine}
              >
                {node.text}
              </EmailText>
            );
        }
      })}
    </Section>
  );
};
