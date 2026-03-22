<template>
    <header>
        <div class="branding">
            <router-link to="/">
                <img src="@/assets/logo.svg" alt="" />
            </router-link>
        </div>
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/hotels">Hotels</router-link></li>
                <li><router-link to="/blog">Blog</router-link></li>
            </ul>
        </nav>
        <div class="user-profile">
            <img src="https://i.pravatar.cc/300" alt="" class="profile-picture" />
            <p class="user-name">Hi, User!</p>
        </div>
    </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: min-content;
    padding: 0 80px;

    position: absolute;
    z-index: 100;
    width: 100%;
    top: 0;

    .branding {
        img {
            width: 150px;
            height: auto;
            filter: drop-shadow(0 0 0.75rem #424242);
            cursor: pointer;
        }
    }

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1009px;
        height: 107.96px;
        background-image: url("@/assets/layers/header-back.svg");
        filter: drop-shadow(0 0 0.75rem #424242);
        background-size: cover;
        background-repeat: no-repeat;

        ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            min-width: fit-content;
            gap: 85px;
            font-weight: 600;
        }
    }

    .user-profile {
        display: flex;
        align-items: center;
        gap: 10px;

        width: 194px;
        height: 57px;
        border-radius: 38px;
        border: 1px solid #fff;
        // box-shadow: 0 0 0.75rem #424242;


        img {
            width: 55px;
            height: 55px;
            border-radius: 50%;
            border: 1px solid #fff;
        }

        .user-name {
            align-self: center;
            font-size: 20px;
            font-weight: 500;
            color: #fff;
            text-shadow: 0 0 0.75rem #424242;
        }
    }
}
</style>
