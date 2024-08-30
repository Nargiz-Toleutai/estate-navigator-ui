import { processClassNames } from "@/utils";
import styles from "./loader.module.scss";
import { LoaderProps } from "./types";

const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={processClassNames(styles.loader, className)}>
      <div className={styles.pin}></div>
      <span className={styles.beacon}></span>
    </div>
  );
};

export default Loader;
