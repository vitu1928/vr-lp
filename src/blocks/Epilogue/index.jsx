import Section from '@components/Section';
import SubscribeInput from '@components/SubscribeInput';
import { container, header, illustration, subscribe, subtitle, title } from './style.module.scss';
import professionalDesign from '../../../public/Images/professionalDesign.png';
import Image from 'next/image';

export default function Epilogue() {
  return (
    <Section id="epilogue" background="accent" className={container}>
      <div className={illustration}>
        {/* <Image src={professionalDesign} alt="Professional Design" layout='responsive' width={50} height={50}/> */}
      </div>
      <div className={header}>
        <h2 className={title}>Otimizado para o Sucesso</h2>
        <div className={subtitle}>Comece hoje a investir em seu sucesso profissional. Vamos criar um currículo que o destaque, abrindo portas e criando oportunidades. Sua carreira merece isso. Você merece isso.</div>
        <SubscribeInput className={subscribe} location="accent" placeholder="you@email.com" action="When is it ready?" />
      </div>
    </Section>
  );
}
