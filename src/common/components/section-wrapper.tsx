import { motion } from "framer-motion"

type SectionWrapperProps = {
  children: React.ReactNode;
  delay?: number;
}

function SectionWrapper({ children, delay = 0 }: SectionWrapperProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay }}
      viewport={{ once: true }}
      className="w-full max-w-6xl mx-auto px-4 py-20"
    >
      {children}
    </motion.section>
  )
}

export default SectionWrapper