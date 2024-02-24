import HomeMain from "../Components/Home/Home";
import Footer from "../Components/Footer";

import NavBar from "../Components/NavBar";
function Home() {
  return (
    <div className="App">
    <NavBar/>
      <HomeMain />
      <Footer/>
    </div>
  );
}

export default Home;
