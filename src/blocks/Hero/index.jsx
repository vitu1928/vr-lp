import Section from '@components/Section';
import SubscribeInput from '@components/SubscribeInput';
import { header, illustration, subscribe, subtitle, title } from './style.module.scss';

export default function Hero() {
  return (
    <Section id="hero" className={illustration}>
      <div className={header}>
        <h1 className={title}>Aumente a taxa de aprovação em processos seletivos com um currículo personalizado e profissional</h1>
        {/* <p className={[subtitle, typewriterParagraph].join(" ")}>Pronto em até uma semana</p> */}
        <SubscribeInput placeholder="you@email.com" action="When is it ready?" />
      </div>
    </Section>
  );
}
