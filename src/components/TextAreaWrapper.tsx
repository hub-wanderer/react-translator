import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function TextAreaWrapper(props: Props) {
  return <div className="textarea_wrapper">{props.children}</div>;
}
