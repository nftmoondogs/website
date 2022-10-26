import { quotes } from "../assets"
import styles, { layout } from '../style';


const FeedbackCard = ({ content, name, title, img}) => (
  <div>
  <section id="clients" class="w-full text-center text-white pl:5">
    <div class="w-full px-0 py-24 mx-auto">
      <div class="text-center mb-20">

        <h1 class={`${styles.heading6}`}>
          Frequently Asked Question
        </h1>
       
      </div>
      <div class=" lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 text-left sm:pl-64 sm:pr-72 pl-5 pr-5">
        <div class="py-[24px] space-y-[8px] text-left">
          <details class="mb-4">
            <summary class="font-rav font-semibold text-goldenyellow rounded-md py-2 px-4">
            Is there a Discord?
            </summary>

            <span>
            Yes, but the Aptos dogs channels within Discord are NFT-gated (you must hold a Aptos dog to enter). Once inside, you'll have access to private Aptos dogs channels with information about community events, airdrop raffles, wl raffles, and more.
            </span>
          </details>

        
<details class="mb-4 pt-5 border-t-[1px] border-t-[#3F3E45]">
            <summary class="font-rav font-semibold text-goldenyellow rounded-md py-2 px-4">
            How are the 5000 Aptos dogs distributed?
            </summary>

            <span>
          We believe that fair distribution of the NFTs plays a very big role in it's success, That's why we introduced Aptos Dogs Scholarships. Tell us what you do in Web3 by filling the scholarship application above, wait for us to review and accept it, If accepted we will publically welcome you to our community using our twitter @wooflist and your wallet address will be whitelisted and you will be able to mint using the mint button above. 
            </span>
          </details>


<details class="mb-4 pt-5 border-t-[1px] border-t-[#3F3E45]">
            <summary class="font-rav font-semibold text-goldenyellow rounded-md py-2 px-4">
              When is the minting date?
            </summary>

            <span>
              Mint is live but only the peoples on the Wooflist can mint a moondogs you can fill our scholarship fourm above and tell us what role you play in web3 space, Our team will review your scholarship application, If accepted we will add your wallet address in wooflist allowing you to mint using the mint button above.
            </span>
          </details>


<details class="mb-4 pt-5 border-t-[1px] border-t-[#3F3E45]">
            <summary class="font-rav font-semibold text-goldenyellow rounded-md py-2 px-4">
            What are the maximum mints per wallet?
            </summary>

            <span>
            1 mint per wallet is allowed
            </span>
          </details>



<details class="mb-4 pt-5 border-t-[1px] border-t-[#3F3E45]">
            <summary class="font-rav font-semibold text-goldenyellow rounded-md py-2 px-4">
            What are secondary royalties and how will they be used?
            </summary>

            <span>
            will receive 5% of all secondary sales. These proceeds will be used to continue to hire more full-time employees, fund operations and deliver even more value to our community.
            </span>
          </details>
  


        </div>
      </div>
    </div>
  </section>
</div>
  )


export default FeedbackCard