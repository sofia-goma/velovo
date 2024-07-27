import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import car from "/photo-accueil-2.png";
import add from "/add.svg";
import mod from "/Modifier.svg";
import del from "/Trash.svg";
import see from "/car.svg";
import Input from '../components/Input';



export default function UserAccount() {
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
               <aside className="h-full rounded-lg w-[30%] relative left-0 justify-center items-center backdrop-blur-lg bg-gray-200">
                  <div className="flex text-opacity-85 w-[250px] ml-7 mt-6 h-[35%]">
                     <img className="max-w-full" src={car} alt="Contact" />
                  </div>

                  <div className="flex flex-col space-y-3 relative mt-10">
                     <Button className="bg-[#333] bg-opacity-55 hover:bg-blue-700 text-white px-1 py-1 rounded-md ml-4 mr-2 h-10 w-[90%]">
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
               </aside>




               <div className="flex flex-col h-full w-[70%]">
                  <form
                     onSubmit={handleSubmit(onSubmit)}
                     className="grid grid-cols-2 gap-4 p-6"
                  >
                     <Input
                        label={'Fabricant'}
                        tagRef={'nomdelamarque'}
                        placeholder={'Nom de la marque'}
                        type='text'
                        register={register}
                        className='placeholder:text-gray-50'
                     />
                     <Input
                        label={'Nom du Model:'}
                        tagRef={'nomModel'}
                        placeholder={'Nom du model'}
                        type='text'
                        register={register}
                        className='placeholder:text-gray-50'
                     />

                     <Input
                        label={'Annee :'}
                        tagRef={'annee'}
                        placeholder={'Annee de fabrication'}
                        type='text'
                        register={register}
                        className='placeholder:text-gray-50'
                     />

                     <Input
                        label={'Prix de location :'}
                        tagRef={'prixLocation'}
                        placeholder={'Prix de location/jr'}
                        type='text'
                        register={register}
                        className='placeholder:text-gray-50'
                     />

                     <Input
                        label={'Prix de vente :'}
                        tagRef={'prixVente'}
                        placeholder={'Prix de vente'}
                        type='text'
                        register={register}
                        className='placeholder:text-gray-50'
                     />

                     <Input
                        label={'Type :'}
                        tagRef={'prixVente'}
                        placeholder={'Prix de vente'}
                        type='text'
                        register={register}
                        className='placeholder:text-gray-50'
                     />

                     <Input
                        label={'Type :'}
                        tagRef={'prixVente'}
                        placeholder={'Prix de vente'}
                        type='text'
                        register={register}
                        className='placeholder:text-gray-50'
                     />

                     <div>
                        <label className="text-white text-left font-medium text-md mb-2">Levier :</label>
                        <select
                           className="p-2 w-full outline-none bg-gray-400 rounded-md"
                           defaultValue="Automatique"
                           {...register("gear", { required: true })}
                        >
                           <option value="">Manuelle</option>
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
                              className="relative flex items-center justify-center h-24 w-24 rounded overflow-hidden"
                           >
                              <img
                                 src={image}
                                 alt={`Image ${index + 1}`}
                                 className="object-cover w-full h-full"
                              />
                           </div>
                        ))}

                        {images.length < maxImages && (
                           <>
                              <Input
                                 type={'file'}
                                 tagRef={'updloadedImage'}
                                 accept="image/*"
                                 register={register}
                              />
                           </>
                        )}

                     </div>

                     <Button title={'Ajouter'} type={'submit'} className="bg-slate-950" />
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}