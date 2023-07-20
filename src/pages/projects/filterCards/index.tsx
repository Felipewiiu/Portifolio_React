import Data from 'data/imageProject.json';

export default function filtraTags() {
  const result = Data.find(tag => tag.category.id === 2);
  console.log(result);
}

