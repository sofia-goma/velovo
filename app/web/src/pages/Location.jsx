import { Link } from "react-router-dom";
import Button from "../components/Button";
import Gallery from "../components/Gallery";


export default function Location() {
   const d = 'jesuisautravailbinen'.split('');
   return (
      <div className="py-5">
         <Button title={'Votre choix est notre preoccupation!'} className="w-full my-3" />
         <div className="py-6 flex gap-3 justify-between flex-wrap md:gap-10">
            {
               d.map((item, index) => (
                  <Link to={`/location/${item}`} key={index}>
                     <Gallery text={item} />
                  </Link>
               ))
            }
         </div>
      </div>
   );
}