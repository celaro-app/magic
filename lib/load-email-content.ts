import fs from "node:fs";
import path from "node:path";
import type { BlockSlug } from "./block-registry";

// -------------------------------------------------------------------------- //
// JSON content loader
// -------------------------------------------------------------------------- //

export type EmailContent = {
  send: {
    to: string;
    from: string;
    subject: string;
  };
  block: BlockSlug;
  /**
   * When non-empty, the send script stacks these blocks in one email (in order).
   * When omitted or empty, only `block` is sent.
   */
  blocks?: BlockSlug[];
  /** Legacy: used when `contentByBlock` has no entry for the active `block`. */
  content?: Record<string, unknown>;
  /** Optional map of props per block slug (preview + send each resolve by slug). */
  contentByBlock?: Partial<Record<BlockSlug, Record<string, unknown>>>;
};

const CONTENT_FILENAME = "email-content.json";

export function loadEmailContent(): EmailContent | null {
  const filePath = path.join(process.cwd(), CONTENT_FILENAME);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw) as EmailContent;
}

export function loadContentForSlug(
  slug: BlockSlug,
): Record<string, unknown> | null {
  const data = loadEmailContent();
  if (!data) return null;
  const fromMap = data.contentByBlock?.[slug];
  if (fromMap) return fromMap;
  if (data.block === slug && data.content) return data.content;
  return null;
}
