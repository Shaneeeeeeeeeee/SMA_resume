/**
 * Real TVP ops UI with live numbers destroyed via pixelate + blur.
 * Sidebar + title bar stay sharp.
 */
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const assetsDir =
  'C:/Users/Admin/.cursor/projects/c-Users-Admin-Desktop-PROJECTS-RESUME/assets'
const outDir = path.join(__dirname, '../public/images/projects')

const jobs = [
  {
    in: `${assetsDir}/c__Users_Admin_AppData_Roaming_Cursor_User_workspaceStorage_82019bc36bb53b29ecb4b2bd784450dc_images_image-79b837a1-ad24-4f1b-a1bf-a6d3c5cf5c22.png`,
    out: 'tvp-ops-leads.png',
    sidebar: 0.2,
    header: 0.12,
  },
  {
    in: `${assetsDir}/c__Users_Admin_AppData_Roaming_Cursor_User_workspaceStorage_82019bc36bb53b29ecb4b2bd784450dc_images_image-b7427e6b-1f0f-4270-9821-ac595694dbc4.png`,
    out: 'tvp-ops-overview.png',
    sidebar: 0.065,
    header: 0.12,
  },
  {
    in: `${assetsDir}/c__Users_Admin_AppData_Roaming_Cursor_User_workspaceStorage_82019bc36bb53b29ecb4b2bd784450dc_images_image-9a28eb0d-856d-4add-a0b8-30e9dcc9f2b8.png`,
    out: 'tvp-ops-diagnostics-traffic.png',
    sidebar: 0.065,
    header: 0.12,
  },
  {
    in: `${assetsDir}/c__Users_Admin_AppData_Roaming_Cursor_User_workspaceStorage_82019bc36bb53b29ecb4b2bd784450dc_images_image-49c7d1ed-a071-457a-a985-fef60d588e47.png`,
    out: 'tvp-ops-diagnostics-ads.png',
    sidebar: 0.065,
    header: 0.12,
  },
]

async function scrambleRegion(inputPath, left, top, w, h) {
  // Pixelate first so digits cannot survive upscale, then soft blur
  const tinyW = Math.max(12, Math.round(w / 22))
  const tinyH = Math.max(10, Math.round(h / 22))
  return sharp(inputPath)
    .extract({ left, top, width: w, height: h })
    .resize(tinyW, tinyH, { kernel: 'nearest' })
    .resize(w, h, { kernel: 'nearest' })
    .blur(3)
    .toBuffer()
}

async function processJob(job) {
  const meta = await sharp(job.in).metadata()
  const width = meta.width
  const height = meta.height

  const left = Math.round(job.sidebar * width)
  const top = Math.round(job.header * height)
  const w = width - left
  const h = height - top

  const scrambled = await scrambleRegion(job.in, left, top, w, h)

  const chipW = 168
  const chipH = 26
  const chip = Buffer.from(
    `<svg width="${chipW}" height="${chipH}" xmlns="http://www.w3.org/2000/svg">` +
      `<rect width="100%" height="100%" rx="7" fill="rgba(26,20,14,0.78)"/>` +
      `<text x="${chipW / 2}" y="17" text-anchor="middle" fill="#f0b400" font-family="ui-monospace,monospace" font-size="10">NUMBERS BLURRED</text></svg>`
  )

  const out = path.join(outDir, job.out)
  await sharp(job.in)
    .composite([
      { input: scrambled, left, top },
      { input: chip, left: width - chipW - 14, top: height - chipH - 10 },
    ])
    .png()
    .toFile(out)

  console.log('wrote', out, `(scrambled ${w}x${h} from ${left},${top})`)
}

;(async () => {
  // Remove any stale preview variants
  for (const f of fs.readdirSync(outDir)) {
    if (f.startsWith('tvp-ops-') && f.endsWith('.png')) {
      // will overwrite below
    }
  }
  for (const job of jobs) await processJob(job)
})().catch((err) => {
  console.error(err)
  process.exit(1)
})
