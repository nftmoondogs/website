import styles from "../style";
import { discount, collage, hero } from "../assets";
import GetStarted from "./GetStarted";
import { profile } from "../assets";



const Hero = () => {
  return (
    <section id="home" className="pb-64 pt-60 pl-2 pr-2 justify-center flex ">
    
      
<div class=" w-full max-w-sm bg-ddd rounded-lg  shadow-md dark:bg-ddd dark:border-ddd">
    <div class="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span class="sr-only">Open dropdown</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
        </button>
      
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src={profile} alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Find a Aptos Dogs</h5>
       
        
        <div class="flex mt-4 space-x-3 md:mt-6">
        <a href="https://opensea.io/collection/moondogsaftermerge" target="_blank" rel="noreferrer" class=" w-[240px] items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Find on Opensea</a>
        </div>

        <div class="flex mt-4 space-x-3 md:mt-6">
        <a href="https://looksrare.org/collections/0x3987B9c21873AfAE5Cf587BA50C2407fe6a0f7ef" target="_blank" rel="noreferrer" class=" w-[240px] items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Find on LooksRare</a>
        </div>

        <div class="flex mt-4 space-x-3 md:mt-6">
        <a href="https://etherscan.io/address/0x3987B9c21873AfAE5Cf587BA50C2407fe6a0f7ef" target="_blank" rel="noreferrer" class=" w-[240px] items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Official Contract</a>
        </div>
        
        <div class="flex mt-4 space-x-3 md:mt-6">
        <a href="https://discord.gg/xFSkcRMtuR" target="_blank" rel="noreferrer" class=" w-[240px] items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Holders Only Discord</a>
        </div>
        
    </div>
</div>

    </section>

  );
};

export default Hero;
