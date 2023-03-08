import style from './Switch.module.css';
import eye from './icons/eye.svg'
import tag from './icons/selector.svg'
import cn from 'classnames'

interface Props {

};


export const Switch = (props: Props) => {




  return (
    <div className={style.container}>
      <div className={cn(style.toggle, { [style.active]: false })}>
        <img src={eye} alt="runtime" />
        <p className={style.runtimeText}>Runtime</p>
      </div>
      <div className={cn(style.toggle, { [style.active]: true})}>
        <img src={tag} alt="constructor" />
        <p className={style.constrctrText}>Constructor</p>
      </div>
    </div>
  );
};

