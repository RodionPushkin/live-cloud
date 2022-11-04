import {createStore} from 'vuex'

export default createStore({
    state: {
        theme: false,
        user: {
            image: null,
            email: 'очень.крутая@почта.ру',
            name: 'Имя',
            surname: 'Фамилия'
        }
    },
    getters: {
        THEME: state => state.theme,
        USER: state => state.user,
    },
    mutations: {
        SET_THEME: (state, payload) => {
            payload = JSON.parse(payload)
            document.body.classList.toggle('dark',payload)
            if(payload == true){
                document.documentElement.style.setProperty('--font-color', '#E6E6E6');
                document.documentElement.style.setProperty('--bg-color', '#1D2023');
                document.documentElement.style.setProperty('--bg-color-light', '#101213');
                document.documentElement.style.setProperty('--black-color', '#FFFFFF');
            }else{
                document.documentElement.style.setProperty('--font-color', '#1D2023');
                document.documentElement.style.setProperty('--bg-color', '#E6E6E6');
                document.documentElement.style.setProperty('--bg-color-light', '#FFFFFF');
                document.documentElement.style.setProperty('--black-color', '#101213');
            }
            localStorage.setItem('theme',payload)
            state.theme = payload
        },
        SET_USER: (state, payload) => state.user = payload
    },
    actions: {
        SET_THEME: (context, payload) => context.commit('SET_THEME',payload),
        SET_USER: (context, payload) => context.commit('SET_USER',payload)
    },
    modules: {

    }
})
