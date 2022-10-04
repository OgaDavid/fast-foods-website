const registerData = [
    {
        id: 1,
        label: "First name",
        placeholder: "Your First name",
        htmlFor: "fname",
        type: "text",
        errorMsg: "First name should be 3-16 characters with no special characters",
        pattern: "[a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}$",
        required:true
    },
    {
        id: 2,
        label: "Last name",
        placeholder: "Your Last name",
        htmlFor: "lname",
        type: "text",
        errorMsg: "Last name should be 3-16 characters with no special characters",

        required:true
    },
    {
        id: 3,
        label: "Email",
        placeholder: "Your Email",
        htmlFor: "email",
        type: "email",
        errorMsg: "Enter a valid Email Address",

        required:true
    },
    {
        id: 4,
        label: "Password",
        placeholder: "Password",
        htmlFor: "password",
        type: "password",
        errorMsg: "Password should be 6-20 characters and include a special Character",

        required:true
    },
    {
        id: 5,
        label: "Confirm Password",
        placeholder: "Confirm Password",
        htmlFor: "confirm-password",
        type: "password",
        errorMsg: "Passwords do not match",

        required:true
    }
]

export default registerData;