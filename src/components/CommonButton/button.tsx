import styles from "./button.module.scss";
import { useMemo } from "react";
import { ButtonProps, kindToClassName } from "./types";
import Link from "next/link";

export default function CommonButton(props: ButtonProps) {
  const {
    children,
    onClick,
    link,
    disabled,
    className,
    kind = "primary",
    type = "button",
  } = props;

  const classNames = useMemo(
    () => [styles.button, className, kindToClassName[kind]].join(" "),
    [className, kind]
  );

  if (link) {
    return (
      <Link className={classNames} href={link}>
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button
      disabled={disabled}
      className={classNames}
      onClick={onClick}
      type={type}
    >
      <span>{children}</span>
    </button>
  );
}
