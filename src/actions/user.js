import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users'

async function actionUsers(context) {
    const res = await axios.get(url)
    context.commit('mutateUsers', res.data)
}

export {
    actionUsers
}