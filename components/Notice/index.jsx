import cx from '../../utils/cx';
import styles from './style.module.scss';

export default function Notice(p) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <section id={p.id} className={className}>
      {p.children}
    </section>
  )
}
