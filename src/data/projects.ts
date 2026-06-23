export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  image: string
  problem: string
  solution: string
  features: { icon: string; title: string; description: string }[]
  techStack: string[]
  screenshots: string[]
  liveUrl: string
  githubUrl: string
}

export const projects: Project[] = [
  {
    id: 'mind-mirror',
    title: 'Mind Mirror',
    tagline: 'Mental Health Journal',
    description: 'Mind Mirror is a digital journaling platform that helps users reflect on emotions, track moods, and build healthier mental habits. It encourages self-awareness through daily entries, future letters, and accessible mental health resources.',
    image: '/Mindmirror.png',
    problem: 'Many people struggle to consistently track their mental health and emotions due to lack of simple and engaging tools.',
    solution:  'Built an intuitive journaling platform that allows users to log moods, write reflections, and schedule future letters, helping them build self-awareness and emotional consistency.',
    
    features: [
      {
        icon: 'Smile',
        title: 'Mood Tracking',
        description: 'Track daily emotions using simple and interactive UI elements',
      },
      {
        icon: 'BookOpen',
        title: 'Daily Journaling',
        description: 'Write and save personal reflections securely',
      },
      {
        icon: 'Clock',
        title: 'Future Letters',
        description: 'Schedule messages to your future self',
      },
      {
        icon: 'Heart',
        title: 'Wellness Focus',
        description: 'Encourages positive mental health habits',
      },
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Bootstrap'],
    screenshots: [
      '/Mindmirror2.png',
      '/Mindmirror.png',
      '/Mindmirror1.png',
      '/Mindmirror3.png',
    ],
    liveUrl: 'AppDemo.mp4',
    githubUrl: 'https://github.com/AnjaliNagare/MindMirror',
  },
  {
    id: 'uxbuddy',
    title: 'UX Buddy – AI-Powered UX Writing Assistant',
    tagline: 'Generate better UX copy with AI assistance',
    description:
      'An AI-powered tool that helps designers and developers generate UX microcopy, error messages, and user-friendly content.',

    image: '/uxbuddy2.png',

    problem:
      'Writing effective UX copy is time-consuming and challenging, especially for developers without UX writing expertise.',

    solution:
      'Developed an AI-powered assistant that generates contextual UX copy, improving user experience and saving time.',

    features: [
      {
        icon: 'MessageSquare',
        title: 'AI Copy Generation',
        description: 'Generate UX microcopy instantly using AI',
      },
      {
        icon: 'AlertCircle',
        title: 'Error Messages',
        description: 'Create clear and user-friendly error messages',
      },
      {
        icon: 'Accessibility',
        title: 'Accessibility Support',
        description: 'Suggest inclusive and accessible UX text',
      },
      {
        icon: 'Zap',
        title: 'Quick Suggestions',
        description: 'Get instant suggestions for UI text improvements',
      },
    ],

    techStack: ['React', 'ExpressJs', 'NodeJs', 'Local AI with Ollama'],

    screenshots: [
      '/Uxbuddy.png',
      '/uxbuddy2.png',
    ],

    liveUrl: '', 
    githubUrl: 'https://github.com/AnjaliNagare/ux-buddy',
  },
  
  {
    id: 'portfolio',
    title: 'Personal Portfolio Website',
    tagline: 'A modern developer portfolio showcasing my work',
    description:
      'A responsive and modern portfolio website designed to showcase my projects, skills, and experience in an engaging and visually appealing way.',

    image: '/portfolio.png',

    problem:
      'Developers need a professional online presence to effectively showcase their work and stand out to recruiters.',

    solution:
      'Designed and developed a clean, responsive portfolio with project showcases, detailed pages, and smooth navigation to present my work effectively.',

    features: [
      {
        icon: 'Layout',
        title: 'Modern UI',
        description: 'Clean and visually appealing design',
      },
      {
        icon: 'Layers',
        title: 'Project Showcase',
        description: 'Detailed project pages with structured information',
      },
      {
        icon: 'Smartphone',
        title: 'Responsive Design',
        description: 'Fully optimized for mobile and desktop',
      },
      {
        icon: 'Zap',
        title: 'Fast Performance',
        description: 'Optimized for speed and smooth experience',
      },
    ],

    techStack: ['React', 'Tailwind CSS', 'Vite', 'React Router'],

    screenshots: [
      '/portfolio.png',
      '/portfolio1.png',
      '/portfolio2.png'
    ],

    liveUrl: 'https://anjalinagare-portfolio.vercel.app/', 
    githubUrl: 'https://github.com/AnjaliNagare/my-portfolio', // or repo link
  },
     {
    id: 'german-vocab-app',
    title: 'German Vocabulary Learning App',
    tagline: 'Spaced repetition vocabulary trainer with AI-generated example sentences',
    description:
      'A full-stack language learning app that uses the SM-2 spaced repetition algorithm to schedule vocabulary reviews at scientifically optimal intervals, with AI-generated German example sentences to reinforce words you struggle to recall.',

    image: '/german-vocab-app1.png',

    problem:
      'Language learners often forget vocabulary shortly after learning it because they review words at random intervals instead of the moments when memory is about to fade.',

    solution:
      'Built a spaced repetition system (the same algorithm behind Anki) that tracks each word\'s recall history and automatically schedules the next review at the optimal moment — with AI stepping in to generate a contextual example sentence whenever a word is forgotten.',

    features: [
      {
        icon: 'Brain',
        title: 'SM-2 Spaced Repetition',
        description: 'Dynamically schedules reviews based on recall ratings and ease factor',
      },
      {
        icon: 'Sparkles',
        title: 'AI Example Sentences',
        description: 'Groq (Llama 3) generates contextual German sentences on forgotten words',
      },
      {
        icon: 'LayoutDashboard',
        title: 'Progress Dashboard',
        description: 'Tracks streaks, due words, and review history with live charts',
      },
      {
        icon: 'ShieldCheck',
        title: 'Secure Authentication',
        description: 'JWT-based auth with bcrypt password hashing',
      },
      {
        icon: 'Container',
        title: 'Dockerized Full Stack',
        description: 'One-command local setup with Docker + docker-compose',
      },
      {
        icon: 'GitBranch',
        title: 'CI/CD Pipeline',
        description: 'GitHub Actions runs tests and build checks on every push',
      },
    ],

    techStack: [
      'React',
      'Vite',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'JWT',
      'Groq API',
      'Ollama',
      'Docker',
      'GitHub Actions',
    ],

    screenshots: [
      '/german-vocab-app.png',
      '/german-vocab-app1.png',
      '/german-vocab-app2.png',
      '/german-vocab-app3.png',
    ],

    liveUrl: 'https://german-vocab-app-frontend.onrender.com',
    githubUrl: 'https://github.com/AnjaliNagare/german-vocab-app',
  },
  

]

export const skills = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Javascript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Language' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'REST API', category: 'Backend'},
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Bootstrap', category: 'Styling' },
  { name: 'Figma', category: 'Design' },

]

export const socialLinks = {
  github: 'https://github.com/AnjaliNagare',
  linkedin: 'www.linkedin.com/in/anjali-nagare-53b818190',
  email: 'anjalinagare20@gmail.com',
}
