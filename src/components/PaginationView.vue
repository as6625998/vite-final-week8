<template>
  <nav aria-label="Page navigation example ">
    <ul class="pagination pagination-md justify-content-center ">
      <li class="page-item"
        :class="{ disabled: !pages.has_pre }">
        <a class="page-link" 
        href="#" 
        aria-label="Previous"
        @click.prevent="updatePage(pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
          <!-- <i class="fa-solid fa-chevron-left"></i> -->
        </a>
      </li>

      <li class="page-item"
        v-for="page in pages.total_pages"
        :key="page"
        :class="{ active: pages.current_page === page }">
        <span class="page-link"
              v-if="pages.current_page === page">{{ page }}</span>
        <a class="page-link"
            v-else
            href="#"
            @click.prevent="updatePage(page)">{{ page }}</a>
      </li>

      <li class="page-item"
        :class="{ disabled: !pages.has_next }">
        <a class="page-link" href="#" aria-label="Next"
          @click.prevent="updatePage(pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
          <!-- <i class="fa-solid fa-chevron-right"></i> -->
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    updatePage (targetPage) {
      this.$emit('emit-page', targetPage)
    }
  }
}
</script>
