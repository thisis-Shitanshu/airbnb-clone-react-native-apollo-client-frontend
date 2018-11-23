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