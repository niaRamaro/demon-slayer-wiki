import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

import styles from './Layout.module.css';

type Props = {
  children: ReactElement | ReactElement[];
};

export default function Layout({ children }: Props): ReactElement {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <a>
            <Image src="/logo.png" width="50" height="50" />
          </a>
        </Link>
      </header>

      <main className={styles.main}>{children}</main>
    </>
  );
}
