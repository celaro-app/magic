import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { listBlocks } from "@/lib/block-registry";
import { CelaroLogo } from "@/lib/celaro-logo";

export default function HomePage() {
  const blocks = listBlocks();

  return (
    <main className="mx-auto max-w-[720px] px-6 pb-24 pt-16 text-center">
      <section className="relative pb-40 pt-20">
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 sm:px-10">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-block max-w-xl bg-linear-to-r from-white to-white/45 bg-clip-text text-base leading-normal text-transparent">
              Modular Email Theme 
            </span>
          </div>
          <h1 className="mb-8 inline-block bg-linear-to-b from-white/0 to-white bg-clip-text py-[0.1em] text-[10rem] leading-none tracking-[-0.055em] text-transparent">
            Magic
          </h1>
          <p className="m-0 max-w-[26rem] text-base leading-normal text-white/50">
            Magic is a theme for React Email that allows you to create beautiful
            emails with ease.
          </p>
          <Link
            href="https://celaro.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-white/60"
          >
            <CelaroLogo className="shrink-0" aria-hidden />
            <span>Crafted By Celaro</span>
          </Link>
        </div>
      </section>

      <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0">
        {blocks.map((block) => (
          <li
            key={block.slug}
            className="overflow-hidden rounded-[14px] border border-white/12 bg-[#141414] transition-[border-color] duration-150 ease-in-out hover:border-white/24"
          >
            <Link
              href={`/block/${block.slug}`}
              className="flex flex-col text-left text-sm"
            >
              <div className="relative aspect-video w-full overflow-hidden border-b border-white/12 bg-[#0d0d0d]">
                {block.previewImage ? (
                  <Image
                    src={block.previewImage}
                    alt={`${block.label} preview`}
                    fill
                    sizes="(max-width: 720px) 100vw, 720px"
                    className="object-cover"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-xs tracking-wide text-white/55 uppercase">
                    No preview
                  </span>
                )}
              </div>
              <div className="flex items-center justify-start gap-2 px-[18px] py-3.5">
                <span className="font-medium">{block.label}</span>
                <ArrowRight
                  className="size-4 shrink-0 text-white/55"
                  aria-hidden
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
