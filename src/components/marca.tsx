import Link from "next/link";

// Logotipo + nombre. Se repite en la cabecera y en el pie, asi que vive aparte.
export function Marca() {
  return (
    <Link className="marca" href="/">
      <svg className="marca__logo" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="currentColor" />
        <path
          d="M9 21c3.5 0 3.5-10 7-10s3.5 10 7 10"
          fill="none"
          stroke="#fff"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
      <span className="marca__texto">Cauce</span>
    </Link>
  );
}
