import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-gray-900 mb-8">
      {children}
    </h1>
  );
}
