<template>
  <nav class="staff-card-holder">
    <!-- https://github.com/gridsome/gridsome/issues/292 -->
    <g-image class="staff-image" :src="require('!!assets-loader!~/assets' + img)" />
    <nav class="staff-text">
      <h2>{{ name }}</h2>
      <h4>{{ title }}</h4>
      <p>{{ blurb }}</p>
    </nav>
  </nav>
</template>

<script>
export default {
  name: 'StaffCard',
  props: ['img', 'name', 'title', 'blurb'],
  data: function () { return {}; }
}
</script>

<style>
.staff-card-holder {
  display: flex;
  align-items: center;
  width: 100%;
}
.staff-image {
  display: block;
  min-width: 256px;
  max-width: 256px;
  height: auto;
  margin-left: 30px;
  margin-right: 30px;
}
.staff-text {
}
</style>
