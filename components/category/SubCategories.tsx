import { ReactElement } from 'react';

import CategoryList from './CategoryList';
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
      <CategoryList categories={subCategories} />
    </>
  );
}
