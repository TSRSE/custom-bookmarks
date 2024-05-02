import { ReactNode } from "react"

type Props = {
  children: ReactNode | ReactNode[]
}

export function TypographyH3(props: Props) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {props.children}
    </h3>
  )
}