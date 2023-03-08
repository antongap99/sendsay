import style from './Field.module.css';
import svg from './icons/img.svg'
import { useState } from 'react';

interface Props {

};


export const Field = (props: Props) => {


  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  return <div className={style.container}>
    {isEmpty ? (
      <div className={style.defualtContainer}>
        <div className={style.defualtText}>
          <img className={style.img} src={svg} alt="drag" />
          <h3 className={style.defualtTitle}>Перетащите сюда</h3>
          <p className={style.defualtSubTitle}>любой элемент из левой панели</p>
        </div>
      </div>
    ) : (
      <p>не пусто</p>
    )
    }
  </div>;
};

