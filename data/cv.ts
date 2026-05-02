import type { Lang } from '@/contexts/LanguageContext'
import { translations, type TranslationDict } from '@/data/i18n'

export interface Certification {
  id: string
  year: number
  name: string
  fullName: string
  description: string
}

export interface Skill {
  name: string
  level: number
}

export interface Mission {
  company: string
  period: string
  role: string
  project: string
  tasks: string[]
  tags: string[]
}

export interface ExperienceGroup {
  id: string
  esn: string
  badge: 'teal' | 'green'
  location: string
  period: string
  missions: Mission[]
}

export interface Education {
  degree: string
  specialty?: string
  year: string
}

export interface Language {
  name: string
  level: string
}

export interface Realisation {
  id: string
  title: string
  oneliner: string
  level: string
  levelColor: string
  context: string
  problem?: string
  solution: string[]
  impact: string[]
  tags: string[]
}

export interface CVData {
  name: string
  firstName: string
  lastName: string
  title: string
  bio: string
  contact: {
    phone: string
    email: string
    location: string
    experience: string
  }
  stats: { label: string; value: number; prefix?: string }[]
  certifications: Certification[]
  skills: Skill[]
  softSkills: string[]
  education: Education[]
  languages: Language[]
  experiences: ExperienceGroup[]
  realisations: Realisation[]
}

