import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

import Card from '../common/Card';
import styles from './ArticleListItem.module.css';

export type ArticleItem = {
  title: string;
  thumbnail: string;
};

type Props = {
  article: ArticleItem;
};

export default function ArticleListItem({
  article: { thumbnail, title },
}: Props): ReactElement {
  return (
    <Card>
      <Link href={`/wiki/${encodeURIComponent(title)}`}>
        <a className={styles.article}>
          <div className={styles.articleImage}>
            {thumbnail && (
              <Image
                src={thumbnail}
                alt={title}
                layout="fill"
                objectFit="contain"
              />
            )}
          </div>

          <h5 className={styles.articleTitle}>{title}</h5>
        </a>
      </Link>
    </Card>
  );
}
