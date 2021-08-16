import News from '../news/News';
import PropTypes from 'prop-types';

/**
 * Блок новостей
 */

function NewsBlock({ news }) {

    return (
        <>
            <div className="newsBlock title">
                <span><a href="#">Сейчас в СМИ</a></span>
                <span><a href="#">В Германии</a></span>
                <span><a href="#">Рекомендуем</a></span>
            </div>
            <ul>
                {news.map((item, index) => <News key={index} item={item}/>)}
            </ul>
        </>
    )
}

NewsBlock.propTypes = {
    news: PropTypes.array.isRequired
}

export default NewsBlock