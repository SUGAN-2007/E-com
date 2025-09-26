import '../css/nav.css'

export default function Nav() {
        return (
                <>
                        <nav className='nav-main'>
                                <div className='nav-header'>
                                        <img className='nav-logo' src="/image/logo-trans.png" alt="" />
                                        <h1 className='nav-head'>Urbanly</h1>
                                </div>

                                <div className='nav-cart'>
                                        {/* <button className='but'><img className='image' src="/image/notification.png" alt="Notification" /></button>
                                        <button className='but'><img className='image' src="/image/troll-bl.png" alt="Delivery" /></button>
                                        <button className='but'><img className='image' src="/image/cart.png" alt="Cart" /></button>
                                        <button className='but'><img className='image' src="/image/account.png" alt="Account" /></button> */}
                                        <a className='nav-link' href="">Home</a>
                                        <a className='nav-link' href="">Notification</a>
                                        <a className='nav-link' href="">Delivery</a>
                                        <a className='nav-link' href="">Cart</a>
                                        <a className='nav-link' href="">Login/Sign up</a>

                                </div>
                        </nav>
                </>
        )
}