import * as React from "react"
import Header from "../components/Header"
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}



const IndexPage = () => {
  return (
    <main >
      <Header/>
      <div>
        <h1 style={headingStyles}>
      It's time to trade, the future .
      </h1>
      </div>
      
        <div>
        <span style={headingAccentStyles}>Trade BTC, ETH Futures with 125x leverage and earn rewards.</span>
        </div>

        <div>
      <img src="../images/ip.png" alt="phone" />
      </div>

      <div style={{display:'flex',  justifyContent:'space-between', border: '1px solid black', 
    padding: '3px', backgroundColor:'grey'}}>
        <div><p>00%</p><p>conversion fees</p></div>
        <div><p>500 MN+%</p><p>lifetime volume traded</p></div>
        <div><p>250+</p><p>Total tradable pairs</p></div>
        <div><p>1500+</p><p>Traders</p></div>
      </div>
    </main>
  )
}

export default IndexPage

//export const Head = () => <title>Home Page</title>
