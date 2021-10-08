import React from 'react'
import { Dropdown, Label } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux"

export default function CartSummary() {


    const { cartItems } = useSelector(state => state.cart)

    return (
        <div>
            <Dropdown item text='Sepetiniz'>
                <Dropdown.Menu>
                    {
                        cartItems.map((cartItem) => (
                            <Dropdown.Item key={cartItem.product.id}>
                                {cartItem.product.productName}
                                <Label>
                                    {cartItem.quantity}
                                </Label>
                            </Dropdown.Item>


                        ))

                    }


                    <Dropdown.Item>LENOVO</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

// as={NavLink} to="/cart" Sepete git dediğimizde Dashboard.jsx sayfasında "/cart" olarak tanımlı 
// CartDetail.jsx sayfasına yönlendirdik.