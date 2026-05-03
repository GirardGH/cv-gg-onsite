import type { Lang } from '@/contexts/LanguageContext'

const fr = {
  /* ── Navigation ── */
  nav_home: 'Accueil',
  nav_download: 'Télécharger CV',
  nav_viewCV: 'Voir le CV',
  nav_back: '← Accueil',
  theme_toggle: 'Basculer dark/light mode',
  theme_light: 'Passer en mode clair',
  theme_dark: 'Passer en mode sombre',
  profile_photo_alt: 'Photo de profil de Ghislain GIRARD',
  metadata_title: 'Ghislain GIRARD - Consultant ServiceNow',
  metadata_description:
    'Portfolio interactif de Ghislain GIRARD, Consultant Technique ServiceNow certifié (8 certifications). Expertise ITSM, FSM, CSM.',

  /* ── Landing ── */
  landing_badge: 'LinkedIn',
  landing_subtitle_title: 'Consultant Technique ServiceNow',
  landing_tagline: 'Toulouse · Disponible · Certifié 8× ServiceNow',
  landing_cta_view: 'Voir le CV',
  landing_cta_download: 'Télécharger CV',
  landing_scroll_label: 'Réalisations',

  /* ── Stats ── */
  stat_certs: 'certifications',
  stat_exp: "ans d'expérience",
  stat_clients: 'clients',

  /* ── Réalisations section ── */
  real_section_label: 'Portfolio technique',
  real_title: 'Mes',
  real_highlight: 'Réalisations',
  real_title2: 'clés',
  real_desc: 'Problèmes concrets rencontrés sur le terrain — solutions techniques déployées — impact mesurable.',
  real_cta: 'Voir le CV complet',
  real_context: 'Contexte',
  real_problem: 'Problème',
  real_solution: 'Solution',
  real_impact: 'Impact',

  /* ── CV page ── */
  cv_section_label: 'Consultant Technique ServiceNow',
  cv_experiences_title: 'Expériences Professionnelles',
  cv_experiences_sub: '3 ans · 10 clients · 3 ESN',

  /* ── Sidebar ── */
  sidebar_contact: 'Contact',
  sidebar_certs: 'Certifications',
  sidebar_skills: 'Compétences Techniques',
  sidebar_soft: 'Soft Skills',
  sidebar_education: 'Formation',
  sidebar_languages: 'Langues',

  /* ── Tag filter ── */
  filter_active: 'Filtre actif :',
  filter_info: 'seules les missions correspondantes sont mises en avant.',
  filter_reset: 'Reset',

  /* ── Timeline ── */
  timeline_title: 'Parcours ESN',
  timeline_now: 'Auj.',
  timeline_view: 'Voir',

  /* ── Bio ── */
  bio: "Consultant technique ServiceNow avec une expertise couvrant plusieurs modules notamment ITSM, FSM et CSM. Autonome, orienté solutions et à l'aise en environnement multi-clients — je me distingue par une approche d'analyse en profondeur, renforcée par une double compétence technique et fonctionnelle.",

  /* ── Soft skills ── */
  softSkills: [
    'Aisance relationnelle',
    "Gestion d'ateliers",
    'Collaboration transverse',
    'Gestion des conflits',
    'Leadership',
    'Résolution complexe',
  ],

  /* ── Education ── */
  edu_degree: 'Bachelor Informatique',
  edu_specialty: 'Spécialité JavaScript',

  /* ── Languages ── */
  lang_french: 'Français',
  lang_french_level: 'Langue maternelle',
  lang_english: 'Anglais',
  lang_english_level: 'B2',

  /* ── Contact ── */
  contact_experience: "3+ ans d'expérience ServiceNow",
  period_current: 'Actuellement',

  /* ── Certifications descriptions ── */
  cert_cis_df: 'Maîtrise des fondations de la gestion des données sur la plateforme ServiceNow.',
  cert_itil4: 'Référentiel mondial de la gestion des services IT, couvrant les principes directeurs et les pratiques ITSM.',
  cert_cis_pa: 'Expertise en création de tableaux de bord, rapports et indicateurs sur ServiceNow.',
  cert_cis_hr: 'Implémentation des modules RH ServiceNow (HR Service Delivery, Employee Center).',
  cert_cis_fsm: 'Gestion des interventions terrain, planification et dispatch des techniciens sur ServiceNow FSM.',
  cert_cis_itsm: "Mise en œuvre de l'ITSM ServiceNow : incidents, problèmes, changements et demandes.",
  cert_cad: "Développement d'applications ServiceNow : scripting, Flow Designer, Service Portal, Studio.",
  cert_csa: 'Administration complète de la plateforme ServiceNow : configuration, sécurité, utilisateurs, groupes.',

  /* ── ESN locations ── */
  esn_eviden_loc: 'Centre de Service multi-clients',
  esn_dv_paris_loc: 'N Platform — Levallois-Perret (92)',
  esn_dv_toulouse_loc: "Centre d'Excellence ServiceNow",

  /* ── Experience roles ── */
  role_tech: 'Consultant Technique ServiceNow',
  role_func: 'Consultant Fonctionnel ServiceNow',
  role_tma: 'Consultant Technique ServiceNow · TMA multi-clients',

  /* ── Eviden tasks ── */
  eviden_t1: 'Gestion des incidents, problèmes et demandes de service sur environnements CSM, HR, ITSM',
  eviden_t2: "Analyse technique approfondie et résolution d'incidents complexes (scripting, debugging, optimisation)",
  eviden_t3: "Support aux utilisateurs et accompagnement dans l'utilisation de la plateforme",
  eviden_t4: "Configuration MFA · Développement et maintenance d'évolutions mineures et correctives",
  eviden_t5: "Revue de configurations et correction d'anomalies post-MEP · Documentation technique",
  eviden_t6: 'Collaboration avec les équipes fonctionnelles et les managers de service',
  eviden_t7: "Participation aux opérations de clone d'instance et gestion des releases (préparation, validation, support post-MEP)",

  /* ── Safran tasks ── */
  safran_proj: "Développement offres de service — binôme Service Owner",
  safran_t1: 'Support et administration (utilisateurs & groupes)',
  safran_t2: "Rédaction de documentation d'utilisation des offres de service",
  safran_t3: "Analyses et élaboration fonctionnelle d'offres avec équipes transverses",
  safran_t4: 'Création des offres de service (partie frontend : catalog UI Policy, Client Script) pour les démonstrations aux équipes transverses',
  safran_t5: 'Rédaction spécifications technico-fonctionnelles (catalog item)',
  safran_t6: 'Animation ateliers de formation · Guides techniques traitement tickets',

  /* ── HWI tasks ── */
  hwi_proj: 'Implémentation ITSM — instance partagée multi-sociétés',
  hwi_t1: 'Import données de fondation : company, location, department, CMDB, asset',
  hwi_t2: 'Configuration SSO via OKTA · Provisioning ORACLE',
  hwi_t3: "Intégration boîte mail IMAP / MO365 (Auth 2.0)· Automatisation création d'incidents",
  hwi_t4: 'Création ACL et UI Actions pour accès tables CMDB',
  hwi_t5: 'Business Rules (Query) pour ségréguer données entre deux compagnies',
  hwi_t6: 'Configuration catalogues de services dans la taxonomie existante',
  hwi_t7: 'Portail dynamique multi-company · Widgets Angular JS (user criteria)',
  hwi_t8: 'Script de redirection portail / back-office selon les rôles',
  hwi_t9: "Création documents techniques et guides d'utilisation",

  /* ── Avril tasks ── */
  avril_proj: 'Gestion TMA',
  avril_t1: 'Traitement des tickets incidents',
  avril_t2: 'Diagnostic et résolution des problèmes',
  avril_t3: 'Suivi, reporting · Scripting, tests et débogages',

  /* ── Sequens tasks ── */
  sequens_proj: 'Portail ITSM — équipe 4 consultants',
  sequens_t1: "Ateliers d'élaboration de catalogues de services (recueil besoins)",
  sequens_t2: 'Développement catalogues : frontend + workflow · Règles métier',
  sequens_t3: 'Création et gestion de widgets · Notifications branding',
  sequens_t4: 'Test UAT, mise en production · Documentations techniques',

  /* ── Realisations ── */
  real_iam_title: 'Synchronisation IAM & données de paie',
  real_iam_hook: "Incohérences IAM indétectables → moteur de comparaison automatisé from scratch",
  real_iam_ctx: "Projet de contrôle de cohérence entre identités IAM et données RH importées via Excel.",
  real_iam_pb: "Aucune visibilité sur les écarts entre les systèmes → erreurs non détectées (manager, localisation, statut…).",
  real_iam_sol: ["Conception d'une table dédiée ServiceNow", "Import automatisé via Data Sources + Transform Maps (3 onglets)", "Développement d'un moteur de comparaison (Script Include)", 'Ajout de flags de validation + indicateur "à corriger"', "Mise en place d'une UI Action pour lancer l'analyse","Conception d'un mécanisme de correction des écarts (UI Action + logique serveur)"],
  real_iam_imp: ["Détection automatique des incohérences (avant invisibles)", "Réduction du temps d'analyse manuel (~50%)", "Mise en place d'une capacité de correction semi-automatisée" ,"Fiabilisation des données IAM sur l'ensemble du périmètre"],

  real_ritm_title: 'Correction de pertes de variables sur RITM',
  real_ritm_hook: "Bug critique bloquant les commandes corrigé en production — variables perdues sur Order Guide",
  real_ritm_ctx: "Problème sur génération de RITM enfants via Order Guide en production.",
  real_ritm_pb: "Certaines variables n'étaient pas persistées (sc_item_option / mtom vides) → ~30% des commandes impactées.",
  real_ritm_sol: ["Analyse des logs Flow Designer", "Identification du décalage entre création RITM et injection variables", "Debug du mécanisme checkout / remplacement", "Mise en place de contrôles et logs de validation"],
  real_ritm_imp: ["Correction d'un bug critique impactant ~30% des commandes", "Stabilisation complète des processus de commande", "Meilleure traçabilité — zéro régression post-fix"],

  real_pa_title: 'Migration Reporting vers Platform Analytics',
  real_pa_hook: "100% des rapports Core UI migrés vers PA — zéro perte de données",
  real_pa_ctx: "Migration des rapports Core UI vers Platform Analytics (release Australia).",
  real_pa_pb: "Fonctionnalités différentes + gestion complexe des dashboards et scheduled reports → risque de régression.",
  real_pa_sol: ["Analyse des écarts Core UI vs PA", "Conception de dashboards avec indicateurs automatisés", "Documentation et support client", "Préparation stratégie de migration via Migration Center"],
  real_pa_imp: ["Transition sécurisée — 100% des rapports migrés sans perte", "Adoption facilitée côté client (~2x plus rapide que prévu)", "Anticipation des évolutions ServiceNow sur 2 releases"],

  real_itsm_title: 'Déploiement ITSM sur instance multi-sociétés',
  real_itsm_hook: "Instance ITSM partagée entre 2 entités — ségrégation des données garantie dès J1",
  real_itsm_ctx: "Implémentation ITSM sur instance partagée entre plusieurs entités (HWI by Calderys).",
  real_itsm_pb: "Besoin de ségrégation stricte des données et d'un portail adapté à chaque société sans doublon d'infrastructure.",
  real_itsm_sol: ["Mise en place Business Rules de filtrage par compagnie (BR query)", "Configuration SSO via OKTA", "Développement portail dynamique multi-company (Angular JS)", "Automatisation création incidents via intégration email IMAP"],
  real_itsm_imp: ["Ségrégation des données 100% garantie entre les 2 entités", "Réduction des tickets manuels (~40% via automatisation email)", "Déploiement livré dans les délais — 0 incident de sécurité post-go-live"],

  real_tma_title: 'Support & évolutions ServiceNow multi-clients',
  real_tma_hook: "7 clients maintenus en parallèle — SLA respectés, évolutions livrées en continu",
  real_tma_ctx: "Gestion TMA sur plusieurs clients simultanés (Pacifica, S2E, Orange Business…).",
  real_tma_sol: ["Résolution d'incidents complexes (scripting, debugging, optimisation)", "Développement d'évolutions (Business Rules, Flow Designer, Portal)", "Support utilisateurs & documentation technique", "Participation aux opérations de clone et gestion des releases"],
  real_tma_imp: ["SLA incidents respectés sur 7 environnements clients", "Évolutions livrées en continu sans interruption de service", "Satisfaction client maintenue sur l'ensemble du périmètre CDS"],

  real_ldap_title: 'Alignement des identités LDAP & IAM',
  real_ldap_hook: 'Incohérences entre annuaire LDAP et IAM → fiabilisation des identités',
  real_ldap_ctx: 'Projet de comparaison entre les données issues du LDAP et la table IAM ServiceNow.',
  real_ldap_pb: 'Divergences entre les systèmes sur des champs clés : login, type de contrat, localisation, matricule, département…',
  real_ldap_sol: ['Mapping des champs LDAP vers IAM', 'Import des données LDAP dans une table dédiée', 'Développement d’un Script Include centralisé pour comparer les identités', 'Détection des divergences et des doublons', 'Gestion des règles spécifiques de transformation et de normalisation'],
  real_ldap_imp: ['Alignement des données entre LDAP et IAM', 'Réduction des erreurs de provisioning', 'Meilleure gouvernance des identités', 'Analyse plus rapide des écarts entre systèmes'],

  /* ── Realisation badges ── */
  badge_auto: 'Automatisation',
  badge_prod: 'Production',
  badge_mig: 'Migration',
  badge_proj: 'Projet complexe',
  badge_multi: 'Multi-clients',
  badge_iam_gov: 'Gouvernance IAM',
}

