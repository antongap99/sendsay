import style from './Button.module.css';
import { ReactNode } from 'react';
import cn from 'classnames'


interface Props {
  children: ReactNode
  operation?: boolean
  number?: boolean
  bg?: ''
  className:string
};


export const Button = ({ children, operation, number, className }: Props) => {

  return <button
      className={cn(
        style.btn,
        { [style.operation]: operation,
          [style.number]: number,
        },
        style[className]
        )}
    >
    {children}
  </button>;
};

