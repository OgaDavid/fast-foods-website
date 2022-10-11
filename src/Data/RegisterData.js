const registerData = [
    {
        id: 1,
        label: "First name",
        placeholder: "Your First name",
        htmlFor: "fname",
        type: "text",
        errorMsg: "Requires 3-16 Characters with no special characters.",
        pattern: "[A-Za-z ',.-]{2,16}",
        required:true
    },
    {
        id: 2,
        label: "Email",
        placeholder: "Your Email",
        htmlFor: "email",
        type: "email",
        errorMsg: "Invalid Email Address!",
        required:true
    },
    {
        id: 3,
        label: "Password",
        placeholder: "Password",
        htmlFor: "password",
        type: "text",
        errorMsg: "Password should be 8 characters or more and include a number and a special Character.",
        pattern: "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$",
        required:true
    },
    {
        id: 4,
        label: "Confirm Password",
        placeholder: "Confirm Password",
        htmlFor: "confirm-password",
        type: "password",
        errorMsg: "Passwords do not match.",
        required:true
    }
]

export default registerData;