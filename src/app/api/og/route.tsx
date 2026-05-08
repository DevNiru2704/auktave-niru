import { ImageResponse } from "next/og";

export const runtime = "edge";

const width = 1200;
const height = 630;

function normalizeText(value: string, fallback: string, maxLength: number) {
    const trimmed = value.trim();
    const safe = trimmed.length > 0 ? trimmed : fallback;
    return safe.length > maxLength ? `${safe.slice(0, maxLength - 1)}...` : safe;
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const title = normalizeText(searchParams.get("title") ?? "", "AUKTAVE 2K26", 72);
    const route = normalizeText(searchParams.get("route") ?? "", "auktave.co.in", 80);

    return new ImageResponse(
        (
            <div tw="w-full h-full flex relative overflow-hidden bg-black text-stone-100">
                <div tw="absolute inset-0 bg-zinc-950" />
                <div tw="absolute inset-0 opacity-20 bg-red-950" />
                <div tw="absolute inset-0 flex" aria-hidden="true">
                    <div tw="w-full h-full border border-white/10" />
                </div>
                <div tw="absolute -top-24 -right-24 w-[440px] h-[440px] rounded-full bg-red-500/20" />

                <div tw="flex flex-col justify-between px-16 py-14 w-full z-10">
                    <div tw="flex flex-col gap-4">
                        <div tw="inline-flex items-center w-fit px-4 py-2 border border-red-400/50 tracking-[0.14em] uppercase text-[19px] text-red-400 bg-red-500/10">
                            Stranger Signal
                        </div>
                        <div tw="flex text-[74px] leading-[1.06] font-extrabold max-w-[930px]">
                            {title}
                        </div>
                    </div>

                    <div tw="flex flex-col gap-2">
                        <div tw="flex text-[28px] text-stone-100/90">
                            Not all experiments stay in the lab.
                        </div>
                        <div tw="flex items-center gap-3.5 text-[21px] tracking-[0.08em] uppercase text-red-400/95">
                            <span>AUKTAVE 2K26</span>
                            <span tw="text-stone-100/50">/</span>
                            <span>{route}</span>
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            width,
            height
        }
    );
}
