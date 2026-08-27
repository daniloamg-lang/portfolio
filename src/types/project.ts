export type CaseMetric = {
  label: string
  value: string
}

export type CaseSection = {
  title: string
  body: string
}

export type CaseGalleryImage = {
  src: string
  alt: string
}

export type CaseGallerySection = {
  title: string
  body: string
  images: CaseGalleryImage[]
}

export type ProjectCaseStudy = {
  executiveSummary: CaseSection
  contextAndChallenge: CaseSection
  impactResults: {
    title: string
    metrics: CaseMetric[]
  }
  processMethodology: CaseSection
  implementedSolution: {
    title: string
    body: string
    galleries: CaseGallerySection[]
  }
  roleResponsibilities: {
    title: string
    items: string[]
  }
}

export type ProjectItem = {
  id: string
  title: string
  description: string
  stack: string
  externalUrl?: string
  caseStudy: ProjectCaseStudy
}
