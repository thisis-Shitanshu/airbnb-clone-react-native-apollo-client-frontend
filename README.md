# Project: Airbnb Clone using React Native
- So we are building Airbnb Clone in React Native.
- I am studying this tutorial by **cubui**
- The complete playlist is available below:
    - https://www.youtube.com/watch?v=78Mr7gN6mE4&list=PLOg2mrFoc1TvpWTw7II_z7t-uXb1HD3w4
- My system:
    - Windows 10
    - react-native-cli: 2.0.1
    - react-native: 0.57.5

- Creating a new application from CLI:
    - **react-native init AirbnbClone**
    - For more basics:
        - https://facebook.github.io/react-native/docs/getting-started.html

## Git log out user from command line - Windows 10
I came across this same problem, and the above answer didn't work for me because github was being fed my credentials through windows credential manager instead of git bash.

You may have to check windows credential manager and delete the github entry under **control panel > user accounts > credential manager > Windows credentials > Generic credentials**

# 1: Airbnb Clone using React Native - Home Screen
- **NOTES:**
    - Have a directory structure first.
    - It's always recommended to have an UI design build before coding.
    - Strat with a LoggedOut screen first.
    - CSS z-index Property:
        - The z-index property specifies the stack order of an element.
        - An element with greater stack order is always in front of an element with a lower stack order.
        - Note: 
            - z-index only works on positioned elements (position:absolute, position:relative, or position:fixed).

1. Let's first start by creating dir structure:
    - root:
        - src
            - containers
            - components
                - buttons
                    - RoundedButtons.js
            - styles
                - colors
                    - index.js
            - screens
                - LoggedOut.js  
            - img
                - airbnb-logo.png  
1. Install **react-native-vector-icons**
    - Run **react-native link** in Project CLI after installation.
    - Restart the current running server.
    - To use Icons from FontAwesome:
        - Import Icons from **react-native-vector-icons/dist/FontAwesome**

## Progress so far:
- Home Screen:
<img src="https://github.com/namaste-code/React-Native-AirbnbClone/blob/master/screenshots/1.HomeScreen.png" width="250">

- Facebook Button Press:
<img src="https://github.com/namaste-code/React-Native-AirbnbClone/blob/master/screenshots/1.1.FacebookButtonPress.png" width="250">


- Create Account Button Press:
<img src="https://github.com/namaste-code/React-Native-AirbnbClone/blob/master/screenshots/1.2.CreateAccountButtonPress.png" width="250">

# 2: Airbnb Clone using React Native - Login Screen
- Adding to directory structure:
    - root:
        - src
            - containers
            - components
                - buttons
                    - RoundedButtons.js
                    - **NextArrowButton.js**
                - form
                    - **InputField.js**
            - styles
                - colors
                    - index.js
            - screens
                - LoggedOut.js
                - LogIn.js  
            - img
                - airbnb-logo.png

1. Add a new screen LogIn.js
1. Create set of form components.

## Progress so far:
- Log In Screen:
<img src="https://github.com/namaste-code/React-Native-AirbnbClone/blob/master/screenshots/2.LogInScreen.png" width="250">

# 3: Airbnb Clone using React Native - Fix button hidden by keyboard and add password toggler
- Note:
    - Working of Show Password Button;
        1. Logic of show password is in it's InputField Component.
        1. If the input type is "password" we are showing the SHOW/HIDE button.
        1. The value of secureTextEntry for TextInput depends on "secureInput".
        1. The value of secureInput is set in the Component state.
            - Which have a default boolean value depending on inputType.
        1. Everytime toggleShowPassword is called, the value of secureInput is changed.

## Progress so far:
- Floating Next Button:
<img src="https://github.com/namaste-code/React-Native-AirbnbClone/blob/master/screenshots/3.1.FloatingButton.png" width="250">

- Show Password:
<img src="https://github.com/namaste-code/React-Native-AirbnbClone/blob/master/screenshots/3.2.ShowPassword.png" width="250">

- Handle Next Button:
<img src="https://github.com/namaste-code/React-Native-AirbnbClone/blob/master/screenshots/3.3.HandleNextButton.png" width="250">

# 4 Airbnb Clone using React Native - Login Error Message
- Adding to directory structure:
    - root:
        - src
            - containers
            - components
                - buttons
                    - RoundedButtons.js
                    - NextArrowButton.js
                - form
                    - InputField.js
                - **Notification.js**
            - styles
                - colors
                    - index.js
            - screens
                - LoggedOut.js
                - LogIn.js  
            - img
                - airbnb-logo.png

1. Let's build an Error message screen.

# 5 Airbnb Clone using React Native - Basic Login Validation (Fixing all errors)

## Progress so far:
- No there was no ScrollView error, it's just that iOS and Android and diffrent UX.

- Error Screen:
<img src="https://github.com/namaste-code/React-Native-AirbnbClone/blob/master/screenshots/5.1.ErrorScreen.png" width="250">

- Error-Free Screen:
<img src="https://github.com/namaste-code/React-Native-AirbnbClone/blob/master/screenshots/5.2.ErrorFreeScreen.png" width="250">

- Entering Value:
<img src="https://github.com/namaste-code/React-Native-AirbnbClone/blob/master/screenshots/5.3.EnteringValue.png" width="250">

