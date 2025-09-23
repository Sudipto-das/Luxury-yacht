
import CXreview from "../components/Home/CXreview"
import FAQSection from "../components/Home/FAQ"
import Featured from "../components/Home/Featured"
import OurService from "../components/Home/OurService"
import CharterPricing from "../components/Home/Price"
import SubFooter from "../components/Home/SubFooter"
import Hero from "../components/Home/hero"

function Home() {
  return (
    <>
      <div >
        <Hero />
        <Featured />
        <OurService />
        <CharterPricing/>
        <CXreview/>
        <FAQSection/>
        <SubFooter/>
      </div>
    </>
  )
}

export default Home