import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2AA7AF] text-white py-10 mt-10">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        
        {/* About the Shop */}
        <div>
          <h3 className="font-semibold">ABOUT THE SHOP</h3>
          <p className="text-sm mt-2">
            <strong>Yuvraj Enterprise </strong> is a trusted hardware store located in Pakyong Bazaar, Sikkim, offering a wide range of high-quality products for construction and home improvement. Specializing in tiles, paints, electrical goods, sanitary products, and construction materials, Yuvraj Enterprise is committed to providing top-notch supplies to meet the needs of homeowners, contractors, and builders. With a focus on quality, affordability, and customer satisfaction, it serves as a one-stop destination for all hardware and building material requirements in the region.
          </p>
        </div>

        {/* Popular Collections */}
        <div>
          <h3 className="font-semibold">POPULAR COLLECTIONS</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>Micro Controllers</li>
            <li>IoT Sensors</li>
            <li>STEM Kits</li>
            <li>Aeromodelling</li>
            <li>Arts & Crafts</li>
          </ul>
        </div>

        {/* Information Links */}
        <div>
          <h3 className="font-semibold">INFORMATION</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto mt-10 px-6 flex flex-col md:flex-row justify-between items-center border-t border-white pt-6">
        <p className="text-sm">&copy; 2025 Yuvraj Enterprise</p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Facebook className="w-6 h-6 cursor-pointer" />
          <Instagram className="w-6 h-6 cursor-pointer" />
          <Youtube className="w-6 h-6 cursor-pointer" />
          <Linkedin className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
