import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight text-gray-900 mb-8">
      {children}
    </h1>
  );
}
