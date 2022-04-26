<template>
  <main class="page__main main">
    <div class="main__container">
      <div class="main__body">
        <div class="main__description description">
          <div class="description__body">
            <div class="description__title">{{ store.mainDataThanks.title }}</div>
          </div>
        </div>

        <div class="main__download download">
          <div class="download__body">
            <div class="download__text">{{ store.mainDataThanks.text }}</div>
            <a :href="store.modalData.link" class="download__button">{{ store.mainDataThanks.button }}</a>
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
