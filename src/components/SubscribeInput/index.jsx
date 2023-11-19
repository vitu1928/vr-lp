"use client"

import Button from '../Button';
import styles, { container, button } from './style.module.scss';

export default function SubscribeInput(p) {
  const location = p.location ?? 'body';

  return (
    <abbr title="Botão para whatsapp">
      <div className={[container, styles[`container-location-${location}`]].join(" ")}>
        <a href={
          `https://wa.me/5511956600892?text=${encodeURIComponent("Obtenha Seu Currículo profissional Agora")}`
        } rel='_external' target='_blank' aria-label="Whatsapp de VR">
          <Button className={button} size="large">
            Contate-nos
          </Button>
        </a>
      </div>
    </abbr>
  )
}
