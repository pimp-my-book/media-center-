<template>
    <footer class="border-bottom  w-full bottom-0 left-0 absolute ">
      <div class="flex flex-row">
          <div class="flex flex-col">
          <p>Our Products</p>
           <p>Our Products</p>
            <p>Our Products</p>
          </div>
          <div class="flex flex-col">
          <p>Make Money With Us</p>
           <p>Our Products</p>
            <p>Our Products</p>
          </div>

          <div class="flex flex-col">
              <PmbLogo/>
              
          </div>
          <div class="flex flex-col">Terms</div>
      </div>
    </footer>
</template>
<script>
import PmbLogo from '~/assets/logos/pmb_logo.svg'
import SaFlag from '~/assets/logos/sa_flag.svg'
import TwitterLogo from '~/assets/logos/twitter_logo.svg'
import FbLogo from '~/assets/logos/facebook_logo.svg'



export default {
    name: 'Footer',
    components:{
        PmbLogo,
        SaFlag,
        TwitterLogo,
        FbLogo
    }
}
</script>