const cv: CVData = {
  name: 'Ghislain GIRARD',
  firstName: 'Ghislain',
  lastName: 'GIRARD',
  title: 'Consultant Technique ServiceNow',
  bio: "Consultant technique ServiceNow avec une expertise couvrant plusieurs modules notamment ITSM, FSM et CSM. Autonome, orienté solutions et à l'aise en environnement multi-clients — je me distingue par une approche d'analyse en profondeur, renforcée par une double compétence technique et fonctionnelle.",
  contact: {
    phone: '+33 7 60 71 39 74',
    email: 'girard.gh@gmail.com',
    location: 'Toulouse, France',
    experience: "3+ ans d'expérience ServiceNow",
  },
  stats: [
    { label: 'certifications', value: 8 },
    { label: "ans d'expérience", value: 3, prefix: '3+' },
    { label: 'clients', value: 10 },
  ],
  certifications: [
    {
      id: 'cis-df',
      year: 2026,
      name: 'CIS – Data Foundations',
      fullName: 'Certified Implementation Specialist – Data Foundations',
      description:
        'Maîtrise des fondations de la gestion des données sur la plateforme ServiceNow.',
    },
    {
      id: 'itil4',
      year: 2025,
      name: 'ITIL® 4 Foundation',
      fullName:
        'ITIL® 4 Foundation – Certificate in IT Service Management',
      description:
        'Référentiel mondial de la gestion des services IT, couvrant les principes directeurs et les pratiques ITSM.',
    },
    {
      id: 'cis-pa',
      year: 2025,
      name: 'CIS – Platform Analytics',
      fullName: 'Certified Implementation Specialist – Platform Analytics',
      description:
        'Expertise en création de tableaux de bord, rapports et indicateurs sur ServiceNow.',
    },
    {
      id: 'cis-hr',
      year: 2024,
      name: 'CIS – Human Resources',
      fullName: 'Certified Implementation Specialist – Human Resources',
      description:
        'Implémentation des modules RH ServiceNow (HR Service Delivery, Employee Center).',
    },
    {
      id: 'cis-fsm',
      year: 2024,
      name: 'CIS – Field Service Management',
      fullName:
        'Certified Implementation Specialist – Field Service Management',
      description:
        'Gestion des interventions terrain, planification et dispatch des techniciens sur ServiceNow FSM.',
    },
    {
      id: 'cis-itsm',
      year: 2023,
      name: 'CIS – IT Service Management',
      fullName:
        'Certified Implementation Specialist – IT Service Management',
      description:
        "Mise en œuvre de l'ITSM ServiceNow : incidents, problèmes, changements et demandes.",
    },
    {
      id: 'cad',
      year: 2023,
      name: 'Certified Application Developer',
      fullName: 'ServiceNow Certified Application Developer',
      description:
        "Développement d'applications ServiceNow : scripting, Flow Designer, Service Portal, Studio.",
    },
    {
      id: 'csa',
      year: 2023,
      name: 'Certified System Administrator',
      fullName: 'ServiceNow Certified System Administrator',
      description:
        'Administration complète de la plateforme ServiceNow : configuration, sécurité, utilisateurs, groupes.',
    },
  ],
  skills: [
    { name: 'Administration ServiceNow', level: 100 },
    { name: 'JavaScript', level: 100 },
    { name: 'HTML/CSS · Portal Design', level: 100 },
    { name: 'Base de données · SQL', level: 100 },
    { name: 'Paramétrage ITSM', level: 100 },
    { name: 'Service Portal', level: 70 },
    { name: 'ITIL · Agile/Scrum', level: 70 },
  ],
  softSkills: [
    'Aisance relationnelle',
    "Gestion d'ateliers",
    'Collaboration transverse',
    'Gestion des conflits',
    'Leadership',
    'Résolution complexe',
  ],
  education: [
    {
      degree: 'Bachelor Informatique',
      specialty: 'Spécialité JavaScript',
      year: '2022',
    },
  ],
  languages: [
    { name: 'Français', level: 'Langue maternelle' },
    { name: 'Anglais', level: 'B2' },
  ],
  experiences: [
    {
      id: 'eviden',
      esn: 'Eviden',
      badge: 'teal',
      location: 'esn_eviden_loc',
      period: '09/2024 → Actuellement',
      missions: [
        {
          company:
            'Crédit Agricole Pacifica · Société Générale · CA Titres · Fraikin · Valeo · Sonepar · Orange Business',
          period: '09/2024 → Actuellement',
          role: 'role_tma',
          project: 'Eviden – Centre de Service (CDS)',
          tasks: ['eviden_t1', 'eviden_t2', 'eviden_t3', 'eviden_t4', 'eviden_t5', 'eviden_t6', 'eviden_t7'],
          tags: [
            'ITSM', 'CSM', 'FSM', 'Flow Designer', 'PA', 'ATF',
            'Client Script', 'Script Includes', 'Business Rules',
            'Portal', 'Angular JS', 'Dashboard', 'Reports',
          ],
        },
      ],
    },
    {
      id: 'devoteam-paris',
      esn: 'Devoteam · Paris',
      badge: 'green',
      location: 'esn_dv_paris_loc',
      period: '09/2023 → 09/2024',
      missions: [
        {
          company: 'Safran Group',
          period: '06/2024 → 09/2024',
          role: 'role_func',
          project: 'safran_proj',
          tasks: ['safran_t1', 'safran_t2', 'safran_t3', 'safran_t4', 'safran_t5', 'safran_t6'],
          tags: [
            'ITSM', 'Service Portal', 'Dashboard', 'Report', 'PowerBI',
            'Suite Microsoft',
          ],
        },
        {
          company: 'HWI by Calderys',
          period: '02/2024 → 05/2024',
          role: 'role_tech',
          project: 'hwi_proj',
          tasks: [
            'hwi_t1',
            'hwi_t2',
            'hwi_t3',
            'hwi_t4',
            'hwi_t5',
            'hwi_t6',
            'hwi_t7',
            'hwi_t8',
            'hwi_t9',
          ],
          tags: [
            'Security Admin', 'ITSM', 'Workflow', 'Flow Designer',
            'Transform Map', 'Script Includes', 'Business Rules', 'Fix Script',
            'Angular JS', 'Employee Center', 'Inbound Action',
          ],
        },
      ],
    },
    {
      id: 'devoteam-toulouse',
      esn: 'Devoteam · Toulouse',
      badge: 'green',
      location: 'esn_dv_toulouse_loc',
      period: '03/2023 → 09/2023',
      missions: [
        {
          company: 'Avril',
          period: '05/2023 → 09/2023',
          role: 'role_tech',
          project: 'avril_proj',
          tasks: [
            'avril_t1',
            'avril_t2',
            'avril_t3',
          ],
          tags: ['Workflow', 'Business Rules', 'Scheduled Jobs', 'Fix Script', 'ATF'],
        },
        {
          company: 'Sequens',
          period: '04/2023 → 09/2023',
          role: 'role_tech',
          project: 'sequens_proj',
          tasks: [
            'sequens_t1',
            'sequens_t2',
            'sequens_t3',
            'sequens_t4',
          ],
          tags: [
            'ITSM', 'Workflow', 'Flow Designer', 'Business Rules',
            'Client Script', 'UI Policy', 'Fix Script', 'Script Includes',
          ],
        },
      ],
    },
  ],
  realisations: [
    {
      id: 'iam-paie',
      title: 'Synchronisation IAM & données de paie',
      oneliner: 'Incohérences IAM indétectables → moteur de comparaison automatisé from scratch',
      level: 'Automatisation',
      levelColor: '#62D84E',
      context:
        "Projet de contrôle de cohérence entre identités IAM et données RH importées via Excel.",
      problem:
        "Aucune visibilité sur les écarts entre les systèmes → erreurs non détectées (manager, localisation, statut…).",
      solution: [
        "Conception d'une table dédiée ServiceNow",
        'Import automatisé via Data Sources + Transform Maps (3 onglets)',
        "Développement d'un moteur de comparaison (Script Include)",
        'Ajout de flags de validation + indicateur "à corriger"',
        "Mise en place d'une UI Action pour lancer l'analyse",
      ],
      impact: [
        "Détection automatique des incohérences (avant invisibles)",
        "Réduction du temps d'analyse manuel (~50%)",
        "Fiabilisation des données IAM sur l'ensemble du périmètre",
      ],
      tags: ['Script Include', 'Transform Map', 'Data Sources', 'UI Action', 'HR'],
    },
    {
      id: 'debug-ritm',
      title: 'Correction de pertes de variables sur RITM',
      oneliner: 'Bug critique bloquant les commandes corrigé en production — variables perdues sur Order Guide',
      level: 'Production',
      levelColor: '#3ABFB8',
      context:
        "Problème sur génération de RITM enfants via Order Guide en production.",
      problem:
        "Certaines variables n'étaient pas persistées (sc_item_option / mtom vides) → ~30% des commandes impactées.",
      solution: [
        'Analyse des logs Flow Designer',
        'Identification du décalage entre création RITM et injection variables',
        'Debug du mécanisme checkout / remplacement',
        'Mise en place de contrôles et logs de validation',
      ],
      impact: [
        "Correction d'un bug critique impactant ~30% des commandes",
        'Stabilisation complète des processus de commande',
        'Meilleure traçabilité — zéro régression post-fix',
      ],
      tags: ['Flow Designer', 'RITM', 'Order Guide', 'Debugging', 'Script Includes'],
    },
    {
      id: 'platform-analytics',
      title: 'Migration Reporting vers Platform Analytics',
      oneliner: '100% des rapports Core UI migrés vers PA — zéro perte de données',
      level: 'Migration',
      levelColor: '#00A9A5',
      context:
        "Migration des rapports Core UI vers Platform Analytics (release Australia).",
      problem:
        "Fonctionnalités différentes + gestion complexe des dashboards et scheduled reports → risque de régression.",
      solution: [
        'Analyse des écarts Core UI vs PA',
        'Conception de dashboards avec indicateurs automatisés',
        'Documentation et support client',
        'Préparation stratégie de migration via Migration Center',
      ],
      impact: [
        'Transition sécurisée — 100% des rapports migrés sans perte',
        'Adoption facilitée côté client (~2x plus rapide que prévu)',
        'Anticipation des évolutions ServiceNow sur 2 releases',
      ],
      tags: ['PA', 'Dashboard', 'Reports', 'Migration Center'],
    },
    {
      id: 'itsm-multi',
      title: 'Déploiement ITSM sur instance multi-sociétés',
      oneliner: 'Instance ITSM partagée entre 2 entités — ségrégation des données garantie dès J1',
      level: 'Projet complexe',
      levelColor: '#4CAF50',
      context:
        "Implémentation ITSM sur instance partagée entre plusieurs entités (HWI by Calderys).",
      problem:
        "Besoin de ségrégation stricte des données et d'un portail adapté à chaque société sans doublon d'infrastructure.",
      solution: [
        'Mise en place Business Rules de filtrage par compagnie (BR query)',
        'Configuration SSO via OKTA',
        'Développement portail dynamique multi-company (Angular JS)',
        "Automatisation création incidents via intégration email IMAP",
      ],
      impact: [
        'Ségrégation des données 100% garantie entre les 2 entités',
        'Réduction des tickets manuels (~40% via automatisation email)',
        "Déploiement livré dans les délais — 0 incident de sécurité post-go-live",
      ],
      tags: ['Portal', 'IMAP', 'Business Rules', 'SSO', 'Angular JS', 'Auth 2.0', 'Inbound email action' ],
    },
    {
      id: 'tma-multi',
      title: 'Support & évolutions ServiceNow multi-clients',
      oneliner: '5 clients maintenus en parallèle — SLA respectés, évolutions livrées en continu',
      level: 'Multi-clients',
      levelColor: '#00A9A5',
      context:
        "Gestion TMA sur plusieurs clients simultanés (Pacifica, S2E, Orange Business…).",
      problem: undefined,
      solution: [
        "Résolution d'incidents complexes (scripting, debugging, optimisation)",
        "Développement d'évolutions (Business Rules, Flow Designer, Portal)",
        'Support utilisateurs & documentation technique',
        'Participation aux opérations de clone et gestion des releases',
      ],
      impact: [
        'SLA incidents respectés sur 5 environnements clients',
        "Évolutions livrées en continu sans interruption de service",
        "Satisfaction client maintenue sur l'ensemble du périmètre CDS",
      ],
      tags: ['ITSM', 'CSM', 'FSM', 'Flow Designer', 'ATF', 'Portal'],
    },
    {
      id: 'ldap-iam',
      title: 'Alignement des identités LDAP & IAM',
      oneliner: 'Incohérences entre annuaire LDAP et IAM → fiabilisation des identités',
      level: 'Gouvernance IAM',
      levelColor: '#3ABFB8',
      context:
        'Projet de comparaison entre les données issues du LDAP et la table IAM ServiceNow.',
      problem:
        'Divergences entre les systèmes sur des champs clés : login, type de contrat, localisation, matricule, département…',
      solution: [
        'Mapping des champs LDAP vers IAM',
        'Import des données LDAP dans une table dédiée',
        'Développement d’un Script Include centralisé pour comparer les identités',
        'Détection des divergences et des doublons',
        'Gestion des règles spécifiques de transformation et de normalisation',
      ],
      impact: [
        'Alignement des données entre LDAP et IAM',
        'Réduction des erreurs de provisioning',
        'Meilleure gouvernance des identités',
        'Analyse plus rapide des écarts entre systèmes',
      ],
      tags: ['LDAP', 'IAM', 'Script Include', 'Transform Map', 'Data Sources', 'Debugging'],
    },
  ],
}

