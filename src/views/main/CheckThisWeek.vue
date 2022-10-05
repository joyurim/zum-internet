<template>
  <section aria-label="이번주 꼭 확인하세요!">
    <!-- 타이틀 영역 -->
    <article class="heading">
      <div class="heading__inner">
        <h1 class="heading__title">이번주 꼭 확인하세요!</h1>
      </div>
    </article>
    <!-- 이번주 달력 -->
    <article class="week">
      <ul class="grid grid-cols-7">
        <li
          v-for="(week, index) in weekList"
          :key="`main-${week.id}`"
          class="week__list"
          :class="{ 'week__list--active': activeItem === week.id }"
          @click="moveWeekList(index)"
        >
          <div class="week__list--name">{{ week.name }}</div>
          <div class="week__list--date">{{ week.date }}</div>
        </li>
      </ul>
    </article>

    <ul class="text">
      <li>
        <div class="box mt-4" ref="monday">컴포넌트1</div>
      </li>
      <li>
        <div class="box" ref="tuesday">컴포넌트2</div>
      </li>
      <li>
        <div class="box" ref="wednesday">컴포넌트3</div>
      </li>
      <li>
        <div class="box" ref="thursday">컴포넌트4</div>
      </li>
      <li>
        <div class="box" ref="friday">컴포넌트5</div>
      </li>
      <li>
        <div class="box" ref="saturday">컴포넌트6</div>
      </li>
      <li>
        <div class="box" ref="sunday">컴포넌트7</div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'CheckThisWeek',
  data() {
    return {
      weekList: [
        {
          id: 'monday',
          name: '월',
          date: '16',
        },
        {
          id: 'tuesday',
          name: '화',
          date: '17',
        },
        {
          id: 'wednesday',
          name: '수',
          date: '18',
        },
        {
          id: 'thursday',
          name: '목',
          date: '19',
        },
        {
          id: 'friday',
          name: '금',
          date: '20',
        },
        {
          id: 'saturday',
          name: '토',
          date: '21',
        },
        {
          id: 'sunday',
          name: '일',
          date: '22',
        },
      ],
      activeItem: 'monday',
    }
  },
  methods: {
    moveWeekList(index) {
      this.activeItem = this.weekList[index].id

      window.scrollTo({
        top: this.$refs[this.weekList[index].id].offsetTop, // 상단에서 위치
        left: 0,
        behavior: 'smooth', // 애니메이션
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
