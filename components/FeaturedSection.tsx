import { ShieldCheck, Headphones, Truck } from "lucide-react"; // Importing icons

const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center">
        
        {/* Secure Payment */}
        <div className="w-full md:w-1/3 px-4">
          <ShieldCheck size={40} className="mx-auto text-black" />
          <h3 className="text-lg font-semibold mt-4">SECURE PAYMENT</h3>
          <p className="text-gray-600 text-sm">
            We process end-to-end secure payments via Credit Cards, Debit Cards, UPI, and Cash on Delivery.
          </p>
        </div>

        {/* 24/7 Customer Support */}
        <div className="w-full md:w-1/3 px-4 mt-8 md:mt-0">
          <Headphones size={40} className="mx-auto text-black" />
          <h3 className="text-lg font-semibold mt-4">24/7 CUSTOMER SUPPORT</h3>
          <p className="text-gray-600 text-sm">
            We are here to assist your queries and order details anytime.
          </p>
        </div>

        {/* Fast Delivery */}
        <div className="w-full md:w-1/3 px-4 mt-8 md:mt-0">
          <Truck size={40} className="mx-auto text-black" />
          <h3 className="text-lg font-semibold mt-4">FAST DELIVERY</h3>
          <p className="text-gray-600 text-sm">
            99% of orders are shipped within 48 hours. Safe, Fast, and Reliable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
