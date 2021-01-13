import Link from 'next/link';
import { ReactElement } from 'react';

import rootCategories from '../data/rootCategories.json';

export default function Home(): ReactElement {
  return (
    <>
      {rootCategories.map((category) => (
        <h3 key={category}>
          <Link
            key={category}
            href={`/category/${encodeURIComponent(category)}`}
          >
            {category}
          </Link>
        </h3>
      ))}
    </>
  );
}
