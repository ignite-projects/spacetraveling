import Link from 'next/link';
import styles from './header.module.scss';

export default function Header(): JSX.Element {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a>
          <img src="/assets/images/logo.svg" alt="logo" />
        </a>
      </Link>
    </div>
  );
}
