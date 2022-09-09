Vue.component('app-main', {//多行的内容使用反引号
    // 普通方法：

    // template:`        <ul>
    // <li>商铺管理</li>
    // <li>商品管理</li>
    // <li>购物清单</li>
    // <li>用户管理</li>
    // </ul>`

    // 使用v-for遍历方法：
    template: `        <ul>
        <li v-for="item in arr">{{ item }}</li>
        </ul>`,

    data() {
        return {
            arr: ['商铺管理', '商品管理', '购物清单', '用户管理']
        }
    }
})