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
        <g-link class="nav__link" to="/policies/">Policies</g-link>
        <a class="nav__link" href="https://piazza.com/class/">Piazza</a>
      </nav>
    </header>
    <slot />
  <nav class="blank" />
  <hr />
  <footer class="footer">
    <g-image src="~/assets/GitHub-Mark-32px.png" /><a class="nav__link" href="https://github.com/jie-luo/cloud-computing-decal">Website Repository</a>
  </footer>
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
  max-width: 900px;
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
  min-height: 30px;
}

.nav__link {
  margin-left: 20px;
}

.footer {
  display: flex;
  align-items: center;
  margin: 30px;
}
.footer a {
  font-size: 18px;
}
</style>
