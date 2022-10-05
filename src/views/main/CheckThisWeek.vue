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

    <article class="stock">
      <ul class="stock__list">
        <li>
          <span ref="monday" class="stock__date stock__date--active">
            월 5.16
          </span>
          <CheckWeekItem />
        </li>
        <li>
          <span ref="tuesday" class="stock__date">화 5.17</span>
          <CheckWeekItem />
        </li>
        <li>
          <span ref="wednesday" class="stock__date">수 5.18</span>
          <CheckWeekItem />
        </li>
        <li>
          <span ref="thursday" class="stock__date">목 5.19</span>
          <CheckWeekItem />
        </li>
        <li>
          <span ref="friday" class="stock__date">금 5.20</span>
          <CheckWeekItem />
        </li>
        <li>
          <span ref="saturday" class="stock__date">토 5.21</span>
          <CheckWeekItem />
        </li>
        <li>
          <span ref="sunday" class="stock__date">일 5.22</span>
          <CheckWeekItem />
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
import CheckWeekItem from '@/components/check-week/CheckWeekItem'

export default {
  name: 'CheckThisWeek',
  components: { CheckWeekItem },
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

<style lang="scss">
@import '@/assets/styles/check-week.scss';
</style>
