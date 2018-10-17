import PageOne from './views/Pages/Page1';
import PageTwo from './views/Pages/Page2';
import PageThree from './views/Pages/Page3';

const map = [
    {
        path: '/',
        name: 'page-one',
        component: PageOne
    },
    {
        path: '/page2',
        name: 'page-two',
        component: PageTwo
    },
    {
        path: '/page3',
        name: 'page-three',
        component: PageThree
    }
]

export default map