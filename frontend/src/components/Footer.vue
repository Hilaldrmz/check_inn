<template>
    <section class="footer">
        <div class="top">
            <img src="\src\assets\logo.svg" alt="">
            <div class="text">
                <p>Ready to get started?</p>
                <button class="btn button submit" @click="goToInput">Get started</button>
            </div>
        </div>
        <hr>
        <div class="footer-links">
            <div>
                <h3>Services</h3>
                <ul>
                    <li>Hotels</li>
                    <li>Flights</li>
                    <li>Car rentals</li>
                    <li>Activities</li>
                </ul>
            </div>
            <div>
                <h3>About</h3>
                <ul>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Press</li>
                </ul>
            </div>
            <div>
                <h3>Help</h3>
                <ul>
                    <li>FAQ</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>
        <div class="bottom">
            <div>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
            </div>
            <div>
                <font-awesome-icon icon="fa-brands fa-facebook-f" class="social-i" />
                <font-awesome-icon icon="fa-brands fa-x-twitter" class="social-i" />
                <font-awesome-icon icon="fa-brands fa-instagram" class="social-i" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const goToInput = () => {
    const input = document.getElementById('locationInput')
    if (input) {
        input.scrollIntoView({ behavior: 'smooth', block: 'center' })
        input.focus()
    }
}
</script>

<style lang="scss" scoped>
section {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 700px;
    background-color: $black;
    color: $white;
    padding: 0 10vw 0 10vw;
    width: 100%;

    .top {
        @extend %row-between;

        .text {
            @extend %row-between;

            // width: 50%;
            p {
                margin-right: 40px;
            }
        }
    }

    hr {
        width: 100%;
        height: 1px;
        border: $gray-900 solid 1px;
    }

    .footer-links {
        @extend %row-between;
        width: 100%;

        div {
            h3 {
                margin-bottom: 20px;
                font-weight: bold;
                color: $secondary-color;
            }

            ul {
                li {
                    font-weight: 200;
                    margin-bottom: 10px;
                }
            }
        }
    }

    .bottom {
        @extend %row-between;
        width: 100%;
        position: relative;
        bottom: -50px;

        div {
            @extend %row-between;

            p {
                font-size: 10px;
                font-weight: 200;
                margin-right: 20px;
            }
        }

        .social-i {
            color: $white;
            margin-left: 60px;
            font-size: 20px;
            cursor: pointer;
        }
    }
}
</style>
