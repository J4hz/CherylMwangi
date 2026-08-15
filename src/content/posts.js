/**
 * Blog posts. This and `src/data/content.js` are the two files to edit, nothing
 * else needs touching to publish writing.
 *
 * Two kinds of entry live here.
 *
 *   kind: 'post'   Cheryl's own writing. The default when `kind` is omitted.
 *   kind: 'press'  A piece someone else wrote that quotes her. These exist so
 *                  her media appearances are listed without republishing an
 *                  article she does not own. NEVER paste the full text of a
 *                  press piece into `body`: it belongs to the publication, and
 *                  the byline belongs to its journalist. Summarise her
 *                  contribution in `body`, put only her own words in `quotes`,
 *                  and send readers to `url` for the rest.
 *
 * Each entry:
 *   slug     the URL, /blog/<slug>. Lowercase, hyphens, no spaces. Never change
 *            a slug after a post is public; links to it will break.
 *   title    the headline
 *   date     ISO, 'YYYY-MM-DD'. Drives ordering, newest first.
 *   excerpt  one or two sentences, shown on the index card
 *   tags     short labels, shown under the title
 *   draft    true = written but not live. Drafts are hidden from /blog entirely;
 *            they stay reachable at their direct /blog/<slug> URL for review.
 *            Set to false to publish.
 *   body     the post, one string per paragraph
 *
 * Press entries add:
 *   publication  where it ran
 *   byline       who wrote it. Always credit the journalist.
 *   url          link to the original, or null until it is online
 *   quotes       Cheryl's own words as printed, verbatim, kept short
 *
 * Both posts below are UNREVIEWED DRAFT COPY, written as a starting point for
 * Cheryl to rewrite in her own voice. Neither should be published as-is.
 */

