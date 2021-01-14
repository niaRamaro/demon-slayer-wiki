import { ReactElement } from 'react';

import styles from './ListContainer.module.css';

type Props = {
  children: ReactElement[];
};
export default function ListContainer({ children }: Props): ReactElement {
  return <div className={styles.listContainer}>{children}</div>;
}
