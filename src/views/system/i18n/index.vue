
<template>
  <div class="app-container">
    <el-table
      v-loading="loading"
      :data="menuList"
      style="width:100%"
      height="250"
      row-key="no"
      border
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column
        v-if="hasAuthority"
        type="expand"
      >
        <template slot-scope="props">
          <el-table
            :data="props.row.authorities"
            border
            row-key="no"
            class="menu-table-expand"
          >
            <el-table-column
              label="权限编号"
              prop="no"
            />
            <el-table-column
              label="名称"
              prop="name"
            />
            <el-table-column
              label="图标"
              prop="icon"
            />

          </el-table>

        </template>
      </el-table-column>

      <el-table-column
        label="资源编号"
        prop="no"
      />
      <el-table-column
        label="资源名称"
        prop="title"
      />
      <el-table-column
        label="图标"
        prop="icon"
      />
      <el-table-column
        label="组件"
        prop="component"
      />
      <el-table-column
        label="路由"
        prop="path"
      />
      <el-table-column
        label="重定向路由"
        prop="redirect"
      />
      <el-table-column
        label="页面路径"
        prop="page"
      />
      <el-table-column
        label="是否启用"
        prop="enabled"
      />

    </el-table>
  </div>
</template>

<script>
import { getMenuList } from '@/api/menu'
// https://element.eleme.cn/#/zh-CN/component/table
export default {
  data() {
    return {
      menuList: [],
      loading: true

    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true
      getMenuList().then(response => {
        this.menuList = response.data
        this.loading = false
      })
    }
  }

}
</script>

<style scoped>
.menu-table-expand {
  font-size: 0;
}
.menu-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.menu-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
