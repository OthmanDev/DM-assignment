<template>
  <div class="bg-white p-4 lg:p-6 rounded-xl flex flex-col justify-between">
    <div class="flex items-start justify-between">
      <div>
        <NuxtLink :to="`/cars/${car.id}`">
          <h5 class="font-bold text-base lg:text-xl mb-1">{{ car.name }}</h5>
        </NuxtLink>
        <span class="text-sm text-gray-50 font-semibold">{{ car.type }}</span>
      </div>
      <span @click="toggleCarToFavorite(car)" class="w-5 h-5 cursor-pointer">
        <img v-if="!isFavorite" src="~/assets/icons/outline-heart.svg" alt="DM" loading="lazy"/>
        <img v-else src="~/assets/icons/red-heart.svg" alt="DM" loading="lazy"/>
      </span>
    </div>
    <div :class="[ customMobile ? 'flex items-center gap-x-6' : '' ]">
      <div class="lg:py-16 lg:px-0" :class="[ customMobile ? 'flex-1 py-6 px-4' : 'py-8 px-8' ]">
        <div class="relative">
          <div class="flex items-end justify-center h-100">
            <NuxtLink :to="`/cars/${car.id}`">
              <img :src="car.img" :alt="car.name" loading="lazy" />
            </NuxtLink>
          </div>
          <div class="absolute -bottom-2 lg:-bottom-4 left-0 w-full">
            <img src="~/assets/icons/car-shadow.svg" alt="DM" loading="lazy" class="w-full"/>
          </div>
        </div>
      </div>
      <div v-if="customMobile" class="items-start justify-between gap-2 lg:hidden flex flex-col w-24">
        <div class="flex items-center gap-1">
          <img src="~/assets/icons/gasolin.svg" alt="DM" loading="lazy"/>
          <span class="text-sm text-gray-50 font-medium leading-none">{{ car.gasolineLiter }} L</span>
        </div>
        <div class="flex items-center gap-1">
          <img src="~/assets/icons/kind-transition.svg" alt="DM" loading="lazy"/>
          <span class="text-sm text-gray-50 font-medium leading-none">{{ car.kindOfTransition }}</span>
        </div>
        <div class="flex items-center gap-1">
          <img src="~/assets/icons/people.svg" alt="DM" loading="lazy"/>
          <span class="text-sm text-gray-50 font-medium leading-none">{{ car.people }} People</span>
        </div>
      </div>
    </div>
    <div>
      <div class="items-center justify-between gap-1 mb-6" :class="[ customMobile ? 'hidden lg:flex' : 'flex' ]">
        <div class="flex items-center gap-1">
          <img src="~/assets/icons/gasolin.svg" alt="DM" loading="lazy"/>
          <span class="text-sm text-gray-50 font-medium leading-none">{{ car.gasolineLiter }} L</span>
        </div>
        <div class="flex items-center gap-1">
          <img src="~/assets/icons/kind-transition.svg" alt="DM" loading="lazy"/>
          <span class="text-sm text-gray-50 font-medium leading-none">{{ car.kindOfTransition }}</span>
        </div>
        <div class="flex items-center gap-1">
          <img src="~/assets/icons/people.svg" alt="DM" loading="lazy"/>
          <span class="text-sm text-gray-50 font-medium leading-none">{{ car.people }} People</span>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1">
          <span class="text-base lg:text-xl font-bold">${{ car.pricePerDay.toFixed(2) }}/</span>
          <span class="text-sm font-bold text-gray-50 leading-none pt-1">day</span>
        </div>
        <NuxtLink :to="`/cars/${car.id}`" class="bg-primary capitalize px-5 py-2.5 text-white rounded text-sm lg:text-base font-semibold">Rent now</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
  import { useFavoriteStore } from '~/stores/favorite'
  export default {
    name: 'carCard',
    props: {
      car: {
        type: Object,
        default: {}
      },
      customMobile: {
        type: Boolean,
        default: false
      }
    },
    setup (props) {
      const favorite = useFavoriteStore()
      function toggleCarToFavorite (car) {
        favorite.toggleFavoriteCar(car)
      }
      const isFavorite = computed(() => favorite.getFavoriteCars.map((c) => c.id).includes(props.car.id))
      return {
        toggleCarToFavorite,
        isFavorite
      }
    }
  }
</script>