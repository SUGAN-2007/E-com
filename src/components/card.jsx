import '../css/card.css'
import { shirts } from '../data'
import { useState } from "react"
export default function App() {
        const [counts, setCounts] = useState(Array(shirts.length).fill(0));
        const [des, setDes] = useState(Array(shirts.length).fill(""))
        const [name, setName] = useState(Array(shirts.length).fill(""))
        const [image, setImage] = useState(Array(shirts.length).fill(""))
        const [active, setActive] = useState(false)

        // Increase count for one product
        function cart_add(index) {
                const newCounts = [...counts];
                newCounts[index] += 1;
                setCounts(newCounts);
        }

        // Decrease count for one product
        function cart_remove(index) {
                const newCounts = [...counts];
                if (newCounts[index] > 0) newCounts[index] -= 1;
                setCounts(newCounts);
        }
        function pro_des(index) {
                const desc = shirts[index].des
                const name = shirts[index].name
                const image = shirts[index].image
                setDes(desc);
                setName(name)
                setImage(image)
        }
        return <>
                <div>
                        <main className="pro-cards">
                                {shirts.map((item, index) => (
                                        <div className="pro-card" key={index}>
                                                <div >
                                                        <img className="pro-img" src={item.image} alt={item.name} />
                                                </div>
                                                <div className="pro-con">
                                                        <a className="pro-name" onClick={() => pro_des(index) & setActive(true)}>{item.name}</a>
                                                        <p className="pro-rs">{item.rs}</p>

                                                        <div className="numberofproducts">
                                                                <button className="pro-but" onClick={() => cart_remove(index)}>
                                                                        -
                                                                </button>
                                                                <p className="pro-out">{counts[index]}</p>
                                                                <button className="pro-but" onClick={() => cart_add(index)}>
                                                                        +
                                                                </button>
                                                        </div>
                                                        <button>Add to cart</button>
                                                </div>

                                        </div>
                                ))}
                                <div className={active ? "pro-vis" : "pro-des"}>
                                        <div className="header">
                                                <h1 pro-vis-head>{name}</h1>
                                                <button className="pro-vis-quit" onClick={() => setActive(false)}>X</button>
                                        </div>
                                        <img className="pro-vis-image" src={image} alt="" />
                                        <p className="pro-vis-des">{des}</p>
                                </div>
                        </main></div>
        </>
}