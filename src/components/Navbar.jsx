import Link from 'next/link'
import IconPage from './IconPage'
import  { useRouter} from 'next/router'

const Navbar = () => {
const myRouter = useRouter()

    return ( 
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 ">
      <Link href='/'>
        <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"> 
        <span><IconPage/></span>
        <span className="fs-4 ms-2 text-white">DataSelic</span>
        </a>
      </Link>
      
      <ul className="nav nav-pills">
        <li className="nav-item">
        <Link href="/">
        <a className={myRouter.pathname == "/" ? "nav-link active":"nav-link text-white"}>Home</a></Link></li>
        <li className="nav-item">
        <Link href="/investimento">
        <a className={myRouter.pathname == "/investimento" ? "nav-link active":"nav-link text-white"}>Investimentos</a></Link></li>
        <li className="nav-item">
        <Link href="/calculadora">
        <a className={myRouter.pathname == "/calculadora" ? "nav-link active":"nav-link text-white"}>Calculadora</a></Link></li>
        <li className="nav-item">
        <Link href="/moedas">
        <a className={myRouter.pathname == "/moedas" ? "nav-link active":"nav-link text-white"}>Moedas</a></Link></li>
      </ul>
    </header>
     );
}
 
export default Navbar;