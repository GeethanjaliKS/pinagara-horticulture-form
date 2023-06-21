import React from "react";
import './App.css'

const SummaryPage = () => {
  return (
    <section className="bg-gray-100 max-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6" style={{fontFamily:'Carter One'}}>MY CART</h2>
          <table className="w-full center">
            <thead>
              <tr>
                <th className="py-2">Name</th>
                <th className="py-2">Description</th>
                <th className="py-2">Quantity</th>
                <th className="py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center">
                    <img
                      src="https://i.imgur.com/2DsA49b.webp"
                      alt="Book"
                      className="rounded-3 w-28"
                    />
                    <div className="flex flex-col ms-2">
                      <p className="mb-2">Chips</p>
                      
                    </div>
                  </div>
                </td>
                <td>
                  <p className="mb-0 font-semibold">jhejfhjfefjbehfhegwk</p>
                </td>
                <td>
                  <div className="flex items-center">
                    {/* decrement button */}
                    <button className="px-2 text-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </button>
                    {/* quantity input */}
                    <input
                      type="number"
                      className="w-16 border border-gray-300 text-center"
                      defaultValue={2}
                      min={0}
                    />
                    {/* increment button */}
                    <button className="px-2 text-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </button>
                  </div>
                </td>
                <td>
                  <p className="mb-0 font-semibold">$9.99</p>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center">
                    <img
                      src="https://i.imgur.com/Oj1iQUX.webp"
                      alt="Book"
                      className="rounded-3 w-28"
                    />
                    <div className="flex flex-col ms-4">
                      <p className="mb-2">Homo Deus: A Brief History of Tomorrow</p>
                      <p className="mb-0">Yuval Noah Harari</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="mb-0 font-semibold">Paperback</p>
                </td>
                <td>
                  <div className="flex items-center">
                    {/* decrement button */}
                    <button className="px-2 text-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </button>
                    {/* quantity input */}
                    <input
                      type="number"
                      className="w-16 border border-gray-300 text-center"
                      defaultValue={1}
                      min={0}
                    />
                    {/* increment button */}
                    <button className="px-2 text-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </button>
                  </div>
                </td>
                <td>
                  <p className="mb-0 font-semibold">$13.50</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white rounded shadow-lg p-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xl font-semibold mb-4">Payment Options</h2>
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 text-blue-500"
                  checked
                />
                <span className="ml-2">Credit Card</span>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <span className="ml-2">Debit Card</span>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <span className="ml-2">PayPal</span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium">Name on card</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="John Smith"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Card number</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Expiration</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">CVV</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="123"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 mt-8 rounded">
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default SummaryPage;
