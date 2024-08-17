import styles from './picker.module.scss';
import {ChangeEvent, MouseEvent, useCallback, useEffect, useRef, useState} from "react";
import { toast } from 'react-hot-toast';

const cssColorVars = [
    '--color-primary-set-color-1',
    '--color-primary-set-color-2',
    '--color-primary-set-color-3',
    '--color-primary-set-color-4',
].reverse();

export default function ThemeColorPicker() {
    const [dirty, setDirty] = useState(false);
    const detailsRef = useRef<HTMLDetailsElement>(null);

    useEffect(() => {
        if (!detailsRef.current || dirty) return;

        const  listener = () => setDirty(true);
        detailsRef.current.addEventListener('mouseenter', listener);
        return () => document.removeEventListener('mouseenter', listener);
    }, [detailsRef.current, dirty]);

    return (
        <details className={[styles.themeColorPicker, dirty && 'dirty'].filter(Boolean).join(' ')} ref={detailsRef}>
            <summary>Выбери новый цвет градиента</summary>
            <div>{cssColorVars.map((colorVar) => <PickerColorInput key={colorVar} cssColorVar={colorVar}/>)}</div>
        </details>
    )
}

function PickerColorInput({cssColorVar}: { cssColorVar: string }) {
    const [color, setColor] = useState<string>('');

    useEffect(() => {
        // get css variable value
        const color = getComputedStyle(document.documentElement).getPropertyValue(cssColorVar);
        setColor(color);
    }, [cssColorVar]);

    useEffect(() => {
        const prevColor = getComputedStyle(document.documentElement).getPropertyValue(cssColorVar);
        if (prevColor === color) return;
        document.documentElement.style.setProperty(cssColorVar, color);
    }, [color]);

    const changeColor = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const target = e.target as HTMLInputElement;
        setColor(target.value);
    }, []);

    const copyColor = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();

        toast.promise(
            navigator.clipboard.writeText(color),
            {
                loading: 'Copying...',
                success: <span>Цвет <b style={{color}}>{color}</b> скопирован в буфер обмена</span>,
                error: <span>Цвет <b>{color}</b> не был скопирова в буфер обмена :(</span>,
            },
            {
                style: {
                    padding: '16px',
                },
                iconTheme: {
                    primary: color ?? '#713200',
                    secondary: '#FFFAEE',
                },
            }
        ).then();
    }, [color]);

    return (
        <div>
            <input type="color" value={color} onChange={changeColor}/>
            <button onClick={copyColor}>{color}</button>
        </div>
    );
}