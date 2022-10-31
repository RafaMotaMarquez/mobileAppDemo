import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            userList: [{
                    id: '1',
                    image: 'https://xsgames.co/randomusers/avatar.php?g=male',
                    name: "Mota",
                    firstname: "Raphaël",
                    direction: "PTC",
                },
                {
                    id: '2',
                    image: 'https://xsgames.co/randomusers/avatar.php?g=male',
                    name: "Fall",
                    firstname: "Birahim",
                    direction: "PTC",
                },
                {
                    id: '3',
                    image: 'https://xsgames.co/randomusers/avatar.php?g=male',
                    name: "Mpo",
                    firstname: "Joseph",
                    direction: "PTC",
                },
                {
                    id: '4',
                    image: 'https://xsgames.co/randomusers/avatar.php?g=female',
                    name: "McFly",
                    firstname: "Lorraine",
                    direction: "PTC",
                },
            ],
        };
    },
    getters: {
        userList(state) {
            return state.userList;
        },
        user(state) {
            return (userId) => {
                return state.userList.find((x) => x.id === userId);
            };
        },
    },
    actions: {
        addUser(context, payload) {
            context.commit('addUser', payload);
        }
    },
    mutations: {
        addUser(state, payload) {
            const newUser = {
                id: new Date().toISOString(),
                image: payload.imageUrl,
                name: payload.title,
                firstname: payload.description,
                direction: payload.direction,
            };

            state.userList.unshift(newUser);
        }
    },

});

export default store;