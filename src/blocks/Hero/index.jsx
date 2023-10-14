import Section from '@components/Section';
import SubscribeInput from '@components/SubscribeInput';
import { header, illustration, subscribe, subtitle, title, typewriter,typewriterParagraph } from './style.module.scss';

export default function Hero() {
  return (
    <Section id="hero">
      <div className={header}>
        <h1 className={[title, typewriter].join(" ")}>Headline de currículo</h1>
        <p className={[subtitle, typewriterParagraph].join(" ")}>Explain your unique solution, how it solves your customer's problem.</p>
        <SubscribeInput className={subscribe} placeholder="you@email.com" action="When is it ready?" />
      </div>
      <div className={illustration}></div>
    </Section>
  );
}
