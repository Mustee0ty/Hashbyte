// import React from "react";
// import "tailwindcss/tailwind.css";
// import product1 from "./product1.jpg";
// import product2 from "./product2.jpg";
// import product3 from "./product3.jpg";

// function MarketPlace() {
//   const products = [
//     {
//       id: 1,
//       name: "Product 1",
//       price: 10.99,
//       image: product1,
//       sold: 100,
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       price: 25.99,
//       image: product2,
//       sold: 50,
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       price: 14.99,
//       image: product3,
//       sold: 200,
//     },
//   ];

//   return (
//     <div className="container mx-auto">
//       {/* Search bar */}
//       <div className="flex flex-row items-center justify-between border-b border-gray-300 mb-6 pb-2">
//         <input
//           type="text"
//           placeholder="Search"
//           defaultValue="Default search"
//           className="border border-gray-300 py-2 px-3 rounded-lg w-2/3"
//         />
//         <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg ml-4">
//           Search
//         </button>
//       </div>
//       {/* Product grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-lg overflow-hidden shadow-md"
//           >
//             {/* Product image */}
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-48 object-cover"
//             />
//             {/* Sold badge */}
//             <div className="bg-red-500 text-white font-bold py-1 px-2 rounded-tr-full rounded-bl-full absolute top-0 left-0">
//               {product.sold} sold
//             </div>
//             {/* Product name */}
//             <h2 className="text-lg font-bold mt-2 mx-2">{product.name}</h2>
//             {/* Product price */}
//             <div className="text-gray-600 mx-2 my-1">{`$${product.price.toFixed(
//               2
//             )}`}</div>
//             <div className="mx-2 mb-2">
//               {/* Buy now button */}
//               <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full">
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MarketPlace;
