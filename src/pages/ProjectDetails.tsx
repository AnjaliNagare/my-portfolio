import { useEffect, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  ChevronLeft,
  Sparkles,
  Bug,
  Zap,
  Brain,
  LineChart,
  Wallet,
  Bell,
  Shield,
  Glasses,
  Heart,
  CreditCard,
  Truck,
  Activity,
  Apple,
  Moon,
  Trophy,
  Video,
  FileText,
  CheckSquare,
  MessageSquare,
} from 'lucide-react'
import { projects } from '@/data/projects'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const iconMap: Record<string, typeof Sparkles> = {
  Sparkles,
  Bug,
  Zap,
  Brain,
  LineChart,
  Wallet,
  Bell,
  Shield,
  Glasses,
  Heart,
  CreditCard,
  Truck,
  Activity,
  Apple,
  Moon,
  Trophy,
  Video,
  FileText,
  CheckSquare,
  MessageSquare,
}

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

export function ProjectDetails() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const swiperRef = useRef<SwiperType | null>(null)

  const project = projects.find((p) => p.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link
            to="/"
            className="text-primary hover:underline"
          >
            Go back home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Back Button */}
          <motion.div variants={itemVariants} className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Back to Projects</span>
            </button>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            variants={itemVariants}
            className="relative rounded-3xl overflow-hidden mb-12"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">{project.title}</h1>
              <p className="text-lg text-muted-foreground">{project.tagline}</p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Problem & Solution */}
              <motion.div variants={itemVariants} className="mb-12">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl glass">
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                      The Problem
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl glass">
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                      The Solution
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Features */}
              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((feature) => {
                    const IconComponent = iconMap[feature.icon] || Sparkles
                    return (
                      <div
                        key={feature.title}
                        className="flex items-start gap-4 p-4 rounded-2xl glass"
                      >
                        <div className="p-2 rounded-xl bg-primary/10 text-primary">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>

              {/* Screenshots Gallery */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Screenshots</h2>
                  <div className="flex gap-2">
                    <button
                      onClick={() => swiperRef.current?.slidePrev()}
                      className="p-2 rounded-xl glass hover:bg-secondary transition-colors"
                      aria-label="Previous screenshot"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => swiperRef.current?.slideNext()}
                      className="p-2 rounded-xl glass hover:bg-secondary transition-colors"
                      aria-label="Next screenshot"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <Swiper
                  modules={[Navigation, Pagination]}
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  spaceBetween={16}
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet !bg-muted-foreground/30 !w-2 !h-2',
                    bulletActiveClass: '!bg-primary',
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1.5,
                    },
                  }}
                  className="!pb-10"
                >
                  {project.screenshots.map((screenshot, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={screenshot}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-64 object-cover rounded-2xl"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Actions */}
                <div className="p-6 rounded-2xl glass">
                  <h3 className="font-semibold mb-4">Project Links</h3>
                  <div className="flex flex-col gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl glass font-medium hover:bg-secondary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="p-6 rounded-2xl glass">
                  <h3 className="font-semibold mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Back to Projects */}
                <Link
                  to="/#projects"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border border-border font-medium hover:bg-secondary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to All Projects
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
