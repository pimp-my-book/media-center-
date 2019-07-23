<template>
    <footer class="border-bottom fixed-bottom w-full bottom-0 left-0 s:relative md:relative x:absolute ">
      <div class="flex x:flex-row s:flex-col md:flex-row p-5">
         
          <div class="flex flex-col ">
              <HeadingFour
              text="Our Products"
              />
          <Body
          class="text-black "
          text="GOA"
          />
         
           
          </div>

          <div class="flex flex-col x:ml-32 md:ml-16 s:mt-5 md:mt-0">
          <HeadingFour
              text="Make Money With Us"
              />
          <p></p>
           <p>Our Products</p>
            <p>Our Products</p>
          </div>

          <div class="flex flex-col  x:ml-32 md:ml-16 s:mt-5 md:mt-0">
              <PmbLogo/>
              <div class="flex flex-row ml-10 mt-3 ">
                  <TwitterLogo 
                  class="mr-3"/>
                  <FbLogo/>
              </div>
          </div>
          <div class="flex flex-col  x:ml-32 md:ml-16 s:mt-5 md:mt-0">Terms</div>
          <div class="flex flex-row  x:ml-10 md:ml-16 s:mt-5 md:mt-0" >
              <div>&copy; {{new Date().getFullYear()}}, 
              <img src="https://s3.amazonaws.com/goa-assets/Icons/flag-for-south-africa_1f1ff-1f1e6.svg"/></div>
              </div>
      </div>
    </footer>
</template>
<script>
import PmbLogo from '~/assets/logos/pmb_logo.svg'
import SaFlag from '~/assets/logos/sa_flag.svg'
import TwitterLogo from '~/assets/logos/twitter_logo.svg'
import FbLogo from '~/assets/logos/facebook_logo.svg'
import HeadingFour from "../typography/HeadingFour"
import Body from "../typography/Body"
import Caption from "../typography/Caption"


export default {
    name: 'Footer',
    components:{
        PmbLogo,
        SaFlag,
        TwitterLogo,
        FbLogo,
        Caption,
        Body,
        HeadingFour
    }
}
</script>
