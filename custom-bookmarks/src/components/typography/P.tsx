import { ReactNode } from 'react';

type Props = {
  children: ReactNode | ReactNode[];
};

export function TypographyP(props: Props) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{props.children}</p>;
}
