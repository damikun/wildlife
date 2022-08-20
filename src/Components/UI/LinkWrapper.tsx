import { Link } from "react-router-dom";


type LinkWrapperProps = {
  children:React.ReactNode;
  to:string
}

export function LinkWrapper({children,to}:LinkWrapperProps){
  return <Link className='hover:text-white transition duration-200' to={to}>{children}</Link>
}
