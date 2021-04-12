<template>
  <div class='navbar__container'>
    <div class='navbar__list'>
      <nuxt-link :to="localePath('/')" class='navbar__item'><span>Home</span><span><Home /></span></nuxt-link>
      <nuxt-link :to="localePath('/')" class='navbar__item'><span>About</span><span><About /></span></nuxt-link>
      <nuxt-link :to="localePath('/')" class='navbar__item'><span>Portfolio</span><span><Portfolio /></span></nuxt-link>
      <nuxt-link :to="localePath('/')" class='navbar__item'><span>Contact</span><span><Contact /></span></nuxt-link>
    </div>
  </div>
</template>

<script>
import '@/assets/scss/main/default/navbar.scss'
import Home from '@/assets/icons/home.svg'
import Portfolio from '@/assets/icons/briefcase.svg'
import Contact from '@/assets/icons/envelope.svg'
import About from '@/assets/icons/user.svg'

export default {
  components: {
    Home, Portfolio, Contact, About
  },
  data() {
    return {}
  }
}
</script>
