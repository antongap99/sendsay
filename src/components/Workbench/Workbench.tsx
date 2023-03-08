import { Field } from './Field/Field';
import { Switch } from './Switch/Switch';
import style from './Workbench.module.css'
import { Сolleсtion } from './Сolleсtion/Сolleсtion'


interface Props{

};


export const Workbench = (props:Props) => {

  return <div className={style.container}>
    <div className={style.switchWrapper}>
    <Switch/>
    </div>
    <Сolleсtion/>
    <Field/>
  </div>;
};

