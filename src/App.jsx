import './App.css'
import Button from "./components/button/Button.jsx";

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



    </main>
  </>
}

export default App
