import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
        <Link href='/'>
      <div className={styles.logo}>Car Events</div>
      </Link>

      <nav>
          <ul>
              <li>
                  <Link href='/events'>
                      <a>Events</a>
                  </Link>
              </li>
          </ul>
      </nav>
    </header>
  );
}
