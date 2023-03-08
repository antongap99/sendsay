
import { Display } from './Display/Display';
import { Equal } from './Equal/Equal';
import { Numbers } from './Numbers/Numbers';
import { Operations } from './Operations/Operations';
import style from './Сolleсtion.module.css';

interface Props{

};


export const Сolleсtion = (props:Props) => {

  return <div className = {style.container}>
    <Display/>
    <Operations/>
    <Numbers/>
    <Equal/>
  </div>;
};

