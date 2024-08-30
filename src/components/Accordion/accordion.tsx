import { ReactNode } from "react";
import styles from "./accordion.module.scss";
import { processClassNames } from "@/utils";

export interface AccordionProps {
  title: ReactNode;
  children: ReactNode;
  name: string;
  className?: string;
}

export default function Accordion(props: AccordionProps) {
  const { title, children, name, className } = props;
  return (
    <>
      <details
        className={processClassNames(styles.accordion, className)}
        name={name}
      >
        <summary>{title}</summary>
        {children}
      </details>
    </>
  );
}
