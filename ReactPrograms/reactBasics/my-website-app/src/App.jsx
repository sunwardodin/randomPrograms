import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Button2 from './Button/Button2.jsx'
import profilePic from './assets/profilePic.jpg'

function App() {

  return (
    <div className="verticalAlign">
      <Card pic={profilePic} name="Drew Mikels" subtitle="Front End Developer in Javascript/React"/>
      <div className="Buttons">
      <Button2/>
      </div>
    </div>
  );
}

export default App