- Entering Wrong Value:
<img src="https://github.com/namaste-code/React-Native-AirbnbClone/blob/master/screenshots/5.4.EnteringWrongValue.png" width="250">

# 6 Airbnb Clone using React Native - Loading Modal
- Adding to directory structure:
    - root:
        - src
            - containers
            - components
                - buttons
                    - RoundedButtons.js
                    - NextArrowButton.js
                - form
                    - InputField.js
                - Notification.js
                - **Loader.js**
            - styles
                - colors
                    - index.js
            - screens
                - LoggedOut.js
                - LogIn.js  
            - img
                - airbnb-logo.png

## GIF Error in Android
- By default the Gif images are not supported in android react native app. 
    - You need to set use **Fresco** to display the gif images.
        - Edit your android/app/build.gradle file and add the following code:
        ```java
        compile 'com.facebook.fresco:animated-gif:1.10.0'
        compile "com.facebook.fresco:animated-base-support:1.3.0"

        // (Only if supporting WebP.)
        compile 'com.facebook.fresco:animated-webp:1.10.0'
        compile 'com.facebook.fresco:webpsupport:1.10.0'
        ```
    - Then you need to bundle the app again;
        - You can display the gif images in two ways like this.
        ```xml
        <Image source={require('./../images/load.gif')}  style={{width: 100, height: 100 }}/>
        <Image source={{uri: 'http://www.clicktorelease.com/code/gif/1.gif'}}  style={{width: 100, height:100 }}/>
        ```

## Progress so far
- Loader on handleNextButton:
<img src="https://github.com/namaste-code/React-Native-AirbnbClone/blob/master/screenshots/6.LoaderOnHanleNext.png" width="250">

# 7: Airbnb Clone using React Native - Animated check marks
- We'll add an animated checkmark when the input field has a valid value.
- Let's change the keyboard if the input field is an email.


- Animated Checkmark:
<img src="https://github.com/namaste-code/React-Native-AirbnbClone/blob/master/screenshots/7.AnimatedCheckmark.png" width="250">

# 8: Airbnb Clone using React Native - Forgot Password
- Adding to directory structure:
    - root:
        - src
            - containers
            - components
                - buttons
                    - RoundedButtons.js
                    - NextArrowButton.js
                - form
                    - InputField.js
                - Notification.js
                - Loader.js
            - styles
                - colors
                    - index.js
            - screens
                - LoggedOut.js
                - LogIn.js  
                - **ForgotPassword.js**
            - img
                - airbnb-logo.png

## Progress so far
- Forgot Password Screen:
<img src="https://github.com/namaste-code/React-Native-AirbnbClone/blob/master/screenshots/8.ForgotPasswordScreen.png" width="250">

- Entering Value:
<img src="https://github.com/namaste-code/React-Native-AirbnbClone/blob/master/screenshots/8.1.EnteringValue.png" width="250">

- Entering Wrong Value:
<img src="https://github.com/namaste-code/React-Native-AirbnbClone/blob/master/screenshots/8.2.EnteringWrongValue.png" width="250">

# 9: Airbnb Clone using React Native - Add Redux
1. npm install --save:
    - **react-redux**
    - **redux**
    - **redux-logger**
    - **redux-thunk**

## Error handling: npm ERR! Error: EPERM: operation not permitted, rename
- I guess, I issue was the my node_module was turned to read only.
- So I,
    1. Closed my VS code.
    1. deleted node_module
        - If script is not deleting, restart the system.
    1. Run "npm install"
    1. Retry installing the packages, (It worked.)
1. Restart your server.
1. Add to directory structure.
    - root:
        - src
            - containers
            - components
                - buttons
                    - RoundedButtons.js
                    - NextArrowButton.js
                - form
                    - InputField.js
                - Notification.js
                - Loader.js
            - styles
                - colors
                    - index.js
            - screens
                - LoggedOut.js
                - LogIn.js  
                - ForgotPassword.js
            - img
                - airbnb-logo.png
            - **redux**
                - **store.js**
                    - *Here Reducers, Logger, ThunkMiddleware are imported, Logger is setup, Compose and ApplyMiddleware are used to setup all the middleware and then Store is created.*
                - **reducer**
                    // Very confusing, I might improvise latter.
                    - **loggedOut.js**
                        - *Here createReducer() is imported from helper, also all the action Types are imported. Create reducer is passed empty state & type of action.*
                    - **index.js**
                        - *Here Combine Reducer is used to Combine all reducers exported from respective files.*
                - **action**
                    - **types.js**
                        - *Simple action types.*
                    - **loggedOut.js**
                        - *Login action*
                    - **index.js**
                        - *Combine all actions.*
                - **helpers**
                    - **createReducer.js**
                        - *Returns a function which setups reducer.*
            - **data**
                - **user.json**
        - App.js
            - *Store is passed down to the application here.*

## Error handling: Unable to connect with remote debugger
In my case the issue was that the emulator was making a request to:
    ```
    http://10.0.2.2:8081/debugger-ui
    ```
instead of:
    ```
    http://localhost:8081/debugger-ui and the request was failing.
    ```
To solve the issue: Before enabling remote debugging on your emulator, open http://localhost:8081/debugger-ui in chrome. Then enable remote debugging and go back to the chrome page where you should see your console logs.

## Progress so far:
- Nothing to show but yeah the syntax was kinda confusing, I just might simplify it latter.