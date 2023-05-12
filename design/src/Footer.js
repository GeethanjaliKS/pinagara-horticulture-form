import React from "react";
import "./App.css"

function Footer() {
  return (
    <footer className="bg-green-300 text-black">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-lg font-bold mb-4 ">PIGARA HORTICULTURE FORM</h2>
            {/* <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed leo vel lorem vulputate blandit nec eget mauris.</p>
            <p>1234 Main St</p>
            <p>Springfield, IL 62704</p> */}
          </div>
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            {/* <h2 className="text-lg font-bold mb-4">Useful Links</h2> */}
            <ul className="list-none">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Products & Services</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Opening Hours</a></li>
            </ul>
          </div>
          {/* <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-lg font-bold mb-4">Connect With Us</h2>
            <ul className="list-none">
              <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
              <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
            </ul>
          </div> */}
        </div>
        <hr className="border-gray-800 my-8"/>
        <p className="text-center text-gray-400">© {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

