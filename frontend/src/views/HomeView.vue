<template>
    <div>
        <DestinationSearch />
        <SuggestedHotels />
        <CompareUs />
        <BrowseByType />
        <Trending />
    </div>
</template>

<script setup>
import { ref } from "vue";
import DestinationSearch from "@/components/DestinationSearch.vue";
import SuggestedHotels from "@/components/SuggestedHotels.vue";
import CompareUs from "@/components/CompareUs.vue";
import BrowseByType from "@/components/BrowseByType.vue";
import Trending from "@/components/Trending.vue";
</script>

<style lang="scss" scoped></style>
