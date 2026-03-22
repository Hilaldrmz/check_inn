<template>
    <section>
        <div class="filter"></div>
        <h1>Explore your place<br>to stay</h1>
            <DestinationForm />
        <div class="ps">
            <h2>We provide a variety of the<br>best lodging accommodations<br>for those of you who need it.</h2>
            <p>Don’t worry about the quality of the service.</p>
        </div>

    </section>
</template>

<script setup>
import DestinationForm from "@/components/DestinationForm.vue";
</script>

<style lang="scss" scoped>
section {
    @extend %center;
    flex-direction: column;
    align-items: start;
    height: 1111px;
    padding: 0 96px;
    background-image: url("@/assets/uiImages/destination-search-bg.svg");
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    // z-index: -2;

    .filter {
        position: absolute;
        // z-index: -1;
        height: 1111px;
        width: 100%;
        background: linear-gradient(rgba(58, 58, 58, 0.65), rgba(0, 0, 0, 0.65));
        margin: 0 -96px;
    }

    h1 {
        font-size: 112px;
        font-weight: 500;
        line-height: 93.2%;
        letter-spacing: 0.1px;
        color: #fff;
        margin-bottom: 48px;
        z-index: 0;
    }

    .ps {
        display: flex;
        flex-direction: column;
        align-self: end;
        position: relative;
        width: fit-content;
        height: fit-content;
        position: relative;
        z-index: 0;
        background: none;
        width: 600px;
        margin-top: 50px;

        &::before {
            content: "";
            position: absolute;
            top: 20px;
            left: -20px;
            width: 3px;
            height: 65%;
            background: #C49C74;
            border-radius: 30px;
        }

        h2 {
            font-size: 30px;
            font-weight: bold;
            letter-spacing: 0.1px;
            color: #fff;
            margin-bottom: 16px;
            white-space: nowrap;
        }

        p {
            font-size: 15px;
            font-weight: 300;
            font-style: italic;
            color: #fff;
        }

    }

    .from-home {
        @extend %center;
        width: 100%;
    }
}


.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>