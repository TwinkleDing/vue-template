# vue-test

在父组件内插入对应插槽
父组件:加上具名插槽可替换自组件对应显示的内容，不加显示默认的
````
  <template v-slot:status='scope'>{{scope.scope.value}}</template>
```` 
在子组件内预设插槽
子组件包含对应：scope是对应父组件间显示的值，name的值对应的v-slot:的具名插槽
````
  <slot :name='item.props' :scope='item'></slot>
````

npm cache clean --force 清空npm缓存  
gzip 压缩需要后台支持