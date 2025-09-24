import OrderSummary from "../components/Checkout/Order-summury";
import PaymentMethod from "../components/Checkout/Payment-method";

import PersonalInfoForm from "../components/Checkout/Personal-information";



export default function Checkout() {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-xl font-semibold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <div className="space-y-6 lg:col-span-2">
          <PersonalInfoForm />
          <PaymentMethod />

          <p className="text-xs text-gray-500">
            By reserving this yacht, you agree to our{" "}
            <a href="#" className="underline">Terms and conditions</a> and{" "}
            <a href="#" className="underline">Privacy policy and cookies</a>
          </p>
          <div className="flex justify-center">
            <button className=" bg-[var(--color-third)] hover:bg-lime-600 text-white py-3 px-5 rounded-lg font-semibold">
              Complete Booking
            </button>
          </div>
        </div>

        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}
