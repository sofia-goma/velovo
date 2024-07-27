import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
   const navigate = useNavigate();
   const navigateToHome = (path) => {
      if (!path) return;
      navigate(path);
   }
   return (
      <>
         <main className="grid min-h-full place-items-center bg-gray-300 px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
               <p className="text-base font-semibold text-indigo-600">404</p>
               <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
               <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
               <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Button title={'Go back home'} className="bg-black" handleClick={() => navigateToHome('/')} />
                  <a href="#" className="text-sm font-semibold text-gray-900">
                     Contact support <span aria-hidden="true">&rarr;</span>
                  </a>
               </div>
            </div>
         </main>
      </>
   );
}