function tr(t: TranslationDict, value: string) {
  return value in t ? t[value as keyof TranslationDict] : value
}

function trString(t: TranslationDict, value: string) {
  const translated = tr(t, value)
  return typeof translated === 'string' ? translated : value
}

function trStringArray(t: TranslationDict, values: string[]) {
  return values.map((value) => trString(t, value))
}

function trPeriod(t: TranslationDict, value: string) {
  return value.replace('Actuellement', t.period_current)
}

const certDescriptionKeys: Record<string, keyof TranslationDict> = {
  'cis-df': 'cert_cis_df',
  itil4: 'cert_itil4',
  'cis-pa': 'cert_cis_pa',
  'cis-hr': 'cert_cis_hr',
  'cis-fsm': 'cert_cis_fsm',
  'cis-itsm': 'cert_cis_itsm',
  cad: 'cert_cad',
  csa: 'cert_csa',
}

const stats: Array<{ key: keyof TranslationDict; value: number; prefix?: string }> = [
  { key: 'stat_certs', value: 8 },
  { key: 'stat_exp', value: 3, prefix: '3+' },
  { key: 'stat_clients', value: 10 },
]

const realisationTranslationKeys: Record<
  string,
  {
    title: keyof TranslationDict
    oneliner: keyof TranslationDict
    level: keyof TranslationDict
    context: keyof TranslationDict
    problem?: keyof TranslationDict
    solution: keyof TranslationDict
    impact: keyof TranslationDict
  }
