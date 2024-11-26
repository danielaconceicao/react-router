import Jumbotron from "../components/Jumbotron"
import imgNonna from "/image/nonna.jpg"
export default function AboutUs(){
    const title = 'Blog della Nonna'
    const description = 'Venite a scoprire qualcosa sulla nonna e sulle sue ricette'
    return(
        <>
            <Jumbotron title={title} description={description}/>

            <section className="aboutUs">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={imgNonna} alt="" />
                        </div>
                        <div className="col content-aboutUs">
                            <h3>Our Company</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nulla aliquid nobis labore accusamus nam autem, hic quam, neque minima deleniti ullam qui delectus, dicta necessitatibus magnam? Possimus, saepe ducimus.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsum libero modi aliquid dicta ab! Maiores sit et, maxime molestiae officiis harum alias, fugiat corrupti, nisi excepturi quam dolores exercitationem?
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}