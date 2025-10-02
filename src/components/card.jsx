import "../css/card.css"
import { shirts } from "../data"
import { useState } from "react"
import '../css/app.css'

export default function Products({ active, setActive }) {
    const [counts, setCounts] = useState(Array(shirts.length).fill(0))
    const [des, setDes] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [rs, setRs] = useState("")

    function cart_add(index) {
        const newCounts = [...counts]
        newCounts[index] += 1
        setCounts(newCounts)
    }

    function cart_remove(index) {
        const newCounts = [...counts]
        if (newCounts[index] > 0) newCounts[index] -= 1
        setCounts(newCounts)
    }

    function pro_des(index) {
        setDes(shirts[index].des)
        setName(shirts[index].name)
        setImage(shirts[index].image)
        setRs(shirts[index].rs)
    }

    return (
        <div>
            <main className={active ? "back-drop" : "pro-cards"}>
                {shirts.map((item, index) => (
                    <div className="pro-card" key={index}>
                        <div>
                            <img className="pro-img" src={item.image} alt={item.name} />
                        </div>
                        <hr />
                        <div className="pro-con">
                            <a
                                className="pro-name"
                                onClick={() => {
                                    pro_des(index)
                                    setActive(true)
                                }}
                            >
                                {item.name}
                            </a>
                            <p className="pro-rs">{item.rs}</p>

                            <div className="pro-pur">
                                <div className="numberofproducts">
                                    <button className="pro-but" onClick={() => cart_remove(index)}>
                                        -
                                    </button>
                                    <p className="pro-out">{counts[index]}</p>
                                    <button className="pro-but" onClick={() => cart_add(index)}>
                                        +
                                    </button>
                                </div>
                                <button className="pro-cart">Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </main>

            <div className={active ? "pro-vis" : "pro-des"}>
                <div className="pro-vis-header">
                    <img
                        className="pro-vis-logo"
                        src="/image/logo-trans.png"
                        alt="logo"
                    />
                    <h1 className="pro-vis-head">{name}</h1>
                    <button className="pro-vis-quit" onClick={() => setActive(false)}>
                        <img src="/image/exit.png" alt="close" />
                    </button>
                </div>
                <img className="pro-vis-image" src={image} alt={name} />
                <p>{rs}</p>
                <p className="pro-vis-des">{des}</p>
            </div>
        </div>
    )
}
