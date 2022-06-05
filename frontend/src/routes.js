import Home from './views/public/Home.svelte'
import BulletinView from './views/public/BulletinView.svelte'
import BulletinAdmin from './views/admin/BulletinAdmin.svelte'

const routes = [
    {name: '/', component: Home},
    {name: '/bulletin', component: LunchMenuView},
    {name: '/admin/manage-bulletin', LunchMenuAdmin}
]

export {routes}

