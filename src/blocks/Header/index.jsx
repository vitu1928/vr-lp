import { container, content, vr } from './style.module.scss';
import SubscribeInput from '@components/SubscribeInput';

export default function Header(p) {
  return (
    <header id='top' className={container}>
      
      <div className={content}>
        <div title="VR" className={vr}>VR</div>
        <SubscribeInput placeholder="you@email.com" action="When is it ready?" />

      </div>
    </header>
  );
}
