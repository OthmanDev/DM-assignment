<template>
  <div class="flex-1 relative">
    <div class="flex items-center border border-gray-0 rounded-full gap-x-5 px-5 h-11">
      <img v-if="!isLoading" src="~/assets/icons/search.svg" alt="DM" loading="lazy"/>
      <span v-else class="loading"></span>
      <input @input="search" @focus="openSearch" v-model="query" name="text" class="text-sm font-medium text-gray-100 flex-1 placeholder:text-gray-100 outline-none" placeholder="Search Something Here"/>
    </div>
    <div v-if="isSearching" class="absolute top-full w-full bg-white z-30 border border-gray-0 mt-1 rounded-xl p-4 max-h-card overflow-y-auto">
      <div v-if="searchResult.length > 0" class="grid grid-cols-3 gap-4">
        <card v-for="(car, key) in searchResult" :key="key" :car="car" class="border border-gray-0"/>
      </div>
      <div v-else class="text-center">
        <p class="font-medium">No search results found with <b>{{ query }}</b>.</p>
      </div>
    </div>
    <div v-if="isSearching" class="fixed inset-0 z-20" @click="closeSearch"></div>
  </div>
</template>

<script>
  import { debounce } from '~/helpers/debounce.js'
  import Card from '~/components/card.vue'
  export default {
    components: {
      Card
    },
    setup () {
      const query = ref('')
      const searchResult = ref([])
      const isLoading = ref(false)
      const isSearching = ref(false)
      const search = debounce(async () => {
        try {
          searchResult.value = []
          query.value ? isSearching.value = true : isSearching.value = false
          isLoading.value = true
          const response = await fetch(`https://dm-assignment-commonshare.koyeb.app/api/cars?q=${query.value}`)
          const searchedCars = await response.json()
          searchResult.value = searchedCars.data
        } catch (error) {
          console.error('Error with the search:', error)
        } finally {
          isLoading.value = false
        }
      }, 500)
      const openSearch = () => {
        if (query.value) isSearching.value = true
      }
      const closeSearch = () => {
        isSearching.value = false
      }
      return {
        searchResult,
        query,
        search,
        isLoading,
        isSearching,
        closeSearch,
        openSearch
      }
    }
  }
</script>