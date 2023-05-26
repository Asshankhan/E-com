import axios from "axios";
const url = process.env.VUE_APP_URL;

const HTTP = axios.create({
    baseURL: `${url}`,
    headers: {
        "Content-Type": "application/json"
    }
});

export const showproduct = ({commit},)=>{
    return HTTP.get('/products',)
    .then(response=>{
        commit('setProduct',response.data)
        return response;
    })
    .catch((error) => {
        if (error.response ) {
            alert(error.response)
        }
        return error.response;
    })
}
export const oneProduct = ({commit}, ProductId)=>{
    return HTTP.get('/products/'+ ProductId)
    .then(response=>{
        commit('setOneproduct',response.data)
        return response;
    })
    .catch((error) => {
        if (error.response ) {
            alert(error.response)
        }
        return error.response;
    })
}
export const electronicItem = ({commit}, productcateg)=>{
    return HTTP.get('/products/category/' + productcateg)
    .then(response=>{
        commit('setelectronic',response.data)
        return response;
    })
    .catch((error) => {
        if (error.response ) {
            alert(error.response)
        }
        return error.response;
    })
}

export const showcategories = ({commit},)=>{
    return HTTP.get('/products/categories',)
    .then(response=>{
        commit('setcategory',response.data)
        return response;
    })
    .catch((error) => {
        if (error.response ) {
            alert(error.response)
        }
        return error.response;
    })
}
export const login = ({commit},user)=>{
    return HTTP.post('/auth/login', user)
    .then(response=>{
        
        commit('loggedin',response.data)
        return response;
    })
    .catch((error) => {
        if (error.response ) {
            alert(error.response)
        }
        return error.response;
    })
}