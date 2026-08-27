import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      nav: {
        aria: 'Main navigation',
        about: 'About',
        projects: 'Projects',
        skills: 'Skills',
        experience: 'Experience',
        education: 'Education',
        languages: 'Languages',
        contact: 'Contact',
      },
      lang: {
        aria: 'Language switcher',
      },
      hero: {
        badge: 'Danilo Martínez',
        kicker: 'User Experience Designer / Product Owner',
        title: 'I design products that connect user value and business growth.',
        subtitle:
          'Product and UX leader with 5+ years in HealthTech and InsurTech, leading multidisciplinary teams and turning complex challenges into high-impact digital solutions.',
        ctaPrimary: 'See projects',
        ctaSecondary: 'Start a conversation',
        panelTop: 'Product strategy with measurable outcomes.',
        panelMid: 'UX systems built for scale.',
        panelBottom: 'Agile execution with technical alignment.',
        panelItems: [
          {
            label: 'Product strategy with measurable outcomes.',
            tags: ['Outcome Mapping', 'KPI Trees', 'Roadmap Prioritization'],
          },
          {
            label: 'UX systems built for scale.',
            tags: ['Design Systems', 'Component Libraries', 'Figma Tokens'],
          },
          {
            label: 'Agile execution with technical alignment.',
            tags: ['Scrum Cadence', 'Cross-team Rituals', 'QA Alignment'],
          },
        ],
      },
      about: {
        title: 'About',
        body:
          'Industrial Designer specialized in product strategy and user experience. I bridge user needs, business goals, and technology constraints to deliver digital products that are usable, scalable, and commercially effective.',
      },
      projects: {
        title: 'Projects',
        viewProject: 'Open case study',
        caseStudy: {
          close: 'Close case study',
        },
        items: [
          {
            id: 'integral-insurance-platform',
            title: 'Core Insurance Platform Modernization',
            description:
              'Led a product methodology transformation for an integral insurance platform by implementing user stories with BDD/Gherkin acceptance criteria aligned to QA test cases, increasing delivery quality and engineering efficiency.',
            stack: 'Product Ownership / BDD / QA Automation',
            externalUrl: 'https://example.com',
            caseStudy: {
              executiveSummary: {
                title: 'Executive summary',
                body: 'Product transformation initiative for an integral insurance platform focused on raising delivery quality, reducing production risk, and increasing engineering throughput through clearer requirement design.',
              },
              contextAndChallenge: {
                title: 'Context and challenge',
                body: 'The platform was scaling quickly, but requirement handoffs were inconsistent and quality criteria were interpreted differently across teams, creating rework, unstable releases, and delayed value delivery.',
              },
              impactResults: {
                title: 'Results and impact',
                metrics: [
                  {
                    label: 'Requirement clarity',
                    value: '+40%',
                  },
                  {
                    label: 'Production incidents',
                    value: '-30%',
                  },
                  {
                    label: 'Release predictability',
                    value: '+25%',
                  },
                ],
              },
              processMethodology: {
                title: 'Process and methodology',
                body: 'I introduced a unified Product workflow using Agile/Scrum rituals, user stories with BDD/Gherkin acceptance criteria, and QA traceability from story definition to test execution.',
              },
              implementedSolution: {
                title: 'Implemented solution',
                body: 'We deployed a standardized requirement lifecycle, QA automation checkpoints, and a shared product-engineering quality dashboard to align priorities and accelerate decision-making.',
                galleries: [
                  {
                    title: 'Project view gallery',
                    body: 'Representative interface snapshots showing the end-to-end product view, prioritization modules, and operational quality indicators.',
                    images: [
                      {
                        src: '/case-studies/project-view-1.svg',
                        alt: 'Insurance platform project view with dashboard and modules',
                      },
                      {
                        src: '/case-studies/project-view-2.svg',
                        alt: 'Premium interface exploration for project dashboard view',
                      },
                    ],
                  },
                  {
                    title: 'Information architecture gallery',
                    body: 'Flow maps that document navigation structure, decision paths, and relationship between product, QA, and operations layers.',
                    images: [
                      {
                        src: '/case-studies/ia-1.svg',
                        alt: 'Information architecture flow map for insurance platform',
                      },
                      {
                        src: '/case-studies/ia-2.svg',
                        alt: 'Information architecture site map and hierarchy diagram',
                      },
                    ],
                  },
                ],
              },
              roleResponsibilities: {
                title: 'Role and responsibilities',
                items: [
                  'Owned product backlog strategy and prioritization.',
                  'Defined acceptance criteria and quality gates with QA and engineering leads.',
                  'Facilitated cross-functional planning and dependency management.',
                  'Reported delivery health and impact to senior stakeholders.',
                ],
              },
            },
          },
          {
            id: 'soporte-ticsmart',
            title: 'Soporte Ticsmart',
            description:
              'Conceptualized and directed a centralized incident management solution for multiple healthcare platforms, leading AI-driven end-to-end development to accelerate delivery and improve decision quality.',
            stack: 'HealthTech / AI-driven Full Stack Delivery / Operational Intelligence',
            externalUrl: 'https://example.com',
            caseStudy: {
              executiveSummary: {
                title: 'Executive summary',
                body: 'Centralized support product for healthcare digital operations, designed to unify incident workflows and shorten response times across multiple service platforms.',
              },
              contextAndChallenge: {
                title: 'Context and challenge',
                body: 'Support teams were operating in fragmented tools with duplicated tickets, low traceability, and uneven prioritization logic, impacting operational continuity and user trust.',
              },
              impactResults: {
                title: 'Results and impact',
                metrics: [
                  {
                    label: 'Resolution speed',
                    value: '+35%',
                  },
                  {
                    label: 'Ticket duplication',
                    value: '-45%',
                  },
                  {
                    label: 'Operational visibility',
                    value: '+50%',
                  },
                ],
              },
              processMethodology: {
                title: 'Process and methodology',
                body: 'I led discovery with stakeholders, mapped end-to-end support journeys, and structured an incremental roadmap using Agile sprints, AI copilots for technical acceleration, and AI-assisted backlog refinement.',
              },
              implementedSolution: {
                title: 'Implemented solution',
                body: 'The solution integrated unified intake, AI-supported triage recommendations, SLA monitoring, and analytics dashboards, enabling coordinated decisions across operations, product, and technology teams.',
                galleries: [
                  {
                    title: 'Project view gallery',
                    body: 'Screens that illustrate omnichannel ticket intake, AI-assisted triage stages, and SLA tracking views used by operations and support teams.',
                    images: [
                      {
                        src: '/case-studies/project-view-1.svg',
                        alt: 'Support product interface with centralized incident dashboard',
                      },
                      {
                        src: '/case-studies/project-view-2.svg',
                        alt: 'Support product premium view with analytics and workflow cards',
                      },
                    ],
                  },
                  {
                    title: 'Information architecture gallery',
                    body: 'Architecture maps for AI-assisted service request lifecycle, escalation paths, and role-based operational handoffs across teams.',
                    images: [
                      {
                        src: '/case-studies/ia-1.svg',
                        alt: 'Information architecture map for support request lifecycle',
                      },
                      {
                        src: '/case-studies/ia-2.svg',
                        alt: 'Information architecture diagram for support roles and routing',
                      },
                    ],
                  },
                ],
              },
              roleResponsibilities: {
                title: 'Role and responsibilities',
                items: [
                  'Directed product vision and functional scope.',
                  'Coordinated frontend/backend delivery and architecture decisions.',
                  'Defined prioritization criteria for incidents and service levels.',
                  'Led stakeholder communication, rollout, and adoption strategy.',
                ],
              },
            },
          },
          {
            id: 'ehr-initiative',
            title: 'Electronic Health Record Initiative',
            description:
              'Co-created and structured a comprehensive EHR product for healthcare providers in Colombia, using AI-driven development and process design while ensuring patient-centered UX and strict data security standards.',
            stack: 'EHR Product Design / AI-driven Development / UX Strategy / Data Security',
            externalUrl: 'https://example.com',
            caseStudy: {
              executiveSummary: {
                title: 'Executive summary',
                body: 'EHR initiative for healthcare providers in Colombia focused on usability, clinical continuity, and secure management of sensitive patient information.',
              },
              contextAndChallenge: {
                title: 'Context and challenge',
                body: 'Healthcare programs required a unified digital workflow to reduce fragmentation in patient records while meeting strict operational and data protection requirements.',
              },
              impactResults: {
                title: 'Results and impact',
                metrics: [
                  {
                    label: 'Clinical workflow consistency',
                    value: '+32%',
                  },
                  {
                    label: 'Administrative rework',
                    value: '-28%',
                  },
                  {
                    label: 'Data traceability confidence',
                    value: '+46%',
                  },
                ],
              },
              processMethodology: {
                title: 'Process and methodology',
                body: 'We co-designed the product with program teams, translated care operations into product requirements, and validated iterations through UX checkpoints, AI-assisted analysis, and technical feasibility reviews.',
              },
              implementedSolution: {
                title: 'Implemented solution',
                body: 'The delivered model established patient-centered flows, secure role-based access, and AI-supported structured data handling patterns that improved continuity across healthcare operations.',
                galleries: [
                  {
                    title: 'Project view gallery',
                    body: 'Representative screens of patient-centered workflows, program management views, and AI-supported clinical interaction points.',
                    images: [
                      {
                        src: '/case-studies/project-view-1.svg',
                        alt: 'EHR product view with clinical workflow modules',
                      },
                      {
                        src: '/case-studies/project-view-2.svg',
                        alt: 'EHR interface exploration with operational data cards',
                      },
                    ],
                  },
                  {
                    title: 'Information architecture gallery',
                    body: 'Data and navigation maps documenting AI-ready information flows, role-based access, record structure, and continuity between care touchpoints.',
                    images: [
                      {
                        src: '/case-studies/ia-1.svg',
                        alt: 'Information architecture flow map for healthcare records',
                      },
                      {
                        src: '/case-studies/ia-2.svg',
                        alt: 'Information architecture hierarchy for healthcare data domains',
                      },
                    ],
                  },
                ],
              },
              roleResponsibilities: {
                title: 'Role and responsibilities',
                items: [
                  'Co-defined product strategy and user experience principles.',
                  'Translated healthcare operational requirements into release-ready scope.',
                  'Aligned stakeholders on security and compliance priorities.',
                  'Guided delivery milestones and cross-team execution cadence.',
                ],
              },
            },
          },
        ],
      },
      skills: {
        title: 'Skills & Stack',
        aria: 'Skills list',
        items: [
          'Leadership of multidisciplinary teams (Product, UX, QA, and Engineering) with measurable delivery outcomes',
          'Strategic use of AI to accelerate discovery, product definition, and end-to-end delivery',
          'Agile operating models and Scrum execution at team and program level',
          'UX strategy and scalable design systems',
          'B2B SaaS strategy and high-level client negotiation',
          'Cross-functional alignment and decision-making across frontend, backend, and business stakeholders',
          'Insurance and InsurTech operations expertise',
          'Advanced Figma workflows for product delivery',
        ],
      },
      experience: {
        title: 'Experience',
        items: [
          {
            role: 'Product Owner',
            company: 'WTW',
            period: 'Jan 2026 - Present',
            location: 'Bogotá, Colombia',
            summary:
              'Led the methodological transformation of an integral insurance platform and integrated QA automation into the delivery cycle, reducing production bugs and improving release stability.',
          },
          {
            role: 'Product Lead (Freelance Project)',
            company: 'Ticsmart',
            period: 'Jan 2026 - Present',
            location: 'Bogotá, Colombia',
            summary:
              'Directed Soporte Ticsmart and co-led the EHR initiative, from product definition to implementation, combining healthcare workflows, UX accessibility, and secure architecture.',
          },
          {
            role: 'UX Leader',
            company: 'WTW',
            period: 'Aug 2022 - Dec 2025',
            location: 'Bogotá, Colombia',
            summary:
              'Led end-to-end UX design for integral insurance and benefits platforms, presented strategic demos for senior stakeholders, and founded the UX function to accelerate time-to-market.',
          },
          {
            role: 'User Experience Designer',
            company: 'XMARTIC',
            period: 'Sep 2020 - Aug 2021',
            location: 'Bogotá, Colombia',
            summary:
              'Designed medical leave and absenteeism solutions, leading discovery sessions and translating business rules into robust information architecture.',
          },
          {
            role: 'Commercial Executive',
            company: 'Umbra Interactive',
            period: 'Jan 2020 - Jul 2020',
            location: 'Bogotá, Colombia',
            summary:
              'Developed strategic prospecting efforts, generated B2B opportunities, and aligned digital solution proposals with client growth and marketing goals.',
          },
        ],
      },
      education: {
        title: 'Education',
        items: [
          {
            degree: 'Industrial Designer',
            level: "Bachelor's Degree",
            institution: 'Pontificia Universidad Javeriana',
            period: '2015 - 2020',
            location: 'Bogotá, Colombia',
          },
          {
            degree: 'Innovation Management Specialization',
            level: 'Postgraduate Specialization',
            institution: 'Pontificia Universidad Javeriana',
            period: '2021 - 2022',
            location: 'Bogotá, Colombia',
          },
        ],
      },
      languages: {
        title: 'Languages',
        aria: 'Languages list',
        items: [
          {
            name: 'Spanish',
            level: 'Native',
          },
          {
            name: 'English',
            level: 'Advanced professional',
          },
          {
            name: 'Portuguese',
            level: 'Beginner',
          },
        ],
      },
      contact: {
        title: 'Contact',
        body: 'Open to Product Owner, UX Leadership, and digital innovation opportunities in HealthTech, InsurTech, and B2B SaaS.',
        info: {
          email: 'daniloamgaray@gmail.com',
          phone: '+57 317 515 9089',
          location: 'Bogotá, Colombia',
          linkedin: 'https://www.linkedin.com/in/danilo-mart%C3%ADnez-garay-438969181/',
        },
      },
      footer: {
        note: 'Portfolio crafted by Danilo Martínez: Product, UX, and execution in one system.',
      },
    },
  },
  es: {
    translation: {
      nav: {
        aria: 'Navegación principal',
        about: 'Sobre mí',
        projects: 'Proyectos',
        skills: 'Habilidades',
        experience: 'Experiencia',
        education: 'Formación',
        languages: 'Idiomas',
        contact: 'Contacto',
      },
      lang: {
        aria: 'Selector de idioma',
      },
      hero: {
        badge: 'Danilo Martínez',
        kicker: 'Diseñador de Experiencia de Usuario / Product Owner',
        title: 'Diseño productos que conectan valor de usuario y crecimiento de negocio.',
        subtitle:
          'Líder de Producto y UX con más de 5 años de experiencia en HealthTech e InsurTech, gestionando equipos multidisciplinares y convirtiendo retos complejos en soluciones digitales de alto impacto.',
        ctaPrimary: 'Ver proyectos',
        ctaSecondary: 'Hablemos',
        panelTop: 'Estrategia de producto con resultados medibles.',
        panelMid: 'Sistemas UX preparados para escalar.',
        panelBottom: 'Ejecución ágil con alineación técnica.',
        panelItems: [
          {
            label: 'Estrategia de producto con resultados medibles.',
            tags: ['Mapeo de resultados', 'Arboles KPI', 'Priorizacion de roadmap'],
          },
          {
            label: 'Sistemas UX preparados para escalar.',
            tags: ['Design Systems', 'Librerias de componentes', 'Figma Tokens'],
          },
          {
            label: 'Ejecucion agil con alineacion tecnica.',
            tags: ['Cadencia Scrum', 'Rituales cross-team', 'Alineacion QA'],
          },
        ],
      },
      about: {
        title: 'Sobre mí',
        body:
          'Diseñador Industrial especializado en estrategia de producto y experiencia de usuario. Conecto necesidades del usuario, objetivos de negocio y restricciones técnicas para construir productos digitales usables, escalables y comercialmente efectivos.',
      },
      projects: {
        title: 'Proyectos',
        viewProject: 'Abrir caso de estudio',
        caseStudy: {
          close: 'Cerrar caso de estudio',
        },
        items: [
          {
            id: 'integral-insurance-platform',
            title: 'Modernización de plataforma integral de seguros',
            description:
              'Lideré la transformación metodológica de una plataforma integral de seguros implementando Historias de Usuario con criterios de aceptación BDD/Gherkin alineados con QA, mejorando la calidad de entrega y la eficiencia de ingeniería.',
            stack: 'Product Ownership / BDD / QA Automation',
            externalUrl: 'https://example.com',
            caseStudy: {
              executiveSummary: {
                title: 'Resumen ejecutivo',
                body: 'Iniciativa de transformación de producto para una plataforma integral de seguros, orientada a elevar la calidad de entrega, reducir riesgo en producción y mejorar la velocidad de ejecución del equipo de ingeniería.',
              },
              contextAndChallenge: {
                title: 'Contexto y reto',
                body: 'La plataforma estaba creciendo, pero los requerimientos se definían de forma inconsistente entre equipos. Esto generaba retrabajo, despliegues inestables y menor velocidad para entregar valor.',
              },
              impactResults: {
                title: 'Resultados e impacto',
                metrics: [
                  {
                    label: 'Claridad de requerimientos',
                    value: '+40%',
                  },
                  {
                    label: 'Incidentes en producción',
                    value: '-30%',
                  },
                  {
                    label: 'Predictibilidad de releases',
                    value: '+25%',
                  },
                ],
              },
              processMethodology: {
                title: 'Proceso y metodología',
                body: 'Implementé un flujo unificado de Producto con prácticas Agile/Scrum, Historias de Usuario con criterios BDD/Gherkin y trazabilidad QA desde la definición funcional hasta la ejecución de pruebas.',
              },
              implementedSolution: {
                title: 'Solución implementada',
                body: 'Se desplegó un ciclo estandarizado de requerimientos, checkpoints de automatización QA y un tablero compartido de calidad para alinear decisiones entre Producto, Ingeniería y stakeholders.',
                galleries: [
                  {
                    title: 'Galería de vista de proyecto',
                    body: 'Capturas representativas de la interfaz end-to-end, módulos de priorización y tableros de calidad operativa.',
                    images: [
                      {
                        src: '/case-studies/project-view-1.svg',
                        alt: 'Vista de plataforma de seguros con dashboard y módulos',
                      },
                      {
                        src: '/case-studies/project-view-2.svg',
                        alt: 'Exploración visual premium de tablero de proyecto',
                      },
                    ],
                  },
                  {
                    title: 'Galería de arquitectura de información',
                    body: 'Mapas de flujo que documentan navegación, rutas de decisión y relación entre capas de producto, QA y operación.',
                    images: [
                      {
                        src: '/case-studies/ia-1.svg',
                        alt: 'Mapa de flujo de arquitectura de información para plataforma de seguros',
                      },
                      {
                        src: '/case-studies/ia-2.svg',
                        alt: 'Mapa jerárquico y diagrama de arquitectura de información',
                      },
                    ],
                  },
                ],
              },
              roleResponsibilities: {
                title: 'Rol y responsabilidades',
                items: [
                  'Lideré estrategia de backlog y priorización de producto.',
                  'Definí criterios de aceptación y puertas de calidad con QA e Ingeniería.',
                  'Facilité la planificación cross-funcional y gestión de dependencias.',
                  'Reporté estado de entrega e impacto a stakeholders senior.',
                ],
              },
            },
          },
          {
            id: 'soporte-ticsmart',
            title: 'Soporte Ticsmart',
            description:
              'Conceptualicé y dirigí una solución centralizada de ticketing para múltiples plataformas del sector salud, liderando un desarrollo end-to-end impulsado por IA para acelerar entregas y elevar la calidad de decisión operativa.',
            stack: 'HealthTech / Desarrollo Full Stack impulsado por IA / Inteligencia Operativa',
            externalUrl: 'https://example.com',
            caseStudy: {
              executiveSummary: {
                title: 'Resumen ejecutivo',
                body: 'Producto de soporte centralizado para operación digital en salud, diseñado para unificar la gestión de incidencias y reducir tiempos de respuesta en múltiples plataformas.',
              },
              contextAndChallenge: {
                title: 'Contexto y reto',
                body: 'Los equipos de soporte trabajaban en herramientas fragmentadas con tickets duplicados, poca trazabilidad y priorización inconsistente, afectando continuidad operativa y experiencia del usuario.',
              },
              impactResults: {
                title: 'Resultados e impacto',
                metrics: [
                  {
                    label: 'Velocidad de resolución',
                    value: '+35%',
                  },
                  {
                    label: 'Duplicidad de tickets',
                    value: '-45%',
                  },
                  {
                    label: 'Visibilidad operativa',
                    value: '+50%',
                  },
                ],
              },
              processMethodology: {
                title: 'Proceso y metodología',
                body: 'Lideré discovery con stakeholders, mapeé journey de soporte end-to-end y estructuré un roadmap incremental con sprints Agile, copilotos de IA para aceleración técnica y refinamiento asistido de backlog.',
              },
              implementedSolution: {
                title: 'Solución implementada',
                body: 'La solución integró intake unificado, recomendaciones de triage asistidas por IA, monitoreo de SLA y dashboards analíticos para habilitar decisiones coordinadas entre operación, producto y tecnología.',
                galleries: [
                  {
                    title: 'Galería de vista de proyecto',
                    body: 'Pantallas que muestran intake omnicanal, etapas de triage asistidas por IA y vistas de seguimiento de SLA para equipos de soporte y operación.',
                    images: [
                      {
                        src: '/case-studies/project-view-1.svg',
                        alt: 'Interfaz de soporte con tablero centralizado de incidencias',
                      },
                      {
                        src: '/case-studies/project-view-2.svg',
                        alt: 'Vista premium de producto de soporte con analítica operativa',
                      },
                    ],
                  },
                  {
                    title: 'Galería de arquitectura de información',
                    body: 'Mapas de arquitectura para ciclo de solicitudes asistido por IA, rutas de escalamiento y handoffs por rol entre equipos.',
                    images: [
                      {
                        src: '/case-studies/ia-1.svg',
                        alt: 'Mapa de arquitectura de información para ciclo de soporte',
                      },
                      {
                        src: '/case-studies/ia-2.svg',
                        alt: 'Diagrama de arquitectura de información para ruteo y roles de soporte',
                      },
                    ],
                  },
                ],
              },
              roleResponsibilities: {
                title: 'Rol y responsabilidades',
                items: [
                  'Dirigí la visión de producto y definición de alcance funcional.',
                  'Coordiné delivery frontend/backend y decisiones de arquitectura.',
                  'Definí criterios de priorización para incidencias y niveles de servicio.',
                  'Lideré comunicación con stakeholders, despliegue y adopción.',
                ],
              },
            },
          },
          {
            id: 'ehr-initiative',
            title: 'Proyecto Historia Clínica Electrónica',
            description:
              'Co-creé y estructuré una solución integral para IPS en Colombia, con desarrollo y diseño de procesos impulsados por IA, garantizando una UX accesible y centrada en el paciente bajo altos estándares de seguridad de datos.',
            stack: 'Diseño de producto EHR / Desarrollo impulsado por IA / Estrategia UX / Seguridad de datos',
            externalUrl: 'https://example.com',
            caseStudy: {
              executiveSummary: {
                title: 'Resumen ejecutivo',
                body: 'Iniciativa de Historia Clínica Electrónica para IPS en Colombia, enfocada en usabilidad clínica, continuidad asistencial y gestión segura de información sensible del paciente.',
              },
              contextAndChallenge: {
                title: 'Contexto y reto',
                body: 'Los programas de salud requerían un flujo digital unificado para disminuir fragmentación del dato clínico y cumplir exigencias operativas y de protección de datos.',
              },
              impactResults: {
                title: 'Resultados e impacto',
                metrics: [
                  {
                    label: 'Consistencia del flujo clínico',
                    value: '+32%',
                  },
                  {
                    label: 'Retrabajo administrativo',
                    value: '-28%',
                  },
                  {
                    label: 'Confiabilidad de trazabilidad',
                    value: '+46%',
                  },
                ],
              },
              processMethodology: {
                title: 'Proceso y metodología',
                body: 'Co-diseñamos el producto con equipos de programa, traduciendo operación asistencial en requerimientos de producto y validando iteraciones con checkpoints UX, análisis asistido por IA y viabilidad técnica.',
              },
              implementedSolution: {
                title: 'Solución implementada',
                body: 'Se definieron flujos centrados en el paciente, control de acceso por roles y patrones de manejo estructurado del dato soportados por IA para mejorar continuidad y control operativo.',
                galleries: [
                  {
                    title: 'Galería de vista de proyecto',
                    body: 'Vistas representativas de flujos clínicos centrados en paciente, gestión de programas y puntos críticos de interacción segura con soporte de IA.',
                    images: [
                      {
                        src: '/case-studies/project-view-1.svg',
                        alt: 'Vista de producto HCE con módulos de flujo clínico',
                      },
                      {
                        src: '/case-studies/project-view-2.svg',
                        alt: 'Exploración de interfaz HCE con tarjetas de datos operativos',
                      },
                    ],
                  },
                  {
                    title: 'Galería de arquitectura de información',
                    body: 'Mapas de datos y navegación que documentan flujos de información preparados para IA, acceso por roles, estructura de historia clínica y continuidad entre puntos asistenciales.',
                    images: [
                      {
                        src: '/case-studies/ia-1.svg',
                        alt: 'Mapa de flujo de arquitectura de información para historia clínica',
                      },
                      {
                        src: '/case-studies/ia-2.svg',
                        alt: 'Jerarquía de dominios de datos clínicos en arquitectura de información',
                      },
                    ],
                  },
                ],
              },
              roleResponsibilities: {
                title: 'Rol y responsabilidades',
                items: [
                  'Co-definí estrategia de producto y principios de experiencia de usuario.',
                  'Traducí requerimientos operativos de salud en alcance ejecutable por release.',
                  'Alineé prioridades de seguridad y cumplimiento con stakeholders.',
                  'Guié hitos de entrega y cadencia de ejecución cross-funcional.',
                ],
              },
            },
          },
        ],
      },
      skills: {
        title: 'Habilidades',
        aria: 'Lista de habilidades',
        items: [
          'Liderazgo de equipos multidisciplinarios (Producto, UX, QA e Ingeniería) con foco en resultados medibles',
          'Uso estratégico de IA para acelerar discovery, definición de producto y entrega end-to-end',
          'Modelos operativos Agile y ejecución Scrum a nivel de equipo y programa',
          'Estrategia UX y sistemas de diseño escalables',
          'Estrategia B2B SaaS y negociación con clientes de alto nivel',
          'Alineación y toma de decisiones cross-funcional con frontend, backend y stakeholders de negocio',
          'Conocimiento profundo en operaciones de seguros e InsurTech',
          'Dominio avanzado de Figma en flujos de producto',
        ],
      },
      experience: {
        title: 'Experiencia',
        items: [
          {
            role: 'Product Owner',
            company: 'WTW',
            period: 'Ene 2026 - Presente',
            location: 'Bogotá, Colombia',
            summary:
              'Lideré la transformación metodológica de una plataforma integral de seguros e integré automatización QA en el ciclo de entrega, reduciendo errores en producción y mejorando la estabilidad de despliegues.',
          },
          {
            role: 'Líder de Producto (Proyecto Freelance)',
            company: 'Ticsmart',
            period: 'Ene 2026 - Presente',
            location: 'Bogotá, Colombia',
            summary:
              'Dirigí Soporte Ticsmart y co-lideré la iniciativa de Historia Clínica Electrónica, desde la definición de producto hasta su implementación, integrando operación en salud, accesibilidad UX y arquitectura segura.',
          },
          {
            role: 'Líder UX',
            company: 'WTW',
            period: 'Ago 2022 - Dic 2025',
            location: 'Bogotá, Colombia',
            summary:
              'Lideré el diseño end-to-end de plataformas integrales de seguros y beneficios, participé en demos estratégicas para stakeholders senior y fundé el área UX para acelerar el time-to-market.',
          },
          {
            role: 'Diseñador de Experiencia de Usuario',
            company: 'XMARTIC',
            period: 'Sep 2020 - Ago 2021',
            location: 'Bogotá, Colombia',
            summary:
              'Apoyé el diseño integral de soluciones para incapacidades y ausentismo, liderando sesiones de discovery y traduciendo reglas de negocio en arquitectura de información accionable.',
          },
          {
            role: 'Ejecutivo Comercial',
            company: 'Umbra Interactive',
            period: 'Ene 2020 - Jul 2020',
            location: 'Bogotá, Colombia',
            summary:
              'Impulsé la prospección comercial y la generación de oportunidades B2B, alineando propuestas digitales con objetivos de crecimiento y marketing de los clientes.',
          },
        ],
      },
      education: {
        title: 'Formación académica',
        items: [
          {
            degree: 'Diseñador Industrial',
            level: 'Título Universitario',
            institution: 'Pontificia Universidad Javeriana',
            period: '2015 - 2020',
            location: 'Bogotá, Colombia',
          },
          {
            degree: 'Especialista en Gerencia de la Innovación',
            level: 'Especialización Posgrado',
            institution: 'Pontificia Universidad Javeriana',
            period: '2021 - 2022',
            location: 'Bogotá, Colombia',
          },
        ],
      },
      languages: {
        title: 'Idiomas',
        aria: 'Lista de idiomas',
        items: [
          {
            name: 'Español',
            level: 'Nativo',
          },
          {
            name: 'Inglés',
            level: 'Avanzado profesional',
          },
          {
            name: 'Portugués',
            level: 'Principiante',
          },
        ],
      },
      contact: {
        title: 'Contacto',
        body: 'Abierto a oportunidades en Product Ownership, liderazgo UX e innovación digital en HealthTech, InsurTech y B2B SaaS.',
        info: {
          email: 'daniloamgaray@gmail.com',
          phone: '+57 317 515 9089',
          location: 'Bogotá, Colombia',
          linkedin: 'https://www.linkedin.com/in/danilo-mart%C3%ADnez-garay-438969181/',
        },
      },
      footer: {
        note: 'Portfolio de Danilo Martínez: estrategia de producto, UX y ejecución en un mismo sistema.',
      },
    },
  },
}

const savedLanguage = localStorage.getItem('portfolio-language')

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage === 'es' || savedLanguage === 'en' ? savedLanguage : 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (language) => {
  localStorage.setItem('portfolio-language', language)
})

export default i18n
