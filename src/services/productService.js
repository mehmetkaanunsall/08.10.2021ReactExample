//axios ile http bağlantısı kuruluyor.Javaya bağlanma buradan .(Api controllera bağlanıyoruz)
import axios from "axios"
export default class ProductService{

//Ürünleri listeleyen apimizi çağırdık   
getProducts(){
    return axios.get("http://localhost:8080/api/products/getall")
}

//Ürünleri isme göre getiren apimizi çağırdık.Parametre olarak ürün adı alıyor.
getByProductName(productName){
    return axios.get("http://localhost:8080/api/products/getByProductName?productName="+productName)
}
}