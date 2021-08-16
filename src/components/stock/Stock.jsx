import PropTypes from 'prop-types';

/**
 * Вывод курса валюты
 */

function Stock({ stock }) {
    return (
        <li>
            <span>{stock.title}</span>
            <span className="stock__value">{stock.value}</span>
        </li>
    )
}

Stock.propTypes = {
    stock: PropTypes.object.isRequired
}

export default Stock