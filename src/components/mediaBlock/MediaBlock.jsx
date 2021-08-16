/**
 * компонент выводящий медиа
 */

 function MediaBlock(props) {
    return (
        <div className="mediaBlock">
            <h2 className="title"><a href="#">{props.title}</a></h2>
            <div className={props.type}>
                {props.children}
            </div>   
        </div>
    )
}

export default MediaBlock