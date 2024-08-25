import { LandingContainerProps } from "./types";
import styles from "./landing-container.module.scss";

export default function LandingContainer(props: LandingContainerProps) {
  const { children } = props;

  return <div className={styles.container}>{children}</div>;
}
