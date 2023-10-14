import Button from '@components/Button';
import Section from '@components/Section';
import { content, header, illustration, subtitle, title } from './style.module.scss';

export default function Break(p) {
  return (
    <Section id={p.id} size="narrow" background="accent">
      <div className={content}>
        <div className={illustration}/>
        <div className={header}>
          <h1 className={title}>Risk Reduction: Try Product free for 14 days</h1>
          <p className={subtitle}>This is an in-betwen CTA for visitors that already got convinced.</p>
        </div>
        {p.action && <Button href={p.actionHref} size="large" location="accent">When is it ready</Button>}
      </div>
    </Section>
  );
}
// onClick={window.scrollTo({top:99999, behavior:'smooth'})}