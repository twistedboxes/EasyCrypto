import CardContainer from "./components/CardContainer"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"

const App = () => {
  return (
   <div className="flex flex-col justify-center items-center">
   <Header/>
   <SearchBar />
   <CardContainer />
   </div>
  )
}

export default App
