<template>
    <section>
        <div class="content-wrap">
            <div>
                <h3>See it all</h3>
                <p>From local hotels to global brands, discover millions of rooms all around the world.</p>
            </div>
            <div>
                <h3>Compare right here</h3>
                <p>No need to search anywhere else. The biggest names in travel are right here.</p>
            </div>
            <div>
                <h3>Get exclusive rates</h3>
                <p>We‘ve special deals with the world’s leading hotels and we these savings with you.</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style lang="scss" scoped>
section {
    @extend %center;
    background-color: $primary-color;
    color: $white;
    width: 100%;
    height: 402px;
    padding: auto 10vw;

    .content-wrap {
        display: flex;
        align-items: start;
        justify-content: space-evenly;
        width: 100%;

        div {
            @extend %center;
            flex-direction: column;
            font-family: 'manrope';

            h3 {
                font-size: 30px;
                margin-bottom: 20px;
                font-weight: bold;
            }

            p {
                text-align: center;
                font-size: 20px;
                font-weight: 200;
                width: 390px;
            }
        }
    }
}
</style>