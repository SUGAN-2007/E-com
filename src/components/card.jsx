import Cart from "./cart";
import Nav from "./nav";
import '../css/card.css'
import { shirts } from '../data'
export default function Products() {
        return (
                <>
                        <p className="card-head">Shirts</p>
                        <main className="pro-cards">
                                {shirts.map((item, index) => (
                                        <div className="pro-card" key={index}>
                                                <div >
                                                        <img className="pro-img" src={item.image} alt={item.name} />
                                                </div>
                                                <div className="pro-con">
                                                        <p className="pro-name">{item.name}</p>
                                                        <p className="pro-rs">{item.rs}</p>
                                                        {/* <p>{item.des}</p> */}
                                                        <div className="numberofproducts">
                                                                <button className="pro-but">-</button>
                                                                <p>0</p>
                                                                <button className="pro-but">+</button>
                                                        </div>
                                                        <button>Add to cart</button>
                                                </div>
                                        </div>
                                ))}
                        </main>
                </>
        );
}
