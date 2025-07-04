import type { FC, SVGProps } from "react";

export const AccessibilitySVG: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="WebAssembly"
      role="img"
      viewBox="56 56 400 400"
      fill="#000000"
      {...props}
    >
      <path
        fill="#654ff0"
        d="m159.1 270.1h24l16.5 87.2 19.8-87.2h22.5l17.9 88.3 18.9-88.3h23.5l-30.6 128.2h-23.8L230 311l-19.1 87.3h-24.3zm170.2 0h37.8l37.5 128.2h-24.7l-8.2-28.6h-43.1l-6.3 28.6h-24.1zm14.4 31.6-10.5 47h32.6l-12.1-47zM297.4 75c0 .6 0 1.3 0 2c0 22.9-18.6 41.5-41.5 41.5c-22.9 0-41.5-18.6-41.5-41.5c0-.7 0-1.4 0-2H75V437H437V75z"
      />
    </svg>
  );
};
