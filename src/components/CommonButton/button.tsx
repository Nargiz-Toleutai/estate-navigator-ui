import styles from './button.module.scss';
import {useMemo} from "react";

const enum ButtonKind {
    Primary = 'primary',
    Secondary = 'secondary',
}

interface ButtonPropsBase {
    children: string;
    className?: string;
    kind?: ButtonKind | `${ButtonKind}`;
    disabled?: boolean;
    onClick?: () => void;
    link?: string
    type?: 'submit';
}


type ButtonProps = ButtonPropsBase & (
    { link: string; onClick?: never; disabled?: never; type?: never } |
    { type: 'submit'; disabled?: boolean; onClick?: never; link?: never } |
    { onClick: () => void; disabled?: boolean; link?: never; type?: never });

const kindToClassName = {
    [ButtonKind.Primary]: styles.buttonPrimary,
    [ButtonKind.Secondary]: styles.buttonSecondary,
}

export default function CommonButton(props: ButtonProps) {
    const {children, onClick, link, disabled, className, kind = "primary", type = 'button'} = props;

    const classNames = useMemo(() => [
        styles.button,
        className,
        kindToClassName[kind],
    ].join(' '), [className, kind]);

    if (link) {
        return (
            <a
                className={classNames}
                href={link}
            >
                <span>
                    {children}
                </span>
            </a>
        );
    }

    return (
        <button
            disabled={disabled}
            className={classNames}
            onClick={onClick}
            type={type}
        >
            <span>
                {children}
            </span>
        </button>
    );
}