const en: typeof fr = {
  /* ── Navigation ── */
  nav_home: 'Home',
  nav_download: 'Download CV',
  nav_viewCV: 'View CV',
  nav_back: '← Home',
  theme_toggle: 'Toggle dark/light mode',
  theme_light: 'Switch to light mode',
  theme_dark: 'Switch to dark mode',
  profile_photo_alt: 'Profile photo of Ghislain GIRARD',
  metadata_title: 'Ghislain GIRARD - ServiceNow Consultant',
  metadata_description:
    'Interactive portfolio of Ghislain GIRARD, certified ServiceNow Technical Consultant (8 certifications). ITSM, FSM and CSM expertise.',

  /* ── Landing ── */
  landing_badge: 'LinkedIn', //modif here
  landing_subtitle_title: 'ServiceNow Technical Consultant',
  landing_tagline: 'Toulouse · Available · ServiceNow Certified ×8',
  landing_cta_view: 'View CV',
  landing_cta_download: 'Download CV',
  landing_scroll_label: 'Achievements',

  /* ── Stats ── */
  stat_certs: 'certifications',
  stat_exp: 'years of experience',
  stat_clients: 'clients',

  /* ── Réalisations section ── */
  real_section_label: 'Technical Portfolio',
  real_title: 'Key',
  real_highlight: 'Achievements',
  real_title2: '',
  real_desc: 'Real-world problems encountered on the field — technical solutions deployed — measurable impact.',
  real_cta: 'View Full CV',
  real_context: 'Context',
  real_problem: 'Problem',
  real_solution: 'Solution',
  real_impact: 'Impact',

  /* ── CV page ── */
  cv_section_label: 'ServiceNow Technical Consultant',
  cv_experiences_title: 'Professional Experience',
  cv_experiences_sub: '3 years · 10 clients · 3 companies',

  /* ── Sidebar ── */
  sidebar_contact: 'Contact',
  sidebar_certs: 'Certifications',
  sidebar_skills: 'Technical Skills',
  sidebar_soft: 'Soft Skills',
  sidebar_education: 'Education',
  sidebar_languages: 'Languages',

  /* ── Tag filter ── */
  filter_active: 'Active filter:',
  filter_info: 'only matching missions are highlighted.',
  filter_reset: 'Reset',

  /* ── Timeline ── */
  timeline_title: 'Career Path',
  timeline_now: 'Now',
  timeline_view: 'View',

  /* ── Bio ── */
  bio: "ServiceNow Technical Consultant with expertise spanning multiple modules including ITSM, FSM and CSM. Autonomous, solution-driven and at ease in multi-client environments — I stand out through an in-depth analytical approach, backed by both technical and functional expertise.",

  /* ── Soft skills ── */
  softSkills: [
    'Interpersonal skills',
    'Workshop facilitation',
    'Cross-functional collaboration',
    'Conflict management',
    'Leadership',
    'Complex problem-solving',
  ],

  /* ── Education ── */
  edu_degree: "Bachelor's in Computer Science",
  edu_specialty: 'JavaScript Specialization',

  /* ── Languages ── */
  lang_french: 'French',
  lang_french_level: 'Native',
  lang_english: 'English',
  lang_english_level: 'B2',

  /* ── Contact ── */
  contact_experience: "3+ years ServiceNow experience",
  period_current: 'Present',

  /* ── Certifications descriptions ── */
  cert_cis_df: 'Mastery of data management foundations on the ServiceNow platform.',
  cert_itil4: 'Global IT service management framework covering guiding principles and ITSM practices.',
  cert_cis_pa: 'Expertise in creating dashboards, reports and KPIs on ServiceNow.',
  cert_cis_hr: 'Implementation of ServiceNow HR modules (HR Service Delivery, Employee Center).',
  cert_cis_fsm: 'Field operations management, scheduling and dispatch of technicians on ServiceNow FSM.',
  cert_cis_itsm: 'Implementation of ServiceNow ITSM: incidents, problems, changes and service requests.',
  cert_cad: 'ServiceNow application development: scripting, Flow Designer, Service Portal, Studio.',
  cert_csa: 'Full ServiceNow platform administration: configuration, security, users, groups.',

  /* ── ESN locations ── */
  esn_eviden_loc: 'Multi-client Service Center',
  esn_dv_paris_loc: 'N Platform — Levallois-Perret (92)',
  esn_dv_toulouse_loc: 'ServiceNow Centre of Excellence',

  /* ── Experience roles ── */
  role_tech: 'ServiceNow Technical Consultant',
  role_func: 'ServiceNow Functional Consultant',
  role_tma: 'ServiceNow Technical Consultant · Multi-client TMA',

  /* ── Eviden tasks ── */
  eviden_t1: 'Incident, problem and service request management across CSM, HR and ITSM environments',
  eviden_t2: 'In-depth technical analysis and resolution of complex incidents (scripting, debugging, optimization)',
  eviden_t3: 'User support and guidance on platform usage',
  eviden_t4: 'MFA configuration · Development and maintenance of minor and corrective updates',
  eviden_t5: 'Configuration reviews and post-go-live anomaly fixes · Technical documentation',
  eviden_t6: 'Collaboration with functional teams and service managers',
  eviden_t7: 'Participation in instance clone operations and release management (preparation, validation, post-go-live support)',

  /* ── Safran tasks ── */
  safran_proj: "Service offering development — Service Owner pairing",
  safran_t1: 'User and group administration & support',
  safran_t2: 'Writing service offering usage documentation',
  safran_t3: 'Functional analysis and design of offerings with cross-functional teams',
  safran_t4: 'Creation of service offerings (frontend: Catalog UI Policy, Client Script) for cross-functional team demonstrations',
  safran_t5: 'Writing techno-functional specifications (catalog item)',
  safran_t6: 'Training workshop facilitation · Technical ticket handling guides',

  /* ── HWI tasks ── */
  hwi_proj: 'ITSM implementation — shared multi-company instance',
  hwi_t1: 'Foundation data import: company, location, department, CMDB, asset',
  hwi_t2: 'SSO configuration via OKTA · ORACLE provisioning',
  hwi_t3: 'IMAP / MO365 mailbox integration (Auth 2.0)· Automated incident creation',
  hwi_t4: 'ACL and UI Action creation for CMDB table access',
  hwi_t5: 'Business Rules (Query) to segregate data between two companies',
  hwi_t6: 'Service catalog configuration within existing taxonomy',
  hwi_t7: 'Dynamic multi-company portal · Angular JS widgets (user criteria)',
  hwi_t8: 'Portal / back-office redirect script based on roles',
  hwi_t9: 'Technical documentation and user guides',

  /* ── Avril tasks ── */
  avril_proj: 'TMA Management',
  avril_t1: 'Incident ticket processing',
  avril_t2: 'Diagnosis and problem resolution',
  avril_t3: 'Tracking, reporting · Scripting, testing and debugging',

  /* ── Sequens tasks ── */
  sequens_proj: 'ITSM Portal — 4-consultant team',
  sequens_t1: 'Service catalog design workshops (requirements gathering)',
  sequens_t2: 'Catalog development: frontend + workflow · Business rules',
  sequens_t3: 'Widget creation and management · Branding notifications',
  sequens_t4: 'UAT testing, go-live · Technical documentation',

  /* ── Realisations ── */
  real_iam_title: 'IAM & Payroll Data Synchronization',
  real_iam_hook: "Undetectable IAM inconsistencies → automated comparison engine built from scratch",
  real_iam_ctx: "Consistency check project between IAM identities and HR data imported via Excel.",
  real_iam_pb: "No visibility on discrepancies between systems → undetected errors (manager, location, status…).",
  real_iam_sol: ["Design of a dedicated ServiceNow table", "Automated import via Data Sources + Transform Maps (3 tabs)", "Development of a comparison engine (Script Include)", 'Addition of validation flags + "to correct" indicator', "Setup of a UI Action to launch the analysis", "Design of a discrepancy correction mechanism (UI Action + server-side logic)"],
  real_iam_imp: ["Automatic detection of inconsistencies (previously invisible)", "~50% reduction in manual analysis time", "Implementation of semi-automated correction capabilities" ,"IAM data reliability across the entire scope"],

  real_ritm_title: 'RITM Variable Loss Fix',
  real_ritm_hook: "Critical bug blocking orders fixed in production — lost variables on Order Guide",
  real_ritm_ctx: "Issue with child RITM generation via Order Guide in production.",
  real_ritm_pb: "Some variables were not persisted (sc_item_option / mtom empty) → ~30% of orders impacted.",
  real_ritm_sol: ["Flow Designer log analysis", "Identification of the gap between RITM creation and variable injection", "Debug of the checkout / replacement mechanism", "Implementation of validation controls and logs"],
  real_ritm_imp: ["Critical bug fixed — impacted ~30% of orders", "Complete stabilization of order processes", "Better traceability — zero post-fix regression"],

  real_pa_title: 'Reporting Migration to Platform Analytics',
  real_pa_hook: "100% of Core UI reports migrated to PA — zero data loss",
  real_pa_ctx: "Migration of Core UI reports to Platform Analytics (Australia release).",
  real_pa_pb: "Different features + complex management of dashboards and scheduled reports → risk of regression.",
  real_pa_sol: ["Gap analysis: Core UI vs PA", "Dashboard design with automated indicators", "Documentation and client support", "Migration strategy preparation via Migration Center"],
  real_pa_imp: ["Secure transition — 100% of reports migrated without loss", "Facilitated client adoption (~2x faster than planned)", "Anticipation of ServiceNow evolutions across 2 releases"],

  real_itsm_title: 'ITSM Deployment on Multi-company Instance',
  real_itsm_hook: "Shared ITSM instance between 2 entities — data segregation guaranteed from day 1",
  real_itsm_ctx: "ITSM implementation on a shared instance between multiple entities (HWI by Calderys).",
  real_itsm_pb: "Need for strict data segregation and a portal tailored to each company without infrastructure duplication.",
  real_itsm_sol: ["Business Rules setup for company-level filtering (BR query)", "SSO configuration via OKTA", "Dynamic multi-company portal development (Angular JS)", "Automated incident creation via IMAP email integration"],
  real_itsm_imp: ["100% data segregation guaranteed between 2 entities", "~40% reduction in manual tickets via email automation", "Delivered on time — 0 security incident post go-live"],

  real_tma_title: 'ServiceNow Multi-client Support & Enhancements',
  real_tma_hook: "7 clients maintained in parallel — SLA met, updates delivered continuously", //modif here
  real_tma_ctx: "TMA management across multiple simultaneous clients (Pacifica, S2E, Orange Business…).",
  real_tma_sol: ["Complex incident resolution (scripting, debugging, optimization)", "Feature development (Business Rules, Flow Designer, Portal)", "User support & technical documentation", "Participation in clone operations and release management"],
  real_tma_imp: ["SLA respected across 7 client environments", "Updates delivered continuously without service interruption", "Client satisfaction maintained across the entire CDS scope"],

  real_ldap_title: 'LDAP & IAM Identity Alignment',
  real_ldap_hook: 'Inconsistencies between LDAP directory and IAM → identity data reliability',
  real_ldap_ctx: 'Comparison project between LDAP data and the ServiceNow IAM identity table.',
  real_ldap_pb: 'Discrepancies across key fields: login, contract type, location, employee ID, department…',
  real_ldap_sol: ['Mapping of LDAP fields to IAM', 'Import of LDAP data into a dedicated table', 'Development of a centralized Script Include to compare identities', 'Detection of discrepancies and duplicates', 'Handling of specific transformation and normalization rules'],
  real_ldap_imp: ['Data alignment between LDAP and IAM', 'Reduced provisioning errors', 'Improved identity governance', 'Faster analysis of discrepancies between systems'],

  /* ── Realisation badges ── */
  badge_auto: 'Automation',
  badge_prod: 'Production',
  badge_mig: 'Migration',
  badge_proj: 'Complex project',
  badge_multi: 'Multi-client',
  badge_iam_gov: 'IAM Governance',
}

export const translations: Record<Lang, typeof fr> = { fr, en }

export type TranslationDict = typeof fr
