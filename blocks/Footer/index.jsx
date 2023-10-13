import Button from '../../components/Button';
import cx from '../../utils/cx';
import styles from './style.module.scss';

export default function Footer(p) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <footer id={p.id} className={className}>
      <div className={styles.content}>
        <div title={p.title}>{p.title}</div>
        <div>&copy; {(new Date).getFullYear()}, {p.title}</div>
        {p.action && <Button href={p.actionHref} onClick={p.onActionClick} type="secondary" location="accent">{p.action}</Button>}
      </div>
    </footer>
  );
}
