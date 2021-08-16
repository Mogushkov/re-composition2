import Category from '../category/Category';
import Input from '../input/Input';

/**
 * Блок с поиском
 */

function Search() {
    return (
        <div className="search-box">
            <div className="logo">Яндекс</div>
            <div className="search">
                <Category />
                <Input />
            </div>    
        </div>
    )

}

export default Search