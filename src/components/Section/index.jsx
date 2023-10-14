import styles, { container, content } from './style.module.scss';

export default function Section(p) {
  return (
    <section id={p.id} className={
      [
        container,
        styles[`container-size-normal`],
        styles[`container-background-normal`]
      ].join(" ")
    }>
      <div className={content}>
        {p.children}
      </div>
    </section>
  )
}
