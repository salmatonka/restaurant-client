import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "./MenuItems";
import CoverSection from "../../Shares/CoverSection/CoverSection";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

    //    const [menu, setMenu] = useState([]);

    //     useEffect(() => {
    //         fetch('menu.json')
    //             .then(res => res.json())
    //             .then(data => {
    //                 // console.log(data)
    //                 // setMenu(data)
    //                 const popularItems = data.filter(item => item.category === 'popular')
    //                 // console.log(popularItems)
    //                 setMenu(popularItems)
    //             })
    //     }, [])
    //     //   console.log(menu);


    //customize data: useMenu hooks theke

    const [menu] = useMenu()
    // console.log(menu)
    const PopularMenu = menu.filter(item => item.category === 'popular')
    // console.log(PopularMenu)


    return (
        <div className="mb-12">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTitle>

            {/* PopularMenu: {menu?.length} */}

            <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-10'>
                {/* {
                    menu.map(item => <MenuItems key={item?._id} item={item} />)
                } */}
                {
                    PopularMenu.map(item => <MenuItems key={item?._id} item={item} />)
                }
            </div>

            <div className="flex justify-center py-6">
                <button className="btn btn-outline border-0  border-b-4 mt-4">View Full Menu</button>
            </div>

            {/* <CoverSection title={"Popular menu"} details={"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."} /> */}
        </div>
    );
};

export default PopularMenu;