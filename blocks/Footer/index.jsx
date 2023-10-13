"use client"

import Button from '../../components/Button';
import { content } from './style.module.scss';

export default function Footer(p) {
  return (
    <footer id={p.id} >
      <div className={content}>
        <div title={p.title}>{p.title}</div>
        <div>&copy; {(new Date).getFullYear()}, {p.title}</div>
        {p.action && <Button href={p.actionHref} onClick={p.onActionClick} type="secondary" location="accent">{p.action}</Button>}
      </div>
    </footer>
  );
}
