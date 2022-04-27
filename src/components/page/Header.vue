<template>
  <header class="page__header header">
    <div class="header__container">
      <div class="header__body">
        <div class="header__logo">
           <img src="@/assets/img/icons/Logo.png" alt="">
        </div>
        <div class="header__contacts">
          <a class="header__phone" :href="`tel:${ phone }`" :class="!showContacts ? 'header__phone_shown' : ''">{{ phone }}</a>
          <a class="header__link"  @click="store.showModal = true"  :class="!showContacts ? 'header__link_shown' : ''">Заказать звонок</a>
          <div @click="store.showModal = true"  class="header__icon"><img src="@/assets/img/icons/phone.svg" alt="" @click="showContacts = !showContacts"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from '@/store/index.js';

const store = useStore();
const phone = ref('+7 (812) 445-68-22');
const showContacts = ref(false);
</script>

<style lang="scss" scoped>
.header {
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);

  &__container {}

  &__body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  &__logo {
    font-size: 36px;
     img {  width: 60px }
  }

  &__contacts {
    display: grid;
    grid-template-areas:
      'phone icon'
      'link icon'
    ;
    align-items: center;
    justify-items: end;
    column-gap: 20px;
  }

  &__phone {
    grid-area: phone;
    transform: translateY(0%);
    transition: transform .75s ease;
  }

  &__link {
    grid-area: link;
    font-family: 'Manrope', sans-serif;
    text-decoration: underline;
    color: #ffffff99;
    transform: translateY(0%);
    transition: transform .75s ease;

    cursor:pointer;
  }

  &__icon {
    grid-area: icon;
    display: grid;
    place-content: center;
    width: 50px;
    height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 3px;

    cursor:pointer;
  }
}

@media(max-width: 424.98px) {
  .header {
    &__logo {
      font-size: 32px;
    }

    &__contacts {
      column-gap: 10px;
    }

    &__phone {
      font-size: 12px;

      display:none;
    }

    &__link {
      display:none;

    }

    &__phone_shown, &__link_shown {
      transform: translateY(-500%);
      transition: transform .75s ease;
    }
  }
}
</style>
