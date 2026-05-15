import "dotenv/config";
import { Resend } from "resend";
import { BLOCK_SLUGS, getBlock, type BlockSlug } from "../lib/block-registry";
import {
  loadContentForSlug,
  loadEmailContent,
} from "../lib/load-email-content";
import { renderBlocksToHtml } from "../lib/render-block";

// -------------------------------------------------------------------------- //
// Send a test email using the block + content defined in email-content.json
// -------------------------------------------------------------------------- //

function fail(message: string): never {
  console.error(`\u2717 ${message}`);
  process.exit(1);
}

function resolveSendSlugs(data: {
  block: string;
  blocks?: string[];
}): string[] {
  const ordered =
    data.blocks && data.blocks.length > 0 ? data.blocks : [data.block];
  return ordered;
}

async function main() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    fail(
      "Missing RESEND_API_KEY. Copy .env.example to .env and fill it in (https://resend.com/api-keys).",
    );
  }

  const data = loadEmailContent();
  if (!data) {
    fail(
      "Missing email-content.json. Copy email-content.example.json to email-content.json and edit it.",
    );
  }

  const { send, block, blocks } = data;

  const slugs = resolveSendSlugs({ block, blocks });
  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    if (!getBlock(slug)) {
      const ctx =
        blocks && blocks.length > 0
          ? `blocks[${i}] "${slug}"`
          : `block "${slug}"`;
      fail(
        `Unknown ${ctx}. Expected one of: ${BLOCK_SLUGS.join(", ")}.`,
      );
    }
  }
  if (!send?.to || !send?.from || !send?.subject) {
    fail("email-content.json must include send.to, send.from and send.subject.");
  }

  const specs = slugs.map((slug) => ({
    slug: slug as BlockSlug,
    props: loadContentForSlug(slug as BlockSlug) ?? {},
  }));

  console.log(
    `\u2192 Rendering ${slugs.length} block(s): ${slugs.join(", ")}...`,
  );
  const html = await renderBlocksToHtml(specs);

  console.log(`\u2192 Sending to ${send.to} via Resend...`);
  const resend = new Resend(apiKey);
  const result = await resend.emails.send({
    from: send.from,
    to: send.to,
    subject: send.subject,
    html,
  });

  if (result.error) {
    fail(`Resend error: ${result.error.message}`);
  }

  console.log(`\u2713 Sent. Message id: ${result.data?.id ?? "(unknown)"}`);
}

main().catch((err) => {
  fail(err instanceof Error ? err.message : String(err));
});
