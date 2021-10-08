import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);

  return (
    <header>
      <div className="wrapper">
        <motion.div
          className="site-name"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{
            delay: 2.2,
            x: { type: "spring", stiffness: 100 },
            default: { duration: 2 },
          }}
        >
          <Link href="/">
            <a>Gite le Jardin</a>
          </Link>
        </motion.div>
        <nav className="menu-visible">
          <ul>
            <motion.li
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ ease: "easeOut", duration: 0.7 }}
            >
              <Link href="/">
                <a>Accueil</a>
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <Link href="/infos">
                <a>Informations</a>
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ ease: "easeOut", duration: 1.3 }}
            >
              <Link href="/gallery">
                <a>Gallerie</a>
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ ease: "easeOut", duration: 1.6 }}
            >
              <Link href="/rates">
                <a>Tarifs</a>
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ ease: "easeOut", duration: 1.9 }}
            >
              <Link href="/availability">
                <a>Disponibilités</a>
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ ease: "easeOut", duration: 2.2 }}
            >
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </motion.li>
          </ul>
        </nav>
        <div className="language">
          <motion.select
            name="language"
            id="language"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2.2 }}
          >
            <option value="french">🇫🇷 Français</option>
            <option value="english">󠁧󠁢󠁥󠁮󠁧🇬🇧 Anglais</option>
          </motion.select>
        </div>
        <div
          className="burger-menu"
          onClick={() => {
            setMenu(!menu);
            setCloseMenu(!closeMenu);
          }}
        >
          {!closeMenu ? (
            <div className="open-spans">
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : (
            <motion.div
              className="close-spans"
              initial={{ rotate: "-45deg" }}
              animate={{ rotate: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <span></span>
              <span></span>
            </motion.div>
          )}

          {menu && (
            <nav className="menu-burger">
              <ul>
                <motion.li
                  initial={{ y: -200 }}
                  animate={{ y: 0 }}
                  transition={{ ease: "easeOut", duration: 0.7 }}
                >
                  <Link href="/">
                    <a>Accueil</a>
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ y: -200 }}
                  animate={{ y: 0 }}
                  transition={{ ease: "easeOut", duration: 1 }}
                >
                  <Link href="/infos">
                    <a>Informations</a>
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ y: -200 }}
                  animate={{ y: 0 }}
                  transition={{ ease: "easeOut", duration: 1.3 }}
                >
                  <Link href="/gallery">
                    <a>Gallerie</a>
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ y: -200 }}
                  animate={{ y: 0 }}
                  transition={{ ease: "easeOut", duration: 1.6 }}
                >
                  <Link href="/rates">
                    <a>Tarifs</a>
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ y: -200 }}
                  animate={{ y: 0 }}
                  transition={{ ease: "easeOut", duration: 1.9 }}
                >
                  <Link href="/availability">
                    <a>Disponibilités</a>
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ y: -200 }}
                  animate={{ y: 0 }}
                  transition={{ ease: "easeOut", duration: 2.2 }}
                >
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </motion.li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
