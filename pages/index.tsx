import { ReactElement, useContext, useEffect } from 'react';

import CategoryList from '../components/category/CategoryList';
import rootCategories from '../data/rootCategories.json';
import { SetPageNameContext } from '../components/common/Layout';

export default function Home(): ReactElement {
  const setPageName = useContext(SetPageNameContext);

  useEffect(() => {
    setPageName('Main Categories');
  }, []);

  return <CategoryList categories={rootCategories} />;
}
