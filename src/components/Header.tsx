import { Hero } from "./components/Hero.tsx"

export function Header() {
  return (
    <header className="header">
        <h1 className="header__title">Crowfund</h1>

        <nav>
            <ul className="header__nav">
                <li className="header__nav-item"><a href="#">About</a></li>
                <li className="header__nav-item"><a href="#">Discover</a></li>
                <li className="header__nav-item"><a href="#">Get Started</a></li>
            </ul>
        </nav>
        
    </header>
    
  )
}