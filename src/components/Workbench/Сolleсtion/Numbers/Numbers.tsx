import { generatRandomId } from '../../../../halpers/generateId';
import { Button } from '../../../ui/Button/Button';
import style from './Numbers.module.css';

interface Props{

};





export const Numbers = (props:Props) => {

  const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9','0', ',']

  return <div className={style.numbers}>
    {values.map((value) => {
      if(value !== '0'){
        return <Button key={generatRandomId()} number className='num'>{value}</Button>
      } else {
        return <Button key={generatRandomId()} number className='zero'>{value}</Button>
      }
    })}
  </div>;
};

