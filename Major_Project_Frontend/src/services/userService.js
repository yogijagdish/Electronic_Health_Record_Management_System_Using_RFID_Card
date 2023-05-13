const storeUser = (value) => {
    if (value) {
        let user = value
        localStorage.setItem('user',user)
    }
}

const getUser = () => {
    let user = localStorage.getItem('user')
    return user
}


const deleteUser = () => {
    localStorage.removeItem('user')
}

export {storeUser,getUser,deleteUser}