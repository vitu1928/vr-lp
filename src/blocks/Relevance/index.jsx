import Section from '@components/Section';
import { header, title, list } from './style.module.scss';

export default function Relevance(p) {
  return (
    <Section id={p.id} background="alternate">
      <div className={header}>
        <h2 className={title}><span>Porque você não é aprovado(a) em processos seletivos por conta do seu currículo?</span></h2>

      </div>
      <ul className={list}>
        <span>
          FALTA
        </span>
        <li>
          {/* <h3>Falta</h3> */}
          <h3>Relevância</h3>
          <cite>Currículo sem destaque para experiências relevantes pode fazer com que o empregador veja o candidato como inadequado para a vaga.</cite>
        </li>

        <li>
          {/* <h3>Falta</h3> */}
          <h3>Gramática</h3>
          <cite>Erros gramaticais e formatação inadequada no currículo afetam a primeira impressão, podendo prejudicar a decisão do empregador.</cite>
        </li>

        <li>
          {/* <h3>Falta</h3> */}
          <h3>Personalização</h3>
          <cite>Currículos genéricos podem não atrair a atenção do empregador, que interpreta isso como falta de interesse genuíno na posição.</cite>
        </li>
        <span>
          FALTA
        </span>
      </ul>
    </Section>
  );
}
