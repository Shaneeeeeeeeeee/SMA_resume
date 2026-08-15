/**
 * Canonical site URL. Override with NEXT_PUBLIC_SITE_URL when the site moves
 * to a custom domain; everything else (metadata, sitemap, resume) follows it.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sheena-arquillo.vercel.app'
).replace(/\/$/, '')

/** Display form of the portfolio URL, e.g. "sheena-arquillo.vercel.app". */
export const siteLabel = siteUrl.replace(/^https?:\/\//, '')

export const person = {
  name: 'Sheena Mae Arquillo',
  title: 'Full-Stack Developer | Data Analyst',
  location: 'Batangas, Philippines',
  availability: 'Open to Onsite, Hybrid, or Remote',
  email: 'arquillosheenamae@gmail.com',
  phone: '+63 938 849 7821',
  linkedin: 'https://www.linkedin.com/in/sheena-mae-arquillo-05b169399',
  linkedinLabel: 'linkedin.com/in/sheena-mae-arquillo',
  github: 'https://github.com/ShinArquillo',
  githubLabel: 'github.com/ShinArquillo',
  onlineJobs: 'https://v2.onlinejobs.ph/jobseekers/info/4694400',
} as const
