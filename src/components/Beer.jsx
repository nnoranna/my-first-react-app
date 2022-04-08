/* function Beer({title, sub, text}) {
    console.log(title);
    return (
        <div className="beer">
            {title}
            {sub}
            {text}
        </div>
    )
}

export default Beer */

function Beer({info, randomNum}) {
    return (
        <div className="beer">
            {info.title}
            {info.sub}
            {info.text}
            <button onClick={() => {console.log(`Clicked`)}}>Click me</button>
        </div>
    )
}

export default Beer;