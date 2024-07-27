import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchBar from "../components/Search";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";


export default function HomeScreen() {
   const navigate = useNavigate();
   const goToPath = (path) => {
      if (!path) return;
      navigate(path);
   }
   const setting = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 9000,
      arrows: false
   };
   return (
      <div className="bg-gray-200 py-2">
         <div
            className="absolute bg-cover filter blur-sm z-0"
         // style={{ backgroundImage: "url('bg-accueil.jpg')" }}
         ></div>
         <div className="">
            <div className="">
               <SearchBar />
            </div>
            <div className="flex justify-center mt-[5%]">
               <div className="w-96 h-auto mt-[2%]">

                  <Slider {...setting}>
                     <div>
                        <img
                           src="/pexels-photo-116675-removebg-preview.png"
                           alt="image 1"
                           className="mx-auto"
                        />
                     </div>
                     <div>
                        <img
                           src="/photo-accueil-2.png"
                           alt="image 2"
                           className="mx-auto"
                        />
                     </div>
                     <img
                        src="/pexels-photo-116675-removebg-preview.png"
                        alt="image 3"
                        className=" mx-auto"
                     />
                  </Slider>
               </div>
            </div>
            <p className="text-center font-extrabold text-slate-500 text-2xl">
               Velovo car la solution idéale
            </p>
            <div className="flex justify-around items-center">
               <Button title={'Achat'} handleClick={() => goToPath('/location')} />
               <Button title={'Location'} handleClick={() => goToPath('/location')} />
            </div>
         </div>
      </div>
   );
}