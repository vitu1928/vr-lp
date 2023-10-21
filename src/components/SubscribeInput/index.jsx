"use client"

import { useState } from 'react';
import Button from '../Button';
import styles, { container, button, input } from './style.module.scss';

export default function SubscribeInput(p) {
  const [wppText, setWppText] = useState(`https://wa.me/5511956600892?text=${encodeURIComponent("Obtenha Seu Currículo profissional Agora")}`)
  const location = p.location ?? 'body';
  
  return (
    <div className={[container, styles[`container-location-${location}`]].join(" ")}>
      <a href={wppText} rel='_external' target='_blank'>
        <Button className={button} size="large">Contate-nos</Button></a>
    </div>
  )
}
