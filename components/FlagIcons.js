export function FlagGB(props) {
  return (
    <svg viewBox="0 0 60 30" role="img" aria-hidden="true" {...props}>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 60,30M60,0 0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 60,30M60,0 0,30" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 V30M0,15 H60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 V30M0,15 H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

export function FlagIT(props) {
  return (
    <svg viewBox="0 0 3 2" role="img" aria-hidden="true" {...props}>
      <rect width="1" height="2" fill="#009246" />
      <rect x="1" width="1" height="2" fill="#fff" />
      <rect x="2" width="1" height="2" fill="#ce2b37" />
    </svg>
  );
}
