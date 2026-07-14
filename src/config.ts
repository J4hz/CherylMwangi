/**
 * ─────────────────────────────────────────────────────────────
 *  CAMPAIGN CONFIG — EDIT THIS FILE ONLY
 * ─────────────────────────────────────────────────────────────
 *  Non-developers: everything a campaign volunteer might need to
 *  change lives in this one file. Update a value, save, done.
 *  Keep the quotes. Don't remove the commas.
 * ─────────────────────────────────────────────────────────────
 */

export interface Priority {
  title: string
  text: string
}

export interface Commitment {
  number: string
  title: string
  tagline: string // the short promise, one line
  text: string // a sentence or two explaining it
}

export interface CampaignEvent {
  date: string // e.g. "Sat 14 Aug 2027"
  title: string
  location: string
}

// ── Candidate & campaign identity ────────────────────────────
export const CANDIDATE = {
  firstName: 'Maureen',
  middleName: 'Nyaguthii',
  lastName: "Ndung'u", // Always spelled with the apostrophe.
  fullName: "Maureen Nyaguthii Ndung'u",
  shortName: "Maureen Ndung'u",
  office: 'MCA',
  officeFull: 'Member of County Assembly',
  ward: 'Karen Ward',
  constituency: 'Langata Constituency',
  county: 'Nairobi',
  year: '2027',
}

export const PARTY = {
  name: 'Kenya National Congress',
  abbr: 'KNC',
  tagline: 'The key to a Brighter Kenya',
}

export const SLOGAN = {
  primary: 'Wanawake Wanaweza',
  secondary: 'Ubuntu — I am because we are',
}

// ── Links & contact ──────────────────────────────────────────
export const DOMAIN = 'https://www.votemaureen4karen.co.ke'
export const LINKEDIN_LINK = 'https://www.linkedin.com/in/maureenndungu/'

// WhatsApp: replace the number (international format, no +, no spaces).
// TODO: replace with the real campaign WhatsApp number.
export const WHATSAPP_NUMBER = '254700000000'
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi, I'd like to help the Maureen Ndung'u campaign.",
)}`

// Volunteer form target. TODO: replace with the real form/CRM endpoint.
export const VOLUNTEER_ENDPOINT = 'https://example.com/api/volunteer'

// ── Contribute (M-Pesa) ──────────────────────────────────────
// Shown on the Get Involved page. Update both once confirmed.
// Note: we do NOT claim contributions are anonymous.
export const MPESA = {
  paybill: 'TBA', // TODO: add M-Pesa Paybill number
  account: 'TBA', // TODO: add account name/number
}

// ── Home: top 3 priorities (exactly three) ───────────────────
export const PRIORITIES: Priority[] = [
  {
    title: 'Roads & Lighting',
    text: 'Fix priority roads, drainage, and street lighting across Karen Ward.',
  },
  {
    title: 'Youth & Jobs',
    text: 'Skills training, internships, and support for young entrepreneurs.',
  },
  {
    title: 'Green Karen',
    text: 'Protect green spaces with community-led clean-ups and tree planting.',
  },
]

// ── Plan: the 8 commitments ──────────────────────────────────
export const COMMITMENTS: Commitment[] = [
  {
    number: '01',
    title: 'Mental Health Advocacy',
    tagline: 'Breaking stigma, championing support',
    text: 'Accessible mental health services are vital, ensuring everyone can seek help without fear. Together, we can foster understanding and compassion.',
  },
  {
    number: '02',
    title: 'Early Childhood Education',
    tagline: 'Quality early learning for all',
    text: 'Investing in early childhood education leads to strong futures for children, ensuring they develop the skills needed for lifelong success.',
  },
  {
    number: '03',
    title: 'Adult Literacy & Capacity Building',
    tagline: 'Empowering individuals to succeed',
    text: "It's never too late to learn and grow. Empowering adults through literacy provides essential skills for personal and professional development.",
  },
  {
    number: '04',
    title: 'Public Health Services',
    tagline: 'Reliable health services for all',
    text: 'Accessible healthcare is essential for community wellbeing, ensuring everyone receives the support they need, regardless of their circumstances or location.',
  },
  {
    number: '05',
    title: 'WASH — Water, Sanitation & Hygiene',
    tagline: 'Clean water for all',
    text: 'Access to clean water and sanitation is essential for health, dignity, and empowerment, particularly in addressing menstrual health and hygiene challenges.',
  },
  {
    number: '06',
    title: 'Environmental Health',
    tagline: 'Cleaner, greener neighbourhoods',
    text: 'A healthy environment fosters community wellbeing, encouraging sustainable practices, clean air, and green spaces for all residents to thrive.',
  },
  {
    number: '07',
    title: 'Community Policing',
    tagline: 'Trust and safety together',
    text: 'Community policing emphasises collaboration between law enforcement and residents, fostering stronger bonds and enhancing overall safety within neighbourhoods.',
  },
  {
    number: '08',
    title: 'Wellbeing Economy',
    tagline: 'People first. Always.',
    text: "An economy prioritising community wellbeing ensures that every individual's needs are met, fostering a healthy, thriving society for all.",
  },
]

// ── Get Involved: events ─────────────────────────────────────
// Leave the array EMPTY to hide the events section entirely.
// Add objects to show it. Never use "To Be Announced" text here.
export const EVENTS: CampaignEvent[] = [
  // Example (delete or replace):
  // { date: 'Sat 14 Aug 2027', title: 'Karen Ward Baraza', location: 'Karen Community Hall' },
]

// Volunteer form: how-you'll-help options.
export const HELP_OPTIONS = [
  'Door-to-door',
  'Phone banking',
  'Events',
  'Social media',
]
