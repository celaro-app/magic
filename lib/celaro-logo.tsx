import type { SVGProps } from "react";

export function CelaroLogo({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="18"
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M14.9189 0C19.7591 7.10489e-05 23.6829 3.92382 23.6829 8.76409C23.6829 13.6044 19.7592 17.5283 14.9189 17.5284C12.1962 17.5284 9.76356 16.2868 8.15605 14.3391H3.38846L4.51617 13.308H7.4229L7.42266 13.3075H17.851L19.0433 11.7931H6.69228C6.58886 11.5124 6.50007 11.2246 6.4254 10.9311H0L1.12771 9.90011H6.22764C6.22729 9.89741 6.22684 9.89474 6.22648 9.89204H20.4931L21.6854 8.37761H6.16334C6.18047 7.98345 6.22376 7.59602 6.29126 7.21705H0.771778L1.89949 6.18601H7.3771L7.37918 6.18648H19.4943L20.6865 4.67205H9.1834L9.18361 4.67229H4.70467L5.8324 3.64125H7.80775C9.39929 1.43568 11.9912 0 14.9189 0Z"
        fill="url(#paint0_linear_4797_898)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4797_898"
          x1="10.3688"
          y1="17.6393"
          x2="10.3688"
          y2="-3.97508"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
