import Image from "next/image"; // Importing the Image component from Next.js for optimized image handling
import Hero from "./_components/Hero";  // Importing the Hero component which likely represents the main section of the page
import ProductSection from "./_components/ProductSection"; // Importing the ProductSection component which displays product details

// Default export of the Home component
export default function Home() {
  return <div> 
    
    <Hero/> 
    
    <ProductSection/>

  </div>;
  
}
