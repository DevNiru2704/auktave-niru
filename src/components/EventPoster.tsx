import Image from "next/image";

type EventPosterProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
    className?: string;
};

export default function EventPoster({ src, alt, width, height, priority = false, className = "" }: EventPosterProps) {
    return (
        <div className={`card-upside overflow-hidden p-4 ${className}`.trim()}>
            <div className="overflow-hidden rounded-[1.15rem] border border-ember/15 bg-midnight/70">
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    priority={priority}
                    className="h-auto w-full"
                    sizes="(max-width: 1024px) 92vw, 32vw"
                />
            </div>
        </div>
    );
}