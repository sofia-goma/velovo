import { useForm } from "react-hook-form";
import logoImage from "/logo.png";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

export default function Login() {
   const navigate = useNavigate();
   const goToPath = (path) => {
      if (!path) return;
      navigate(path);
   }
   const { register, handleSubmit, errors } = useForm();

   const onSubmit = (data) => {
      console.log(data);
      console.error(errors)
      // l'api
   };

   return (
      <div className="">
         <div
            className="absolute top-0 left-0 w-full h-full bg-cover filter blur-sm z-0"
            style={{ backgroundImage: "url('connexion-bg.jpeg')" }}
         ></div>

         <div className="absolute top-0 left-0 w-full h-full bg-transparent flex items-center justify-center z-10">
            <div className="w-full md:w-[50%] opacity-55 rounded-md flex items-center justify-center">
               <div className="flex flex-col h-[100%] rounded-lg w-[100%] text-center justify-center items-center relative  bg-gray-700 mx-3 py-8 px-8">
                  <div className="flex justify-between w-full items-center p-1">
                     <h1 className="text-gray-50 font-bold text-xl">Bienvenue chez nous!</h1>
                     <Button handleClick={() => goToPath('/')} title={'CANCEL'} className='' />
                  </div>
                  <img
                        src={logoImage}
                        alt="logo de l'application"
                        className="flex justify-center items-center h-10 w-32 z-20 my-3"
                     />

                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 items-start w-full">
                     <Input
                        type='text'
                        placeholder="Nom d'utilisateur"
                        register={register}
                        label="Nom d'utilisateur:"
                        tagRef={'nom'}
                     />

                     <Input
                        type='password'
                        placeholder='Mot de passe'
                        register={register}
                        label={'Mot de passe:'}
                        tagRef={'password'}
                     />

                     <Button
                        title={'CONNECTER'}
                        className="w-full bg-blue-500"
                     />
                     <p className=" text-white py-2 px-4 rounded-md w-[95%]">
                        ---------- ou ----------
                     </p>
                  </form>
                  <Button
                     title={'CREER UN COMPTE'}
                     className="w-full bg-gray-200"
                     handleClick={() => goToPath('/register')}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}