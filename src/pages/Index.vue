<template>
  <Layout>
    <h1>{{ $page.metadata.siteName }}</h1>
    <h3>{{ $page.metadata.semester }}</h3>
    <nav class="card" v-for="edge in $page.announcements.edges" :key="edge.node.id">
      <AnnouncementHolder 
        :title="edge.node.title" 
        :date="edge.node.date"
        :content="edge.node.content"
      />
    </nav>

    <p>
      Be sure to replace ALL sample data (all markdown data, schedule.json, etc) otherwise someone's gonna need to explain why we have anime on the website.
    </p>
    <p>
      Below should be a table, which is annoying to implement because each individual cell should probably be a component in order to deal with empty cases without spilling spaghetti sauce all over my repository.
    </p>

    <Schedule />

  </Layout>
</template>

<page-query>
query Home {
  metadata {
    siteName
    semester
  }

	announcements: allAnnouncements(sortBy: "date", order:DESC, limit:1) {
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

<script>
import AnnouncementHolder from '~/components/AnnouncementHolder.vue'
import Schedule from '~/components/schedule/Schedule.vue'

export default {
  metaInfo: {
    title: 'this.$page.metadata.siteName'
  },
  components: {
    AnnouncementHolder,
    Schedule
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
.card {
  padding: 20px;
  background: #FFF;
  border-style: solid;
  border-width: 2px;
}
</style>
