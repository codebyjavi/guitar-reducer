import { useReducer } from "react"
import { useCart } from "./hooks/useCart"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { cartReducer, initialState } from "./reducers/cart-reducer"

function App() {

  const { cart, addToCart, removeFromCart, decreaseQuantity, 
          increaseQuantity, clearCart, cartTotal, isEmpty } = useCart()

  const [state, dispatch] = useReducer(cartReducer, initialState)

  
  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        cartTotal={cartTotal}
        isEmpty={isEmpty}
      />

      <h2 className="py-5 md:pt-10 text-yellow-500 font-bold text-5xl text-center">
        Nuestra Colección
      </h2>

      <main className="grid md:grid-cols-2 gap-y-20 max-w-4xl mx-auto px-5 py-10">
        
        {state.data?.map((guitar) => (
          <Guitar 
            key={guitar.id} 
            guitar={guitar}
            dispatch={dispatch}
          />
          ))}

      </main>
    </>
  )
}

export default App
