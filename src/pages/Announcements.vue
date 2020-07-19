<template>
  <Layout>
    <h1>Announcements</h1>
    <nav v-for="edge in $page.announcements.edges" :key="edge.node.id">
      <AnnouncementHolder 
        :title="edge.node.title" 
        :date="edge.node.date"
        :content="edge.node.content"
      />
      <hr />
    </nav>
  </Layout>
</template>

<script>
import AnnouncementHolder from '~/components/AnnouncementHolder.vue'
export default {
  metaInfo: {
    title: 'Announcements'
  },
  components: {
    AnnouncementHolder,
  }
}
</script>

<style>

</style>

<page-query>
query Announcements {
	announcements: allAnnouncements(sortBy: "date", order:DESC) {
    edges {
			node {
        id
        title
        date (format: "YYYY-MM-DD")
        content
        path
      }
    }
  }
}
</page-query>