'use client'
// lib - actions
import { postNewProductAction } from "@/lib/actions"
// utils
import { resetForm } from "@/utils/resetForm"
// components 
import PageHeader from "@/components/PageHeader"
import FormBtnContainer from "@/components/FormBtnContainer"
import FormInput from "@/components/FormInput"


const RegisterProduct = () => {
    return (
        <div className="register-product-page">
            <PageHeader text='Register Product' />

            <section className="register-product-feature">
                <form action={(formData) => {
                    postNewProductAction(formData)
                    resetForm()
                }} className="add-product-form">
                    <FormInput name='productTitle' title='Title' type='text' />

                    <FormInput name='productDescription' title='Description' type='text' />

                    <FormInput name='productPrice' title='Price' type='number' />

                    <FormBtnContainer btnOne='Add Product' btnTwo='Cancel'/>
                </form>
            </section>
        </div>
    )
}

export default RegisterProduct