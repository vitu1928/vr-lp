import Section from '@components/Section';
import benefitsJSON from './benefits.json';
import styles, { benefit, benefits, header, subtitle, title } from './style.module.scss';

export default function Benefits(p) {
  return (
    <Section id={p.id} background="alternate">
      <div className={header}>
        <h2 className={title}>Lapidando seu currículo para uma boa efetivação</h2>
        <p className={subtitle}>Start by defining the pain your customer has right now, for example: clients not paying their invoices. Then write how your solution solves this problem for your customers.</p>
      </div>

      <ul className={benefits}>
        {benefitsJSON.map((item, i) => {
          return (
            <li key={i} className={benefit}>
              <div className={styles['benefit-illustration']}/>
              <div className={styles['benefit-content']}>
                <h3 className={styles['benefit-title']}>{item.title}</h3>
                <p className={styles['benefit-text']}>{item.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
