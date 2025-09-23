import Cart from "./cart";
import Nav from "./nav";
import '../css/card.css'
export default function Products() {
        const shirts = [
                { no: 1, name: "Classic White Shirt", image: "/products/1.webp", rs: "$25.00" },
                { no: 2, name: "Casual Blue Shirt", image: "/products/2.webp", rs: "$28.00" },
                { no: 3, name: "Formal Black Shirt", image: "/products/3.webp", rs: "$35.00" },
                { no: 4, name: "Checked Red Shirt", image: "/products/4.webp", rs: "$30.00" },
                { no: 5, name: "Denim Shirt", image: "/products/5.webp", rs: "$40.00" },
                { no: 6, name: "Linen Summer Shirt", image: "/products/6.webp", rs: "$32.00" },
                { no: 7, name: "Slim Fit Grey Shirt", image: "/products/7.webp", rs: "$38.00" },
                { no: 8, name: "Printed Hawaiian Shirt", image: "/products/8.webp", rs: "$29.00" },
                { no: 9, name: "Olive Green Shirt", image: "/products/9.webp", rs: "$34.00" },
                { no: 10, name: "Brown Flannel Shirt", image: "/products/10.webp", rs: "$36.00" },
                { no: 11, name: "Sky Blue Polo Shirt", image: "/products/11.webp", rs: "$27.00" },
        ];

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
                                                        <p>{item.des}</p>
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
