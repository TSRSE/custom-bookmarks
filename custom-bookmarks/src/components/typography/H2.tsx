import { ReactNode } from 'react';

type Props = {
  children: ReactNode | ReactNode[];
};

export function TypographyH2(props: Props) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {props.children}
    </h2>
  );
}
