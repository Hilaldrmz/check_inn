<template>
    <section>
        <h2>Browse by property type</h2>
        <p>You can easily browse and filter your search by property type. This feature allows you to select hotels or
            alternative options, such as hostels, vacation rentals, or bed and breakfasts, based on your preferences and
            specific needs for your stay.</p>
        <div class="property-types">
            <div class="type">
                <h3>Hotels</h3>
                <img :src="img.hotels" alt="">
            </div>
            <div class="type">
                <h3>Apartments</h3>
                <img :src="img.apartments" alt="">
            </div>
            <div class="type">
                <h3>Resorts</h3>
                <img :src="img.resorts" alt="">
            </div>
            <div class="type">
                <h3>Villas</h3>
                <img :src="img.villas" alt="">
            </div>
            <div class="type">
                <h3>Cottages</h3>
                <img :src="img.cottages" alt="">
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const img = {
    hotels: '/hotel-images/type-hotels.png',
    apartments: '/hotel-images/type-apartments.png',
    resorts: '/hotel-images/type-resorts.png',
    villas: '/hotel-images/type-villas.png',
    cottages: '/hotel-images/type-cottages.png',
}

</script>

<style lang="scss" scoped>
section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    height: 1362px;
    padding: 0 10vw;

    &::before {
        content: "";
        position: absolute;
        background-image: url("@/assets/layers/component-top.svg");
        align-self: center;
        bottom: -49px;
        width: 1057px;
        height: 49px;
        z-index: 200;
        transform: rotate(180deg);
    }

    * {
        font-family: 'manrope';
    }

    h2 {
        font-size: 54px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    p {
        width: 900px;
        font-weight: 500;
        font-size: 30px;
    }

    .property-types {
        @extend %center;
        gap: 10px;
        margin-top: 150px;


        .type {
            transition: transform 1s linear(0 0%, 0 1.8%, 0.01 3.6%, 0.03 6.35%, 0.07 9.1%, 0.13 11.4%, 0.19 13.4%, 0.27 15%, 0.34 16.1%, 0.54 18.35%, 0.66 20.6%, 0.72 22.4%, 0.77 24.6%, 0.81 27.3%, 0.85 30.4%, 0.88 35.1%, 0.92 40.6%, 0.94 47.2%, 0.96 55%, 0.98 64%, 0.99 74.4%, 1 86.4%, 1 100%);
            cursor: pointer;

            &:hover {
                transform: scale(1.09);

                img {
                    box-shadow: $gray-600 0px 5px 20px 1px;
                    border-radius: 20px;
                }
            }
        }

        &:has(.type:hover) {
            .type:not(:hover) img {
                filter: blur(2px);
            }

            .type:hover img {
                filter: none;
            }
        }

        h3 {
            justify-self: center;
            font-size: 28px;
            font-weight: bold;
            color: $gray-500;
        }

        img {
            width: 300px;
            height: 631px;
            transition: box-shadow 0.6s ease, border-radius 0.6s ease, filter 0.6s ease;
        }
    }
}
</style>