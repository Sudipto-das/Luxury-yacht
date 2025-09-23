import SimilarProductCard from "../components/yacth/similar-product-card"
import YachtCharterBooking from "../components/yacth/yacht-charter-booking"
import YachtDetailsComponent from "../components/yacth/yacht-details"



function Yacht() {
    return (
        <div>
            
            <YachtCharterBooking/>
            <YachtDetailsComponent/>
            <SimilarProductCard/>
        </div>
    )
}

export default Yacht