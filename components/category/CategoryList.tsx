import { ReactElement } from 'react';

import CategoryListItem from './CategoryListItem';
import styles from './CategoryList.module.css';

type Props = {
  categories: string[];
};

export default function CategoryList({ categories }: Props): ReactElement {
  return (
    <div className={styles.categoryListContainer}>
      {categories.map((category) => (
        <div key={category} className={styles.category}>
          <CategoryListItem category={category} />
        </div>
      ))}
    </div>
  );
}
