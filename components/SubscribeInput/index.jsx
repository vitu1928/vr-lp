"use client"

import { useState } from 'react';
import Button from '../Button';
import styles, { container, button, input } from './style.module.scss';

export default function SubscribeInput(p) {
  const [wppText, setWppText] = useState("https://wa.me/5511956600892?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20o%20meu%20projeto.")
  const location = p.location ?? 'body';

  return (
    <div className={[container,styles[`container-location-${location}`]].join(" ")}>
      <input 
        className={input}
        placeholder='Posso fazer um orçamento?'
        onChange={(e) => setWppText(`https://wa.me/5511956600892?text=${encodeURIComponent(e.target.value)}`) }
      />
      <a href={wppText} rel='_external' target='_blank'>
        <Button className={button} size="large">Contate-me</Button></a>
    </div>
  )
}
