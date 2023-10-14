import { container, content, vr } from './style.module.scss';

export default function Header(p) {
  return (
    <header id='top' className={container}>
      <div className={content}>
        <div title="VR" className={vr}>VR</div>
        
      </div>
    </header>
  );
}
