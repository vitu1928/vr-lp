import Section from '../../components/Section';
import SubscribeInput from '../../components/SubscribeInput';
import { header, title, subtitle, subscribe, illustration, container } from './style.module.scss';

export default function Epilogue() {
  return (
    <Section id="epilogue" background="accent" className={container}>
      <div className={illustration}></div>
      <div className={header}>
        <h2 className={title}>Ask if your visitor wants to solve problem X today</h2>
        <div className={subtitle}>Explain how your solution will solve this problem and ask them to start a free trial, or any other low-key CTA they could take</div>
        <SubscribeInput className={subscribe} location="accent" placeholder="you@email.com" action="When is it ready?" />
      </div>
    </Section>
  );
}
