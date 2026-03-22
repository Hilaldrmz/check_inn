<template>
    <section>
        <div class="newsletter">
            <div class="text-wrap">
                <h2 class="title">Stay in the know</h2>
                <p class="description">
                    Sign up to get marketing emails from Bookme.com, including promotions, rewards, and travel
                    experiences.
                </p>
            </div>
            <div class="subscribe">
                <div class="input-wrap">
                    <input class="input" type="text" placeholder="Your email address" />
                    <button class="btn button submit">Subscribe</button>
                </div>
                <p class="note">
                    You can opt out anytime. See our <span class="privacy">privacy statement</span>.
                </p>
            </div>
        </div>
        <div class="trending">
            <h2 class="title">Trending destinations</h2>
            <p class="description">Most popular choices for travelers from <span class="location">{{ location }}</span>
            </p>
            <div class="list">
                <div class="item dubai">
                    <p>Dubai</p> <img src="/location-images/dubai.png" alt="" />
                </div>
                <div class="item paris">
                    <p>Paris</p> <img src="/location-images/paris.png" alt="" />
                </div>
                <div class="item tbilisi">
                    <p>Tbilisi</p> <img src="/location-images/tbilisi.png" alt="" />
                </div>
                <div class="item taiwan">
                    <p>Taiwan</p> <img src="/location-images/taiwan.png" alt="" />
                </div>
                <div class="item istanbul">
                    <p>Istanbul</p> <img src="/location-images/istanbul.png" alt="" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const location = ref("your location");

onMounted(() => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                try {
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                    );
                    const data = await response.json();

                    if (data.address && data.address.country) {
                        location.value = data.address.country;
                    } else {
                        location.value = "Unknown location";
                    }
                } catch (error) {
                    console.error("Error fetching location:", error);
                    location.value = "Location not found";
                }
            },
            (error) => {
                console.error("Error getting geolocation:", error);
                location.value = "Location access denied";
            }
        );
    } else {
        location.value = "Geolocation not supported";
    }
});
</script>


<style lang="scss" scoped>
section {
    display: flex;
    justify-content: space-evenly;
    align-items: start;
    height: 958px;
    background-color: $primary-color;
    color: white;
    padding-top: 200px;

    .newsletter {
        height: 100%;

        .text-wrap {
            .title {
                font-size: 47px;
                font-weight: bold;
            }

            .description {
                font-size: 30px;
                width: 660px;
                font-weight: 200;
            }
        }

        .subscribe {
            margin-top: 40px;

            .input-wrap {
                @extend %center;
                gap: 10px;

                .input {
                    width: 100%;
                }

            }
        }

        .note {
            font-size: 18px;
            margin-top: 0.5rem;
            font-weight: 200;

            .privacy {
                color: $secondary-color;
                cursor: pointer;
            }
        }
    }

    .trending {

        .title {
            font-size: 40px;
            font-weight: bold;
        }

        .description {
            font-size: 18px;
            font-weight: 200;

            .location {
                color: $secondary-color;
                font-weight: bold;
            }
        }

        .list {
            margin-top: 40px;
            display: grid;
            grid-template-columns: auto 1fr;
            grid-template-rows: auto;
            grid-template-areas:
                "dubai paris"
                "tbilisi paris"
                "istanbul taiwan";
            gap: 20px;
            justify-content: center;
            justify-items: center;
            align-items: stretch;

            &:nth-child(1),
            &:nth-child(3),
            &:nth-child(5) {
                justify-items: start;
            }

            &:nth-child(2),
            &:nth-child(4) {
                justify-items: end;
            }


            .item {
                position: relative;
                border-radius: 18px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: max-content;
                overflow: hidden;
                cursor: pointer;

                $grid-items: (
                    dubai: (242px, 152px),
                    paris: (207px, 318px),
                    tbilisi: (242px, 152px),
                    istanbul: (222px, 171px),
                    taiwan: (231px, 171px, 0 -25px)
                );

            @each $name, $size in $grid-items {
                &.#{$name} {
                    grid-area: #{$name};
                    width: nth($size, 1);
                    height: nth($size, 2);

                    @if length($size)==3 {
                        margin: nth($size, 3);
                    }
                }
            }

            p {
                position: absolute;
                text-align: center;
                font-size: 24px;
                font-weight: bold;
                z-index: 1;
            }

            img {
                width: 100%;
                object-fit: cover;
                filter: opacity(0.5);
            }
        }
    }
}
}

</style>