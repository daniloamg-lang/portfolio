import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import ProjectCard from './components/ProjectCard'
import ProjectCaseStudyModal from './components/ProjectCaseStudyModal'
import type { ProjectItem } from './types/project'

type ExperienceItem = {
  role: string
  company: string
  period: string
  location: string
  summary: string
}

type EducationItem = {
  degree: string
  level: string
  institution: string
  period: string
  location: string
}

type LanguageItem = {
  name: string
  level: string
}

type ContactInfo = {
  email: string
  phone: string
  location: string
  linkedin: string
}

type ThemeName = 'original' | 'sunsetGlass' | 'storyGradient'

const THEME_STORAGE_KEY = 'portfolio-theme'

function App() {
  const { t, i18n } = useTranslation()
  const reducedMotion = useReducedMotion()
  const [theme] = useState<ThemeName>('storyGradient')
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)

  const projects =
    (t('projects.items', { returnObjects: true }) as ProjectItem[] | undefined) ?? []
  const experience = t('experience.items', {
    returnObjects: true,
  }) as ExperienceItem[]
  const skills = t('skills.items', { returnObjects: true }) as string[]
  const education = t('education.items', { returnObjects: true }) as EducationItem[]
  const languages = t('languages.items', { returnObjects: true }) as LanguageItem[]
  const contactInfo = t('contact.info', { returnObjects: true }) as ContactInfo
  const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? null

  const motionPreset = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease: 'easeOut' as const },
      }

  const currentLang = i18n.language.startsWith('es') ? 'es' : 'en'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  return (
    <div className="page-wrap">
      <header className="topbar" aria-label={t('nav.aria')}>
        <div className="brand-cluster">
          <a href="#home" className="brand">
            {t('hero.badge')}
          </a>

          <div className="lang-switch" role="group" aria-label={t('lang.aria')}>
            <button
              type="button"
              onClick={() => i18n.changeLanguage('en')}
              className={currentLang === 'en' ? 'active' : ''}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => i18n.changeLanguage('es')}
              className={currentLang === 'es' ? 'active' : ''}
            >
              ES
            </button>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#about">{t('nav.about')}</a>
          <a href="#projects">{t('nav.projects')}</a>
          <a href="#skills">{t('nav.skills')}</a>
          <a href="#experience">{t('nav.experience')}</a>
          <a href="#education">{t('nav.education')}</a>
          <a href="#languages">{t('nav.languages')}</a>
          <a href="#contact">{t('nav.contact')}</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-grid">
          <motion.div className="hero-copy" {...motionPreset}>
            <p className="kicker">{t('hero.kicker')}</p>
            <h1>{t('hero.title')}</h1>
            <p className="lead">{t('hero.subtitle')}</p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-solid">
                {t('hero.ctaPrimary')}
              </a>
              <a href="#contact" className="btn btn-solid">
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </motion.div>

          <motion.aside className="hero-panel" {...motionPreset}>
            <p>{t('hero.panelTop')}</p>
            <p>{t('hero.panelMid')}</p>
            <p>{t('hero.panelBottom')}</p>
          </motion.aside>
        </section>

        <motion.section id="about" className="section" {...motionPreset}>
          <h2>{t('about.title')}</h2>
          <p>{t('about.body')}</p>
        </motion.section>

        <motion.section id="projects" className="section" {...motionPreset}>
          <h2>{t('projects.title')}</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                ctaLabel={t('projects.viewProject')}
                onOpenCaseStudy={setSelectedProjectId}
              />
            ))}
          </div>
        </motion.section>

        <motion.section id="skills" className="section" {...motionPreset}>
          <h2>{t('skills.title')}</h2>
          <ul className="skills-list" aria-label={t('skills.aria')}>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </motion.section>

        <motion.section id="experience" className="section" {...motionPreset}>
          <h2>{t('experience.title')}</h2>
          <div className="timeline">
            {experience.map((item) => (
              <article key={`${item.role}-${item.company}`} className="timeline-item">
                <p className="meta">{item.period}</p>
                <h3>
                  {item.role} / {item.company}
                </h3>
                <p className="item-location">{item.location}</p>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="education" className="section" {...motionPreset}>
          <h2>{t('education.title')}</h2>
          <div className="detail-grid">
            {education.map((item) => (
              <article key={`${item.degree}-${item.period}`} className="timeline-item">
                <p className="meta">{item.period}</p>
                <h3>{item.degree}</h3>
                <p>{item.level}</p>
                <p>{item.institution}</p>
                <p className="item-location">{item.location}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="languages" className="section" {...motionPreset}>
          <h2>{t('languages.title')}</h2>
          <div className="language-grid" aria-label={t('languages.aria')}>
            {languages.map((language) => (
              <article key={language.name} className="language-card">
                <h3>{language.name}</h3>
                <p>{language.level}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" className="section" {...motionPreset}>
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.body')}</p>
          <div className="contact-list">
            <a className="mail-link" href={`mailto:${contactInfo.email}`}>
              {contactInfo.email}
            </a>
            <a className="mail-link" href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}>
              {contactInfo.phone}
            </a>
            <a className="mail-link" href={contactInfo.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <p className="item-location">{contactInfo.location}</p>
          </div>
        </motion.section>
      </main>

      <footer className="footer">
        <p>{t('footer.note')}</p>
      </footer>

      <ProjectCaseStudyModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        closeLabel={t('projects.caseStudy.close')}
        onClose={() => setSelectedProjectId(null)}
      />
    </div>
  )
}

export default App
