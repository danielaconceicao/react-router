import { Outlet } from 'react-router-dom'
import HeaderMenu from '../components/HeaderMenu'
export default function DefaultLayout(){
    return(
        <>
            <header>
                <h2>Logo</h2>
                <HeaderMenu/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <p>copyright 2024</p>
            </footer>
        
        
        </>
    )
}