import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Accueil</a>
            </Link>
          </li>
          <li>
            <Link href="/infos">
              <a>Informations</a>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <a>Gallerie</a>
            </Link>
          </li>
          <li>
            <Link href="/rates">
              <a>Tarifs</a>
            </Link>
          </li>
          <li>
            <Link href="/availability">
              <a>Disponibilitées</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contacte</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
