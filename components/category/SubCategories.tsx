import Link from 'next/link';
import { ReactElement } from 'react';

import allSubCategories from '../../data/subCategories.json';

type Props = {
  category: string;
};

export default function SubCategories({ category }: Props): ReactElement {
  const subCategories = allSubCategories[category];

  if (!subCategories?.length) {
    return null;
  }

  return (
    <>
      <h3>Subcategories</h3>
      <ul>
        {subCategories.map((subCategory) => (
          <li key={subCategory}>
            <Link href={`/category/${subCategory}`}>{subCategory}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
