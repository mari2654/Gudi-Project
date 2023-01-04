import React from "react"
import "./style.scss"
import Back from "../../assets/background-one.png"

const Main = () => {
    return(
        <main>
            <section className="section-one">
                <h1>Para qual estado você deseja ir?</h1>
                <form>
                    <input type="text" placeholder="Pesquisar"/>
                </form>
                <button><a href="#">BUSCAR</a></button>
            </section>
        </main>
    )
}

export default Main;