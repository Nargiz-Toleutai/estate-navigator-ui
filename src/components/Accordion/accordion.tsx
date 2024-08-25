import { ReactNode } from "react";
import styles from "./accordion.module.scss";

export interface AccordionProps {
  title: ReactNode;
  children: ReactNode;
  name: string;
  className?: string;
}

export default function Accordion(props: AccordionProps) {
  const { title, children, name, className } = props;
  const classNames = [className, styles.accordion].filter(Boolean).join(" ");
  return (
    <>
      <details className={classNames} name={name}>
        <summary>{title}</summary>
        {children}
      </details>
    </>
  );
}
