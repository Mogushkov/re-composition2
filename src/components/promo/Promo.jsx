import PropsTypes from 'prop-types';

/**
 * Вывод рекламного баннера
 */
function Promo({banner}) {
    return (
        <div className="promo">
            <img src={banner} alt="banner"></img>
        </div>

    )
}

export default Promo

Promo.propTypes = {
    banner: PropsTypes.string.isRequired
}