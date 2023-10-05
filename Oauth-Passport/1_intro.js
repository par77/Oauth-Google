// OAuth, which stands for "Open Authorization," is a way for you to grant websites or apps limited access to your 
// online accounts (like social media or email) without giving them your actual username and password.

// Here's a simple way to understand how OAuth works:
// Imagine you have a fancy hotel room with a key card. You don't want to give your key card to someone else because 
// they could access your room anytime. Instead, you can give them a special card that only works for certain things, 
// like getting into the gym or using the pool. This special card has limited access.

// Similarly, when you use OAuth:
//     You (the user) want to use a service or app that needs access to your account on another 
//     website (like a fitness app that wants to access your Google account for your workout data).

//     Instead of giving the app your actual login details (your username and password), you use OAuth.

//     The app sends you to the website (like Google) where you have an account. It's like going to the hotel's front desk.

//     You log in to your account on that website (Google) and the website asks, "Do you want to give this app 
//     permission to access your account?" It lists what the app can and can't do (like only access your workout data, 
//     not your emails).

//     If you say yes, the website gives the app a special "key card" (a token). This key card only works for what 
//     you've allowed (accessing workout data).

//     The app can now use this key card (token) to access your workout data on the website, but it doesn't have your 
//     actual login details.

// So, OAuth is like a secure way for you to grant apps or services limited access to your accounts, 
// without revealing your sensitive login information. It's like giving out special keys instead of your master key.


// OAuth Roles: Understanding the different roles involved in OAuth:

    // Resource Owner: The user who owns the data and authorizes access.
    // Client: The application or service requesting access to the user's data.
    // Authorization Server: Manages user authentication and authorization.
    // Resource Server: Stores and manages the user's data.