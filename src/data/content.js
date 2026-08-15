/**
 * Every word on the site that isn't a blog post lives here. Blog posts are in
 * `src/content/posts.js`. Nothing else needs editing to change the copy.
 */

export const PROFILE = {
  firstName: 'Cheryl',
  middleInitial: 'N.',
  lastName: 'Mwangi',
  fullName: 'Cheryl N. Mwangi',
  monogram: 'CNM',
  title: 'Trauma-Informed Care Practitioner, Trainer & Organizational Consultant',
  credentialBadge: 'Certified TBRI Practitioner',
  pullQuote: "Trauma doesn't check ID. Neither does she.",
  location: 'Nairobi, Kenya',
}

/** Header nav. Absolute paths, every link has to work from every page. */
export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Practice', to: '/practice' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export const HERO = {
  eyebrow: 'Trauma-Informed Care Practitioner · Nairobi',
  headline: 'Steady ground for people',
  headlineEmphasis: 'in the hardest seasons',
  lede: "Cheryl Mwangi's clinical work runs from grieving mothers on maternity wards to survivors rebuilding after violence, addiction, and catastrophic injury. Trauma is the thread through all of it, in whatever form it takes, and whoever it reaches.",
}

/**
 * The signature band. Six rooms she has actually worked in, stepping from the
 * lightest green to the deepest, the site's stand-in for a portrait, and the
 * one place the whole practice is visible at a glance.
 */
export const ROOMS = [
  { place: 'Maternity ward', work: 'Grief and loss' },
  { place: 'Surgical recovery', work: 'Psychotherapy' },
  { place: 'Spinal injury unit', work: 'Life after injury' },
  { place: 'Residential care', work: 'Children and families' },
  { place: 'Recovery program', work: 'Women in treatment' },
  { place: 'Schools and community', work: 'Training and safeguarding' },
]

export const ABOUT_PARAGRAPHS = [
  "For over a decade, Cheryl has worked across hospitals, residential care programs, faith-based institutions, and community settings in Nairobi. She's sat with grieving mothers on maternity wards, walked alongside survivors of gender-based violence, supported women rebuilding their lives after addiction, and helped patients adjust to life after catastrophic injury, alongside sustained work with children and families navigating trauma and reintegration.",
  "She's a certified TBRI Practitioner with additional training in Adverse Childhood Experiences (ACEs), and beyond her own caseload she designs assessment tools, treatment protocols, and training programs that other clinicians rely on. She is just as comfortable running a workshop for child protection officers as she is mediating a family conflict or sitting one-on-one with a client working through grief.",
  'Her training in mediation and in play-based trauma work sits underneath all of it. Both come from the same conviction: that people in distress rarely arrive ready to explain themselves in words, and that the work is to find the door they can actually walk through, whether that is a negotiation between two adults who have stopped listening, or a child who will show you in play what they cannot yet say.',
]

export const STATS = [
  { num: '10+', label: 'Years in clinical practice' },
  { num: '8', label: 'Institutions and programs served' },
  { num: 'Full', label: 'Lifespan of care, children to adults' },
  { num: 'TBRI', label: 'Certified practitioner' },
]

export const FOCUS_AREAS = [
  {
    title: 'Trauma-Informed Care & TBRI',
    description:
      'Trust-Based Relational Intervention and ACEs frameworks, applied to real caseloads across every age group.',
    detail:
      'Connecting, empowering, and correcting in that order, translated out of the manual and into homes, classrooms, wards, and residential units where the staffing and the constraints are nothing like the ones the framework was written for.',
  },
  {
    title: 'Clinical Practice',
    description:
      'Individual, group, couples, and family therapy, plus psychological assessment and crisis intervention.',
    detail:
      'Grief and loss, gender-based violence, addiction recovery, adjustment after life-changing injury, and the ordinary weight people carry without a name for it.',
  },
  {
    title: 'Program & Systems Design',
    description:
      'Care models, assessment tools, and treatment protocols built to hold up outside her own caseload.',
    detail:
      'The test of a protocol is whether it still works on a night shift, in the hands of someone who has never met the person who wrote it. That is the standard these are built to.',
  },
  {
    title: 'Training & Capacity Building',
    description:
      'Curriculum design and hands-on training for counselors, caregivers, teachers, and community leaders.',
    detail:
      'Workshops on trauma-informed practice, positive discipline, safeguarding, and compassion fatigue, for staff teams, churches, schools, and government departments.',
  },
  {
    title: 'Child Protection & Safeguarding',
    description:
      'Risk assessment, case management, and family reintegration planning as a Child Protection Focal Point.',
    detail:
      'Including the parts nobody volunteers for: disclosure handling, reporting decisions, and sitting with a family through a reintegration that may not hold.',
  },
  {
    title: 'Mediation & Conflict Resolution',
    description: 'Certified mediator working at the family and community level.',
    detail:
      'Family disputes, separation and custody conversations, and community-level conflict, handled as a structured process rather than a negotiation about who was right.',
  },
]

