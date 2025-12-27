import React from "react";
import logo from "../assets/vcart logo.png";

function Footer() {
  return (
    <footer className="w-full bg-[#dbfcfcec] text-gray-800">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Fithive logo"
              className="w-10 h-10"
            />
            <h1 className="text-2xl font-bold">Fithive</h1>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">
            Fithive is your all-in-one online shopping destination, offering
            top-quality products, unbeatable deals, and fast delivery backed by
            trusted service.
          </p>

          <p className="text-sm font-semibold text-gray-700">
            Fast. Reliable. Easy.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-black cursor-pointer">
              <a href="/about-us">
                About Us
              </a>

            </li>
            <li className="hover:text-black cursor-pointer">Careers</li>
            <li className="hover:text-black cursor-pointer">
              <a href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-black cursor-pointer">Help Center</li>
            <li className="hover:text-black cursor-pointer">Returns</li>
            <li className="hover:text-black cursor-pointer">Shipping</li>
            <li className="hover:text-black cursor-pointer">Track Order</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
            <li className="hover:text-black cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-black cursor-pointer">Refund Policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Fithive. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
