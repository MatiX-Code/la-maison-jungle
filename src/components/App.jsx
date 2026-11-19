// Fichier où vous utiliserez votre composant 
// Import correspondant pour pouvoir l'utiliser avec la syntaxe JSX <Banner /> et les autres composants
import { useState } from 'react'
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'


// Fichier de mon composant
const App = () => {
  const [cart, updateCart] = useState([])

  return (
    <>
      <Banner />
      <>
      <ShoppingList cart={cart} updateCart={updateCart} />
      <Cart cart={cart} updateCart={updateCart} />
      </>
      <Footer />
    </>
  )
}
//Export par défaut
export default App