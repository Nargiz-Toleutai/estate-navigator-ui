import styles from "./button.module.scss";

export const enum ButtonKind {
  Primary = "primary",
  Secondary = "secondary",
}

export interface ButtonPropsBase {
  children: string;
  className?: string;
  kind?: ButtonKind | `${ButtonKind}`;
  disabled?: boolean;
  onClick?: () => void;
  link?: string;
  type?: "submit";
}

export type ButtonProps = ButtonPropsBase &
  (
    | { link: string; onClick?: never; disabled?: never; type?: never }
    | { type: "submit"; disabled?: boolean; onClick?: never; link?: never }
    | { onClick: () => void; disabled?: boolean; link?: never; type?: never }
  );

export const kindToClassName = {
  [ButtonKind.Primary]: styles.buttonPrimary,
  [ButtonKind.Secondary]: styles.buttonSecondary,
};
