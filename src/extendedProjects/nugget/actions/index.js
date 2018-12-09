export const SET_RECEPIES = "SET_RECEPIES";
export const SET_FAVOURITE_RECEPIES = "SET_FAVOURITE_RECEPIES";
export const REMOVE_FAVOURITE_RECEPIES = "REMOVE_FAVOURITE_RECEPIES";

export function setFavouriteRecipes(item){
    return {
        type : SET_FAVOURITE_RECEPIES, item
    }
}

export function removeFavouriteRecipes(item){
    return {
        type : REMOVE_FAVOURITE_RECEPIES, item
    }
}

export function setRecipes(items){
    return {
        type : SET_RECEPIES, items
    }
}