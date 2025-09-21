import '../css/nav.css'

export default function Nav() {
    return (
        <>
            <nav>
                {/* <div className="Menu">
                    <button><img src="/public/icons8-menu-50.png" alt="Menu" /></button>
                </div> */}
                <div className='header'>
                    <img src="/public/Untitled design(1).png" alt="" />
                    <h1>Urbanly</h1>
                </div>
                <div className='cart'> 
                    <button><img src="/public/icons8-cart-100(1).png" alt="cart" /></button> 
                    <button><img src="/public/icons8-account-100.png" alt="account" /></button>
                </div> 
            </nav>
        </>
    )
}