import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


export default function Menu() {
   const [show, setShow] = useState(false);
   const showMenu = () => {
      setShow(!show);
   }
   return (
      <div className='cursor-pointer md:hidden' onClick={showMenu}>
         {
            show ? (
               <AiOutlineClose color='#f5f5f5' size={40} />
            ) : (
               <AiOutlineMenu color='#f5f5f5' size={40} />
            )
         }
      </div>

   )
}