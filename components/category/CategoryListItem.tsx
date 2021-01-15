import Link from 'next/link';
import { ReactElement } from 'react';

import Card from '../common/Card';
import { formatFileName } from '../../helpers/fileHelpers';
import styles from './CategoryListItem.module.css';

type Props = {
  category: string;
};

export default function CategoryListItem({ category }: Props): ReactElement {
  return (
    <Card>
      <Link href={`/category/${encodeURIComponent(formatFileName(category))}`}>
        <a>
          <h3 className={styles.categoryTitle}>{category}</h3>
        </a>
      </Link>
    </Card>
  );
}
