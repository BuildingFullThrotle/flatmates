import TabSwitcher from "@/components/tabswitcher";
import SignUpForm from "./signUpform";

const AuthenticationPage = () => {
  return(
    <div className="relative flex w-full h-screen bg-background">
        <div className="max-w-3xl absolute left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2">
            <TabSwitcher SignUpTab={<SignUpForm />} SignInTab={<h1>Sign Up</h1>} />
        </div>
    </div>
  )
};

export default AuthenticationPage;
