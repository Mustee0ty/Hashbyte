// import React from 'react'

// import { cryptoSlides } from '../data';

// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { data } from 'autoprefixer';



// const Slide = () => {
//   const [activeSlideIndex, setActiveSlideIndex] = useState(0);
//   const previousSlide = () => {
//     setActiveSlideIndex(activeSlideindex === 0 ? data.length - 1 : acticeSlide  )
//   }


//   return (
//     cryptoSlides.map((item)=>{
//       const { id,logo,cryptoCurrency,amount,color } = item;
//       <div id={id}>
//         <div className='w-[146px] h-[65px] flex flex-col'>
//             <img src={logo} alt={cryptoCurrency} />
//             <div className='flex flex-row'>
//             <p>{cryptoCurrency}</p>
//             <p>{amount}</p>
//           </div>
//         </div>
//       </div>
//     })
//   )
// }

// export default Slide