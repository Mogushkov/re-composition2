import PropTypes from 'prop-types';


/** компонент вывода новостей */

function Announcement({ alt, src, title }) {
    return (
        <div className="announs">
            <h2>Работа над ошибками</h2>
            <div className="img-box">
                <img src={src} alt={alt} className="announs__img"></img>
            </div>
            <div className="announs__title title"><a href="#">{title}</a></div>
            
        </div>
    )
}

Announcement.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Announcement