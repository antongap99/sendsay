import { generatRandomId } from '../../../../halpers/generateId';
import { Button } from '../../../ui/Button/Button';
import style from './Operations.module.css';

interface Props{

};


export const Operations = (props: Props) => {

  const values = ['/', 'х', '-', '+']

  return <div className={style.operations}>
    {values.map((value) => {
        return <Button key={generatRandomId()} operation className='num'>{value}</Button>
    })}
  </div>;
};