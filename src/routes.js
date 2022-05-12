import workOrder from './components/workOrder.vue'
import viewProducts from './components/viewProducts.vue'
import viewTransactions from './components/viewTransactions.vue'
export default [

    {path: '/', component: workOrder },
    {path: '/viewProducts', component: viewProducts },
    {path: '/viewTransactions', component: viewTransactions },

    

]