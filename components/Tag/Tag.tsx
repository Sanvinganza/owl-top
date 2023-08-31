import * as React from 'react';
import styles from "./Tag.module.css";
import cn from 'classnames';

export interface ITagProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    size?: 's' | 'm',
    color: 'ghost' | 'gray' | 'green' | 'primary',
    href?: string,
    children: React.ReactNode
}

export function Tag ({size = 's', color = 'ghost', href, className,  children, ...props}: ITagProps): JSX.Element {
    return( 
        <div
            className={cn(styles.p, className, {
                [styles.s]: size === 's',
                [styles.m]: size === 'm',
                [styles.red]: color === 'ghost',
                [styles.gray]: color === 'gray',
                [styles.green]: color === 'green',
                [styles.primary]: color === 'primary',
                [styles.ghost]: color === 'ghost',
            })}
            {...props}
        >
        {href?
            <a href={href}>{children}</a>
            :
            <>{children}</>}
        </div>
    )
}
