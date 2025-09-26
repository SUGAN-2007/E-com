import Cart from "./cart";
import Nav from "./nav";
import '../css/card.css'
import { shirts } from '../data'
export default function Products() {
        return (
                <main>
                        <p>Shirts</p>
                        {shirts.map((item, index) => (
                                <div key={index}>
                                        <div className="pro-card">
                                                <div>
                                                        <img src={item.image} alt={item.name} width="150" />
                                                </div>
                                                <div>
                                                        <p>{item.name}</p>
                                                        <p>{item.rs}</p>
                                                        {/* <p>{item.des}</p> */}
                                                        <div className="numberofproducts">
                                                                <button>-</button>
                                                                <p>0</p>
                                                                <button>+</button>
                                                        </div>
                                                </div>
                                        </div>
                                        <button>Add to cart</button>
                                </div>
                        ))}
                </main>
        );
}
