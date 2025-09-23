import CommonHero from "../components/common/CommonHero"
import YachtListingPage from "../components/yacth/yacthsList"


function Yachts() {
  const yachData = {
    img:'./yatch.jpg',
    title:'Explore Our Yacht Collection',
    subtitle:'Discover our premium selection of luxury yachts available for charter in Greece and Cyprus'
  }
  return (
    <div>
      <CommonHero {...yachData}/>
      <YachtListingPage/>
    </div>
  )
}

export default Yachts