import { useEffect, useMemo, useRef, useState } from 'react'
import type { ProjectItem } from '../types/project'

const EMPTY_CASE_STUDY = {
  executiveSummary: { title: 'Executive summary', body: '' },
  contextAndChallenge: { title: 'Context and challenge', body: '' },
  impactResults: { title: 'Results and impact', metrics: [] as Array<{ label: string; value: string }> },
  processMethodology: { title: 'Process and methodology', body: '' },
  implementedSolution: {
    title: 'Implemented solution',
    body: '',
    galleries: [] as Array<{
      title: string
      body: string
      images: Array<{ src: string; alt: string }>
    }>,
  },
  roleResponsibilities: { title: 'Role and responsibilities', items: [] as string[] },
}

type ProjectCaseStudyModalProps = {
  project: ProjectItem | null
  isOpen: boolean
  closeLabel: string
  onClose: () => void
}

export default function ProjectCaseStudyModal({
  project,
  isOpen,
  closeLabel,
  onClose,
}: ProjectCaseStudyModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const dragStateRef = useRef<{
    isDragging: boolean
    startX: number
    startScrollLeft: number
    didMove: boolean
  }>({
    isDragging: false,
    startX: 0,
    startScrollLeft: 0,
    didMove: false,
  })
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  const handleGalleryPointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (event.pointerType !== 'mouse') {
      return
    }

    const container = event.currentTarget
    dragStateRef.current = {
      isDragging: true,
      startX: event.clientX,
      startScrollLeft: container.scrollLeft,
      didMove: false,
    }

    container.classList.add('dragging')
  }

  const handleGalleryPointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    const container = event.currentTarget
    const dragState = dragStateRef.current

    if (!dragState.isDragging) {
      return
    }

    event.preventDefault()
    const deltaX = event.clientX - dragState.startX
    if (Math.abs(deltaX) > 6) {
      dragState.didMove = true
    }
    container.scrollLeft = dragState.startScrollLeft - deltaX
  }

  const handleGalleryPointerEnd = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    const container = event.currentTarget
    dragStateRef.current.isDragging = false
    container.classList.remove('dragging')
  }

  const openImageFromIndex = (index: number) => {
    if (dragStateRef.current.didMove) {
      dragStateRef.current.didMove = false
      return
    }

    setActiveImageIndex(index)
  }

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (activeImageIndex !== null) {
          setActiveImageIndex(null)
        } else {
          onClose()
        }
      }
    }

    const previousFocus = document.activeElement as HTMLElement | null
    const frame = window.requestAnimationFrame(() => {
      dialogRef.current?.focus()
    })

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = previousOverflow
      window.cancelAnimationFrame(frame)
      previousFocus?.focus()
    }
  }, [activeImageIndex, isOpen, onClose])

  useEffect(() => {
    if (!isOpen) {
      setActiveImageIndex(null)
    }
  }, [isOpen])

  useEffect(() => {
    setActiveImageIndex(null)
  }, [project?.id])

  const caseStudy = project?.caseStudy ?? EMPTY_CASE_STUDY
  const metrics = caseStudy.impactResults?.metrics ?? []
  const galleries = caseStudy.implementedSolution?.galleries ?? []
  const roleItems = caseStudy.roleResponsibilities?.items ?? []
  const galleryItems = useMemo(
    () =>
      galleries.flatMap((gallery) =>
        (gallery.images ?? []).map((image) => ({
          src: image.src,
          alt: image.alt,
          sectionTitle: gallery.title,
        })),
      ),
    [galleries],
  )
  const activeImage =
    activeImageIndex !== null ? galleryItems[activeImageIndex] ?? null : null

  if (!isOpen || !project) {
    return null
  }

  return (
    <div className="case-modal-overlay" onClick={onClose} role="presentation">
      <div
        className="case-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-title"
        tabIndex={-1}
        ref={dialogRef}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="case-modal-header">
          <h3 id="case-title">{project.title}</h3>
          <button
            type="button"
            className="case-close"
            onClick={onClose}
            aria-label={closeLabel}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        {activeImage && (
          <section className="case-image-viewer" aria-label="Case study image viewer">
            <aside className="case-image-sidebar">
              <div className="case-image-sidebar-header">
                <p>{activeImage.sectionTitle}</p>
                <button
                  type="button"
                  className="case-image-exit"
                  onClick={() => setActiveImageIndex(null)}
                  aria-label="Close image viewer"
                >
                  X
                </button>
              </div>
              <div className="case-image-thumbs">
                {galleryItems.map((item, index) => (
                  <button
                    type="button"
                    key={`${item.src}-${index}`}
                    className={`case-thumb ${index === activeImageIndex ? 'active' : ''}`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <img src={item.src} alt={item.alt} loading="lazy" />
                  </button>
                ))}
              </div>
            </aside>

            <div className="case-image-stage">
              <img src={activeImage.src} alt={activeImage.alt} />
            </div>
          </section>
        )}

        {!activeImage && (
          <>

            <p className="meta">{project.stack}</p>

            <section className="case-block">
              <h4>{caseStudy.executiveSummary.title}</h4>
              <p>{caseStudy.executiveSummary.body}</p>
            </section>

            <section className="case-block">
              <h4>{caseStudy.contextAndChallenge.title}</h4>
              <p>{caseStudy.contextAndChallenge.body}</p>
            </section>

            <section className="case-block">
              <h4>{caseStudy.impactResults.title}</h4>
              <div className="case-metrics">
                {metrics.map((metric) => (
                  <article key={metric.label} className="case-metric-card">
                    <p className="case-metric-value">{metric.value}</p>
                    <p>{metric.label}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="case-block">
              <h4>{caseStudy.processMethodology.title}</h4>
              <p>{caseStudy.processMethodology.body}</p>
            </section>

            <section className="case-block">
              <h4>{caseStudy.implementedSolution.title}</h4>
              <p>{caseStudy.implementedSolution.body}</p>
              <div className="case-gallery-sections">
                {galleries.map((gallery) => (
                  <article key={gallery.title} className="case-gallery-section">
                    <h5>{gallery.title}</h5>
                    <p>{gallery.body}</p>
                    <div
                      className="case-gallery-grid"
                      onPointerDown={handleGalleryPointerDown}
                      onPointerMove={handleGalleryPointerMove}
                      onPointerUp={handleGalleryPointerEnd}
                      onPointerCancel={handleGalleryPointerEnd}
                      onPointerLeave={handleGalleryPointerEnd}
                    >
                      {(gallery.images ?? []).map((image) => {
                        const imageIndex = galleryItems.findIndex(
                          (item) => item.src === image.src && item.alt === image.alt,
                        )
                        const safeImageIndex = imageIndex === -1 ? 0 : imageIndex

                        return (
                          <figure key={image.src} className="case-gallery-item">
                            <button
                              type="button"
                              className="case-gallery-open"
                              onClick={() => openImageFromIndex(safeImageIndex)}
                            >
                              <img src={image.src} alt={image.alt} loading="lazy" />
                            </button>
                          </figure>
                        )
                      })}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="case-block">
              <h4>{caseStudy.roleResponsibilities.title}</h4>
              <ul className="case-role-list">
                {roleItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </>
        )}
      </div>
    </div>
  )
}
