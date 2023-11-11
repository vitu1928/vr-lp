import Section from '@components/Section';
import SubscribeInput from '@components/SubscribeInput';
import { container, header, illustration, subscribe, subtitle, title } from './style.module.scss';

export default function Epilogue() {
  return (
    <Section id="epilogue" background="accent" className={container}>
      <div className={illustration} />
      <div className={header}>
        <h2 className={title}><span>Otimizado para o Sucesso</span></h2>
        <div className={subtitle}>Comece hoje a investir em seu sucesso profissional. Vamos criar um currículo que o destaque, abrindo portas e criando oportunidades. Sua carreira merece isso. Você merece isso.</div>
        <SubscribeInput className={subscribe} location="accent" placeholder="you@email.com" action="When is it ready?" />
      </div>
    </Section>
  );
}
