const PersonalInfoForm = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6 max-w-3xl mx-auto">
      <h2 className="text-lg font-semibold border-b-2 border-blue-600 pb-2 text-[var(--color-primary)]">
        Personal Information
      </h2>

      {/* First Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-xs text-gray-700 mb-1">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            className="input w-full"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-xs text-gray-700 mb-1">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            className="input w-full"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs text-gray-700 mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            className="input w-full"
          />
        </div>

        <div>
          <label htmlFor="nationality" className="block text-xs text-gray-700 mb-1">
            Nationality
          </label>
          <select id="nationality" className="input w-full">
            <option>Select your nationality</option>
          </select>
        </div>

        <div className="col-span-1 md:col-span-2">
          <label htmlFor="phone" className="block text-xs text-gray-700 mb-1">
            Phone Number
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <select className="input w-full sm:w-20">
              <option>+1</option>
            </select>
            <input
              id="phone"
              type="text"
              placeholder="Phone number"
              className="input flex-1 w-full"
            />
          </div>
        </div>
      </div>

      {/* Second Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="street" className="block text-xs text-gray-700 mb-1">
            Street Address
          </label>
          <input
            id="street"
            type="text"
            placeholder="Enter your street address"
            className="input w-full"
          />
        </div>

        <div>
          <label htmlFor="postalCode" className="block text-xs text-gray-700 mb-1">
            Postal Code
          </label>
          <input
            id="postalCode"
            type="text"
            placeholder="Enter postal code"
            className="input w-full"
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-xs text-gray-700 mb-1">
            City
          </label>
          <input id="city" type="text" placeholder="Enter city" className="input w-full" />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label htmlFor="country" className="block text-xs text-gray-700 mb-1">
            Country
          </label>
          <select id="country" className="input w-full">
            <option>Select your country</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
