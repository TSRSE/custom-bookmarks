import { ReactNode } from 'react';

type Props = {
  children: ReactNode | ReactNode[];
};

export function TypographyH4(props: Props) {
  return <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{props.children}</h4>;
}
