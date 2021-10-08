import React from 'react'
import React, { useState, useEffect } from 'react'
import { Button, Icon, Label, Menu, Table } from 'semantic-ui-react'
import { Link } from "react-router"
import ProductService from "../services/productService"
import { useDispatch } from "react-redux";
import { addToCart } from '../store/actions/cartActions'
import {toast} from "react-toastify"


export default function ProductList() {

    const dispatch = useDispatch()

    //destructuring yapıldı. Gelen ürünler products değişkenine atıldı.
    // değişiklik olduğu zaman setProducts değişkenine atılıp daha sonra products değişkenine atıldı.  
    const [products, setProducts] = useState([])

    useEffect(() => {

        //  productService nesnesi oluşturuldu.
        let productService = new ProductService()
        //sonuç başarılı ise product değişkenimize atıldı.
        productService.getProducts().then(result => setProducts(result.data.data))

    }, [])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        toast.success(`${product.productName} sepete eklendi.`)
    };

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
                        <Table.HeaderCell>Birim Fiyat</Table.HeaderCell>
                        <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <Table.HeaderCell>Kategori</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        //burada her bir ürün için dönüş yapılıyor.
                        products.map(product => (

                            <Table.Row key={product.id}>
                                <Table.Cell><Link to={`/products/${product.productName}`}> {product.productName}</Link> </Table.Cell>
                                <Table.Cell>{product.unitPrice}</Table.Cell>
                                <Table.Cell>{product.unitsInStock}</Table.Cell>
                                <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                                <Table.Cell>{product.category.categoryName}</Table.Cell>
                                <Table.Cell>
                                    <Button onClick={()=>handleAddToCart(product)}>
                                        Sepete Ekle
                                    </Button>
                                </Table.Cell>
                            </Table.Row>

                        ))
                    }


                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}