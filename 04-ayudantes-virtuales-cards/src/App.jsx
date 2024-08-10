import "bulma/css/bulma.css";
import ProfileCards from "./components/ProfileCards";
import AlexaImage from "./assets/alexa.png";
import CortanaImage from "./assets/cortana.png";
import SiriImage from "./assets/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistans</p>
        </div>
      </section>


      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCards
                imageUrl={AlexaImage}
                title='Alexa'
                handle='@alexa99'
                description="Alexa was created by Amazon and helps you buy things."
              ></ProfileCards>
            </div>
            <div className='column is-4'>
              <ProfileCards
                imageUrl={CortanaImage}
                title='Cortana'
                handle='@cortana32'
                description="Cortana es mas guapa que la Sandra Ortega"
              ></ProfileCards>
            </div>
            <div className='column is-4'>
              <ProfileCards
                imageUrl={SiriImage}
                title='Siri'
                handle='@siri01'
                description="Siri was made by Apple and is being passed out"
              ></ProfileCards>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
