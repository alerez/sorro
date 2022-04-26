<template>
  <div class="page__modal modal">
    <div class="modal__trigger" @click="store.showModal = false"></div>
    <div class="modal__container">
      <div class="modal__body">
        <div class="modal__title">{{ store.modalData.title }}</div>
        <div class="modal__text">{{ store.modalData.text }}</div>
        <form action="" class="modal__form form" @submit.prevent="store.showModal = false">
          <div class="form__body">
            <input type="text" class="form__input" placeholder="Имя"/>
            <input type="tel" id="phone-mask" class="form__input" placeholder="Номер телефона"/>
            <a :href="store.modalData.link2" type="submit" class="form__button">{{ store.modalData.button }}</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
// import IMask from 'imask';
import { ref, onMounted, computed } from 'vue';
import { useStore } from '@/store/index.js';

const store = useStore();

// const phoneMask = IMask(
//   document.getElementById('phone-mask'), {
//     mask: '+{7}(000)000-00-00'
//   });

</script>


<style lang="scss" scoped>
.modal {
  display: grid;
  place-content: center;
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 10;
  color: #464545;

  &__container {
    display: grid;
    place-content: center;
    max-width: 520px !important;
    height: auto;
    position: relative;
    z-index: 50;
  }

  &__trigger {
    position: absolute;
    inset: 0;
  }

  &__body {
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: max-content;
    padding: 80px;
    background-color: white;
    border-radius: 10px;
  }


  &__title {
    margin: 0 0 30px 0;
    font-family: 'Ruberoid';
    font-weight: 700;
    font-size: 45px;
    line-height: 125%;
    text-transform: uppercase;
  }

  &__text {
    margin: 0 0 20px 0;
    font-size: 18px;
    line-height: 145%;
  }

  &__form {
  }
}
.form {
  &__body {
    display: flex;
    flex-direction: column;
  }

  &__input {
    margin: 0 0 15px 0;
    padding: 30px 20px;
    background: #F6F6F6;
    border-radius: 10px;
    font-size: 16px;
  }

  &__button {
    color:#765E29;

    padding: 25px 45px;
    background: #F2CC77;
    box-shadow: inset 0px 0px 15px rgba(255, 255, 255, 0.45);
    border-radius: 7px;
    font-size: 16px;
  }
}

@media(max-width: 425.1px) {
  .modal {
    &__body {
      padding: 40px;
    }

    &__title {
      font-size: 36px;
    }
  }
}
</style>
