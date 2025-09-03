
import Link from 'next/link'
export default function JournalCard({title, excerpt}) {
  return (
    <article className="card">
      <div className="h-40 bg-stonegray"></div>
      <div className="p-4">
        <h4 className="font-serif text-lg">{title}</h4>
        <p className="text-sm text-muted mt-2">{excerpt}</p>
        <div className="mt-4"><Link href="/contact"><a className="btn">Work with us →</a></Link></div>
      </div>
    </article>
  )
}
