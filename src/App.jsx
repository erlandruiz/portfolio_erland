import About from "./components/about/About";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/Hero";
import MyWork from "./components/mywork/myWork";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";

const App=()=>{
  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;