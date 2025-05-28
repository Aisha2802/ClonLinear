import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { svgComponents } from "~/components/Issue19-SVG";

export function SVGContainer({ className, SVGClassName }: { className?: string; SVGClassName?: string }) {
    const entries = Object.entries(svgComponents);

    // Duplicate entries for infinite scroll
    const scrollItems = [...entries, ...entries];

    return (
        <>
            <div
                className={twMerge(
                    clsx(
                        className,
                        `scroller md:w-[1000px] overflow-hidden flex items-center relative group`
                    )
                )}
            >
                <div className="whitespace-nowrap flex animate-scroll space-x-8 transition duration-300 group-hover:blur-sm">
                    {scrollItems.map(([name, SVGComponent], i) => (
                        <div
                            key={`${name}-${i}`}
                            className={twMerge(
                                clsx(SVGClassName, `w-40 h-auto inline-block shrink-0`)
                            )}
                        >
                            <SVGComponent />
                        </div>
                    ))}
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
                    <button className="opacity-0 flex items-center justify-center group-hover:opacity-100 transition duration-300 bg-neutral-800 px-5 py-1 rounded-full shadow-md text-white">
                        <span className="text-sm font-medium">Meet our customers</span>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="#9c9da1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z" />
                        </svg>
                    </button>
                </div>
            </div>

            <style>
                {`
          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .scroller {
            mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
          }

          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
        `}
            </style>
        </>
    );
}

export default function Issue19({ className }: { className?: string }) {
    return (
        <div
            className={twMerge(
                clsx("flex flex-col gap-4 items-center justify-center w-full h-full", className)
            )}
        >
            <span className={"text-xs text-gray-400 font-medium"}>Powering the world’s best product teams</span>
            <SVGContainer />
        </div>
    );
}