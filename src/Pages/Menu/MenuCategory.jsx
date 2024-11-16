
import { Link } from 'react-router-dom';
import MenuItems from '../HomePages/PopularMenu/MenuItems';
import CoverSection from '../Shares/CoverSection/CoverSection';

const MenuCategory = ({items, title, img,details}) => {
    return (
        <div className=''>
            { title && <CoverSection img={img} title={title} details={details}></CoverSection>}
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 my-16">
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
           <div className='flex justify-center mb-10'>
           <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4">Order Your Favourite Food</button>
            </Link>
           </div>
        </div>
    );
};

export default MenuCategory;