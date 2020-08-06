<template>
  <div class="app-container">

    <el-row>
      <el-col :span="16">
        <data-search
          @reset="resetAll"
          @search="searchAll"
        />

      </el-col>
      <el-col :span="8">
        <div class="right">

          <!--  <router-link :to="addViewRouterLink"> -->
          <el-button
            icon="el-icon-edit"
            @click="menuAddView"
          >新增</el-button>
          <!--  </router-link> -->
          <el-button>add2</el-button>
          <el-button>add3</el-button>

        </div>

      </el-col>
    </el-row>

    <el-table
      v-loading="loading"
      :data="menuList"
      style="width:100%"
      row-key="no"
      border
      default-expand-all
      highlight-current-row
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column
        label="资源编号"
        prop="no"
        align="center"
        fixed
      />
      <el-table-column
        label="资源名称"
        prop="title"
        align="center"
        fixed
      />
      <el-table-column
        label="图标"
        prop="icon"
        align="center"
      />
      <el-table-column
        label="组件"
        prop="component"
        align="center"
      />
      <el-table-column
        label="路由"
        prop="path"
        :show-overflow-tooltip="true"
        align="center"
      />
      <el-table-column
        label="重定向路由"
        prop="redirect"
        :show-overflow-tooltip="true"
        align="center"
      />
      <el-table-column
        label="页面路径"
        prop="page"
        :show-overflow-tooltip="true"
        align="center"
      />
      <el-table-column
        label="权限项"
        prop="authorities"
        :show-overflow-tooltip="true"
        :formatter="authorityFormatter"
        align="center"
        min-width="100"
      />

      <el-table-column
        label="是否启用"
        align="center"
        fixed="right"
      >
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.enabled"
            :disabled="disabledFilter(scope.row)"
          />
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        min-width="150"
        fixed="right"
      >
        <template slot-scope="scope">

          <el-button
            size="mini"
            @click="handleFind(scope.$index, scope.row)"
          >查看
          </el-button>
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑
          </el-button>

          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import DataSearch from '@/components/DataSearch'
import { getMenuList, getAuthorityList } from '@/api/menu'
import { notEmpty } from '@/utils/validate'

import { ViewTagRouteCreator, addTemporarytTagView } from '@/utils/router'

// https://element.eleme.cn/#/zh-CN/component/table
export default {
  components: {
    DataSearch
  },
  data() {
    return {
      menuList: [],
      loading: true,
      authorities: [],
      search: {
        name: ''
      }
      /*  ,
      addViewRouterLink: '/system/menu/add' */
    }
  },
  created() {
    this.findUserAuthorities()
    this.fetchData()
  },
  methods: {
    /**
     * 加载数据
     */
    fetchData() {
      this.loading = true
      getMenuList().then(response => {
        this.menuList = response.data
        this.loading = false
      })
    },
    /**
     * 当前授权用户对该资源的权限控制情况
     */
    findUserAuthorities() {
      this.loading = true
      const no = this.$route.meta.no
      // console.log('no:', no)
      if (!notEmpty(no)) {
        return
      }
      getAuthorityList({ no: no }).then(response => {
        this.authorities = response.data
        this.loading = false
      })
    },
    /**
     * 菜单的权限项数据格式化
     */
    authorityFormatter(row, column, cellValue, index) {
      // console.log(row.hasAuthority, cellValue)
      if (!row.hasAuthority) {
        return ''
      }
      let val = ''
      cellValue.forEach(element => {
        val += notEmpty(element.name) ? element.name + ' | ' : ''
      })
      // console.log(val)
      return val
    },
    /**
     * switch 只有在拥有编辑权限时才能开启
     */
    disabledFilter(row) {
      if (this.authorities.length === 0) {
        return false
      }
      this.authorities.forEach(element => {
        if (element.uniqueKey === 'edit') {
          return true
        }
      })
      return false
    },
    // 查询
    searchAll(data) {
      console.log('search data:', data, this.search.name)
    },
    // 重置
    resetAll() {
      this.search.name = ''
    },
    menuAddView() {
      const currentPath = this.$route.path

      const viewTagRouteCreator = new ViewTagRouteCreator('/menu/add/:id', { id: 1 }, 'MenuAdd', '/system/menu/edit/:id', '菜单添加', '', currentPath)

      addTemporarytTagView(viewTagRouteCreator)
    }

  }

}
</script>

<style scoped>
.right {
  position: absolute;
  right: 0px;
}
</style>
