import Products from "./components/card"
import Nav from "./components/nav"
import './css/app.css'
import { useState } from "react"
function App() {
    const [active,SetActive] = useState(false)
        return (
                <main>
                        <Nav active={active} />
                        <Products active={active} setActive={SetActive} />
                </main>
        )
}

export default App