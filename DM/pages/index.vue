<template>
  <div>
    <section class="py-6 lg:py-8">
      <div class="container">
        <div class="flex items-center justify-between gap-6 flex-col lg:gap-8 lg:flex-row">
          <div class="flex-1 bg-secondary rounded-xl p-4 lg:p-6 pb-24 lg:pb-6 lg:h-360 overflow-hidden relative w-full">
            <div class="absolute top-0 left-0 bottom-0 flex items-end justify-center lg:block lg:bottom-auto">
              <img src="~/assets/images/bg-one.png" alt="The Best Platform for Car Rental" loading="lazy" />
            </div>
            <div class="lg:w-72 relative z-10">
              <h2 class="text-white text-lg lg:text-3xl font-semibold leading-normal">The Best Platform for Car Rental</h2>
              <p class="text-white mt-2 lg:mt-4 mb-3 lg:mb-5 font-medium leading-6 text-sm lg:text-base">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
              <button class="bg-primary text-white text-sm lg:text-base font-semibold px-5 py-2.5 rounded capitalize">Rental Car</button>
            </div>
          </div>
          <div class="flex-1 bg-primary rounded-xl p-4 lg:p-6 pb-24 lg:pb-6 lg:h-360 overflow-hidden relative w-full">
            <div class="absolute top-0 left-0 bottom-0 flex items-end justify-center lg:block lg:bottom-auto">
              <img src="~/assets/images/bg-two.png" alt="Easy way to rent a car at a low price" loading="lazy" />
            </div>
            <div class="lg:w-72 relative z-10">
              <h2 class="text-white text-lg lg:text-3xl font-semibold leading-normal">Easy way to rent a car at a low price</h2>
              <p class="text-white mt-2 lg:mt-4 mb-3 lg:mb-5 font-medium leading-6 text-sm lg:text-base">Providing cheap car rental services and safe and comfortable facilities.</p>
              <button class="bg-secondary text-white text-sm lg:text-base font-semibold px-5 py-2.5 rounded capitalize">Rental Car</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pb-6 lg:pb-8">
      <div class="container px-6 xl:px-2">
        <div class="mb-6 lg:mb-8 lg:px-5 flex items-center justify-between">
          <h3 class="text-gray-50 font-semibold text-sm lg:text-base capitalize">Popular Cars</h3>
          <a href="#" class="text-sm lg:text-base font-semibold text-primary capitalize">View all</a>
        </div>
        <div class="grid grid-cols-1 gap-5 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 xl:gap-8">
          <card v-for="(car, key) in cars" :key="key" :car="car" />
        </div>
      </div>
    </section>
    <recomendation />
  </div>
</template>

<script>
  import Card from '~/components/card.vue'
  import Recomendation from '~/components/recomendation.vue'
  export default {
    components: {
      Card,
      Recomendation
    },
    setup () {
      const cars = ref([])
      const fetchPopularCars = async () => {
        try {
          const response = await fetch('https://dm-assignment-commonshare.koyeb.app/api/cars/popular')
          const popularCars = await response.json()
          cars.value = popularCars
        } catch (error) {
          console.error('Error fetching popular cars:', error)
        }
      }
      onMounted(() => {
        fetchPopularCars()
      })
      return {
        cars
      }
    }
  }
</script>