import { Link } from "react-router-dom";
import Button from "./Button";
import Gallery from "./Gallery";
import { useNavigate, useParams } from "react-router-dom";


export default function CarDetails() {
   // const api = 'https://api.whatsapp.com/send?phone=243971616131';
   // stocker votre numero dans le variable d'environment
   const { id } = useParams();
   console.log(id);
   const navigate = useNavigate();
   const goBack = (path) => {
      if (!path) return;
      navigate(path);
   }
   const data = 'data'.split('');
   return (
      <div className="h-full">
         <div className="bg-red-500 flex flex-col md:flex-row py-5 h-full">
            <div className="flex-1 bg-green-500 flex gap-5">
               <Gallery className="w-full rounded-none mb-4" />
            </div>

            <div className="flex-1 bg-blue-500 p-3">
               <div className="flex justify-between">
                  <h1 className="font-bold text-3xl">Fabricant Modele</h1>
                  <div className="flex flex-col">
                     <div className="bg-gray-400 p-4 rounded-md">
                        <h1 className="text-2xl text-white">LOGO</h1>
                     </div>
                     <p className="font-bold text-xl">30USD</p>
                  </div>
               </div>

               <div className="flex flex-col">
                  <div className="flex mb-3 justify-between">
                     <h1>TOYOTA</h1>
                     <div>4 sieges</div>
                  </div>
                  <div className="flex mb-3 justify-between">
                     <h1>Manuel</h1>
                     <p>1 Valises(s)</p>
                  </div>
                  <div className="flex mb-3 justify-between">
                     <Link to={'href="https://api.whatsapp.com/send?phone=243971616131"'}>
                        <Button title={'Confirmer'} className="bg-blue-500" />
                     </Link>
                     <Button title={'Annuler'} handleClick={() => goBack('/location')} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}