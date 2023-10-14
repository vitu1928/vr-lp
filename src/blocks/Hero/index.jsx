import Section from '@components/Section';
import SubscribeInput from '@components/SubscribeInput';
import { header, illustration, subscribe, subtitle, title, typewriter,typewriterParagraph } from './style.module.scss';

export default function Hero() {
  return (
    <Section id="hero" className={illustration}>
      <div className={header}>
        <h1 className={[title, typewriter].join(" ")}>Um currículo uníssono à aprovação</h1>
        <p className={[subtitle, typewriterParagraph].join(" ")}>Pronto em até uma semana</p>
        <SubscribeInput className={subscribe} placeholder="you@email.com" action="When is it ready?" />
      </div>
    </Section>
  );
}
