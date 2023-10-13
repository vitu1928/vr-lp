import { container } from "./style.module.scss"

export default function Notice(p) {
  return (
    <section id="subscribed" className={container}>
      {p.children}
    </section>
  )
}
