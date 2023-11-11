import Section from '@components/Section';
import { header, illustration, subscribe, subtitle, title } from './style.module.scss';

export default function Hero() {
  return (
    <Section id="hero" className={illustration}>
      <div className={header}>
        <h1 className={title}>Currículo Personalizado e profissional em 48h</h1>
        {/* <p className={[subtitle, typewriterParagraph].join(" ")}>Pronto em até uma semana</p> */}
      </div>
    </Section>
  );
}
