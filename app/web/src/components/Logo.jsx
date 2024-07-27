import icons from '../constants';


export default function Logo({ classes }) {
   return (
      <img
         className={`h-16 ${classes}`}
         src={icons.logoIcon}
         alt="logo"
      />
   );
}