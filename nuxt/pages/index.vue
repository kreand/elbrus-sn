<template>
  <div class="home">
    <section class="promo">
      <div class="promo__bg">
        <a-row class="promo__content">
          <a-col :span="16" :offset="4">

            <h1>Elbrus Social Network</h1>
            <div>объединяет выпускников и студентов ELBRUS BOOTCAMP всех городов</div>
          </a-col>
        </a-row>
      </div>
    </section>

    <section class="statistics">
      <h3 class="h3-heading text-center">Elbrus Social Network - это:</h3>
      <a-row type="flex" align="middle" class="statistics">
        <a-col class="statistic-item" :span="4" :offset="4">
          <div class="statistic-item__count">
            5
          </div>
          <div class="statistic-item__desc">
            <span class="statistic-item__desc-content">выпускников</span>
          </div>
        </a-col>
        <a-col class="statistic-item" :span="4">
          <div class="statistic-item__count">
            20
          </div>
          <div class="statistic-item__desc">
            <span class="statistic-item__desc-content">Используемых технологий</span>
          </div>
        </a-col>
        <a-col class="statistic-item" :span="4">
          <div class="statistic-item__count">
            300
          </div>
          <div class="statistic-item__desc">
            <span class="statistic-item__desc-content">Часов на проект</span>
          </div>
        </a-col>
        <a-col class="statistic-item" :span="4">
          <div class="statistic-item__count">
            2500
          </div>
          <div class="statistic-item__desc">
            <span class="statistic-item__desc-content">Часов обучения</span>
          </div>
        </a-col>

      </a-row>
    </section>

    <section class="about">
      <a-row class="about__content">
        <h3 class="h3-heading text-center">Что есть в Elbrus Social Network:</h3>

        <div class="about-items mt-5">
          <a-col class="about-col" :span="5" :offset="4">
            <div class="about-item">
              <h3 class="about-item__title">Продвинутая регистрация</h3>
              <p>Соблюдение определённых ограничений в рационе вовсе не означает, что вы должны исключить из ежедневного меню все ваши любимые продукты и отдать предпочтение невкусной, но полезной пище. </p>
            </div>
            <div class="about-item">
              <h3 class="about-item__title">Рейтинг работодателей</h3>
              <p>Вкусная и полезная пища необходима для здоровья и работоспособности человека. Специалисты говорят, что ежедневная зарядка, много воды и полезной пищи сделают и из обезьяны человека.</p>
            </div>
            <div class="about-item">
              <h3 class="about-item__title">Календарь мероприятий</h3>
              <p>Некоторая спорная пища становится полезной, когда её употребляют несколько поколений предков.</p>
            </div>
          </a-col>
          <a-col class="about-col about-img" :span="6">
            <a-row class="about-img__content" type="flex" justify="center" align="middle">
              <a-col>[КАРТИНКА]</a-col>
            </a-row>
          </a-col>
          <a-col class="about-col" :span="5">
            <div class="about-item">
              <h3 class="about-item__title">Профили пользователей</h3>
              <p>Жизнь в большом городе зачастую накладывает на людей очень много обязательств, которые многим мешают планировать свое время.</p>
            </div>
            <div class="about-item">
              <h3 class="about-item__title">Рейтинг студентов</h3>
              <p>Поэтому времени катастрофически не хватает на все, в том числе и на нормальную здоровую пищу.</p>
            </div>
            <div class="about-item">
              <h3 class="about-item__title">Эпичный EL-COIN и EL-SHOP</h3>
              <p>Поэтому времени катастрофически не хватает на все, в том числе и на нормальную здоровую пищу.</p>
            </div>
          </a-col>
        </div>

      </a-row>
    </section>

    <section class="network-description">
      <a-row class="network-description__content">
        <a-col :span="16" :offset="4">
          <p class="upper-text">
            Мы создали новый продукт, который должен объединить всех выпускников и действующих студентов Elbrus Bootcamp.
          </p>
          <p class="upper-text">
            Сделать процесс обучения максимально комфортным, а процессс поиска работы максимально быстрым и удобным!
          </p>
        </a-col>
      </a-row>
    </section>

    <section class="additional-buttons">
      <a-row class="additional-buttons__content" type="flex" justify="center" align="middle">
        <a-col>
          <a-button class="additional-buttons__btn" type="primary" size="large" href="/" ghost>
            Календарь мероприятий
          </a-button>
          <a-button class="additional-buttons__btn" type="danger" size="large" href="/" ghost>
            Личный кабинет
          </a-button>
        </a-col>
      </a-row>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  head: {
    title: 'Elbrus Social Network - единое пространство для всех участников Эльбрус Буткэмп'
  }
}
</script>

<style lang="scss">
.upper-text {
  text-transform: uppercase;
}

.text-center {
  text-align: center;
}

.h3-heading {
  font-size: 52px;
  line-height: 1.05;
  font-weight: 600;
  color: #4520ab;
}

.promo {
  min-height: 400px;
  //background: url('~assets/raccoons.jpg') center center/cover no-repeat;
  &__bg {
    height: 400px;
    background-color: rgba(0, 0, 0, .7);
  }
  &__content {
    color: #fff;
  }
}

.statistics {
  padding: 30px 0;
  min-height: 300px;
  color: #4520ab;
  text-align: center;
}
.statistic-item {
  &__count {
    line-height: 100px;
    font-size: 108px;
    font-weight: 700;
    height: 125px;
  }
  &__desc {
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    font-size: 18px;
    text-transform: uppercase;
    &-content {
      padding: 5px 10px;
      background-color: #faba59;
      font-weight: normal;
    }
  }
}

.about {
  padding: 30px 0;
  min-height: 400px;
  background-color: #efefef;
  &-img {
    &__content {
      min-height: 400px;
    }
  }
  &-item {
    min-height: 150px;
    &__title {
      color: #4520ab;
      font-size: 22px;
      font-family: RFRostin,Arial,sans-serif;
      line-height: 1.45;
      font-weight: 500;
      text-transform: uppercase;
      &:before {
        content: '< ';
      }
      &:after {
        content: ' />';
    }
    }
  }
}

.network-description {
  background-color: #4520ab;
  color: #fff;
  font-size: 40px;
  font-weight: 500;
  &__content {
    padding: 30px 0;
  }
}

.additional-buttons {
  &__content {
    background-color: #efefef;
    min-height: 200px;
  }
  &__btn {
    width: 220px;
    margin: 0 20px;
  }
}
</style>
