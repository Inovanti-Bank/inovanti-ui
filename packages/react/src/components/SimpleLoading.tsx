import { SpinnerGap } from "phosphor-react";

type SizeType = 4 | 6 | 8 | 12 | 16 | 24 | 32 | 40 | 64

export interface LoadingProps {
  size?: SizeType;
}

export function Loading({ size = 6 }: LoadingProps) {

    const sizeMapper = {
        4: 'h-4 w-4',
        6: 'h-6 w-6',
        8: 'h-8 w-8',
        12: 'h-12 w-12',
        16: 'h-16 w-16',
        20: 'h-20 w-20',
        24: 'h-24 w-24',
        32: 'h-32 w-32',
        40: 'h-40 w-40',
        64: 'h-64 w-64',
    } as const

  return (
      <SpinnerGap className={`${sizeMapper[size]} animate-spin -mt-1`} />
  );
}