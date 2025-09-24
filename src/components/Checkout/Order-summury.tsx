const OrderSummary = () => {
    return (
        <div>
        <div className="bg-white rounded-lg shadow p-6 space-y-4">
            

            <h2 className="text-lg font-semibold text-[var(--color-primary)]">Order Summary</h2>
            <div className="flex items-center gap-3 border-b pb-3">
                <img src="./boat1.jpg" alt="Boat" className="w-20 h-16 object-cover rounded" />
                <div>
                    <p className="font-semibold text-[var(--color-primary)]">Parker — Bow Rider 630 (2025)</p>
                    <p className="text-sm text-gray-500">Sep 20 - Sep 27, 2025</p>
                    <p className="text-sm text-gray-500">€2,065.00</p>
                </div>
            </div>

            <div className="space-y-1 text-sm">
                <div className="flex justify-between"><span>Subtotal</span><span>€2,065.00</span></div>
                <div className="flex justify-between"><span>Discount</span><span>€0.00</span></div>
                <div className="flex justify-between"><span>Insurance</span><span>€0.00</span></div>
            </div>

            <div className="flex justify-between font-semibold text-lg border-t pt-2">
                <span>Total</span><span>€2,065.00</span>
            </div>

            <button className="w-full bg-[var(--color-third)] hover:bg-lime-600 text-white py-3 rounded-lg font-semibold">
                Complete Booking
            </button>

            
        </div>
        <p className="text-xs text-gray-500 text-center mt-8">Guaranteed safe & secured checkout</p>
        </div>
    )
}

export default OrderSummary
