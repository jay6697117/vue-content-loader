<template>
  <div class="home">
    <InstagramLoader class="listLoader" v-if="!finished" />
    <div v-else-if="finished">
      <h1>aaaaaa</h1>
      <h1>aaaaaa</h1>
      <h1>aaaaaa</h1>
      <h1>aaaaaa</h1>
      <h1>aaaaaa</h1>
    </div>
    <h1 style="color:red;">{{ finished }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      finished: false
    };
  },
  created() {
    setTimeout(() => {
      this.finished = true;
    }, 2000);
  }
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
