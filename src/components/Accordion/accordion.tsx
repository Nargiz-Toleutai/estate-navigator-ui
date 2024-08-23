import { ReactNode } from "react";
import styles from "./accordion.module.scss";

export interface AccordionProps {
  title: ReactNode;
  children: ReactNode;
  name: string;
}

export default function Accordion(props: AccordionProps) {
  const { title, children, name } = props;

  return (
    <>
      <details className={styles.accordion} name={name}>
        <summary>{title}</summary>
        {children}
      </details>
    </>
  );
}
