export default function linksList(isAuth) {
    if (isAuth) {
        return [
            {
                name: 'Profile',
                path: '/profile'
            },
        ]
    }

    return [

        {
            name: 'Login',
            path: '/login'
        },
        {
            name: 'Register',
            path: '/register'
        }
    ]
}