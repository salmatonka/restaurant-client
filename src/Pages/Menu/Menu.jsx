import { Helmet } from "react-helmet-async";
import CoverSection from "../Shares/CoverSection/CoverSection";
import menuImg from '../../assets/menu/menu-bg.jpg'
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory";

import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'

const Menu = () => {
    const [menu] = useMenu()
    // console.log(menu)

    const dessert = menu.filter(item => item.category === "dessert")
    // console.log(dessert)
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu </title>
            </Helmet>
            <CoverSection img={menuImg} title='OUR MENU' details='Would you like to try dish??'></CoverSection>

            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items  */}
            <MenuCategory items={dessert} title="dessert" img={dessertImg} details='ffffff'></MenuCategory>
            
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>

        </div>
    );
};

export default Menu;