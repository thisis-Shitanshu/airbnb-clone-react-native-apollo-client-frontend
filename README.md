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
![Home Screen](../master/screenshots/1.HomeScreen.png)

- Facebook Button Press:
![Facebook Button Press](../master/screenshots/1.1.FacebookButtonPress.png)

- Create Account Button Press:
![Create Account Button Press](../master/screenshots/1.2.CreateAccountButtonPress.png)