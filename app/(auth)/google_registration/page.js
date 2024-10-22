//components
import PageHeader from "@/components/PageHeader"
import SignUpForm from "@/components/googleRegistration/SignUpForm"

const GoogleRegistration = () => {
    return (
        <div className="google-registration-page">
            <PageHeader text='Google Create Account' />

            <section className="google-registration-feature">
                <SignUpForm />
            </section>
        </div>
    )
}

export default GoogleRegistration