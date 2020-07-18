<template>
  <g-link :to="prefixedLink" v-if="link">{{ getDisplayTitle }}</g-link>
  <span v-else>{{ noLinkDisplay }}</span>
</template>

<script>
export default {
  name: 'ScheduleEntry',
  props: ['data', 'prefix', 'link', 'noLinkDisplay'],
  data: function () { return {}; },
  computed: {
    getDisplayTitle: function() {
      if (this.link == "") {
        return this.noLinkDisplay;
      }
      for (var i = 0; i < this.data.edges.length; i += 1) {
        var q = this.data.edges[i].node.path;
        if ("/" + this.prefix + "/" + this.link + "/" == q) {
          return this.data.edges[i].node.title;
        }
      }
    },
    prefixedLink: function() {
      return "/" + this.prefix + "/" + this.link + "/"
    }
  }
}
</script>

