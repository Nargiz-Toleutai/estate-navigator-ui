import { ContainerProps } from "./types";
import styles from "./container.module.scss";
import { processClassNames } from "@/utils";

export default function Container(props: ContainerProps) {
  const { children, className } = props;

  return (
    <div className={processClassNames(styles.container, className)}>
      {children}
    </div>
  );
}
