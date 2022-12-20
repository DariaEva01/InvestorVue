<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import { ref } from "vue";

const swiperRef = ref();
const i = ref();

const onSwiper = (swiper: any) => {
  swiperRef.value = swiper;
  i.value = swiper.activeIndex;
};
</script>

<template>
  <main class="bg-primary flex flex-col items-center justify-center">
    <div class="w-full relative">
      <img class="w-full" src="@/assets/img/Background.png" />
      <div class="text-5xl px-10 font-bold text-center absolute top-1/3">
        LoLAnalyzer — лидер в области анализа игровых матчей в режиме реального
        времени с применением технологии искусственного интеллекта
      </div>
    </div>
    <section
      class="px-10 w-full pt-20 flex flex-col items-center justify-center"
    >
      <h1 class="font-bold text-center text-5xl text-primary-dark mb-40">
        НАША КОМАНДА
      </h1>
      <div class="flex w-300 items-center justify-center">
        <button class="mr-20" @click="swiperRef.slidePrev()">
          <img src="@/assets/img/Кнопка слайдера - лево.png" />
        </button>

        <swiper
          ref="swiperRef"
          :slides-per-view="4"
          :space-between="50"
          @swiper="onSwiper"
          @slideChange="onSwiper"
          :loop="true"
          class="text-primaryDarkest text-xl"
        >
          <swiper-slide>
            <img src="@/assets/img/Карточка - Житенко Максим.png" />
            <div>Житенко Максим Дизайнер</div>
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/img/Карточка - Зверева Дарья.png" />
            <div>Зверева Дарья Frontend-разработчик</div>
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/img/Карточка - Никоненко Даниил.png" />
            <div>Никоненко Даниил Data Scientist</div>
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/img/Карточка - Романов Артём.png" />
            <div>Романов Артём Аналитик</div>
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/img/Карточка - Сергеев Роман.png" />
            <div>Сергеев Роман Backend-разработчик</div>
          </swiper-slide>
        </swiper>
        <button class="ml-20" @click="swiperRef.slideNext()">
          <img src="@/assets/img/Кнопка слайдера - право.png" />
        </button>
      </div>
    </section>
    <section
      class="flex flex-col w-300 items-center justify-center relative z-1"
    >
      <img class="my-5 mb-1 mr-70" src="@/assets/img/Указатель.png" />
      <img src="@/assets/img/Блок описания - фон.png" />
    </section>
    <section class="w-300 h-200 text-primaryDarkest text-3xl relative">
      <img
        class="my-5 mr-60 w-300 absolute -top-20"
        src="@/assets/img/Фон.png"
      />
      <div>
        <h1 class="relative top-20 left-230 text-primary-dark font-bold">
          НАШ ПРОДУКТ
        </h1>
      </div>
      <div class="relative top-60 left-20 w-250">
        <p class="mb-10">
          Платформа LoLAnalyzer позволит игрокам улучшить навыки игры и повысить
          свой соревновательный ранг.
        </p>
        <p>
          В отличие от аналогов, работа нашей системы основана на искусственном
          интеллекте, что обеспечивает постоянную доступность, высокую
          эффективность и возможность адаптации системы под каждого отдельного
          игрока.и
        </p>
      </div>
    </section>
    <section class="w-300">
      <h1 class="text-primary-dark font-bold text-4xl mb-20">
        ОБЪЕМ АУДИТОРИИ
      </h1>
      <p class="text-primary-darkest text-3xl w-200 mb-20">
        На основе данных, полученных в результате анализа объёма аудитории уже
        существующих инструментов, помогающих игрокам в League of Legends, мы
        спрогнозировали объём аудитории нашего продукта.
      </p>
    </section>
    <section class="flex text-primary-darkest text-xl mb-30">
      <div class="w-60">
        <div class="relative top-10">
          Средняя аудитория League of Legends в месяц
        </div>
        <div class="relative top-20">
          Количество игроков, готовых использовать наш продукт
        </div>
        <div class="relative top-30">
          Количество игроков, готовых установить наш продукт
        </div>
        <div class="relative top-35">
          Количество игроков, готовых приобрести подписку
        </div>
      </div>
      <img src="@/assets/img/График объёма аудитории.png" />
      <div class="w-60">
        <div class="relative -right-10 top-15">30 000 000 человек</div>
        <div class="relative right-140 top-40">4 482 000 человек</div>
        <div class="relative right-160 top-60">1 835 827 человек</div>
        <div class="relative right-160 top-90">18 358 человек</div>
      </div>
    </section>
    <section>
      <h1 class="text-primary-dark font-bold text-4xl mb-10 text-right">
        ДИНАМИКА РОСТА ЧИСЛА ПОДПИСЧИКОВ
      </h1>
      <p class="text-primary-darkest text-3xl w-300 mb-30 text-right">
        Нашей командой аналитиков были составлены оптимистичный, ожидаемый и
        пессимистичный сценарии роста числа подписчиков.
      </p>
      <div class="flex relative">
        <div class="text-primary-darkest">
          <div class="absolute -top-5">60 000</div>
          <div class="absolute top-40">40 000</div>
          <div class="absolute top-80">20 000</div>
        </div>
        <img class="ml-30 mb-30" src="@/assets/img/График с легендой.png" />
        <div class="text-primary-darkest text-xl">
          <div class="absolute w-100 top-158 left-80">
            — оптимистичный сценарий
          </div>
          <div class="absolute w-100 top-171 left-80">— ожидаемый сценарий</div>
          <div class="absolute w-100 top-184 left-80">
            — пессимистичный сценарий
          </div>
        </div>
      </div>
    </section>
    <section class="relative mb-20">
      <h1 class="text-primary-dark font-bold text-4xl mb-10">
        СХЕМА МОНЕТИЗАЦИИ
      </h1>
      <p class="text-primary-darkest text-3xl w-300 mb-20">
        Наш продукт распространяется по условно бесплатной модели с
        дополнительным платным функционалом, доступ к которому можно получить,
        оформив подписку базового или премиум уровней.
      </p>
      <img src="@/assets/img/Блоки элементов со стрелкой.png" />
      <div class="absolute left-35 top-75 text-3xl z-1 text-primary">
        Подписка
      </div>
      <div class="absolute left-35 top-120 text-3xl z-1 text-primary">
        Реклама
      </div>
      <div class="absolute left-30 top-161 text-3xl z-1 text-primary">
        Краудфандинг
      </div>

      <div class="absolute right-45 top-75 text-3xl z-1 text-primary">
        Базовая подписка
      </div>
      <div class="absolute right-45 top-120 text-3xl z-1 text-primary">
        Premium подписка
      </div>
    </section>
    <section class="mb-40">
      <h1 class="text-primary-dark font-bold text-4xl mb-10 text-right">
        ОЖИДАЕМАЯ ПРИБЫЛЬ ПРОЕКТА
      </h1>
      <p class="text-primary-darkest text-3xl w-300 mb-20 text-right">
        Прогнозируемая прибыль проекта за 4 года при оптимистичном, ожидаемом и
        пессимистичном сценариях.
      </p>
      <p class="text-primary-darkest text-4xl w-300 text-center mb-20">
        Ожидаемый сценарий
      </p>
      <div class="flex relative">
        <div class="text-primary-darkest">
          <div class="absolute top-0">3 000 000</div>
          <div class="absolute top-30">2 000 000</div>
          <div class="absolute top-55">1 000 000</div>
          <div class="absolute left-20 top-85">0</div>
          <div class="absolute top-115">-1 000 000</div>
          <div class="absolute top-145">- 2 000 000</div>
        </div>
        <img
          class="ml-40"
          src="@/assets/img/Прибыль - ожидаемый сценарий.png"
        />
      </div>
    </section>
    <section class="mb-40 relative">
      <h1 class="text-primary-dark font-bold text-4xl mb-30 text-center">
        КАРТА ПРОЕКТА
      </h1>
      <img src="@/assets/img/Блоки с маркерами и линиями.png" />
      <div
        class="absolute left-10 top-52 text-xl w-50 text-center z-1 text-primary"
      >
        Создание сетевой инфоструктуры
      </div>
      <div
        class="absolute left-112 top-52 text-xl w-50 text-center z-1 text-primary"
      >
        Программирование клиента
      </div>
      <div
        class="absolute left-210 top-50 text-xl w-50 text-center z-1 text-primary"
      >
        Сборка и тестирование проекта
      </div>

      <div
        class="absolute left-65 top-165 text-xl w-50 text-center z-1 text-primary"
      >
        Прототипирование моделей данных
      </div>
      <div
        class="absolute left-165 top-165 text-xl w-50 text-center z-1 text-primary"
      >
        Обучение моделей нейросети
      </div>
      <div
        class="absolute left-260 top-165 text-xl w-50 text-center z-1 text-primary"
      >
        Запуск проекта
      </div>
    </section>
  </main>
</template>
<style scoped></style>
