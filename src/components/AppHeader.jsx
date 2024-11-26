import HeaderMenu from '../components/HeaderMenu'
import Img from '../assets/react.svg'

export default function AppHeader(){
    return(
        <>
            <div className='logo'>
                <img src={Img}/>
                <h2>Ricette della NONNA!</h2>
            </div>
            <HeaderMenu />
        </>
    )
}