import { AiOutlineSearch } from 'react-icons/ai';


export default function SearchBar() {
   return (
      <div className="flex items-center w-full md:w-96 p-2 ml-auto rounded-full px-4 gap-3 bg-slate-500">
         <input
            className="p-2 text-gray-200 py-1 flex-1 outline-none bg-transparent"
            type="search"
            placeholder="Rechercher..."
         />
         <button>
            <AiOutlineSearch size={24} color="#f5f5f5" />
         </button>
      </div>
   );
};