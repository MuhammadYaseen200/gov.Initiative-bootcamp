// pages/services.js
import Link from 'next/link';
import styles from '../styles/Services.module.css';

export default function Services() {
  return (
    <div className={styles.container}>
      <h1>Our Services</h1>
      <p>We offer a wide range of services to meet your needs.</p>
      <Link href="/services/nested-page">Go to Nested Page</Link>
    </div>
  );
}

