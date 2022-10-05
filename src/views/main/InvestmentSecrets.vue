<template>
  <section aria-label="고수들의 투자 비법!">
    <!-- 타이틀 영역 -->
    <article class="heading">
      <div class="heading__inner">
        <h1 class="heading__title">고수들의 투자 비법!</h1>
        <button type="button" class="heading__side">더보기</button>
      </div>
    </article>

    <!-- 컨텐츠 영역 -->
    <article class="invst">
      <ul class="invst__list">
        <li
          v-for="(invst, index) in invstList"
          :key="`invst-${invst.id}`"
          @click="openInvstPopup()"
        >
          <invstCardItem
            :tagNm="invst.tagNm"
            :invstTitle="invst.title"
            :invstImg="invst.imgSrc"
            :invstAlt="invst.imgAlt"
            :nickNm="invst.nickNm"
          />
        </li>
      </ul>
    </article>
    <PopupInvst v-if="popup.visible" @close="closedInvstPopup" />
  </section>
</template>

<script>
import invstCardItem from '@/components/investment/invstCardItem'
import PopupInvst from '@/components/investment/PopupInvst'

export default {
  name: 'InvestmentSecrets',
  components: {
    invstCardItem,
    PopupInvst,
  },
  data() {
    return {
      invstList: [
        {
          id: 1,
          tagNm: '국내증시동향',
          title:
            '글로벌 부동산 메가 트렌드, 단독주택(Single-Family Rental) 투자',
          imgSrc: require('@/assets/img/profile_img_01.jpg'),
          invstAlt: '뉴히어로 프로필 사진',
          nickNm: '뉴히어로',
        },
        {
          id: 2,
          tagNm: '투자트랜드',
          title: '하락장에 강한 8% 고배당+월배당 ETF `NUSI`',
          imgSrc: require('@/assets/img/profile_img_02.jpg'),
          invstAlt: '제이형코치 프로필 사진',
          nickNm: '제이형코치',
        },
        {
          id: 3,
          tagNm: '해외증시동향',
          title: '인기 걸그룹 빌리, 메타버스 세상 `이프랜드`에 뜬다',
          imgSrc: require('@/assets/img/profile_img_03.jpg'),
          invstAlt: '부로마블 프로필 사진',
          nickNm: '부로마블',
        },
      ],
      popup: {
        visible: false,
      },
    }
  },
  methods: {
    openInvstPopup() {
      this.popup.visible = true
    },
    closedInvstPopup() {
      this.popup.visible = false
    },
  },
}
</script>

<style lang="scss" scoped></style>
