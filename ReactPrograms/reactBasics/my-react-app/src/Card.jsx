import profilePic from './assets/profilePic.jpg'

function Card(){
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Drew Mikels</h2>
            <p className="card-text">I make programs and stuff</p>
        </div>
    );
}

export default Card