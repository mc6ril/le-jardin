import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="site-name">
          <Link href="/">
            <a>Gite le Jardin</a>
          </Link>
        </div>
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
                <a>Disponibilités</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="language">
          <select name="language" id="language">
            <option value="french">Français</option>
            <option value="english">Anglais</option>
          </select>
        </div>
      </div>
    </header>
  );
}
