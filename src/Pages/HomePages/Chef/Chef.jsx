import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import FoodCard from '../../../components/FoodCard/FoodCard';

const Chef = () => {
    const chefItems = [
        {
            _d: 1,
            name: 'Caeser Salad',
            image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg',
            recipe: 'Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.'
        },
        {
            _id: 2,
            name: 'Caeser Salad',
            image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg',
            recipe: 'Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.'
        },
        {
            _id: 3,
            name: 'Caeser Salad',
            image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg',
            recipe: 'Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.'
        }
    ]
    return (
        <div>
            <SectionTitle subHeading={'Should Try'} heading={'Chef Recommends'} />
       <div className='md:grid grid-cols-3 py-10'>
       {
        chefItems?.map(item =><FoodCard key={item?._id} item={item}  />)
    }
       </div>
        </div>
    );
};

export default Chef;