<template>
     <nav class="border-top flex items-center justify-between flex-wrap bg-green-darker p-6">
        <div class="flex items-center flex-no-shrink text">
            <h1 class="font-display ">
            <a 
            class="no-underline text-pinkDarkest font-display"
            href="/">
           <PmbLogo/>
            </a>
            </h1>
        </div>
        <div class="block lg:hidden">
            <span @click="toggle" class="flex items-center px-3 py-2">
                    <img src="https://pmb-static-assests.s3.amazonaws.com/menu.svg"/>
                 </span>
        </div>
        <div :class="open ? 'block sm-600:block md:block sm-land:block':'hidden'" class="w-full flex-grow sm:hidden lg:flex lg:items-center lg:w-auto">
            <div class=" text-md sm:flex-grow ">
                
                 
              
            </div>
            <div class="nav__drawer--right">
               
                 
                   
                      
                       <p class="font-body text-pinkDarkest block mt-4  sm:inline-block sm:mt-0  mr-4">
                      <g-link 
                      class="link relative"
                      to="/company">
                        Company
                         </g-link>
                
                        </p>
                       
                 
                 
                       <p class="font-body text-pinkDarkest block mt-4  sm:inline-block sm:mt-0  mr-4">
                       <g-link 
                       class="link relative"
                       to="/jobs"
                       >
                        Jobs
                        </g-link>
                        </p>
                 
               
            </div>
            
        </div>
    </nav>
</template>
<script>
import PmbLogo from '~/assets/logos/pmb_logo.svg'

export default {
    name:'NavBar',
    components:{
        PmbLogo,
        
    },
    data: () =>{
        return {
            open: false
        }
    },
    methods: {
        toggle(){
            this.open = !this.open
        }
    }
}
</script>
<style>
.link:after{
    border-radius: 1em;
    border-top: .1em solid #ED0677;
    content: "";
    position: absolute;
    right: 100%;
    bottom: .14em;
    left:0;
    transition: right .4s cubic-bezier(0,.5,0,1);
}
.link:hover:after{
    right:0;
}
</style>
