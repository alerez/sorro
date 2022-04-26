<template>
  <main class="page__main main">
    <div class="main__container">
      <div class="main__body">
        <div class="main__description description">
          <div class="description__body">
            <div class="description__title">Надежный дом с <br> плоской крышей <br> « RANUM » за 20 млн.р.</div>
            <div class="description__button">{{ store.mainData.btn }}</div>
          </div>
        </div>

        <div class="main__download download">
          <div class="download__body">
            <div class="download__text">{{ store.mainData.text }}</div>
            <a class="download__button" :href="store.mainData.link">{{ store.mainData.button }}</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useStore } from '@/store/index';

const store = useStore();
</script>
