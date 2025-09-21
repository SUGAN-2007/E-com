import '../css/nav.css'

export default function Nav() {
        return (
                <>
                        <nav className='main'>
                                <div className='header'>
                                        <img src="/public/image/logo-trans.png" alt="" />
                                        <h1>Urbanly</h1>
                                </div>

                                <div className='cart'>
                                        <button> <img src="/public/image/notification.png" alt="Notification" /></button>
                                        <button><img src="/public/image/troll-bl.png" alt="Delivery" /></button>
                                        <button><img src="/public/image/cart.png" alt="Cart" /></button>
                                        <button><img src="/public/image/account.png" alt="Account" /></button>
                                </div>
                        </nav>
                </>
        )
}