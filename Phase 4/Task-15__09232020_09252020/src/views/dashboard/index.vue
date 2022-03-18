<template>
  <div class="dashboard">
    <h3 class="my-5">Dashboard</h3>
    <p>PROGRESS A</p>
    <div class="progress mx-auto mb-5">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar"
             aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <p>PROGRESS B</p>
    <div class="progress mx-auto mb-5">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar"
             aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <p>PROGRESS C</p>
    <div class="progress mx-auto mb-5">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar"
             aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.progress-bar {
  width: 50%;
}
.progress {
  max-width: 500px;
}
</style>