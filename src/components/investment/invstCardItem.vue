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
  props: {
    tagNm: {
      type: String,
      required: false,
    },
    invstTitle: {
      type: String,
      required: false,
    },
    invstImg: {
      type: String,
      required: false,
    },
    invstAlt: {
      type: String,
      required: false,
    },
    nickNm: {
      type: String,
      required: false,
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
