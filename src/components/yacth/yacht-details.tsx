import { useState } from "react";
import {
    Calendar,
    Users,
    Anchor,
    Key,
    Droplets,
    Fuel,
    Gauge,
    Ruler,
    Zap,
    MapPin,
    Waves,
    Table,
    Map,
    Eye,
    Bed,
    Bath,
    
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// -------- DATA CONFIG -------- //
const description = {
    short:
        "Experience the ultimate luxury with a perfect boat deal for 8 people. Immerse yourself in the crystal-clear waters of Akamas Peninsula and Blue Lagoon.",
    long1:
        "Whether you're looking for a romantic getaway, a family vacation, or a fun-filled adventure with friends, this luxury boat trip from Latsi harbour to the breathtaking Akamas Peninsula and Blue Lagoon is an adventure you won't want to miss.",
    long2:
        "Our brand new luxury boat is fully equipped with meals and beverages, allowing you to explore the vibrant underwater world of the Akamas Peninsula and Blue Lagoon in style.",
};

const technicalSpecs = [
    { label: "Max passenger capacity", value: "8" },
    { label: "Hull length", value: "6.05 m" },
    { label: "Hull width", value: "2.25 m" },
    { label: "Engine power", value: "150 hp" },
    { label: "Weight", value: "800 kg" },
];

const specGrid = [
    { icon: Calendar, label: "Year", value: "2019" },
    { icon: Users, label: "People", value: "10" },
    { icon: Anchor, label: "Berths", value: "8 + 2" },
    { icon: Key, label: "Cabins", value: "4" },
    { icon: Droplets, label: "Toilets", value: "3", sub: "3 Electric toilets" },
    { icon: Eye, label: "Type of mainsail", value: "Rolling mainsail" },
    { icon: Gauge, label: "Draught", value: "2.3 m" },
    { icon: Ruler, label: "Beam", value: "4.7 m" },
    { icon: Zap, label: "Engine", value: "57 hp", sub: "42.5 kW" },
    { icon: Fuel, label: "Fuel tank", value: "210 l" },
    { icon: Droplets, label: "Water tank", value: "360 l" },
    { icon: Ruler, label: "Length", value: "14.27 m" },
];

const equipment = [
    { icon: Zap, name: "Snorkeling equipment" },
    { icon: Waves, name: "Outdoor shower" },
    { icon: Table, name: "External table" },
    { icon: Zap, name: "USB socket" },
    { icon: MapPin, name: "GPS" },
    { icon: Map, name: "Guides & Maps" },
];

const cabins = [
    { icon: Bed, count: "4x", name: "Double cabin" },
    { icon: Bed, count: "2x", name: "Beds in saloon" },
    { icon: Bath, count: "3x", name: "Toilets", sub: "3 Electric toilets" },
];

const extras = [
    {
        key: "flexibleCancellation",
        name: "Flexible cancellation",
        desc: "Flexible cancellation is designed for cases when you suddenly need to cancel your sailing holiday. It also covers COVID-19 sickness, hospitalization or forced quarantine.",
        price: "8% from rental price",
        badge: "NEW",
    },
    {
        key: "skipper",
        name: "Skipper",
        desc: "",
        price: "180 € per day",
    },
    {
        key: "wifi",
        name: "WiFi",
        desc: "",
        price: "80 € per week",
    },
];

const charges = [
    {
        name: "Transit log (final cleaning & bed linen)",
        price: "230 € per rental",
        mandatory: true,
    },
    {
        name: "Refundable Security Deposit",
        price: "3,000 € per rental",
        mandatory: true,
        note: "A refundable deposit is required at yacht pick-up and will be returned to you when the yacht is returned without damage.",
    },
];


export default function YachtDetailsComponent() {
    const [selectedExtras, setSelectedExtras] = useState<Record<string, boolean>>(
        {}
    );
    const navigate = useNavigate()
    const toggleExtra = (key: string) => {
        setSelectedExtras((prev) => ({ ...prev, [key]: !prev[key] }));
    };
    const GotoCheckout = () => {
        navigate('/checkout')
    }

    return (
        <div className="bg-white max-w-7xl mx-auto py-10">
            <div className="md:max-w-[70%] p-4">
                <p className="text-xs text-[var(--color-primary)] mb-4">
                    A boat license is not needed, even if you sail without a skipper.
                </p>

                {/* Description */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                        Description of Evangelos's motorboat
                    </h2>
                    <h3 className="text-xl font-semibold mb-4 text-[var(--color-primary)]">
                        Parker — Bow Rider 630 | 8 People
                    </h3>
                    <p className="mb-4 text-[var(--color-primary)]">{description.short}</p>
                    <p className="mb-4 text-[var(--color-primary)]">{description.long1}</p>
                    <p className="mb-4 text-[var(--color-primary)]">{description.long2}</p>
                </section>

                {/* Technical Specs */}
                <section className="mb-8">
                    <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-6">
                        Technical Specification
                    </h3>
                    <ul className="space-y-2 mb-8 text-[var(--color-primary)]">
                        {technicalSpecs.map((item, i) => (
                            <li key={i}>• {item.label}: {item.value}</li>
                        ))}
                    </ul>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {specGrid.map(({ icon: Icon, label, value, sub }, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <Icon className="w-6 h-6 text-[var(--color-third)]" />
                                <div>
                                    <p className="text-sm text-[var(--color-primary)]">{label}</p>
                                    <p className=" font-semibold text-[var(--color-primary)]">{value}</p>
                                    {sub && <p className="text-xs text-[var(--color-primary)]">{sub}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Equipment */}
                <section className="mb-10">
                    <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-6">
                        Equipment available on the motorboat
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                        {equipment.map(({ icon: Icon, name }, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <Icon className="w-5 h-5 text-[var(--color-third)]" />
                                <span className="text-[var(--color-primary)] text-sm">{name}</span>
                            </div>
                        ))}
                    </div>
                    <button className="bg-[var(--color-secondary)] text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                        View all equipment
                    </button>
                </section>
                {/*service */}
                <section>
                    <div>
                        <h1 className="text-xl font-bold text-[var(--color-primary)]">
                            Service provided by Evangelos
                        </h1>

                        <div className="flex gap-1 items-center py-6">
                            <img src="./icons/eye.png" alt="" className="w-10 h-10" />
                            <h3 className="text-gray-800 text-sm">Skipper</h3>
                        </div>

                        {/* Button container */}
                        <div className="flex flex-col gap-4">
                            <button className="bg-[var(--color-secondary)] text-white px-6 py-2 rounded-md hover:bg-blue-700 transition self-start">
                                View all equipment
                            </button>

                            <button onClick={GotoCheckout} className="bg-[var(--color-third)] text-[var(--color-primary)] font-semibold py-3 rounded-md w-full hover:bg-gray-800 transition">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </section>


                {/* Cabins */}
                <section className="pt-8 mb-10">
                    <div className="flex items-center gap-2 mb-8">
                        <Bed className="w-6 h-6 text-gray-700" />
                        <h2 className="text-2xl font-bold text-gray-900">Cabins</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {cabins.map(({ icon: Icon, count, name, sub }, i) => (
                            <div key={i} className="text-center">
                                <div className=" rounded-lg p-6 mb-4 flex items-center">
                                    <div className="text-4xl font-bold text-[var(--color-secondary)] mb-2">{count}</div>
                                    <div>
                                        <div className="flex justify-center mb-2">
                                            <Icon className="w-8 h-8 text-[var(--color-secondary)]" />
                                        </div>
                                        <p className="text-gray-700 font-medium">{name}</p>
                                        {sub && <p className="text-xs text-[var(--color-primary)]">{sub}</p>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Services & Extras */}
                <section className="mb-10">
                    <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">
                        Services & Extras
                    </h3>
                    <p className="text-[var(--color-primary)] text-sm mb-6">book now or later</p>
                    <div className="space-y-4">
                        {extras.map(({ key, name, desc, price, badge }) => (
                            <div
                                key={key}
                                className="flex items-center justify-between p-4 border-b border-slate-300 ]"
                            >
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        checked={!!selectedExtras[key]}
                                        onChange={() => toggleExtra(key)}
                                        className="w-4 h-4 text-[var(--color-primary)]"
                                    />
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium text-[var(--color-primary)]">{name}</span>
                                            {badge && (
                                                <span className="bg-[var(--color-third)] text-[var(--color-primary)] px-3 py-1 rounded-full text-xs font-medium">
                                                    {badge}
                                                </span>
                                            )}
                                        </div>
                                        {desc && (
                                            <p className="text-sm text-[var(--color-primary)]">
                                                {desc}{" "}
                                                {key === "flexibleCancellation" && (
                                                    <button className="text-[var(--color-primary)] hover:underline ml-1">
                                                        Learn more
                                                    </button>
                                                )}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold text-gray-800">{price}</p>
                                    <p className="text-xs text-gray-400">optional</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Excluded charges */}
                <section>
                    <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">
                        Excluded charges
                    </h3>
                    <p className="text-[var(--color-primary)] text-sm mb-6">
                        to be paid at the yacht pick-up
                    </p>
                    <div className="space-y-4">
                        {charges.map((c, i) => (
                            <div key={i} className="p-4 border-b border-slate-300 ">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[var(--color-primary)] font-medium">{c.name}</span>
                                    <div className="text-right">
                                        <span className="font-semibold text-gray-800">{c.price}</span>
                                        {c.mandatory && (
                                            <p className="text-xs text-red-500">mandatory</p>
                                        )}
                                    </div>
                                </div>
                                {c.note && <p className="text-sm text-gray-600">{c.note}</p>}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
