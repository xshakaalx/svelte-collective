
import { motion } from 'framer-motion'
export default function MaterialCard({title, caption, img='/assets/placeholder.jpg'}) {
  return (
    <motion.article whileHover={{scale:1.02}} className="card overflow-hidden">
      <div className="h-44 bg-stonegray" style={{backgroundImage:`url(${img})`, backgroundSize:'cover'}} aria-hidden="true"></div>
      <div className="p-4">
        <h3 className="font-serif text-lg">{title}</h3>
        <p className="text-sm text-muted mt-2">{caption}</p>
      </div>
    </motion.article>
  )
}
