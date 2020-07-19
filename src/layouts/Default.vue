<template>
  <nav class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/announcements/">Announcements</g-link>
        <g-link class="nav__link" to="/staff/">Course Staff</g-link>
        <g-link class="nav__link" to="/resources/">Resources</g-link>
        <a class="nav__link" href="https://docs.google.com/document/d/1fm0MRPCziaeJ7b-c65uh2qUOurnNdhsP7ZCXcuPQwMk/edit">Syllabus</a>
        <a class="nav__link" href="https://piazza.com/class/">Piazza</a>
      </nav>
    </header>
    <slot />
  <nav class="blank" />
  </nav>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.blank {
  min-height: 200px;
}

.nav__link {
  margin-left: 20px;
}
</style>
