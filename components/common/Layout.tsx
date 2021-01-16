import Image from 'next/image';
import Link from 'next/link';
import { createContext, ReactElement, useState } from 'react';

import ThemeSwitch from './ThemeSwitch';
import styles from './Layout.module.css';

type Props = {
  children: ReactElement | ReactElement[];
};

const defaultPageName = 'Demon Slayer Wiki';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SetPageNameContext = createContext((pageName: string) => {});

export default function Layout({ children }: Props): ReactElement {
  const [pageName, setPageName] = useState(defaultPageName);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerSides}>
          <Link href="/">
            <a>
              <Image src="/logo.png" width="50" height="50" />
            </a>
          </Link>
        </div>

        <h1 className={styles.headerTitle}>{pageName}</h1>

        <div className={[styles.headerSides, styles.rightSide].join(' ')}>
          <ThemeSwitch />
        </div>
      </header>

      <main className={styles.main}>
        <SetPageNameContext.Provider value={setPageName}>
          {children}
        </SetPageNameContext.Provider>
      </main>
    </>
  );
}
