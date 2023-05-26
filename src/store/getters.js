export const countofcartproduct = (state) => {
   return  state.mycartproductlist.length
}
// export const mycartlist = (state) => {
//     return state.mycartproductlist
// }
export const mycartlist = state => {
    let state1 = state.mycartlist;
    let ls = sessionStorage.getItem('mycartlist');
    let localStorageAccessToken = ls != null ? ls : state1;
    let response = localStorageAccessToken != null ? localStorageAccessToken : state.mycartlist;
    return response;
};