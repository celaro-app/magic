import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BLOCK_SLUGS,
  getBlock,
  type BlockSlug,
} from "@/lib/block-registry";
import { loadContentForSlug } from "@/lib/load-email-content";
import { renderBlockToHtml } from "@/lib/render-block";

export function generateStaticParams() {
  return BLOCK_SLUGS.map((blockName) => ({ blockName }));
}

export default async function BlockPreviewPage({
  params,
}: {
  params: Promise<{ blockName: string }>;
}) {
  const { blockName } = await params;
  const entry = getBlock(blockName);
  if (!entry) notFound();

  const slug = blockName as BlockSlug;
  const jsonProps = loadContentForSlug(slug);
  const html = await renderBlockToHtml({ slug, props: jsonProps });

  const source = jsonProps ? "email-content.json" : "default props";

  return (
    <div className="flex min-h-screen flex-col bg-[#050505]">
      <header className="flex items-center justify-between border-b border-white/12 px-5 py-3.5 text-[13px]">
        <Link href="/">Back</Link>
        <span>
          <strong>{entry.label}</strong>
          <span className="text-white/55"> — /block/{slug}</span>
        </span>
        <span className="text-white/55">{source}</span>
      </header>
      <iframe
        className="min-h-0 w-full flex-1 border-0 bg-white"
        srcDoc={html}
        title={`${entry.label} preview`}
      />
    </div>
  );
}
