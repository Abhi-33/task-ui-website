import Header from "./components/Header/Header"
import './App.css';
import HeroSection from "./components/HeroSection/HeroSection";
import InfluencerCard from "./components/InfluencerCards/InfluencerCard";
import Categories from "./components/CategoryList/Categories";
import Spotlight from "./components/Spotlight/Spotlight";
import DesignCreator from "./components/DesignCreator/DesignCreator";
import OnRise from "./components/Rise/OnRise";
import BrandCard from "./components/BrandCard/BrandCard";
import After from "./components/AfterBrand/After";
// import Carousels from "./components/Carousels/Carousels";
import Ugc from "./components/UGC/Ugc";
import BrandList from "./components/BrandsList/BrandList";
import Process from "./components/Process/Process";
import Footer from "./components/Footer/Footer";
import Subfooter from "./components/SubFooter/Subfooter";
// import 'bootstrap/dist/css/bootstrap.min.css';
// const imageArray = [
//   'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGF0YXxlbnwwfHwwfHx8MA%3D%3D',
//   'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGF0YXxlbnwwfHwwfHx8MA%3D%3D',
//   'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGF0YXxlbnwwfHwwfHx8MA%3D%3D',
//   'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGF0YXxlbnwwfHwwfHx8MA%3D%3D',
// ];
const App = () => {
  return (
    <>
    <Header />
    <div className="container">
      <HeroSection />
      <InfluencerCard />
      <Categories />
      <Spotlight />
      <DesignCreator />
      <OnRise />
      <BrandCard />
      <After />
      {/* <Carousels images={imageArray}/> */}
      <Ugc />
      <BrandList />
      <Process />
      <Footer />
      <Subfooter />
    </div>
    </>
  )
}

export default App