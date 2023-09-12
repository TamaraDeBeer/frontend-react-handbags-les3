import './App.css'
import Button from "./components/button/Button.jsx";
import Product from "./components/Product/Product.jsx";
import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import our_story from './assets/our_story.png'
import Tile from "./components/Tile/Tile.jsx";



function App() {
  return <>
    <main>
    <h1>Handbags & Purses</h1>
      <nav>
        <Button
          clickHandler={() => console.log("to the Collection")}
          buttonDisabled={false}
          buttonText="to the Collection"
        />
        <Button
            clickHandler={() => console.log("Shop all Bags")}
            buttonDisabled={false}
            buttonText="Shop all Bags"
        />
        <Button
            clickHandler={() => console.log("pre-orders")}
            buttonDisabled={true}
            buttonText="pre-orders"
        />
      </nav>

      <Product
        productLabel="Best Seller"
        productImage={bag1}
        productName="The Handy Bag"
        productPrice="€400,-"
        />

      <Product
          productLabel="Best Seller"
          productImage={bag2}
          productName="The Stylish Bag"
          productPrice="€250,-"
      />

      <Product
          productLabel="New Collection"
          productImage={bag3}
          productName="The Simple Bag"
          productPrice="€300,-"
      />

      <Product
          productLabel="New Collection"
          productImage={bag4}
          productName="The Trendy Bag"
          productPrice="€150,-"
      />
    </main>
    <footer>
       <Tile>
         <h2>The Brand</h2>
         <p>Hier komt een text</p>
       </Tile>

      <Tile>
        <img src={brand} alt="brand"/>
      </Tile>

      <Tile>
        <img src={our_story} alt="brand"/>
      </Tile>

      <Tile>
        <h2>Our Story</h2>
        <p>Hier komt een text</p>
      </Tile>


    </footer>
  </>
}

export default App
