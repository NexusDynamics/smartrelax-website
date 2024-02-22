<template>
  <client-only>
    <model-viewer v-if="isMounted" :src="src" ar ar-modes="webxr scene-viewer quick-look"  shadow-intensity="0.94" camera-target="0m 0.41m 0.2m" environment-image="legacy" exposure="1.09" shadow-softness="1" tone-mapping="commerce" camera-orbit="calc(.5rad - env(window-scroll-y) * 2.5rad) calc(90deg + env(window-scroll-y) * 10deg) calc(4m - env(window-scroll-y) * 3m)">

    </model-viewer>
  </client-only>
</template>

<style lang="scss" scoped>
model-viewer {
  width: 100%;
  height: 100%
}
</style>

<script>
export default {
  name: 'ModelHeader',
  data() {
    return {
      isMounted: false,
      src: '/untitled.glb'
    }
  },
  mounted() {
    this.isMounted = true
    this.loadComponent()
  },
  computed: {
    loadComponent() {
      return () => import('@google/model-viewer')
    }
  }
}

</script>
