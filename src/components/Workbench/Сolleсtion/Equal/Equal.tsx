import { Button } from '../../../ui/Button/Button';
import style from './Equal.module.css';

interface Props {

};


export const Equal = (props: Props) => {

  return (
    <div className={style.equel}>
      <Button className='equel'>=</Button>
    </div>
  );
};

