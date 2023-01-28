import * as React from "react";
import { SVGProps } from "react";
const SvgShare2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="https://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="share-2_svg__feather share-2_svg__feather-share-2"
    {...props}
  >
    <circle cx={18} cy={5} r={3} />
    <circle cx={6} cy={12} r={3} />
    <circle cx={18} cy={19} r={3} />
    <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98" />
  </svg>
);
export default SvgShare2;
