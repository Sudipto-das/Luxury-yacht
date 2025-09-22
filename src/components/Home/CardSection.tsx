import Card from "../common/Card"

export default function CardSection() {
  const cardData = [
    { title: 'Athena', subtitle: 'Luxury Motor Yacht', location: 'Athens, Greece', rating: 5, size: '75 ft', member: 10, price: 1200, img: './card1.jpg' },
    { title: 'Poseidon', subtitle: 'Sport Cruiser', location: 'Limassol, Cyprus', rating: 4.8, size: '60 ft', member: 8, price: 900, img: './card2.jpg' },
    { title: 'Calypso', subtitle: 'Flybridge Yacht', location: 'Mykonos, Greece', rating: 4.9, size: '85 ft', member: 12, price: 1500, img: './card3.jpg' },
  ]

  return (
    <div className="max-w-7xl mx-auto  py-2 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((item, index) => (
          <Card key={index} cardData={item} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-[var(--color-third)] hover:bg-[#c1c933] text-gray-800 px-8 py-3 rounded-md font-medium text-sm">
          View All Yachts
        </button>
      </div>
    </div>
  )
}
