import React from 'react';
import lemons from './assets/lemon-seeds-c-limon.jpg';
import lime from './assets/limoenen.png';
import ice from './assets/ijsblokjes.jpg';
import {ReactComponent as ShoppingCart} from './assets/winkelmandje.svg';
import './App.css';
import './components/Product';
import Product from "./components/Product";

function App() {

    function logClick() {
        console.log('You clicked!');
    }

    return (
        <>
            <nav>
                <ul>
                    <li><a href="/">Shop</a></li>
                    <li><a href="/">Ons verhaal</a></li>
                    <li><a href="/">Blog</a></li>
                </ul>
                <ShoppingCart className="shopping-cart-icon"/>
            </nav>
            <header>
                <h1>Fruit perfection</h1>
                <button type="button" onClick={logClick}>
                    Shop nu
                </button>
            </header>
            <main>
                <Product
                    img={lemons} alt="Lemons"
                    title="Citroen"
                    description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten.
                        Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het
                        sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
                />
                <Product
                    img={lime} alt="Lime"
                    title="Limoen"
                    description="Limoen is familie van de citroen en de sinaasappel en behoort tot de citrusvruchten
                        (Wijnruitfamilie). Limoenen zijn rond en kleiner dan citroenen. De schil is dun, vrij glad en
                        groen."
                />
                <Product
                    img={ice} alt="Ice cubes"
                    title="Ijsblokjes"
                    description="Een ijsblokje of ijsklontje is bevroren water in de vorm van een klein blokje. Het wordt gemaakt
                        in een diepvriezer door water in een plastic vorm te laten bevriezen."
                />
            </main>
        </>
    );
}

export default App;
