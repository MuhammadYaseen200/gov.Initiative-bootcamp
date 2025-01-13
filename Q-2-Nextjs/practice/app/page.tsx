// pages/index.js
import Link from 'next/link';
import styles from '../app/Home.module.css';
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Home Page</h1>
      <nav>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/services/nested-page">Nested Page</Link></li>
        </ul>
      </nav>
    </div>
  );
}