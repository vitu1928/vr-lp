"use client"

import styles, { container } from './style.module.scss';

export default function Button(p) {
  const size = p.size ?? 'normal';
  const type = p.type ?? 'primary';
  const location = p.location ?? 'body';

  const className = [
    container,
    styles[`container-size-${size}`],
    styles[`container-type-${type}`],
    styles[`container-location-${location}`]
  ].join(" ")

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
