import styles from "../style";
import { discount, collage, hero } from "../assets";
import GetStarted from "./GetStarted";
import { profile } from "../assets";
import { arrow } from "../assets";
import { letter } from "../assets";
import { mintButton } from "../assets";
import { os } from "../assets";
import { tw } from "../assets";
import { wait } from "../assets";



const Hero = () => {
  return (


<section id="home" className="container mx-auto px-6 p-10 ">
<div class=" w-full sm:pr-24 pr-3 pl-3 sm:pl-24 bg-ddd rounded-lg shadow-md dark:bg-ddd dark:border-ddd">
  <h2 class="pt-10 font-poppins font-semibold text-[25px] ss:text-[35px] text-creamgreen ss:leading-[80.8px] leading-[30px] drop-shadow-2xl">
  Every single moondogs holder is eligible for mint!
  </h2>

  <div class="flex flex-wrap pt-16">

    <div class="w-full md:w-1/6 px-2 mb-4">
      
        <div class="pt-10"></div>
        
<a href="https://www.qries.com/">
         <img class=" relative max-w-sm transition-all  cursor-pointer filter grayscale hover:grayscale-0 mb-3 m-auto w-[80px] h-[80px] shadow-lg ml-0 mr-0 mt-16 mb-10" src={os} alt="Qries"/>
      </a>
<div class="pt-2"></div>
<p class={`${styles.paragraph3} "text-gray-500 text-xs md:text-sm px-6 text-center pb-10" `} >Buy Now</p>
      

   
      

    </div>

    <img class="mb-3 w-[20%] ss:w-[6%] h-[20%] ss:h-[6%] shadow-lg ml-auto mr-auto rotate-90 ss:rotate-0  mt-16 mb-10" src={arrow} alt="Bonnie image"/>
    <div class="w-full md:w-1/6 px-2 mb-4">
  
        <div class="pt-10"></div>

<a href="https://www.qries.com/">
         <img class="relative max-w-sm transition-all shadow-lg cursor-pointer filter grayscale hover:grayscale-0 mb-3 mt-auto mb-auto ml-auto mr-auto w-[60px] h-[80px] shadow-lg ml-0 mr-0 mt-16 mb-16" src={letter} alt="Qries"/>
      </a>
      <div class="pt-2"></div>
      <p class={`${styles.paragraph3} "text-gray-500 text-xs md:text-sm px-6 text-center pb-10" `} >Verify</p>
      
    </div>

    <img class="mb-3 w-[20%] ss:w-[6%] h-[20%] ss:h-[6%] shadow-lg ml-auto mr-auto mr-0 rotate-90 ss:rotate-0 mt-16 mb-10" src={arrow} alt="Bonnie image"/>
    <div className="pl-0 ss:pl-6"></div>
    <a href="https://mint.woofsite.com" target="_blank" rel="noreferrer" class="hidden md:block relative max-w-sm transition-all  cursor-pointer filter grayscale hover:grayscale-0 w-[240px] items-center py-2 px-4 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-11 ml-6 w-25 h-11 mt-16">Mint</a>

    <div class="w-full md:w-1/6 px-6 mb-10 ss:hidden">
  
       
    <div class="pt-10"></div>

<a href="https://www.qries.com/">
         <img class="relative max-w-sm transition-all shadow-lg cursor-pointer filter grayscale hover:grayscale-0 mb-3 mt-auto mb-auto ml-auto mr-auto w-[60px] h-[80px] shadow-lg ml-0 mr-0 mt-16 mb-16" src={letter} alt="Qries"/>
      </a>
      <div class="pt-2"></div>
      <p class={`${styles.paragraph3} "text-gray-500 text-xs md:text-sm px-6 text-center pb-10" `} >Mint</p>
      
    </div>

    <p className={`${styles.paragraph} pt-6 ss:pt-10 pb-10`}>
    We believe that fair distribution of the NFTs plays a very big role in it's success, That's why we introduced Aptos Dogs Scholarships. Tell us what you do in Web3 by filling the scholarship application above, wait for us to review and accept it, If accepted we will publically welcome you to our community using our twitter @wooflist and your wallet address will be whitelisted and you will be able to mint using the mint button above.
  </p>
  </div>
</div>










</section>



  );
};


export default Hero;
