import mistake from '../img/mistake.png';
import diesel from '../img/toofast.jpg';
import news1 from '../img/news1.jpg'


const news = [
    {logo: news1, title: 'Путин упростил получение автомобильных номеров', link: '...'},
    {logo: news1, title: 'В команде Зеленского раскрыли план реформ на Украине', link: '...'},
    {logo: news1, title: '"Турпомощь" прокомментировала гибель десятков россиян в Анталье', link: '...'},
    {logo: news1, title: 'Суд закрыл дело Демпартии США против России', link: '...'},
    {logo: news1, title: 'На украине призвали создать ракеты для удара по Москве', link: '...'},
];

const stocks = [
    {title: 'USD', value: 63.52},
    {title: 'EUR', value: 70.86},
    {title: 'НЕФТЬ', value: 64.90}
];

const announs = {
    src: mistake,
    alt: 'Mistake',
    title: 'Смотрите на Яндексе и запоминайте'
}

const categories = ['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Еще'];

const banner = {
  src: diesel,
  alt: 'Diesel',
  title: 'двойной форсаж'
}

const visit = [
    {title: 'Недвижимость', description: 'о сталинках'},
    {title: 'Маркет', description: 'люстры и светильники'},
    {title: 'Авто.ру', description: 'привод 4х4 до 500 000'}
]

const guide = [
    {time: '02:00', name: 'ТНТ.Best'},
    {time: '02:15', name: 'Джинглики'},
    {time: '02:25', name: 'Наедине со всеми'}
]

const ether = ['Управление как искусство', 'Ночь. Мир в это время', 'Андрей Возн...']

export { news, stocks, announs, categories, banner, visit, guide, ether }