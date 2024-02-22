import Footer from "../Components/Footer";
import AboutMain from '../Components/About/About'
import Work from "../Components/About/Work";
import NavBar from "../Components/NavBar";
function About() {
  return (
    <div className="App">
      <NavBar/>
      <AboutMain />
      <Work/>
      <Footer />
    </div>
  );
}

export default About;
