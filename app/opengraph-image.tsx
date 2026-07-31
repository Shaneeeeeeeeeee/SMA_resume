import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt =
  'Sheena Mae Arquillo, Full-Stack Developer and Data Analyst. Production software and applied analytics.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#12100c',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              width: 14,
              height: 14,
              borderRadius: 999,
              background: '#ffd000',
            }}
          />
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              letterSpacing: 6,
              color: '#a89880',
              textTransform: 'uppercase',
            }}
          >
            Portfolio
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 92,
              fontWeight: 700,
              color: '#f5efe4',
              letterSpacing: -3,
              lineHeight: 1.05,
            }}
          >
            Sheena Mae Arquillo
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 18,
              width: 140,
              height: 5,
              borderRadius: 999,
              background: '#ffd000',
            }}
          />
          <div
            style={{
              display: 'flex',
              marginTop: 30,
              fontSize: 34,
              color: '#f5efe4',
              letterSpacing: -0.5,
            }}
          >
            I build production software and turn data into decisions.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {[
            'Full-Stack Developer',
            'Data Analyst',
            'Project Lead',
          ].map((label) => (
            <div
              key={label}
              style={{
                display: 'flex',
                fontSize: 24,
                color: '#a89880',
                letterSpacing: 1,
              }}
            >
              {label}
            </div>
          ))}
          <div style={{ display: 'flex', flexGrow: 1 }} />
          <div style={{ display: 'flex', fontSize: 24, color: '#ffd000' }}>
            10+ live demos
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
