import React from 'react';
import FoodCard from '../../components/FoodCard/FoodCard';

const OrderTab = ({item}) => {
    return (
        <div className='grid md:grid-cols-3 gap-6 py-8'>
        {
            item?.map(item =><FoodCard key={item} item={item} />)
        }
        </div>
    );
};

export default OrderTab;