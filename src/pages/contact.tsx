import CommonHero from "../components/common/CommonHero"
import ContactSection from "../components/contact/contact-section"


function Contact() {
  const ContactData = {
    img: './contact-us.png',
    title: 'Contact Us',
    subtitle: `We'd love to hear from you. Get in touch with our team for inquiries or help`
  }

  return (
    <>
      <CommonHero {...ContactData} />
      <ContactSection />
    </>
  )
}

export default Contact