<template>
  <div class="filter-container">
    <el-input
      v-model="keyword"
      :placeholder="keywordText"
      style="width:250px"
      maxlength="50"
      show-word-limit
    >
      <i
        slot="prefix"
        class="el-input__icon el-icon-search"
      />
    </el-input>

    <slot />
    <el-button
      type="primary"
      icon="el-icon-search"
      style="margin-left:15px;"
      @click="search"
    >
      {{ $t('body_search.search_btn_text') }}
    </el-button>

    <el-button
      icon="el-icon-search"
      style="margin-left:15px;"
      @click="reset"
    >
      {{ $t('body_search.reset_btn_text') }}
    </el-button>

  </div>

</template>

<script>
import { getI18n } from '@/utils/i18n'

export default {
  name: 'DataSearch',
  props: {
    keywordText: {
      type: String,
      default: getI18n('body_search.keyword_text') || ''
    }
  },
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    search() {
      this.$emit('search', {
        keyword: this.keyword
      })
    },
    reset() {
      this.keyword = ''
      this.$emit('reset')
    }
  }

}
</script>

<style>
.filter-container {
  padding-bottom: 20px;
}
</style>
