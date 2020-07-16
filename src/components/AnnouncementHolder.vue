<template>
  <nav class="card">
    <h2> Latest Announcement: {{ title }} </h2>
    <h4> {{ date }} </h4>
    <nav class="content" v-html=content />
  </nav>
</template>

<script>
export default {
  name: 'AnnouncementHolder',
  props: ['title', 'date', 'content'],
  data: function () { return {}; }
}
</script>

<style>
.card {
  padding: 20px;
  background: #FFF;
  border-style: solid;
  border-width: 2px;
}
</style>
