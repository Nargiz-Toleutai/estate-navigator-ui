import {ReactNode} from "react";
import styles from './accordion.module.scss';


export interface AccordionProps {
    title: ReactNode;
    children: ReactNode;
}

export default function Accordion(props: AccordionProps) {
    const {title, children} = props;

    return (
        <>
            <details className={styles.accordion}>
                <summary>{title}</summary>
                {children}
            </details>
        </>
    );
}