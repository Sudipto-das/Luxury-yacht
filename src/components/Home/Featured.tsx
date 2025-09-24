import CardSection from "./CardSection"


function Featured() {
    return (
        <div className="py-10 bg-[var(--color-background)] p-3">
            <div className="max-w-7xl mx-auto ">
                <div className="flex justify-between items-center pb-8">
                    <h1 className="text-[var(--color-primary)] font-bold text-2xl">Featured Yachts</h1>
                    <div className="flex gap-2 items-center">
                        <label htmlFor="" className="font-light text-[0.75rem]">Filter by</label>
                        <select
                            className="border border-slate-400 px-3 py-2 rounded-md font-medium text-sm"
                        >
                            <option>Greece</option>
                            <option>Price</option>
                            <option>Ratings</option>
                        </select>
                    </div>

                </div>
                <CardSection />
            </div>
        </div>
    )
}

export default Featured