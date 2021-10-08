import React from 'react'
import { Formik, Form, Field ,ErrorMessage} from 'formik'
import * as Yup from "yup"
import { FormField ,Button} from "semantic-ui-react"
import KodlamaioTextInput from '../utilities/customFormControls/KodlamaioTextInput'


export default function ProductAdd() {

    const initialValues = { productName: "", unitPrice: 10 }
    const schema = Yup.object({
        productName: Yup.string().required("Ürün Adı Zorunlu"),
        unitPrice: Yup.number().required("Ürün Fiyatı Zorunludur")
    })

    return (
        
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit ={(values)=>{
                    console.log(values)
                }}
            >
                <Form className="ui form">
                    <FormField>
                        <KodlamaioTextInput/>
                        <Field name="productName" placeholder='Ürün Adı' ></Field>
                        <ErrorMessage name = "productName" render={error=>
                            <Label pointing basci color ="red" content={error}></Label>
                        }></ErrorMessage>
                    </FormField>
                    <FormField>
                        <Field name="unitPrice" placeholder='Ürün Fiyatı' ></Field>
                        <ErrorMessage name = "unitPrice" render={error=>
                            <Label pointing basci color ="red" content={error}></Label>
                        }></ErrorMessage>
                    </FormField>
                    <Button color ="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
      
    )
}