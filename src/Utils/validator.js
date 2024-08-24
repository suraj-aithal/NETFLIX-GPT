export const validateFunction = (name, email, password, confirmPassword, mobile) => {
    // Simple email validation regex
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
    // Simple password validation regex
    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    
    // Simple name validation (non-empty and alphabetic)
    const isName = /^[a-zA-Z\s]+$/.test(name);
    
    // Simple mobile number validation regex
    const isMobile = /^[+]?[0-9]{10,15}$/.test(mobile);
    
    // Check if passwords match
    const passwordsMatch = password === confirmPassword;

    if (!isName) return 'Name is invalid';
    if (!isEmail) return 'Email is invalid';
    if (!isPassword) return 'Password is invalid';
    if (!passwordsMatch) return 'Passwords do not match';
    if (!isMobile) return 'Mobile number is invalid';

    return null;
}
export const validateemailandpass = (email,password) =>{
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
    // Simple password validation regex
    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

    if (!isEmail) return 'Email is invalid';
    if (!isPassword) return 'Password is invalid';

    return null;

}