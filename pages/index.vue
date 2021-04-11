<template>
  <div class='home__container vh-100 container-fluid'>
    <div class='row-lg home__wrapper'>
      <div class='col-lg-4'>
        <div class='home__photo' :style='{backgroundImage: `url(${img})`}'>
          &nbsp;
        </div>
      </div>
      <div class='col-lg-8'>
        <div class='home__content'>
          <div class='home__content__top mb-2'>
            <h2>I'm Jakhongirmirzo Tursunaliev. <br>
              <span>Web developer</span>
            </h2>
          </div>
          <div class='home__content__center mb-5'>
            <p>
              I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly
              experiences, I am passionate about building excellent software that improves the lives of those around me.
            </p>
          </div>
          <div class='home__content__bottom'>
            <nuxt-link :to="localePath('/about')"> <span>More about me</span> <span> <RightArrow /> </span></nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/scss/main/pages/home.scss'
import RightArrow from "@/assets/icons/right-arrow.svg"
export default {
  components: {
    RightArrow
  },
  data() {
    return {
      img: require('~/assets/images/user.jpg')
    }
  },

}
</script>

<style scoped>
</style>
