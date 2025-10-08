import Image from "next/image";
import Link from "next/link";
import Header from "./component/Header";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div>
      
       <Header></Header>
          <div className="relative h-screen w-full">
      
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h1 className="text-4xl text-white font-bold">Hello, World!</h1>
                  <p className="text-xl text-white mt-4">This is a my LAB for Nextjs</p>
              </div>
          </div>

    
      <Footer></Footer>
  
    </div>
  );
}
