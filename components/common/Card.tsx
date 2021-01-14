import { ReactElement } from 'react';

import styles from './Card.module.css';

type Props = {
  children: ReactElement;
};

export default function Card({ children }: Props): ReactElement {
  return <div className={styles.card}>{children}</div>;
}
