<template>
  <div class="invst__card">
    <span
      class="tag"
      :class="{
        'tag--domestic': tagNm === '국내증시동향',
        'tag--overseas': tagNm === '해외증시동향',
        'tag--trend': tagNm === '투자트랜드',
      }"
    >
      {{ tagNm }}
    </span>
    <h2 class="invst__card--title">{{ invstTitle }}</h2>
    <div class="profile mt-3">
      <div class="relative">
        <div class="profile__img">
          <img :src="invstImg" :alt="invstAlt" />
        </div>
        <div class="profile__img--active"></div>
      </div>
      <div class="profile__text-box">
        <p class="profile__text-box--name">{{ nickNm }}</p>
        <p class="profile__text-box--active">original</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'invstCardItem',
  props: {},
  data() {
    return {
      tagNm: '국내증시동향',
      invstTitle:
        '글로벌 부동산 메가 트렌드, 단독주택(Single-Family Rental) 투자',
      invstImg: require('@/assets/img/profile_img_01.jpg'),
      invstAlt: '뉴히어로 프로필 사진',
      nickNm: '뉴히어로',
    }
  },
}
</script>

<style lang="scss" scoped></style>