export const POSTS = [
  {
    slug: 'silent-divorce-the-standard',
    kind: 'press',
    title: 'Silent divorce: Is your marriage a partnership or just a routine?',
    date: '2026-08-08',
    publication: 'The Standard, Eve magazine',
    byline: 'Peter Muiruri',
    // TODO: the print edition ran on 8 August 2026 and the piece is not on
    // standardmedia.co.ke yet. Add the link here once it is, and the page will
    // switch from "in the print edition" to a live link on its own.
    url: null,
    excerpt:
      'Cheryl spoke to The Standard about couples who go on sharing a home and raising children long after the marriage itself has quietly ended, and about what keeps them there.',
    tags: ['Press', 'Couples and families'],
    draft: false,
    body: [
      'The Eve cover feature looked at what happens when a marriage keeps all of its outward form, the shared house, the school run, the family gatherings, while the partnership inside it has quietly stopped. Cheryl was asked why couples in that position stay.',
      'Her answer was that the reasons are usually practical rather than romantic. Some stay for the children and will not do anything they think would unsettle them. Some stay for health reasons. Others are held by property and money they built together, where separating would mean one buying the other out and paying for lawyers to do it, and where the asset in question is often the thing they intend to leave to their children.',
      'She also pushed back on the assumption that these are hostile households. In her experience they are frequently not: the couple speak their minds, treat each other decently, and simply operate without romance or emotional connection. What is missing is intimacy, not civility.',
    ],
    quotes: [
      'Some in those marriages stay together because of the children. They will not do anything that will be detrimental to the young ones’ wellbeing. Others may opt to stay due to health reasons.',
      'While such ones speak their minds, they are very good friends despite not sharing in any romance or emotional connection. They usually say, ‘well, this is where we are and nothing is working, so this is how we will live’. They are together apart.',
    ],
  },
  {
    slug: 'understanding-trauma-informed-care',
    title: 'Understanding Trauma-Informed Care: Where to Start',
    date: '2026-08-04',
    excerpt:
      'TBRI and ACEs get named in every training room in Nairobi, often without anyone saying what they change on a Monday morning. Here is the short version.',
    tags: ['Trauma-informed care', 'TBRI', 'ACEs'],
    draft: true,
    body: [
      'Trauma-informed care is one of those phrases that arrives in an organisation before anyone has agreed what it means. It ends up on a policy document, in a funding proposal, on a slide at a staff retreat. Then Monday comes and the same child is still throwing the same chair, and nobody is sure what was supposed to be different.',
      'So it is worth being plain about it. Trauma-informed care is not a curriculum or a therapy. It is a change in the first question you ask. Instead of asking what is wrong with this child, you ask what happened to this child, and then you ask what that would reasonably make a person do. The behaviour stops being the problem to solve and becomes information about the need underneath it.',
      'Two frameworks do most of the work in the rooms I train in. The first is ACEs, Adverse Childhood Experiences, which is essentially a count. Abuse, neglect, a parent lost, a household holding violence or addiction or mental illness. The research finding that made it matter is that these things accumulate, and the accumulation shows up decades later in physical health, not only in mental health. It tells you that early harm is not something a child simply grows out of.',
      'The second is TBRI, Trust-Based Relational Intervention, developed at the Karyn Purvis Institute of Child Development. Where ACEs describes the damage, TBRI describes the repair, and it does so in three parts. Connecting comes first, because a child who does not feel safe with you cannot learn from you. Empowering attends to the body, to sleep, food, water, and sensory regulation, because a dysregulated nervous system does not respond to reasoning. Correcting comes last, and only ever inside a relationship that is already holding.',
      'That order is the part most often lost in translation. Organisations adopt the correcting strategies because they look like discipline and slot neatly into an existing behaviour policy, and they leave the connecting and empowering behind because those look like doing nothing. The result is a house with no foundation, and when it fails people conclude the framework does not work here.',
      'It does work here. But it has to be translated rather than imported. A strategy written for a family home in Texas needs rethinking for a residential facility in Nairobi with forty children and six staff on a night shift, or for a classroom of seventy, or for a family where three generations share four rooms. The principle survives translation. The script usually does not.',
      'If you are starting from nothing, start small and start with the adults. Look at how your staff are doing, because a caregiver running on empty cannot regulate anyone. Then look at your first five minutes, what a child meets when they walk through your door in distress. Then look at what you do when a child is at their worst, and ask honestly whether that response builds trust or spends it.',
      'None of that requires a budget line. It requires a decision about what you believe is happening when a child is difficult, and the patience to hold that belief on the days it is hardest to hold.',
    ],
  },
  {
    slug: 'naming-compassion-fatigue',
    title: 'Naming Compassion Fatigue Before It Names You',
    date: '2026-07-21',
    excerpt:
      'For frontline caregivers and case workers: what compassion fatigue actually looks like from the inside, and why the people most at risk are usually the last to see it.',
    tags: ['Compassion fatigue', 'Frontline staff', 'Self-care'],
    draft: true,
    body: [
      'The caregivers I worry about most are rarely the ones who tell me they are struggling. They are the ones who have stopped mentioning it, because there is always someone in the room whose situation is worse than theirs, and because saying you are tired sounds like saying you have stopped caring.',
      'Compassion fatigue is not burnout, though the two travel together. Burnout is what the workload does to you: too many cases, too few hands, too little support. Compassion fatigue is what the material does to you. It is the cost of sitting with other people\'s trauma, day after day, and letting it reach you. It is, in a real sense, the bill for having been good at the job.',
      'It rarely announces itself. It shows up as small changes you can explain away one at a time. You notice you are flat where you used to be moved. A case file you would once have read twice you now skim. You find yourself irritated by a client\'s slow progress and then ashamed of the irritation. You start dreading a particular kind of story, or avoiding a particular case, and you tell yourself you are being efficient.',
      'It shows up in the body before it shows up in words. Sleep goes first for most people, either not arriving or not restoring. Then the small illnesses that will not clear. Then a startle response that is out of proportion, or a strange numbness driving home, or the sense of watching yourself work from slightly outside your own body.',
      'And it follows you home, which is the part that does the real damage. The patience you cannot find for your own children, the conversation with your spouse you cannot stay present in, the friendships that quietly thin because you have nothing left to bring. People often notice the effect on their family long before they connect it to their work.',
      'The reason it goes unnamed so long is that the profession has made it shameful. We have built a story in which caring is limitless and needing something back is a defect of character. In faith-based settings this can harden further, into a belief that exhaustion in service of others is evidence of commitment rather than a warning. So the people carrying the most say the least, and they keep saying nothing until something breaks.',
      'What helps is less dramatic than people expect. It is not an annual wellness day. It is a colleague who asks a real question and waits for the answer. It is supervision that is genuinely about you and not a case audit in disguise. It is a caseload someone is actually watching, and a manager who treats an untaken leave day as a problem rather than a virtue. It is your own supervision or therapy, which is not an admission of weakness but ordinary maintenance for anyone who works with trauma.',
      'And it is naming it early, out loud, to someone. Not because naming it fixes anything, but because compassion fatigue does its worst work in silence, and it loses a great deal of its power the moment it has a name and a witness.',
      'If you read this and recognised yourself somewhere in it, that recognition is not a failure. It is the most useful thing that could have happened today.',
    ],
  },
]

/** Live posts, newest first. Drafts never appear here. */
export const publishedPosts = POSTS.filter((post) => !post.draft).sort((a, b) =>
  b.date.localeCompare(a.date),
)

/** Look up any post by slug, draft or not, direct URLs still work for review. */
export function findPost(slug) {
  return POSTS.find((post) => post.slug === slug)
}

/** '2026-08-04' → '4 August 2026'. Fixed locale so it reads the same everywhere. */
export function formatDate(iso) {
  const date = new Date(`${iso}T00:00:00`)
  if (Number.isNaN(date.getTime())) return iso
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}
