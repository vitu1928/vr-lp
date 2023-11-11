import Section from '@components/Section';
import benefitsJSON from './benefits.json';
import styles, { benefit, benefits, header, subtitle, title } from './style.module.scss';

export default function Benefits(p) {
  return (
    <Section id={p.id} background="alternate">
      <div className={header}>
        <h2 className={title}><span>O que podemos fazer por você?</span></h2>
        <p className={subtitle}>Start by defining the pain your customer has right now, for example: clients not paying their invoices. Then write how your solution solves this problem for your customers.</p>
      </div>

      <ul className={benefits}>
        {benefitsJSON.map((item, i) => {
          return (
            <li key={i} className={benefit}>
              <div className={styles['benefit-illustration']} style={{
                backgroundImage: `url(${item.illustration})`,
                backgroundPosition: item.position,
              }}/>
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
