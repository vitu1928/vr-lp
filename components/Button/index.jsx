import cx from '../../utils/cx';
import styles from './style.module.scss';

export default function Button(p) {
  const size = p.size ?? 'normal';
  const type = p.type ?? 'primary';
  const location = p.location ?? 'body';

  const className = cx(
    styles.container,
    styles[`container-size-${size}`],
    styles[`container-type-${type}`],
    styles[`container-location-${location}`],
    p.className,
  );

  if (p.href) {
    return (
      <a className={className} href={p.href} onClick={p.onClick}>
        {p.children}
      </a>
    )
  }

  return (
    <button className={className} onClick={p.onClick}>
      {p.children}
    </button>
  )
}
