<template>
  <section class="pb-8 lg:pt-4 lg:pb-16">
    <div class="container px-6 lg:px-2">
      <div class="mb-6 lg:mb-8 lg:pl-5">
        <h3 class="text-gray-50 font-semibold text-sm lg:text-base capitalize">Recomendation Cars</h3>
      </div>
      <div class="grid grid-cols-1 gap-5 lg:grid-cols-4 lg:gap-8">
        <card v-for="(car, key) in cars.data" :key="key" :car="car" />
      </div>
      <div v-if="loadmore && page < cars.meta.last_page" class="flex items-center justify-center mt-5 lg:mt-14">
        <button @click.prevent="loadMore" class="bg-primary capitalize px-5 py-2.5 text-white rounded text-sm lg:text-base font-semibold inline-flex justify-center items-center">
          <span v-if="isLoading" class="loading inverse absolute"></span>
          <span :class="{ 'opacity-0': isLoading }">Show more cars</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
  import Card from '~/components/card.vue'
  export default {
    name: 'RecomendationCars',
    components: {
      Card
    },
    props: {
      loadmore: {
        type: Boolean,
        default: true
      }
    },
    setup () {
      const cars = ref({
        data: [],
        meta: {}
      })
      const page = ref(1)
      const isLoading = ref(false)
      const fetchCars = async (page) => {
        try {
          isLoading.value = true
          const response = await fetch(`https://dm-assignment-commonshare.koyeb.app/api/cars?page=${page}`)
          const newCars = await response.json()
          cars.value.data = cars.value.data.concat(newCars.data)
          cars.value.meta = newCars.meta
        } catch (error) {
          console.error('Error fetching cars:', error)
        } finally {
          isLoading.value = false
        }
      }
      const loadMore = () => {
        page.value++
        fetchCars(page.value)
      }
      onMounted(() => {
        fetchCars(page.value)
      })
      return {
        cars,
        loadMore,
        page,
        isLoading
      }
    }
  }
</script>
