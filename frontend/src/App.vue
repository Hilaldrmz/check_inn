<script setup>
import { RouterView } from 'vue-router';
import { useRoute } from 'vue-router'

const route = useRoute()
import './scss/main.css';

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
    <main>
        <Header />
        <RouterView />
        <Footer />
    </main>
</template>

<style lang="scss" scoped>
main {
    min-height: 100vh;
}
</style>
