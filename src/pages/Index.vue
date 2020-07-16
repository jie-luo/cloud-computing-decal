<template>
  <Layout>
    <h1>{{ $page.metadata.siteName }}</h1>
    <h3>{{ $page.metadata.semester }}</h3>
    

    <div v-for="edge in $page.announcements.edges" :key="edge.node.id">
      <AnnouncementHolder 
        :title="edge.node.title" 
        :date="edge.node.date"
        :content="edge.node.content"
      />
    </div>

    <p>
      Be sure to replace ALL sample data (all markdown data, schedule.json, etc) otherwise someone's gonna need to explain why we have anime on the website.
    </p>
    <p>
      Below should be a table, which is annoying to implement because each individual cell should probably be a component in order to deal with empty cases without spilling spaghetti sauce all over my repository.
    </p>
    
    <ul>
      <li v-for="edge in $page.weeks.edges" :key="edge.node.id">
        {{ edge.node.date }}: <a :href=edge.node.lecture>Lecture</a>
      </li>
    </ul>

    <p> Have some sample pages </p>

    <g-link to="/homeworks/sample">Homework</g-link>
    <g-link to="/notes/sample">Notes</g-link>
    <g-link to="/projects/sample">Projects</g-link>
    <g-link to="/quizes/sample">Quizes</g-link>

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

  weeks: allWeeks(sortBy: "date", order:ASC) {
    totalCount
    edges {
      node {
        id
        date
        topic
        lecture
        homework
        note
        project
        quiz
      }
    }
  }
}


</page-query>

<script>
import AnnouncementHolder from '~/components/AnnouncementHolder.vue'

export default {
  components: {
    AnnouncementHolder
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
