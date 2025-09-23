import '../css/nav.css'

export default function Nav() {
        return (
                <>
                        <nav className='main'>
                                <div className='header'>
                                        <img className='logo' src="/image/logo-trans.png" alt="" />
                                        <h1 className='head'>Urbanly</h1>
                                </div>

                                <div className='cart'>
                                        <button className='but'><img className='image' src="/image/notification.png" alt="Notification" /></button>
                                        <button className='but'><img className='image' src="/image/troll-bl.png" alt="Delivery" /></button>
                                        <button className='but'><img className='image' src="/image/cart.png" alt="Cart" /></button>
                                        <button className='but'><img className='image' src="/image/account.png" alt="Account" /></button>
                                </div>
                        </nav>
                </>
        )
}