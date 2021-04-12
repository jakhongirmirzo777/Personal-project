<template>
  <div class='d-flex'>
      <Nuxt />
      <Navbar />
  </div>
</template>

<script>
import Navbar from '@/components/default/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>
