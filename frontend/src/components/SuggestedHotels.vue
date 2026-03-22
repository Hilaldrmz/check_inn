<template>
    <section>
        <div v-if="isLoading">Loading...</div>
        <div v-else-if="error">Error: {{ error }}</div>
        <div v-else class="suggested-hotels">
            <Slide :items="hotels">
                <template v-slot="{ isEdgeCard }">
                    <div v-for="(hotel, index) in hotels" :key="hotel._id" class="hotel-card"
                        :class="{ 'edge-card': isEdgeCard(index) }">
                        <Card :hotel="hotel" />
                    </div>
                </template>
            </Slide>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Slide from "./Slide.vue";
import Card from "./Card.vue";
import api from "@/api/axios";

const hotels = ref([]);
const error = ref(null);
const isLoading = ref(false);

onMounted(async () => {
    isLoading.value = true;
    try {
        const response = await api.get("/hotels/getHotels");
        hotels.value = response.data.hotels;
        console.log(hotels.value);
    } catch (err) {
        error.value = err.message;
    } finally {
        isLoading.value = false;
    }
});
</script>

<style lang="scss" scoped>
section {
    @extend %center;
    position: relative;
    height: 810px;

    &::before {
        content: "";
        position: absolute;
        background-image: url("@/assets/layers/component-top.svg");
        top: -49px;
        width: 1057px;
        height: 49px;
        z-index: 200;
    }

    .suggested-hotels {
        @extend %center;
        width: 100%;
        // gap: 20px;

        // .hotel-card {}
    }
}
</style>
