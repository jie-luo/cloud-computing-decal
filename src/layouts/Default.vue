<template>
  <nav class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/staff/">Course Staff</g-link>
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
