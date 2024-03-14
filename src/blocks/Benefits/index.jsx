import Section from '@components/Section';
import styles, { benefit, benefits, header, subtitle, title } from './style.module.scss';
import Image from 'next/image';
import VictorHugo from "../../../public/Images/Curriculums/1.jpeg"
import Another from "../../../public/Images/Curriculums/3.webp"

export default function Benefits(p) {
  return (
    <Section id={p.id} background="alternate">
      <div className={header}>
        <h2 className={title}><span>O que podemos fazer por você?</span></h2>
        {/* <p className={subtitle}>Start by defining the pain your customer has right now, for example: clients not paying their invoices. Then write how your solution solves this problem for your customers.</p> */}
      </div>

      <ul className={benefits}>
        <li key={1} className={benefit}>
          <Image
            src={VictorHugo}
            objectFit="contain"
            layout="responsive"
          />
          <div className={styles['benefit-content']}>
            <h3 className={styles['benefit-title']}>Destaque suas Conquistas</h3>
            <p className={styles['benefit-text']}>Transformamos suas experiências em narrativas que impressionam. Suas realizações são destacadas, não enterradas em uma lista de tarefas.</p>
          </div>
        </li>
        <li key={2} className={benefit}>

          <Image
            src={Another}
            objectFit="contain"
            layout="responsive"
          />
          <div className={styles['benefit-content']}>
            <h3 className={styles['benefit-title']}>Layout Profissional</h3>
            <p className={styles['benefit-text']}>Garantimos um design limpo e atraente que chama a atenção e torna a leitura fácil e agradável</p>
          </div>
        </li>
      </ul>
    </Section>
  );
}
