import {categories} from '../../data/data';

/**
 * Категории поиска
 */

function Category() {
    return (
        <ul className="category">
            {categories.map((item, index) => <li key={index} className="title"><a href="#">{item}</a></li>)}
        </ul>
    )    
}

export default Category