
import Featured from "../components/Home/Featured"
import OurService from "../components/Home/OurService"
import CharterPricing from "../components/Home/Price"
import Hero from "../components/Home/hero"

function Home() {
  return (
    <>
      <div >
        <Hero />
        <Featured />
        <OurService />
        <CharterPricing/>
      </div>
    </>
  )
}

export default Home