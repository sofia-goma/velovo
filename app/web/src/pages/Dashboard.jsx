import { React, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import car from "/photo-accueil-2.png";
import add from "/add.svg";
import mod from "/Modifier.svg";
import del from "/Trash.svg";
import see from "/car.svg";

export default function Dashboard() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      console.log(data);
      // place mon API
   };

   const [images, setImages] = useState([]);
   const maxImages = 6;

   const handleImageUpload = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
         if (images.length < 4) {
            setImages([...images, reader.result]);
         } else {
            alert("Vous avez atteint le nombre maximum d'image");
         }
      };

      if (file) {
         reader.readAsDataURL(file);
      }
   };

   return (
      <div className="relative h-full">
         <div
            className="absolute top-0 left-0 w-full h-full bg-center filter blur-sm z-0"
            style={{ backgroundImage: "url('profil-bg.jpg')" }}
         ></div>

         <div className="top-0 left-0 w-full h-full bg-transparent flex items-center justify-start z-10">
            <div className="relative h-[84%] w-[100%] opacity-55 rounded-md flex items-center justify-start">
               <trend className="h-full rounded-lg w-[30%] relative left-0 justify-center items-center backdrop-blur-lg bg-gray-200">
                  <div className="flex text-opacity-85 w-[250px] ml-7 mt-6 h-[35%]">
                     <img className="max-w-full" src={car} alt="Contact" />
                  </div>

                  <div className="flex flex-col space-y-3 relative mt-10">
                     <Button className="bg-black bg-opacity-55 hover:bg-blue-700 text-white px-1 py-1 rounded-md ml-4 mr-2 h-10 w-[90%]">
                        <img
                           className="h-8 max-h-full max-w-full"
                           src={add}
                           alt="Ajouter une voiture"
                        />
                        <span className="text-center ml-2">Ajouter une voiture</span>
                     </Button>
                     <Button className="bg-black bg-opacity-55 hover:bg-blue-700 text-white px-1 py-1 rounded-md ml-4 mr-2 h-10 w-[90%]">
                        <img
                           className="h-8 max-h-full max-w-full"
                           src={mod}
                           alt="Modifier"
                        />
                        <span className="text-center ml-2">Modifier une voiture</span>
                     </Button>
                     <Button className="bg-black bg-opacity-55 hover:bg-blue-700 text-white px-1 py-1 rounded-md ml-4 mr-2 h-10 w-[90%]">
                        <img
                           className="h-8 max-h-full max-w-full"
                           src={see}
                           alt="Voir"
                        />
                        <span className="text-center ml-2">Voir mes voitures</span>
                     </Button>
                     <Button className="bg-black bg-opacity-55 hover:bg-blue-700 text-white px-1 py-1 rounded-md ml-4 mr-2 h-10 w-[90%]">
                        <img
                           className="h-8 max-h-full max-w-full"
                           src={del}
                           alt="Suprimer une voiture"
                        />
                        <span className="text-center ml-2">Supprimer voiture</span>
                     </Button>
                  </div>
               </trend>

               <div className="flex flex-col h-full w-[70%]">
                  <form
                     onSubmit={handleSubmit(onSubmit)}
                     className="grid grid-cols-2 gap-4 p-6"
                  >
                     <div>
                        <label className="text-white mb-1">Fabricant :</label>
                        <input
                           type="text"
                           placeholder="Nom de la marque"
                           className="w-full p-1 rounded text-center"
                           {...register("marque", { required: true })}
                        />
                        {errors.marque && (
                           <div className="text-white">mark is required</div>
                        )}
                     </div>
                     <div>
                        <label className="text-white mb-1">Modele :</label>
                        <input
                           type="text"
                           placeholder="Nom du model"
                           className="w-full p-1 rounded text-center"
                           {...register("model", { required: true })}
                        />
                        {errors.model && (
                           <div className="text-white">model is required</div>
                        )}
                     </div>
                     <div>
                        <label className="text-white mb-1">Annee :</label>
                        <input
                           type="text"
                           placeholder="Annee de fabrication"
                           className="w-full p-1 rounded text-center"
                           {...register("annee", { required: true })}
                        />
                        {errors.annee && (
                           <div className="text-white">annee is required</div>
                        )}
                     </div>
                     <div>
                        <label className="text-white mb-1">Prix de location :</label>
                        <input
                           type="text"
                           placeholder="Prix de location/jr"
                           className="w-full p-1 rounded text-center"
                           {...register("prix_location", { required: true })}
                        />
                        {errors.prix_location && (
                           <div className="text-white">price is required</div>
                        )}
                     </div>

                     <div>
                        <label className="text-white mb-1">Prix de vente :</label>
                        <input
                           type="text"
                           placeholder="Prix de vente"
                           className="w-full p-1 rounded text-center"
                           {...register("prix_vente", { required: true })}
                        />
                        {errors.prix_vente && (
                           <div className="text-white">price is required</div>
                        )}
                     </div>
                     <div>
                        <label className="text-white mb-1">Type :</label>
                        <input
                           type="text"
                           placeholder="Prix de vente"
                           className="w-full p-1 rounded text-center"
                           {...register("prix_vente", { required: true })}
                        />
                        {errors.prix_vente && (
                           <div className="text-white">price is required</div>
                        )}
                     </div>
                     <div>
                        <label className="text-white mb-1">Prix de vente :</label>
                        <input
                           type="text"
                           placeholder="Prix de vente"
                           className="w-full p-1 rounded text-center"
                           {...register("prix_vente", { required: true })}
                        />
                        {errors.prix_vente && (
                           <div className="text-white">price is required</div>
                        )}
                     </div>

                     <div>
                        <label className="text-white mb-1">Levier :</label>
                        <select
                           className="w-full p-1 rounded text-center"
                           defaultValue=""
                           {...register("gear", { required: true })}
                        >
                           <option value="">Faire</option>
                           <option value="automatique">Automatique</option>
                           <option value="manuelle">Manuelle</option>
                        </select>
                        {errors.gear && (
                           <div className="text-white">
                              tu doit definir le type de levier de ta voiture
                           </div>
                        )}
                     </div>

                     <div className="grid grid-cols-2 gap-4 p-4">
                        {images.map((image, index) => (
                           <div
                              key={index}
                              className="relative bg-yellow-600 flex items-center justify-center h-24 w-24 rounded overflow-hidden"
                           >
                              <img
                                 src={image}
                                 alt={`Image ${index + 1}`}
                                 className="object-cover w-full h-full"
                              />
                           </div>
                        ))}

                        {images.length < maxImages && (
                           <div className="relative bg-green-600 flex items-center justify-center h-24 w-24 rounded overflow-hidden cursor-pointer">
                              <input
                                 type="file"
                                 accept="image/*"
                                 onChange={handleImageUpload}
                                 placeholder="Choisir une image"
                                 className="inset-0 opacity-0 w-full cursor-pointer file:w-full file:bg-red-500"
                                 {...register("image", { required: true })}
                              />
                              <span className="text-white text-2xl h-4">+</span>
                           </div>
                        )}

                     </div>


                     <button className="bg-blue-600 rounded-md" type="submit">
                        ajouter
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}