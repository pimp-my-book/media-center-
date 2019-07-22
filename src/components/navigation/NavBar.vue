<template>
     <nav class="border-top flex items-center justify-between flex-wrap bg-green-darker p-6">
        <div class="flex items-center flex-no-shrink text">
            <h1 class="font-display ">
            <a 
            class="no-underline text-pinkDarkest font-display"
            href="/">
            Pimp My Book
            </a>
            </h1>
        </div>
        <div class="block lg:hidden">
            <span @click="toggle" class="flex items-center px-3 py-2">
                
                </span>
        </div>
        <div :class="open ? 'block sm-600:block md:block sm-land:block':'hidden'" class="w-full flex-grow sm:hidden lg:flex lg:items-center lg:w-auto">
            <div class=" text-md sm:flex-grow ">
                
                 <a href="#" class="block mt-4 no-underline sm:inline-block sm:mt-0 text-white hover:text-bg-green-light mr-4">
                   
                       <router-link class="text-white no-underline" to="/how-it-works">
                       <p class="font-body hover:text-green">
                        How It Works
                        </p>
                        </router-link>
                 </a>
              
            </div>
            <div class="nav__drawer--right">
                <p class="text-white font-body mr-4 hover:text-green">
                  
                </p>
            </div>
            <div class="nav__drawer--right ">
             
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name:'NavBar'
}
</script>
