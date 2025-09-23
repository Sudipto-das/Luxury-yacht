import CommonHero from "../components/common/CommonHero"
import ServicesSection from "../components/services/serviceSection"


export default function Services() {
  const ServiceData = {
    img: './our-service/ourservicehero.png',
    title: 'Our Services',
    subtitle: 'Discover the exceptional yacht experiences we offer in Greece and Cyprus.'
  }
  return (
    <>
      <CommonHero {...ServiceData} />
      <ServicesSection/>
    </>
  )
}
