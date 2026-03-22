<template>
    <form @submit.prevent="handleSubmit">
        <div class="input-icon">
            <font-awesome-icon icon="location-dot" />
            <input v-model="city" class="location" type="text" placeholder="Stavanger, Norway" id="locationInput" />
        </div>
        <div class="input-icon">
            <!-- <font-awesome-icon icon="calendar-days" /> -->

            <VueDatePicker class="check-in" :format="'dd/MM/yyyy'" v-model="dateValue" :placeholder="inputPlaceholder"
                :theme="'dark'" range />

        </div>
        <div class="input-icon">
            <font-awesome-icon icon="user-group" />
            <input v-model="guests"  class="guests" type="text" placeholder="Guests" />
            <font-awesome-icon icon="chevron-down" />
        </div>
        <button class="btn search-btn submit" type="submit">Checkout</button>
    </form>
</template>

<script setup>
import { ref, computed } from 'vue'
// import { useRouter } from 'vue-router';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const dateValue = ref(null)
const inputPlaceholder = computed(() => dateValue.value ? '' : 'Check-in');

// const router = useRouter();

const city = ref('');
const guests = ref(1);

const submitForm = () => {
    const formValues = {
        city: city.value,
        dateValue: dateValue.value,
        guests: guests.value,
    };
    router.push({ name: 'HotelsView', query: formValues });
};
</script>

<style lang="scss" scoped>
form {
    @extend %center;
    align-self: center;
    position: relative;
    z-index: 0;
    gap: 24px;
    width: 1378px;
    height: 141px;
    background-color: rgba(29, 29, 29, 0.61);

    border-radius: 30px;

    .location {
        width: 400px;
    }

    .chech-in+.check-out {
        gap: 1px;
    }

    .input-icon {
        display: flex;
        align-items: center;
        position: relative;

        svg {
            //icons
            font-size: 15px;
            color: #757575;
            margin-right: 10px;
            position: absolute;
            left: 20px;
        }

        .fa-chevron-down {
            right: 20px;
            left: unset;
        }
    }
}

::v-deep .dp__input {
    text-align: center;
    width: fit-content;
    height: 71px;
    border-radius: 12px;
    background-color: rgba(37, 37, 37, 1);
    box-shadow: inset 2px 0 4px rgba(0, 0, 0, 0.25),
        inset -2px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    color: var(--text-color);
    outline: none;
}
</style>