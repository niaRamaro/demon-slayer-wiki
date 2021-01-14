import { ReactElement } from 'react';

import CategoryList from '../components/category/CategoryList';
import rootCategories from '../data/rootCategories.json';

export default function Home(): ReactElement {
  return <CategoryList categories={rootCategories} />;
}
