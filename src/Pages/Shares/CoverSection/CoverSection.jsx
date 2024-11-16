
import { Parallax } from 'react-parallax';

const CoverSection = ({ img, title,details }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero h-[500px]">
                <div className="   "></div>
                <div className="hero-content text-center  text-neutral-content">
                    <div className="px-80 py-20 hero-overlay bg-opacity-60 ">
                        <h1 className="mb-4 text-5xl  font-bold uppercase">{title}</h1>
                        <p className="mb-5 uppercase">{details}</p>

                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default CoverSection;