<template>
  <section aria-label="welcome silder" class="welcome">
    <hooper>
      <slide>
        <img
          src="@/assets/img/authentication/welcome_slide_01.png"
          alt="Hand-pickle high quality snacks."
          class="welcome__img"
        />
        <p class="welcome__text">Hand-pickle high quality snacks.</p>
      </slide>
      <slide>
        <img
          src="@/assets/img/authentication/welcome_slide_02.png"
          alt="Shop global. Mind-blownly affordable."
          class="welcome__img"
        />
        <p class="welcome__text">Shop global. Mind-blownly affordable.</p>
      </slide>
      <slide>
        <img
          src="@/assets/img/authentication/welcome_slide_03.png"
          alt="Deliver on the promise of time."
          class="welcome__img"
        />
        <p class="welcome__text">Deliver on the promise of time.</p>
      </slide>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
    <div class="welcome__btn-box">
      <button type="button" class="btn_started" @click="clickGetStarted">
        Get started
      </button>
    </div>
  </section>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper'
import 'hooper/dist/hooper.css'
export default {
  name: 'Slider',
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  data() {
    return {}
  },
  methods: {
    clickGetStarted() {
      this.$router.push({ name: 'Login' })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/authentication.scss';
</style>
