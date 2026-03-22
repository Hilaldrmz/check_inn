<template>
    <div class="slide__wrapper">
        <button @click="prevSlide" class="slide__button prev">&#9665;</button>
        <div class="slide__viewport" ref="viewport">
            <div class="slide__slide" :style="slideStyles">
                <slot v-bind:isEdgeCard="isEdgeCard" v-bind:items="items"></slot>
            </div>
        </div>
        <button @click="nextSlide" class="slide__button next">&#9655;</button>
    </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';

const props = defineProps({
    items: Array, // Genel kullanım için desteklenmeli
    visibleCount: {
        type: Number,
        default: 5, // Aynı anda görünen öğe sayısı
    },
    step: {
        type: Number,
        default: 1, // Kaç öğe kaydırılacak
    },
    maxItems: {
        type: Number,
        default: Infinity, // Maksimum gösterilecek kart sayısı
    },
});

const currentIndex = ref(0);
const viewport = ref(null);

const totalItems = computed(() => Math.min(props.items.length, props.maxItems));
const slideWidth = computed(() => (101 / props.visibleCount) + '%');
const slideStyles = computed(() => ({
    transform: `translateX(-${(currentIndex.value * (101 / props.visibleCount))}%)`,
    display: 'grid',
    gridTemplateColumns: `repeat(${totalItems.value}, ${slideWidth.value})`,
}));

const isEdgeCard = (index) => {
    return index === currentIndex.value || index === currentIndex.value + props.visibleCount - 1;
};


const nextSlide = () => {
    if (currentIndex.value + props.step < totalItems.value - props.visibleCount + 1) {
        currentIndex.value += props.step;
    }
};

const prevSlide = () => {
    if (currentIndex.value - props.step >= 0) {
        currentIndex.value -= props.step;
    }
};
</script>

<style lang="scss" scoped>
.slide__wrapper {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 145px;
}

.slide__viewport {
    overflow: hidden;
    width: 100%;
    height: 100%;
}

.slide__slide {
    display: flex;
    transition: transform 0.3s ease;
}

.slide__slide ::v-deep(.hotel-card) {
    transition: transform 0.3s ease, scale 0.7s ease;
}

.slide__slide ::v-deep(.hotel-card.edge-card) {
    transform: scale(0.9);
    filter: blur(2px);
}

.slide__button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    background: rgba(0, 0, 0, 0.3);
    color: white;
    border: none;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    padding: 10px;

    &.next {
        right: 100px;
    }

    &.prev {
        left: 100px;
    }
}
</style>