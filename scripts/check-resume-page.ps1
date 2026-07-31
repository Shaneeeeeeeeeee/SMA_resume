# Verifies /resume still prints to a single page.
# Requires `npm run dev` running on http://localhost:3000.
#   powershell -ExecutionPolicy Bypass -File scripts\check-resume-page.ps1

$browser = "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $browser)) { $browser = "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe" }
if (-not (Test-Path $browser)) { Write-Error 'Microsoft Edge not found.'; exit 1 }

$out = Join-Path $env:TEMP 'resume-page-check.pdf'
if (Test-Path $out) { Remove-Item $out -Force }

& $browser --headless=new --disable-gpu --no-sandbox --no-first-run --no-pdf-header-footer `
  --run-all-compositor-stages-before-draw --virtual-time-budget=8000 `
  --print-to-pdf="$out" 'http://localhost:3000/resume' 2>&1 | Out-Null
Start-Sleep -Seconds 1

if (-not (Test-Path $out)) { Write-Error 'PDF was not created.'; exit 1 }

$text = [Text.Encoding]::GetEncoding(28591).GetString([IO.File]::ReadAllBytes($out))
$pages = ([regex]::Matches($text, '/Type\s*/Page[^s]')).Count

if ($pages -eq 1) {
  Write-Output "OK: resume prints to 1 page. PDF at $out"
} else {
  Write-Output "FAIL: resume prints to $pages pages. Trim content in app/resume/page.tsx."
  exit 1
}
