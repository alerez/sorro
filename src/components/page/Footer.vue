<template>
  <footer class="page__footer footer">
    <div class="footer__container">
      <div class="footer__body">

        <div class="footer__item item">
          <div class="item__body">
            <div class="item__title">Гарантия</div>
            <div class="item__text">Гарантия 10 лет по договору и пожиз- ненное обслуживание</div>
            <div class="item__icon"><img src="@/assets/img/icons/shield.svg" alt=""></div>
          </div>
        </div>

        <div class="footer__item item">
          <div class="item__body">
            <div class="item__title">Профиль</div>
            <div class="item__text">Строим дома только с плоской крышей, в штате лучшие кадры</div>
            <div class="item__icon"><img src="@/assets/img/icons/star.svg" alt=""></div>
          </div>
        </div>

        <div class="footer__item item">
          <div class="item__body">
            <div class="item__title">Оплата</div>
            <div class="item__text">Поэтапная оплата с гибким графиком платежей</div>
            <div class="item__icon"><img src="@/assets/img/icons/wallet.svg" alt=""></div>
          </div>
        </div>

        <div class="footer__item item">
          <div class="item__body">
            <div class="item__title">Контроль</div>
            <div class="item__text">Наблюдайте за ходом строительства по видеонаблюдению 24/7</div>
            <div class="item__icon"><img src="@/assets/img/icons/camera.svg" alt=""></div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

</script>

<style lang="scss" scoped>
.footer {

  &__container {
  }

  &__body {
    height: 100%;
    display: grid;
    grid-template: 1fr / repeat(auto-fit, minmax(290px, 1fr));
  }

  &__item {
  }
}

.item {
  min-height: 180px;
  display: flex;
  align-items: flex-end;

  &__body {
    position: relative;
    width: 100%;
    height: 90%;
    padding: 30px;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(79, 79, 79, 0.1) 100%);
    backdrop-filter: blur(15px);
  }

  &__title {
    margin: 0 0 15px 0;
    font-size: 16px;
    text-transform: uppercase;
  }

  &__text {
    max-width: 160px;
    font-family: 'Manrope';
    font-weight: 300;
    font-size: 15px;
    line-height: 160%;
  }

  &__icon {
    display: grid;
    place-content: center;
    position: absolute;
    top: -17px;
    right: 30px;
    width: 60px;
    height: 60px;
    background-color: rgba(244, 244, 244, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    backdrop-filter: blur(13px);
  }
}

@media(max-width: 660px) {
  .item {
    &__body {
      height: 100%;
    }
  }
}
</style>
