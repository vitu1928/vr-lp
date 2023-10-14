import Section from '@components/Section';
import featuresJSON from './features.json';
import styles, { feature, features, header, subtitle, title } from './style.module.scss';

export default function Features(p) {
  return (
    <Section id="features" background="alternate">
      <div className={header}>
        <h2 className={title}>But wait, there is more</h2>
        <p className={subtitle}>Describe the full extent of your product</p>
      </div>

      <ul className={features}>
        {featuresJSON.map((item, i) => {
          return (
            <li key={i} className={feature}>
              <div className={styles['feature-illustration']} />
              <div className={styles['feature-content']}>
                <h3 className={styles['feature-title']}>{item.title}</h3>
                <p className={styles['feature-text']}>{item.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
