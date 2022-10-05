<template>
  <article class="accordion">
    <!-- 아코디언 타이틀 영역 -->
    <div
      class="accordion__title"
      :class="{ 'accordion__title--active': toggleActive }"
      @click="toggleAccordion"
    >
      <!-- 태그가 ipo일 경우 -->
      <div v-if="tag.ipo" class="tag">
        <span class="tag__item ipo">IPO</span>
        <span
          class="tag__item"
          :class="{
            'expct-bels': tag.tagNm === '상장예정',
            'pblc-sbscr': tag.tagNm === '공모청약',
          }"
          >{{ tag.tagNm }}</span
        >
      </div>
      <!-- 태그가 ipo가 아닐 경우 -->
      <div v-else class="tag">
        <span
          class="tag__item"
          :class="{
            'prfrm-bg': tag.tagNm === '실적',
            'event-bg': tag.tagNm === '이벤트',
          }"
        >
          {{ tag.tagNm }}
        </span>
      </div>
      <!-- 아코디언 closed -->
      <button type="button" class="btn-close"></button>
      <!-- 타이틀 영역 -->
      <div class="title" :class="{ 'title--event': tag.tagNm === '이벤트' }">
        <h2>
          {{ title }}
          <span>KOSDAQ</span>
        </h2>
        <span v-if="!toggleActive">KOSDAQ</span>
      </div>
      <!-- 공모가 or 현재가격 -->
      <div>
        <div v-if="tag.ipo" class="public">
          <span class="public--name">공모가</span>
          <span>1,234,000</span>
        </div>
        <div v-if="tag.tagNm === '실적'" class="prfrm">
          <span class="prfrm--price">33,350</span>
          <span class="prfrm--percent">+23.7%</span>
        </div>
      </div>
    </div>
    <!-- 아코디언 content 영역 -->
    <transition name="listOpen">
      <div class="accordion__content" v-if="toggleActive">
        <div v-if="tag.tagNm === '이벤트'" class="flex flex-col">
          <h3 class="accordion__content--label mb-2.5">이벤트 내용</h3>
          <p class="accordion__content--amount">
            픽셀워치는 구글과 삼성이 공동 개발한 웨어러블용 운용체계(OS)
            '웨어OS'로 구동되며, 자체 개발한 시스템온칩(Soc)를 탑재할 것으로
            알려짐
          </p>
        </div>
        <template v-else>
          <div
            v-for="(cont, id) in contentLlist"
            :key="`item-${cont.id}`"
            class="content-list"
          >
            <span class="accordion__content--label">{{ cont.label }}</span>
            <span class="accordion__content--amount">{{ cont.amount }}</span>
          </div>
        </template>
      </div>
    </transition>
  </article>
</template>

<script>
export default {
  name: 'CheckWeekItem',
  data() {
    return {
      toggleActive: false,
      tag: {
        ipo: true,
        tagNm: '공모청약',
      },
      title: '엘지 라이프 사이언스 테크놀로지 센터',
      contentLlist: [
        {
          id: 1,
          label: '주관사',
          amount: '미래에셋증권',
        },
        {
          id: 2,
          label: '개인청약',
          amount: '22. 3. 14 - 22. 3. 15',
        },
        {
          id: 3,
          label: '발표일',
          amount: '22.03.14',
        },
      ],
    }
  },
  methods: {
    toggleAccordion() {
      this.toggleActive = !this.toggleActive
    },
  },
}
</script>

<style lang="scss" scoped>
.listOpen-enter-active,
.listOpen-leave-active {
  transition: all 0.3s ease-in-out;
}
.listOpen-enter,
.listOpen-leave-to {
  opacity: 0;
  transition: all 0.1s ease-in-out;
}
</style>
