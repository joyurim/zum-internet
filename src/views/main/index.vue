<template>
  <main aria-label="ZUM 웹 퍼블리싱 테스트 작업물">
    <InvestmentSecrets />
    <CheckThisWeek />
  </main>
</template>

<script>
import InvestmentSecrets from './InvestmentSecrets'
import CheckThisWeek from './CheckThisWeek'

export default {
  name: 'InvestmentHome',
  components: {
    InvestmentSecrets, // 고수들의 투자 비법
    CheckThisWeek, // 이번주 꼭 확인
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/common.scss';
</style>
