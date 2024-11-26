import { Outlet } from 'react-router-dom'
import AppHeader from '../components/AppHeader'
export default function DefaultLayout(){
    return(
        <>
            <header>
                <AppHeader/>
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