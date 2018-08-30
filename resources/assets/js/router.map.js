import HomeLayout from './views/Layouts/Home';
import AdminLayout from './views/Layouts/Admin';
import ClientLayout from './views/Layouts/Client';

const map = [
    {
        path: '/',
        name: 'home',
        component: HomeLayout
    },
    {
        path: '/admin',
        name: 'admin',
        component: AdminLayout
    },
    {
        path: '/client',
        name: 'client',
        component: ClientLayout
    }
]

export default map