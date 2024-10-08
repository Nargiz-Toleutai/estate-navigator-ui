import Image from "next/image";
import styles from "./error.module.scss";
import { useRouter } from "next/router";
import CommonButton from "../CommonButton/button";
import { ErrorProps } from "./types";
import { processClassNames } from "@/utils";

const ErrorComponent = ({ className }: ErrorProps) => {
  const router = useRouter();
  const handleRetry = () => {
    router.reload();
  };
  return (
    <div className={processClassNames(styles.error, className)}>
      <Image
        src="/media/error.png"
        alt="Error"
        width={300}
        height={300}
        className={styles.errorImage}
      />
      <h2>Something went wrong</h2>
      <p>
        We encountered an issue while processing your request. Please try again
        later.
      </p>

      <CommonButton className={styles.retryButton} onClick={handleRetry}>
        Retry
      </CommonButton>

      <p>If the problem persists, please contact our support team.</p>
    </div>
  );
};

export default ErrorComponent;
