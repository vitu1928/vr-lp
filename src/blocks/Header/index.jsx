import Button from '@components/Button';
import { container, content, vr} from './style.module.scss';

export default function Header(p) {
  return (
    <header id='top' className={container}>
      <div className={content}>
        <div title="VR" className={vr}>VR</div>
        {p.action && <Button href={p.actionHref} onClick={p.onActionClick} type="secondary">{p.action}</Button>}
      </div>
    </header>
  );
}
