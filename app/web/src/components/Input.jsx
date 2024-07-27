export default function Input({ register, placeholder, type, className = '', errors, label, tagRef }) {
   return (
      <div className="w-full flex flex-col">
         <label className="text-white text-left font-medium text-md mb-2">
            {label}
         </label>
         <input
            type={type}
            placeholder={placeholder}
            className={`p-2 w-full outline-none bg-gray-400 rounded-md ${className}`}
            {...register(tagRef, { required: true })}
         />
         {errors?.label && <p>Password is required</p>}
      </div>
   );
}