function Card(props){
    return (
        <div className="card">
            <img className="card-image" src={props.pic} alt="profile picture"></img>
            <p className="card-about">This is my about section, which I shall fill with meaningful words eventually</p>
            <h2 className="card-title">{props.name}</h2>
            <p className="card-text">{props.subtitle}</p>
        </div>
    );
}

export default Card