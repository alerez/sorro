import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: () => ({
    showModal: false,

    modalData: {
      title: 'Получите расчет',
      text: 'Заполните форму, и мы свяжемся с Вами в самое ближайшее время',
      button: 'Получить смету',

      link: '/',
      link2: '/thanks'
    },

    mainData: {
      title: "Надежный дом с плоской крышей" + "" + "« GRASTEN » за 20.16 млн.р.",
      btn: 'в спб и Ленинградской области',
      text: 'Скачайте точную спецификацию дома « SORRO+ » и забронируйте за собой стоимость 13.92 млн.р.',
      button: 'Скачать спецификацию',
      link: 'https://mrqz.me/62601a50b2c77f003fdff44b'
    },

    mainDataThanks: {
      title: 'Благодарим вас за оставленную заявку!',
      text: 'Наш менеджер свяжется с Вами в ближайшее время и детально проконсультирует по каждому вопросу!',
      button: 'На главную',
    },
  })
})
