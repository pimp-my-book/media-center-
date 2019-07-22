<template>
  <div class="layout">
    <NavBar/>
    <slot/>
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

export default {
  name: 'Default',
  components: {
     NavBar
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
