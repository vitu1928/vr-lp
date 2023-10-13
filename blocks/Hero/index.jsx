import Section from '../../components/Section';
import SubscribeInput from '../../components/SubscribeInput';
import cx from '../../utils/cx';
import styles from './style.module.scss';

export default function Hero(p) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <Section id={p.id} className={className}>
      <div className={styles.header}>
        <h1 className={styles.title}>{p.title}</h1>
        <p className={styles.subtitle}>{p.subtitle}</p>
        {p.subscribeAction && <SubscribeInput className={styles.subscribe} placeholder={p.subscribePlaceholder} action={p.subscribeAction}/>}
      </div>
      <div className={styles.illustration}/>
    </Section>
  );
}
