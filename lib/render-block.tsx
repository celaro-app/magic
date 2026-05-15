import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import { render } from "@react-email/render";
import { getBlock, type BlockSlug } from "./block-registry";

// -------------------------------------------------------------------------- //
// Block renderer
// -------------------------------------------------------------------------- //

type RenderOptions = {
  slug: BlockSlug;
  props?: Record<string, unknown> | null;
};

function BlockSection({ slug, props }: RenderOptions) {
  const entry = getBlock(slug);
  if (!entry) return null;
  const Component = entry.Component as React.ComponentType<
    Record<string, unknown>
  >;
  const merged = {
    ...(entry.defaultProps as Record<string, unknown>),
    ...(props ?? {}),
  };
  return <Component {...merged} />;
}

function BlocksDocument({ specs }: { specs: RenderOptions[] }) {
  const preview =
    specs.length === 1
      ? `${getBlock(specs[0]?.slug)?.label ?? specs[0].slug} block preview`
      : specs
          .map(({ slug }) => getBlock(slug)?.label ?? slug)
          .join(" · ");

  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind>
        <Body className="bg-neutral-950 py-10 font-sans">
          <Container className="mx-auto w-[608px] max-w-full">
            {specs.map((spec, i) => (
              <React.Fragment key={`${spec.slug}-${i}`}>
                <BlockSection {...spec} />
              </React.Fragment>
            ))}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export async function renderBlocksToHtml(
  specs: RenderOptions[],
): Promise<string> {
  return render(<BlocksDocument specs={specs} />);
}

export async function renderBlockToHtml(
  options: RenderOptions,
): Promise<string> {
  return renderBlocksToHtml([options]);
}
