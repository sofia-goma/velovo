export default function Gallery({ text, className = '' }) {
   return (
      <div className={`w-96 h-48 rounded-md bg-black flex ${className}`}>
         <h1>{text}</h1>
      </div>
   );
}