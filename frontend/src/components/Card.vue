<template>
    <div class="card">
        <img :src="hotel.image[0]" alt="Hotel Image" v-if="hotel.image && hotel.image.length" />

        <div class="content-wrap">
            <div class="left">
                <h2 class="hotel-name">{{ hotel.name || "No name available" }}</h2>
                <p class="hotel-description">{{ hotel.description || "No description available" }}</p>
                <p class="location">{{ hotel.location }}</p>
            </div>

            <div class="right">
                <p class="price">${{ hotel.reservePrice }}
                    <br><span>per night</span>
                </p>
            </div>

            <span class="rating"><font-awesome-icon icon="star" />{{ hotel.rating }}</span>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    hotel: {
        type: Object,
        required: true,
    },
});

</script>

<style lang="scss" scoped>
.card {
    position: relative;
    background-color: transparent;
    // overflow: hidden;
    width: 300px;
    // height: 406px;
    cursor: pointer;

    * {
        font-family: 'manrope';
        font-size: 18px;
    }

    img {
        width: 300px;
        height: 336px;
        border-radius: 10%;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    }

    .content-wrap {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        padding: 10px 0;

        .left {
            .hotel-name {
                font-weight: bold;
                border-bottom: 1px solid #ddd;
            }

            .hotel-description {
                display: none;
            }

            .location {
                // text-align: right;
                font-size: 12px;
                white-space: nowrap;
                font-weight: bold;
                color: $gray-500;
            }
        }

        .right {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: min-content;

            .price {
                color: $secondary-color;
                font-weight: bold;
                text-align: right;
                line-height: 1;

                span {
                    font-size: 12px;
                    white-space: nowrap;
                    color: $gray-500;
                }
            }
        }
    }

    .rating {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        position: absolute;
        top: 20px;
        left: 20px;
        width: 65px;
        height: 28px;
        font-size: 14px;
        border-radius: 50px;
        background-color: hsla(0, 0%, 100%, 0.3);
        backdrop-filter: blur(40px);
        color: rgb(255, 255, 255);
        text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);

        .fa-star {
            color: rgba(201, 190, 179, 1);
        }

    }

}
</style>