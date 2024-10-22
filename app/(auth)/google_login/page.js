// components
import PageHeader from "@/components/PageHeader"
import SignInForm from "@/components/googleLogin/SignInForm"

const GoogleLogin = () => {
  return (
    <div className='google-login-page'>
      <PageHeader text='Google Login' />

      <section className="google-login-feature">
        <SignInForm />
      </section>
    </div>
  )
}

export default GoogleLogin