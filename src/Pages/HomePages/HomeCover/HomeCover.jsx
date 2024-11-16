import { Parallax } from 'react-parallax';
import homeCoverImg from '../../../assets/home/chef-special.jpg'
const HomeCover = () => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={homeCoverImg}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero h-[500px]">
                <div className="   "></div>
                <div className="hero-content text-center  text-neutral-content">
                    <div className="px-10 py-20 bg-white text-gray-500 ">
                        <h1 className="mb-4 text-5xl uppercase">Bistro Boss</h1>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Quia illo veniam quod cupiditate
                             accusantium deserunt ab fuga modi enim</p>

                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default HomeCover;