/** Who actually shows up. Used on the practice page. */
export const WHO_SHE_WORKS_WITH = [
  {
    title: 'Individuals and couples',
    description:
      'Grief, trauma, anxiety, relationship strain, and the long work of recovery. Sessions are confidential and paced to the person, not to a protocol.',
  },
  {
    title: 'Children, caregivers, and families',
    description:
      'Play-based and relational work with children, alongside the adults around them, because a child\'s progress rarely outlasts the environment they return to.',
  },
  {
    title: 'Organizations and frontline teams',
    description:
      'Training, supervision, program design, and safeguarding support for the people whose job is to hold everyone else.',
  },
]

export const CREDENTIALS = [
  {
    award: 'Bachelor of Arts in Counseling Psychology',
    issuer: "St. Paul's University",
  },
  {
    award: 'Certified TBRI Practitioner',
    issuer: 'Karyn Purvis Institute of Child Development · TCU',
  },
  {
    award: 'Registered Member',
    issuer: 'Counsellors and Psychologists Board, Kenya',
  },
  {
    award: 'Certificate in Mediation',
    issuer: 'Mediation Institute / Suluhu Mediation',
  },
  {
    award: 'Healing Through Play',
    issuer: 'Child Trauma Training · Jacaranda Communities of Hope',
  },
]

/** What someone can actually ask for. Used on the contact page. */
export const ENQUIRY_TYPES = [
  {
    title: 'Therapy and consultation',
    description:
      'Individual, couples, and family sessions. Say a little about what is going on and what you are looking for; she will reply with whether she is the right fit and what availability looks like.',
  },
  {
    title: 'Training and speaking',
    description:
      'Workshops and seminars on trauma-informed care, positive parenting, safeguarding, and compassion fatigue, for staff teams, churches, schools, and government departments.',
  },
  {
    title: 'Organizational partnership',
    description:
      'Program design, assessment tools, treatment protocols, and supervision for organizations building trauma-responsive systems.',
  },
]

/**
 * How to reach her. `label` is what the link says, so the reader sees "Email"
 * and not a raw address; `value` is the detail shown underneath, for anyone who
 * wants to copy it or is reading a printout. No entry for this website: linking
 * a site to itself gives the reader nowhere to go.
 */
export const CONTACT_CHANNELS = [
  {
    label: 'Email',
    value: 'traumatherapistke@gmail.com',
    href: 'mailto:traumatherapistke@gmail.com',
  },
  {
    label: 'Phone',
    value: '+254 726 545 617',
    href: 'tel:+254726545617',
  },
  {
    label: 'LinkedIn',
    value: 'cheryl-mwangi-331048272',
    href: 'https://www.linkedin.com/in/cheryl-mwangi-331048272',
  },
]

export const AFFILIATIONS = [
  'Registered Member · Counsellors and Psychologists Board, Kenya',
  'Certified TBRI Practitioner · Karyn Purvis Institute of Child Development, TCU',
]

/** Internal links, footer only. */
export const SITE_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Practice', to: '/practice' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]


/** Flip to false once real, permissioned quotes replace the placeholders. */
export const TESTIMONIALS_PLACEHOLDER = true
