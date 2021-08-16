import Stock from '../stock/Stock';
import PropTypes from 'prop-types';

/**
 * Блок с курсами валют
 */

function Stocks({ stocks }) {
    return (
        <ul className="stocks">
            {stocks.map((stock, index) => <Stock key={index} stock={stock} />)}
        </ul>
    )
}

Stocks.propTypes = {
    stocks: PropTypes.array.isRequired
}

export default Stocks