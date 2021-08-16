import MediaBlock from '../mediaBlock/MediaBlock';
import {visit, guide, ether} from '../../data/data';

/**
 * Нижняя часть страницы с анонсами в различных областях
 */

function Media() {
    return (
        <div className="media">
            <MediaBlock  title={'Погода'} type={'weather'}>
                <img src="#" alt="weather"></img>
                <span>+17°</span>
                <div>
                    <div>Утром +17</div>
                    <div>днем +20</div>
                </div>
            </MediaBlock>
            <MediaBlock title={'Посещаемое'} type={'visit'}>
                {visit.map((item, index) => <div key={index}><span>{item.title}</span> - {item.description}</div>)}
            </MediaBlock>
            <MediaBlock title={'Карты Германии'}>
                <span>Расписание</span>
            </MediaBlock>
            <MediaBlock title={'Телепрограмма'} type={'guide'}>
                {guide.map((item, index) => <div key={index}><span>{item.time}</span>{item.name}</div>)}
            </MediaBlock>
            <MediaBlock title={'Эфир'} type={'ether'}>
                {ether.map((item, index) => <div key={index}>{item}</div>)}
            </MediaBlock>
        </div>
    )
}

export default Media