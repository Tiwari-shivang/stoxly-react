export type Route = {
    name: string,
    path: string,
    element: React.FC
}

export const routes: Route[] = [
    {
        name: 'dashboard',
        path: '/',
        element: () => <div>Dashboard Page</div>
    },
    {
        name: 'Profile',
        path: '/profile',
        element: () => <div>Profile Page</div>
    }
]