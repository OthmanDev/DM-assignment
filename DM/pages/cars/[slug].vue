<template>
  <div>
    <section v-if="car" class="pt-8 pb-12">
      <div class="container">
        <div class="flex items-start justify-between gap-8">
          <div class="w-492">
            <div class="grid gap-6">
              <div class="relative h-360 flex items-center justify-center">
                <div class="absolute top-0 left-0 w-full p-6 z-10 pb-0">
                  <h2 class="text-white text-3xl font-semibold mb-4">Sports car with the best design and acceleration</h2>
                  <p class="text-white text-base font-medium leading-normal">Safety and comfort while driving a <br /> futuristic and elegant sports car</p>
                </div>
                <div class="bg-primary absolute inset-0 rounded-lg">
                  <img src="~/assets/images/car-details-bg.png" :alt="car.name" loading="lazy" class="w-full h-full rounded-lg object-cover"/>
                </div>
                <div class="absolute bottom-2 w-full px-14">
                  <img :src="car.img" :alt="car.name" loading="lazy" />
                </div>
              </div>
              <div class="flex items-center gap-6">
                <div class="flex-1 h-124 rounded-lg flex items-center justify-center relative cursor-pointer p-1 border-2 border-primary">
                  <div class="bg-primary absolute top-1.5 left-1.5 bottom-1.5 right-1.5 rounded-lg">
                    <img src="~/assets/images/car-details-bg.png" :alt="car.name" loading="lazy" class="w-full h-full rounded-lg object-cover"/>
                  </div>
                  <div class="px-2">
                    <img :src="car.img" :alt="car.name" loading="lazy" class="relative"/>
                  </div>
                </div>
                <div v-for="(image, key) in car.images" :key="key" class="flex-1 h-124 rounded-lg cursor-pointer">
                  <img :src="image.url" :alt="car.name" loading="lazy" class="h-full object-cover rounded-lg"/>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-1">
            <div class="bg-white p-6 rounded-xl">
              <div class="mb-8">
                <div class="flex items-center mb-2.5 gap-6">
                  <h1 class="font-bold text-3xl">{{ car.name }}</h1>
                  <img v-if="isFavorite" src="~/assets/icons/red-heart.svg" alt="DM" loading="lazy"/>
                </div>
                <div class="flex items-center gap-2">
                  <div class="flex items-center gap-0.5">
                    <img v-for="(star, key) in 5" src="~/assets/icons/star.svg" alt="DM" loading="lazy" :key="key"/>
                  </div>
                  <span class="text-sm font-medium text-gray-100">440+ Reviewer</span>
                </div>
              </div>
              <div>
                <p class="text-xl font-normal text-gray-100 leading-normal">{{ car.description }}</p>
                <div class="flex items-center gap-20 mt-8 mb-4">
                  <div class="flex items-center gap-7">
                    <span class="text-xl font-normal text-gray-50">Type Car</span>
                    <span class="text-xl font-semibold text-gray-100">{{ car.type }}</span>
                  </div>
                  <div class="flex items-center gap-7">
                    <span class="text-xl font-normal text-gray-50">Capacity</span>
                    <span class="text-xl font-semibold text-gray-100">{{ car.people }} Person</span>
                  </div>
                  <div class="flex items-center gap-7">
                    <span class="text-xl font-normal text-gray-50">Gasoline</span>
                    <span class="text-xl font-semibold text-gray-100">{{ car.gasolineLiter }}L</span>
                  </div>
                </div>
                <div class="flex items-center gap-7">
                  <span class="text-xl font-normal text-gray-50">Steering </span>
                  <span class="text-xl font-semibold text-gray-100">{{ car.kindOfTransition }}</span>
                </div>
              </div>
              <div class="flex items-center justify-between mt-20">
                <div class="flex items-center gap-1">
                  <span class="text-3xl font-bold">${{ car.pricePerDay.toFixed(2) }}/</span>
                  <span class="text-base font-bold text-gray-50 leading-none pt-1">day</span>
                </div>
                <button class="bg-primary capitalize px-8 py-4 text-white rounded text-base font-semibold">Rent now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <recomendation :loadmore="false" />
  </div>
</template>

<script>
  import Recomendation from '~/components/recomendation.vue'
  import { useFavoriteStore } from '~/stores/favorite'
  export default {
    components: {
      Recomendation
    },
    setup() {
      const car = ref(null)
      const favorite = useFavoriteStore()
      const fetchCarBySlug = async () => {
        try {
          const route = useRoute()
          const response = await fetch(`https://dm-assignment-commonshare.koyeb.app/api/cars/${route.params.slug}`)
          const carBySlug = await response.json()
          car.value = carBySlug
        } catch (error) {
          console.error('Error fetching car:', error)
        }
      }
      onMounted(() => {
        fetchCarBySlug()
      })
      const isFavorite = computed(() => favorite.getFavoriteCars.map((c) => c.id).includes(car.value.id))
      return {
        isFavorite,
        car
      }
    }
  }
</script>