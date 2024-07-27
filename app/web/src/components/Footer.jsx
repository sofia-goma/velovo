import {
   AiOutlineWhatsApp,
   AiFillFacebook,
   AiFillMail,
   AiFillCopyrightCircle
} from 'react-icons/ai';
import Logo from './Logo';


export default function Footer() {
   const year = new Date().getFullYear();
   return (
      <footer className="bg-black text-gray-200">
         <div className='container flex items-center justify-between px-2 py-3'>
            <Logo classes={'hidden md:block'} />
            <div className='flex items-center gap-1'>
               <span>Copyright</span>
               <AiFillCopyrightCircle size={18} />
               <span>Velovo</span>
               {year}
            </div>
            <div className='flex items-center gap-2 md:gap-4'>
               <AiFillFacebook className='#f5f5f5' size={24} />
               <AiOutlineWhatsApp className='#f5f5f5' size={24} />
               <AiFillMail color='#f5f5f5' size={24} />
            </div>
         </div>
      </footer>
   );
}