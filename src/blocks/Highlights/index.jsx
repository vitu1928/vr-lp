import Section from '@components/Section';
import highlightsJSON from './highlights.json';
import styles, { header, highlight, highlights, subtitle, title } from './style.module.scss';

export default function Highlights(p) {
  return (
    <Section id={p.id} background={p.background}>
      <div className={header}>
        <h2 className={title}>Deixe seu Currículo Falar por Você</h2>
        <p className={subtitle}>Design Personalizado</p>
      </div>

      <ul className={highlights}>
        {highlightsJSON.map((item, i) => {
          return (
            <li key={i} className={highlight}>
              <div className={styles['highlight-illustration']} style={{
                backgroundImage: `url(${item.illustration})`,
                backgroundPosition: item.position,
              }}/>
              <div className={styles['highlight-content']}>
                <h3 className={styles['highlight-title']}>{item.title}</h3>
                <p className={styles['highlight-text']}>{item.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
