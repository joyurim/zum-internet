<template>
  <section aria-label="이번주 꼭 확인하세요!" class="relative">
    <div class="is-sticky">
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
    </div>
    <article class="stock">
      <ul class="stock__list">
        <li>
          <span ref="monday" class="stock__date stock__date--active">
            월 5.16
          </span>
          <CheckWeekItem :itemInfo="monItemInfo" />
        </li>
        <li>
          <span ref="tuesday" class="stock__date">화 5.17</span>
          <CheckWeekItem :itemInfo="tuesItemInfo" />
          <CheckWeekItem :itemInfo="tuesEventItemInfo" />
        </li>
        <li>
          <span ref="wednesday" class="stock__date">수 5.18</span>
          <CheckWeekItem :itemInfo="wedItemInfo" />
        </li>
        <li>
          <span ref="thursday" class="stock__date">목 5.19</span>
          <CheckWeekItem :itemInfo="thursItemInfo" />
          <CheckWeekItem :itemInfo="thursIpoItemInfo" />
        </li>
        <li>
          <span ref="friday" class="stock__date">금 5.20</span>
          <CheckWeekItem :itemInfo="friEventItemInfo" />
        </li>
        <li>
          <span ref="saturday" class="stock__date">토 5.21</span>
        </li>
        <li>
          <span ref="sunday" class="stock__date">일 5.22</span>
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
      monItemInfo: {
        tag: {
          ipo: true,
          tagNm: '상장예정',
        },
        title: 'LG 유플러스',
        price: '1,234,000',
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
      },
      tuesItemInfo: {
        tag: {
          ipo: false,
          tagNm: '실적',
        },
        title: '롯데제과',
        price: '33,350',
        percent: '+23.7',
        contentLlist: [
          {
            id: 1,
            label: '예상 주당순이익',
            amount: '742억',
          },
          {
            id: 2,
            label: '예상 매출',
            amount: '5,180억',
          },
        ],
      },
      tuesEventItemInfo: {
        tag: {
          ipo: false,
          tagNm: '이벤트',
        },
        title: '구글 연례 개발자 회의 및 픽셀워치 공개',
        eventContent:
          '픽셀워치는 구글과 삼성이 공동 개발한 웨어러블용 운용체계(OS) `웨어OS`로 구동되며, 자체 개발한 시스템온칩(Soc)를 탑재할 것으로 알려짐',
      },

      wedItemInfo: {
        tag: {
          ipo: true,
          tagNm: '공모청약',
        },
        title: 'LG 에너지 솔루션',
        price: '1,234,000',
        contentLlist: [
          {
            id: 1,
            label: '주관사',
            amount: '신한금융투자',
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
      },
      thursItemInfo: {
        tag: {
          ipo: false,
          tagNm: '실적',
        },
        title: '스튜디오 드래곤',
        price: '18,460',
        percent: '+23.7',
        contentLlist: [
          {
            id: 1,
            label: '예상 주당순이익',
            amount: '247억',
          },
          {
            id: 2,
            label: '예상 매출',
            amount: '3,933억',
          },
        ],
      },
      thursIpoItemInfo: {
        tag: {
          ipo: true,
          tagNm: '공모청약',
        },
        title: '엘지 라이프 사이언스 테크놀로지 센터',
        price: '84,200',
        contentLlist: [
          {
            id: 1,
            label: '주관사',
            amount: '신한금융투자',
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
      },
      friEventItemInfo: {
        tag: {
          ipo: false,
          tagNm: '이벤트',
        },
        title: 'xEV 트렌드 코리아 개최',
        eventContent:
          '인터배터리는 국내 유일의 배터리 전문 전시회로 올해 행사에는 국내외 270여개 배터리 산업 관련 기업들이 참가해 새로운 제품과 기술을 선보일 것으로 알려짐',
      },
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
