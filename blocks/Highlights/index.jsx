import Section from '../../components/Section';
import styles, { header, title, subtitle, highlights, highlight } from './style.module.scss';
import highlightsJSON from './highlights.json';

export default function Highlights(p) {
  return (
    <Section id={p.id} background={p.background}>
      <div className={header}>
        <h2 className={title}>Highlights of your product</h2>
        <p className={subtitle}>Explain why your solution deserves attention</p>
      </div>

      <ul className={highlights}>
        {highlightsJSON.map((item, i) => {
          return (
            <li key={i} className={highlight}>
              <div className={styles['highlight-illustration']}/>
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
