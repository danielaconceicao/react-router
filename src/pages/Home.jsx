import Jumbotron from "../components/Jumbotron"
import imgNonna from '/image/nonna.jpg'

export default function Home(){
    const title = 'Le migliori ricette della città'
    const description = 'Vieni a scoprire le straordinarie ricette della nonna'

    return (
        <>
            <Jumbotron title={title} description={description}/>
            <section className="container">
                <div className="card border-0 align-items-center justify-content-center">
                    <img width={140} src={imgNonna} />
                    <div className="intro text-center">
                        <h3 className="my-3">Pasticceria Teresa</h3>
                        <p>Ciao, io sono la nonna Teresa</p>
                    </div>
                </div>

            </section>
        </>
    )
}