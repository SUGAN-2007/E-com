import '../css/nav.css'
import '../css/app.css'

export default function Nav({active}) {
        return (
                <>
                        <nav className={active ? 'back-drop' : 'nav-main'}>
                                <div className='nav-header'>
                                        <img className='nav-logo' src="/image/logo-trans.png" alt="" />
                                        <h1 className='nav-head'>Urbanly</h1>
                                </div>
                                <div className='nav-cart'>
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