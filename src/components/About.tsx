import { motion } from 'framer-motion'
import { Code2, Palette, Lightbulb, Rocket } from 'lucide-react'
import { skills } from '@/data/projects'

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-documented code',
  },
  {
    icon: Palette,
    title: 'Design Systems',
    description: 'Creating consistent and beautiful user interfaces',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Exploring cutting-edge technologies and AI integrations',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing for speed, accessibility, and SEO',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
              {"I'm"} a web developer passionate about building modern, user-friendly applications. 
I work with React for the frontend and have experience developing backend APIs 
using Node.js and Express. I'm always learning and looking for opportunities 
to grow and contribute to real-world projects.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16"
          >
            {highlights.map((highlight) => (
              <motion.div
                key={highlight.title}
                variants={itemVariants}
                className="group p-6 rounded-2xl glass hover:bg-card transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <highlight.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{highlight.title}</h3>
                    <p className="text-muted-foreground text-sm">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-xl font-semibold mb-6">Technologies I work with</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <motion.span
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-xl glass text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
