import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Testimonials from "../Testimonials/Testimonials";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Category from "../Category/Category";
import HomeCover from "../HomeCover/HomeCover";
import ContactNumber from "../ContactNumber/ContactNumber";
import Chef from "../Chef/Chef";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <HomeCover />
      <PopularMenu />
      <ContactNumber />
      <Chef />
      <Featured />
      <Testimonials />

    </div>
  );
};

export default Home;