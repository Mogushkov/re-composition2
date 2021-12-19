// eslint-disable-next-line
import {categories} from '../../data/data';
import PropTypes from 'prop-types';
/**
 * Категории поиска
 */

function Category() {
    return (
        <ul className="category">
            {categories.map((item, i) => <li category={i} className="title"><a href="#">{item}</a></li>)}
        </ul>
    )    
}
Category.propTypes = {
    item: PropTypes.object.isRequired
}

export default Category