> = {
  'iam-paie': {
    title: 'real_iam_title',
    oneliner: 'real_iam_hook',
    level: 'badge_auto',
    context: 'real_iam_ctx',
    problem: 'real_iam_pb',
    solution: 'real_iam_sol',
    impact: 'real_iam_imp',
  },
  'debug-ritm': {
    title: 'real_ritm_title',
    oneliner: 'real_ritm_hook',
    level: 'badge_prod',
    context: 'real_ritm_ctx',
    problem: 'real_ritm_pb',
    solution: 'real_ritm_sol',
    impact: 'real_ritm_imp',
  },
  'platform-analytics': {
    title: 'real_pa_title',
    oneliner: 'real_pa_hook',
    level: 'badge_mig',
    context: 'real_pa_ctx',
    problem: 'real_pa_pb',
    solution: 'real_pa_sol',
    impact: 'real_pa_imp',
  },
  'itsm-multi': {
    title: 'real_itsm_title',
    oneliner: 'real_itsm_hook',
    level: 'badge_proj',
    context: 'real_itsm_ctx',
    problem: 'real_itsm_pb',
    solution: 'real_itsm_sol',
    impact: 'real_itsm_imp',
  },
  'tma-multi': {
    title: 'real_tma_title',
    oneliner: 'real_tma_hook',
    level: 'badge_multi',
    context: 'real_tma_ctx',
    solution: 'real_tma_sol',
    impact: 'real_tma_imp',
  },
  'ldap-iam': {
    title: 'real_ldap_title',
    oneliner: 'real_ldap_hook',
    level: 'badge_iam_gov',
    context: 'real_ldap_ctx',
    problem: 'real_ldap_pb',
    solution: 'real_ldap_sol',
    impact: 'real_ldap_imp',
  },
}

