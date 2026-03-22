<template>
    <section>
        <div class="form-wrap">
            <div class="filter"></div>
            <DestinationForm class="form" />
        </div>
        <div class="template">
            <div class="hotels">
                <div class="card" v-for="hotel in hotels" :key="hotel._id">
                    <img :src="hotel.image[0]" alt="Hotel Image" v-if="hotel.image && hotel.image.length" />

                    <div class="content-wrap">
                        <div class="left">
                            <h2 class="hotel-name">{{ hotel.name || "No name available" }}</h2>
                            <p class="hotel-description">{{ hotel.description || "No description available" }}</p>
                            <p class="location">{{ hotel.location }}</p>
                        </div>

                        <div class="right">
                            <p class="price">${{ hotel.reservePrice }}
                                <span>/ per night</span>
                            </p>


                            <span class="rating"><font-awesome-icon icon="star" class="star-i" />{{ hotel.rating
                            }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div ref="mapContainer" class="map"></div>
        </div>
    </section>
</template>

<script setup>
import DestinationForm from "@/components/DestinationForm.vue";
import { ref, onMounted } from 'vue'
import api from "@/api/axios";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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


const mapContainer = ref(null);

onMounted(() => {
    const map = L.map(mapContainer.value).setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
});

</script>

<style lang="scss" scoped>
section {
    @extend %center;
    flex-direction: column;

    .form-wrap {
        @extend %center;
        background-image: url("@/assets/uiImages/destination-search-bg.svg");
        background-size: cover;
        background-repeat: no-repeat;
        width: 100vw;

        .filter {
            position: absolute;
            // z-index: -1;
            height: 490px;
            width: 100vw;
            background: linear-gradient(rgba(58, 58, 58, 0.65), rgba(0, 0, 0, 0.65));
            // margin: 0 -96px;
        }

        .form {
            margin-top: 200px;
            margin-bottom: 150px;
            transform: scale(0.8);
        }
    }

    .template {
        display: flex;
        flex-direction: row;
        width: 100vw;
        height: 100vh;
        padding: 3vw 5vw;
        background-color: $primary-color;
        gap: 20px;


        .hotels {
            display: flex;
            flex-direction: column;
            gap: 20px;
            min-width: 1000px;
            height: 90vh;
            overflow-y: auto;
            overflow-x: hidden;

            &::-webkit-scrollbar {
                display: none;
            }

            .card {
                @extend %row-between-center;
                background-color: transparent;
                width: 980px;
                height: 175px;
                border-radius: 20px;
                cursor: pointer;
                background-color: rgb(255, 255, 255);
                


                * {
                    font-family: 'manrope';
                    font-size: 18px;
                }

                img {
                    width: auto;
                    height: 175px;
                    border-radius: 10%;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
                }

                .content-wrap {
                    @extend %row-between-center;
                    width: 100%;
                    gap: 10px;
                    padding: 10px 0;
                    margin: 0 20px;

                    .left {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;

                        .hotel-name {
                            font-size: 20px;
                            font-weight: 700;
                            color: $primary-color;
                        }

                        .location {
                            color: $secondary-color;
                            font-weight: 900;
                        }
                    }

                    .right {
                        display: flex;
                        flex-direction: column-reverse;
                        align-items: end;
                        justify-content: space-between;
                        font-size: 20px;
                        font-weight: 600;

                        span {
                            font-size: 14px;
                            font-weight: 400;
                        }


                        .rating {
                            display: flex;
                            align-items: center;
                            gap: 5px;
                            margin-left: 10px;

                            .star-i {
                                color: $secondary-color;
                            }
                        }
                    }
                }
            }
        }

        .map {
            position: sticky;
            width: 100%;
            height: 90vh;
            border-radius: 20px;
        }
    }
}
</style>
