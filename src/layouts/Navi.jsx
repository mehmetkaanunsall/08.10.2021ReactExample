import React,{useState} from "react"
import CartSummary from "./CartSumary"
import React, { Component } from "react"
import { Menu } from "semantic-ui-react"
import SignedOut from "./SignedOut"
import SignedIn from "./SignedIn"
import {useHistory} from "react-router"
import { useSelector } from "react-redux"





export default function Navi() {

    const { cartItems } = useSelector(state => state.cart)


    //navide destructuring yapıldı. Default false.
    //setIsAuthenticated alanı değer değiştiği zaman isAuthenticated değişkenine set etmeyi sağlar.
    const[isAuthenticated, setIsAuthenticated] = useState(false)

    //Herhangi bir sayfada çıkış yapıldığı zaman Anasayfaya dönmesi için yapıldı.
    const history = useHistory()

    //Eğer Kullanıcı varken çıkış yap denilirse.Çalış
    function handleSignOut() {
        //isAuthenticated Alanını false yap
        setIsAuthenticated(false)
        //Çıkış yapıldığı için anasayfaya dön.
        history.push("/")
    }

    //Eğer Giriş Yapılmış ise
    function handleSignIn() {
        //isAuthenticated Alanını true yap
        setIsAuthenticated(true)
    }
    return (
        <div>
            <Menu inverted fixed ="top" >
                <Container>
                    <Menu.Item name='home'/>
                    <Menu.Item name='messages'/>

                    <Menu.Menu position='right'>
                       {cartItems.length>0 && <CartSummary/>}

                    {
                        //alan true ise signeIn sayfası false ise SignedOut sayfasını göster.
                        isAuthenticated? <SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>
                    }

                        
                       
              
                    </Menu.Menu>
                </Container>

            </Menu> 
        </div>
    )
}