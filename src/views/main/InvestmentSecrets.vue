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
      <invstCardItem />
      <invstCardItem />
      <invstCardItem />
      <invstCardItem />
    </article>
  </section>
</template>

<script>
import invstCardItem from '@/components/investment/invstCardItem'
export default {
  name: 'InvestmentSecrets',
  components: {
    invstCardItem,
  },
}
</script>

<style lang="scss" scoped></style>