export function getCv(lang: Lang): CVData {
  const t = translations[lang]

  return {
    ...cv,
    title: t.landing_subtitle_title,
    bio: t.bio,
    contact: {
      ...cv.contact,
      experience: t.contact_experience,
    },
    stats: stats.map((stat) => ({
      label: t[stat.key] as string,
      value: stat.value,
      prefix: stat.prefix,
    })),
    certifications: cv.certifications.map((cert) => ({
      ...cert,
      description: t[certDescriptionKeys[cert.id]] as string,
    })),
    softSkills: t.softSkills,
    education: cv.education.map((edu) => ({
      ...edu,
      degree: t.edu_degree,
      specialty: t.edu_specialty,
    })),
    languages: [
      { name: t.lang_french, level: t.lang_french_level },
      { name: t.lang_english, level: t.lang_english_level },
    ],
    experiences: cv.experiences.map((group) => ({
      ...group,
      location: trString(t, group.location),
      period: trPeriod(t, group.period),
      missions: group.missions.map((mission) => ({
        ...mission,
        period: trPeriod(t, mission.period),
        role: trString(t, mission.role),
        project: trString(t, mission.project),
        tasks: trStringArray(t, mission.tasks),
      })),
    })),
    realisations: cv.realisations.map((item) => {
      const keys = realisationTranslationKeys[item.id]
      if (!keys) return item

      return {
        ...item,
        title: t[keys.title] as string,
        oneliner: t[keys.oneliner] as string,
        level: t[keys.level] as string,
        context: t[keys.context] as string,
        problem: keys.problem ? (t[keys.problem] as string) : undefined,
        solution: t[keys.solution] as string[],
        impact: t[keys.impact] as string[],
      }
    }),
  }
}

export default cv
