import Beer from './Beer.jsx'
import Header from './Header.jsx'

/* function Beers({props}) {
    console.log(props.title);
    return (
        <div className="beers">
            <Header />
            {props.list.map(e => <Beer info={e} />)}
        </div>
    )
}

export default Beers*/

//itt nem param hanem props

function Beers({list}) {
    const a = 10
    //console.log(list);
    console.log(<Beer info={list[0]} randomNum={a} key={100}/>);
    return (
        <div className="beers">
            {list.map((i, index) => <Beer info={i} randomNum={a} key={index}/>)}
        </div>
    )
}

export default Beers;