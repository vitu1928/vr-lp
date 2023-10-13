import cx from '../../utils/cx';
import styles from './style.module.scss';

export default function Section(p) {
  const size = p.size ?? 'normal';
  const background = p.background ?? 'normal';

  const className = cx(
    styles.container,
    styles[`container-size-${size}`],
    styles[`container-background-${background}`],
    p.className,
  );

  return (
    <section id={p.id} className={className}>
      <div className={styles.content}>
        {p.children}
      </div>
    </section>
  )
}
