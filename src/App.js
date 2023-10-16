import React from "react"
import Navbar from "./components/Navbar"
import SliderSelect from "./components/SliderSelect"
import TenureSelect from "./components/TenureSelect"
import Result from "./components/Result"
import Container from "@mui/material/Container"

function App () {
  return <div className="App">
    {/* sx is for writing styles on MUI components  */}
    <Navbar/>
      <Container maxWidth="xl" sx={{ mt: 4 }}>
      <SliderSelect/>
      <TenureSelect/>
      <Result/>
      </Container>
  </div>
}


export default App