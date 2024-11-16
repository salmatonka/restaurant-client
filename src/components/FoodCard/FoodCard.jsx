import React from 'react';

const FoodCard = ({item}) => {
    const { name, image, price ,recipe} = item;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img src={image} alt="Shoes" />
                </figure>
                <p className='bg-gray-900 text-white absolute right-0 px-2 mr-4 mt-4'>{price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe?.slice(0,84)}...</p>
                    <div className="card-actions justify-center">
                        <button className="btn  text-[#BB8506] border border-2 border-b-[#BB8506] ">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;