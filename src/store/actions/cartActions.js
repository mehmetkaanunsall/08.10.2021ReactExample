export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"


export function addToCart(product)
{
    return{
        //Aksiyon adı istenilen değer verilebilir
        type :ADD_TO_CART,
        
        //Gönderdiğimiz aksiyonla birlikte değeri etkileyecek veriyi 
        //payload ile gönderiyoruz
        payload:product
    }
}


export function removeFromCart(product)
{
    return{
        //Aksiyon adı istenilen değer verilebilir
        type :REMOVE_FROM_CART,
        
        //Gönderdiğimiz aksiyonla birlikte değeri etkileyecek veriyi 
        //payload ile gönderiyoruz
        payload:product
    }
}