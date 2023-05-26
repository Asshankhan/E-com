export default {
    setProduct(state,productlist){
        state.productlist = productlist;
    },
    setOneproduct(state,productlist){
        state.productlist = productlist;
    },
    setcategory(state,Category){
        state.Category = Category;
    },
    setelectronic(state,cate){
        state.cate = cate
    },
    ADD_TO_CART(state,product) {
        const productInCart = {...product,quantity:1}

        state.mycartproductlist.push(productInCart);
        console.log("state.mycartproductlist",state.mycartproductlist)
    },
    loggedin(state,login){
        state.login = login;
    },
    setAccessToken(state, payload) {
		sessionStorage.setItem('mycartlist', payload);
		state.mycartlist = payload;
	},
}