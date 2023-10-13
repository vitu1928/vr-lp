import { useState } from 'react';
import cx from '../../utils/cx';
import Button from '../Button';
import styles from './style.module.scss';

export default function SubscribeInput(p) {
  const [wppText, setWppText] = useState("https://wa.me/5511956600892?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20o%20meu%20projeto.")
  const action =  'Contate-me';
  const placeholder = 'Posso fazer um orçamento?';
  const location = p.location ?? 'body';

  const className = cx(
    styles.container,
    styles[`container-location-${location}`],
    p.className,
  );

  return (
    <div className={className}>
      <input className={styles.input} placeholder={placeholder} onChange={(e) => setWppText(`https://wa.me/5511956600892?text=${encodeURIComponent(e.target.value)}`) }/>
      <a href={wppText} rel='_external' target='_blank'>
        <Button className={styles.button} size="large">{action}</Button></a>
    </div>
  )
}
