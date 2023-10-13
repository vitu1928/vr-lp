import Section from '../../components/Section';
import SubscribeInput from '../../components/SubscribeInput';
import { header, subscribe, illustration, subtitle, title } from './style.module.scss';

export default function Hero() {
  return (
    <Section id="<title>">
      <div className={header}>
        <h1 className={title}>Clear headline that explains your product’s benefit</h1>
        <p className={subtitle}>Explain your unique solution, how it solves your customer's problem.</p>
        <SubscribeInput className={subscribe} placeholder="you@email.com" action="When is it ready?"/>
      </div>
      <div className={illustration}></div>
    </Section>
  );
}
