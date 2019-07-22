<template>
  <div class="layout">
    <NavBar/>
    <slot/>
    <Footer/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import NavBar from '../components/navigation/NavBar'
import Footer from '../components/navigation/Footer'

export default {
  name: 'Default',
  components: {
     NavBar,
     Footer
  }
}
</script>


<style>
body {
  margin:0;
  padding:0;
}


.nav__link {
  margin-left: 20px;
}
</style>
