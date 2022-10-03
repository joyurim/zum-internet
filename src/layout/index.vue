<template>
  <div class="FrameworkWrap">
    <div class="flex-1 flex flex-col">
      <div class="content">
        <div class="content__wrap">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  components: {},
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
