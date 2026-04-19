// ============================================================
// 独自SVGアイコンセット
// stroke-width: 1.5 / strokeLinecap: round / strokeLinejoin: round で統一
// 24x24 viewBox ベース
// ============================================================

const defaultProps = {
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

// --- Services Icons ---

export function IconWebDesign({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} {...defaultProps}>
      <rect x="3" y="3" width="18" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 8l3 3-3 3" />
      <line x1="13" y1="13" x2="17" y2="13" />
    </svg>
  )
}

export function IconAiAutomation({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} {...defaultProps}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3" />
      <path d="M12 19v3" />
      <path d="M2 12h3" />
      <path d="M19 12h3" />
      <path d="M4.93 4.93l2.12 2.12" />
      <path d="M16.95 16.95l2.12 2.12" />
      <path d="M19.07 4.93l-2.12 2.12" />
      <path d="M7.05 16.95l-2.12 2.12" />
      <circle cx="12" cy="12" r="8" strokeDasharray="4 3" />
    </svg>
  )
}

export function IconContent({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z" />
      <path d="M7 8h4" />
      <path d="M7 12h10" />
      <path d="M7 16h7" />
      <circle cx="17" cy="8" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconConsulting({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M12 2C6.48 2 2 5.58 2 10c0 2.24 1.12 4.27 2.93 5.72L4 20l4.35-2.18C9.5 18.27 10.72 18.5 12 18.5c5.52 0 10-3.58 10-8S17.52 2 12 2z" />
      <path d="M9 10h.01" />
      <path d="M12 10h.01" />
      <path d="M15 10h.01" />
    </svg>
  )
}

// --- Feature Icons ---

export function IconSparkle({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M12 3l1.8 5.4L19.2 10l-5.4 1.6L12 17l-1.8-5.4L4.8 10l5.4-1.6L12 3z" />
      <path d="M19 2l.6 1.8L21.4 4.4 19.6 5 19 6.8 18.4 5l-1.8-.6 1.8-.6L19 2z" />
      <path d="M5 18l.5 1.5L7 20l-1.5.5L5 22l-.5-1.5L3 20l1.5-.5L5 18z" />
    </svg>
  )
}

export function IconBolt({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M13 2L4.5 13H12l-1 9 8.5-11H12l1-9z" />
    </svg>
  )
}

export function IconHeart({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M12 6.5C10.5 3.5 6 3 4.5 6s0 6.5 7.5 12.5C19.5 12.5 21 9 19.5 6s-6-2.5-7.5.5z" />
    </svg>
  )
}

// --- Logo ---

export function LogoMark({ className = 'h-8 w-8' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2dd4b0" />
          <stop offset="100%" stopColor="#14b899" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#logo-grad)" />
      {/* 杜 character - custom path for crispness */}
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fill="white"
        fontSize="16"
        fontWeight="700"
        fontFamily="'Noto Sans JP', sans-serif"
      >
        杜
      </text>
    </svg>
  )
}

// --- Social Icons ---

export function IconX({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function IconNote({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      <path d="M8 7h8" />
      <path d="M8 11h5" />
    </svg>
  )
}

export function IconThreads({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.187.408-2.26 1.33-3.017.88-.724 2.104-1.138 3.542-1.199 1.048-.044 2.025.064 2.926.321-.076-1.263-.49-2.198-1.23-2.775-.803-.627-1.91-.937-3.294-.924l-.03-.002c-1.04.014-2.476.315-3.47 1.15l-1.296-1.543C7.594 3.91 9.386 3.49 10.87 3.468h.046c1.837-.018 3.37.44 4.562 1.363 1.253.97 1.963 2.405 2.11 4.273a9.665 9.665 0 012.03 1.168c1.09.776 1.912 1.778 2.384 2.894.786 1.858.878 4.727-1.327 6.883-1.843 1.804-4.147 2.607-7.267 2.633l-.005-.002zm-.99-7.43c-.093 0-.187.003-.282.008-1.661.084-2.467.88-2.416 1.81.037.66.603 1.485 2.124 1.485.094 0 .19-.003.288-.01 1.658-.098 2.482-1.166 2.61-3.382a8.508 8.508 0 00-2.324-.311z" />
    </svg>
  )
}

export function IconGitHub({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

// --- Utility Icons ---

export function IconArrowRight({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  )
}

export function IconExternalLink({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export function IconMail({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 6L2 7" />
    </svg>
  )
}

export function IconChevronRight({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

export function IconImage({ className = 'h-10 w-10' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  )
}

export function IconDocument({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="13" y2="17" />
    </svg>
  )
}

export function IconUser({ className = 'h-16 w-16' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
    </svg>
  )
}

// --- Icon Lookup ---

const serviceIcons = {
  webDesign: IconWebDesign,
  aiAutomation: IconAiAutomation,
  content: IconContent,
  consulting: IconConsulting,
}

const featureIcons = {
  sparkle: IconSparkle,
  bolt: IconBolt,
  heart: IconHeart,
}

const socialIcons = {
  x: IconX,
  note: IconNote,
  threads: IconThreads,
  github: IconGitHub,
}

export function getServiceIcon(key) {
  return serviceIcons[key] || IconWebDesign
}

export function getFeatureIcon(key) {
  return featureIcons[key] || IconSparkle
}

export function getSocialIcon(key) {
  return socialIcons[key] || IconNote
}
