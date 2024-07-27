import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import logoImage from '/public/contact-outline.svg'
import { Link } from "react-router-dom";


export default function Register() {
   const navigate = useNavigate();
   const goToPath = (path) => {
      if (!path) return;
      navigate(path);
   }
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      console.log(data);
      // place mon API
   };

   return (


      <div className="">
         <div
            className="absolute top-0 left-0 w-full h-full bg-cover filter blur-sm z-0"
            style={{ backgroundImage: "url('connexion-bg.jpeg')" }}
         ></div>

         <div className="absolute top-0 left-0 w-full h-full bg-transparent flex items-center justify-center z-10">
            <div className="w-full md:w-[50%] opacity-55 rounded-md flex items-center justify-center">
               <div className="flex flex-col h-[100%] min-h-[100%]  rounded-lg w-[100%] text-center justify-center items-center relative  bg-gray-700 mx-3 px-8 overflow-scroll">
                  <div className="flex justify-between w-full items-center p-1">
                     <img
                        src={logoImage}
                        alt="logo de l'application"
                        className="flex justify-center items-center h-10 w-32 z-20 mb-2"
                     />
                     <Button handleClick={() => goToPath('/')} title={'CANCEL'} className='mb-2' />
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 items-start w-full py-3">
                     <Input
                        type='text'
                        placeholder="Nom"
                        label={"Nom:"}
                        tagRef={'nom'}
                        register={register}
                     />
                     <Input
                        type='email'
                        tagRef='email'
                        placeholder="Email"
                        label={"Email:"}
                        register={register}
                     />
                     <Input
                        type='text'
                        tagRef='ville'
                        placeholder="Ville"
                        label={"Ville :"}
                        register={register}
                     />
                     <Input
                        type='text'
                        tagRef='postnom'
                        placeholder="Post-Nom"
                        label={"Post-Nom :"}
                        register={register}
                     />
                     <Input
                        type='text'
                        tagRef='numerotelephone'
                        placeholder="Numero de telephone"
                        label={"Numero de telephone :"}
                        register={register}
                     />
                     <Input
                        type='password'
                        tagRef='confirmermotdepasse'
                        placeholder="Confirmer mot de passe"
                        label={"Confirmer mot de passe:"}
                        register={register}
                     />
                     <div className="flex gap-4 items-center">
                     <Button 
                        title={'Enregister'}
                     />
                     <p>
                        Avez-vous deja un compte? <Link className="hover:underline" to={'/login'}>Login</Link>
                     </p>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}