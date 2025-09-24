const PaymentMethod = () => {
    return (
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold pb-2">Payment schedule</h2>
  
        <div className="flex items-center gap-2 text-gray-700 border-b border-slate-300 pb-5">
          <input type="radio" checked readOnly />
          <span className="font-semibold">2,065 €</span>
          <span className="text-sm text-gray-500">Full payment by 13 September 2025</span>
        </div>
  
        <h2 className="text-lg font-semibold pb-2">How would you like to pay?</h2>
  
        <div className="md:flex justify-between ">
          <p className="text-sm text-gray-500 pb-4">Guaranteed safe & secured checkout</p>
          <div className="p-2 bg-slate-200 text-xs rounded-md text-center">
            Powered by <span className="font-bold">Stripe</span>
          </div>
        </div>
  
        {/* Debit/Credit Card */}
        <div className="p-4 border border-slate-300 rounded-md space-y-4">
          <label className="flex items-center gap-2 text-xs font-normal">
            <input type="radio" name="payment" defaultChecked />
            Debit/credit card
          </label>
  
          <div className="space-y-3 p-2">
            <p className="text-sm text-gray-500">Today you pay 2,065 € (100% of total price).</p>
  
            <div>
              <label htmlFor="cardNumber" className="block text-xs font-normal text-gray-700 mb-1">
                Card Number
              </label>
              <input id="cardNumber" type="text" placeholder="1234 5678 9012 3456" className="input" />
            </div>
  
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiry" className="block text-xs font-normal text-gray-700 mb-1">
                  Expiry Date
                </label>
                <input id="expiry" type="text" placeholder="MM / YY" className="input" />
              </div>
  
              <div>
                <label htmlFor="cvc" className="block text-xs font-normal text-gray-700 mb-1">
                  CVC
                </label>
                <input id="cvc" type="text" placeholder="CVC" className="input" />
              </div>
            </div>
          </div>
  
          {/* Bank Transfer */}
          <label className="flex items-center gap-2 text-xs font-normal">
            <input type="radio" name="payment" />
            Bank transfer
          </label>
        </div>
      </div>
    )
  }
  
  export default PaymentMethod
  