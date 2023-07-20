import Data from 'data/imageProject.json';

export default function filtraTags () {
    let result = Data.find(tag => tag.category.id === 2 )
    console.log(result)
}

