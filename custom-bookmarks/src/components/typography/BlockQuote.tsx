import { ReactNode } from 'react';

type Props = {
  children: ReactNode | ReactNode[];
};

export function TypographyBlockquote(props: Props) {
  return <blockquote className="mt-6 border-l-2 pl-6 italic">{props.children}</blockquote>;
}
