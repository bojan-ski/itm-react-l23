'use client'
// lib
import googleLoginUser from "@/lib/googleLoginUser"
// utils
import refresh from "@/utils/refresh"
// components
import FormBtnContainer from "@/components/FormBtnContainer"
import FormInput from "@/components/FormInput"
import PageHeader from "@/components/PageHeader"



const GoogleLogin = () => {
  const handleLoginSubmit = async e => {
    e.preventDefault()

    const email = e.target.elements[0].value
    const password = e.target.elements[1].value    

    await googleLoginUser(email, password)
    // const response = await googleLoginUser(email, password)

    // if (response) {
    //   console.log('You have successfully logged in');

    //   e.target.elements[0].value = ''
    //   e.target.elements[1].value = ''

    //   refresh()
    // } else {
    //   throw new Error('You were not able to login to the application, some thing went wrong')
    // }
  }


  return (
    <div className='google-login-page'>
      <PageHeader text='Google Login' />

      <section className="google-login-feature">
        <form className="google-login-form" onSubmit={handleLoginSubmit}>
          <FormInput name='email' title='Email' type='email' />

          <FormInput name='password' title='Password' type='password' />

          <FormBtnContainer btnOne='Login' btnTwo='Cancel' />
        </form>
      </section>

    </div>
  )
}

export default GoogleLogin