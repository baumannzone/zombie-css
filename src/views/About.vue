<template>
  <div class="about">
    <h1 class="super">Pure CSS Zombie</h1>
    <p class="lead">
      On the occasion of the halloween party 🎃 I made this super awesome 🧟‍♀️ Zombie 🧟‍♂️ in CSS.
    </p>

    <img src="../assets/img/multiple.png" alt="zombie face v1 vs zombie face v2" width="100%">

    <p class="lead">
      On the left (👈) you can see the first version of the zombie, which was developed while the screen was being recorded.
    </p>

    <p class="lead">
      On the right (👉) you can see the second version of the zombie, which was created during a refactoring process
      and without being recorded 😅. This one is the final version.
    </p>

    <img src="../assets/img/zombie-css.png" alt="Pure CSS zombie" width="100%">

    <p class="lead">
      🔥 You can check the source code <a href="https://github.com/baumannzone/zombie-css">here</a> and follow me if you
      want.
      <br>
      I usually create open source repos with interesting stuff.
    </p>

    <p class="lead">
      I made a video where you can see the process of creating the zombie. From <code>0</code> to <code>production ready</code>.
      <br>
      Subscribe if you liked it. It's a newly released channel.
    </p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/q0_IOxh-V4s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <p class="lead">
      Check out the color palette here: <a href="https://coolors.co/292c34-ffffff-b4e900-fe338f-ff70b5" title="color-palette">https://coolors.co/292c34-ffffff-b4e900-fe338f-ff70b5</a>
    </p>

    <img src="https://coolors.co/export/png/292c34-ffffff-b4e900-fe338f-ff70b5" alt="color-palette" width="100%">

  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus">
  .about
    box-sizing border-box
    width 572px
    padding 0 20px
    margin-left auto
    margin-right auto
    margin-bottom 100px
    background-color rgba(255, 255, 255, 0.5)

    .super
      margin 0
      font-size 50px
      font-weight 900
      background -webkit-linear-gradient(#b4e900, #b4e900, #b4e900, #b4e900, #333, #ff007d, #ff007d, #ff007d, #ff007d)
      -webkit-text-fill-color transparent
      -webkit-background-clip text
      text-shadow 2px 2px 3px rgba(0, 0, 0, 0.15), 2px 2px 7px rgba(180, 233, 0, 0)

    a
      color #ef3693

      &:hover
        color #b03590

    .lead
      font-size 25px

  @media (max-width: 575.98px)
    .about
      width 100%
      padding 0 10px

</style>
