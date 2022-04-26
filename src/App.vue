<template>
  <div class="wrapper">
    <section class="page">
      <div class="page__container">
        <div class="page__body">
          <Modal v-if="store.showModal"/>
          <Header/>
          <router-view/>
          <Footer v-if="showFooter"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from '@/store/index';

import Header from '@/components/page/Header.vue';
import Footer from '@/components/page/Footer.vue';
import Modal from '@/components/page/Modal.vue';
import MainSecond from "@/views/MainSecond";
import Main from "@/views/Main";
import MainThanks from "@/views/MainThanks";

const route = useRoute();
const router = useRouter();

const store = useStore();

const showFooter = computed(() => route.name !== 'thanks');
</script>

<style lang="scss">
@import '@/assets/scss/_null.scss';
@import '@/assets/scss/_fonts.scss';
@import '@/assets/scss/page.scss';
@import '@/assets/scss/main.scss';
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;700&display=swap');

body {
  height: 100%;
  font-family: 'Ruberoid', sans-serif;
  color: white;
  //user-select: none;
}

a { color: white; }

.wrapper {
  min-height: 100vh;
}

[class*="__container"] {
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

@media(max-width: 768.1px) {
  [class*="__container"] {
    max-width: none;
    padding: 0 40px;
  }
}
@media(max-width: 768.1px) {
  [class*="__container"] {
    max-width: none;
    padding: 0 40px;
  }
}

@media(max-width: 425px) {
  [class*="__container"] {
    max-width: none;
    padding: 0 20px;
  }
}
@media(max-width: 425px) {
  [class*="__container"] {
    max-width: none;
    padding: 0 20px;
  }
}
</style>
