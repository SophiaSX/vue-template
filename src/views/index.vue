<template>
  <div class="logoin-index">
    <header-part :is-change-width="isChangeWidth"/>
    <transition>
      <aside-part :is-change-width="isChangeWidth"/>
    </transition>
    <transition>
      <main-part :is-change-width="isChangeWidth"/>
    </transition>
  </div>
</template>

<script>
const HeaderPart = () => import('@/views/common/Header')
const AsidePart = () => import('@/views/common/Aside')
const MainPart = () => import('@/views/common/Main')
export default {
  name: 'Index',
  components: {
    'aside-part': AsidePart,
    'header-part': HeaderPart,
    'main-part': MainPart
  },
  data() {
    return {
      isChangeWidth: false
    }
  },
  created() {
    this.$on('changeWidth', function() {
      this.isChangeWidth = !this.isChangeWidth
    })
  }
}
</script>
