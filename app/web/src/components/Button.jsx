export default function Button({ title, handleClick, className = "", type }) {
   return (
      <button
         type={type}
         className={`bg-slate-800 hover:bg-slate-700 font-semibold px-6 h-10 rounded-md text-gray-50 cursor-pointer ${className}`}
         onClick={handleClick}
      >
         {title}
      </button>
   );
};