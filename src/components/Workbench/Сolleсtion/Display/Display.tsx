import { useState } from 'react';
import style from './Display.module.css';

interface Props {

};


export const Display = (props: Props) => {

  const [value, setValue] = useState<number>(0)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+e.target.value)
  }
  return <div className={style.container}>
    <input
      type="text"
      className={style.display}
      value={value}
      onChange={onChangeHandler}
    />
  </div>;
};

