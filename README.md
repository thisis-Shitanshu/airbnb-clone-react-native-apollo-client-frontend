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
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/1.HomeScreen.png" width="250">

- Facebook Button Press:
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/1.1.FacebookButtonPress.png" width="250">


- Create Account Button Press:
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/1.2.CreateAccountButtonPress.png" width="250">

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
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/2.LogInScreen.png" width="250">

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
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/3.1.FloatingButton.png" width="250">

- Show Password:
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/3.2.ShowPassword.png" width="250">

- Handle Next Button:
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/3.3.HandleNextButton.png" width="250">

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
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/5.1.ErrorScreen.png" width="250">

- Error-Free Screen:
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/5.2.ErrorFreeScreen.png" width="250">

- Entering Value:
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/5.3.EnteringValue.png" width="250">

- Entering Wrong Value:
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/5.4.EnteringWrongValue.png" width="250">

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
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/6.LoaderOnHanleNext.png" width="250">

# 7: Airbnb Clone using React Native - Animated check marks
- We'll add an animated checkmark when the input field has a valid value.
- Let's change the keyboard if the input field is an email.


- Animated Checkmark:
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/7.AnimatedCheckmark.png" width="250">

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
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/8.ForgotPasswordScreen.png" width="250">

- Entering Value:
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/8.1.EnteringValue.png" width="250">

- Entering Wrong Value:
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/8.2.EnteringWrongValue.png" width="250">

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

## Work-flow of Redux in this application:
1. 'Provider' from react-redux will pass the 'store' to the application in App.js.
1. 'store' is created by 'configureStore' CUSTOME FUNCTION in 'store.js'.
    - Empty object is passed to 'configureStore'.
        - Then 'createStore' from 'redux' is used to create store, and is passed 'reducer', 'initialState' (which is empty) and 'enhancer'.
            - 'enhancer', CUSTOME FUNCTION uses 'compose' and 'applyMiddleware' to add middleware to store.
1. 'reducer' uses 'combineReducers' from 'redux' to combine all the reducers inported.
1. Any reducers imports 'createReducer' from helper and 'action types'.
    - Then specify the chance of state on a perticular action type.
        - 'createReducer' is a CUSTOME FUNCTION which takes, 'initial state, and handler to distingise between action types.
1. 'types.js' is used to declare action types.
1. Any component uses Redux as follow:
    1. Store is passed from 'App.js'.
    1. The component imports:
        - 'connect' from 'react-redux'.
            - Connect is used to 'map state to props', which is passed 'state' and 'map dispatch to prop', which is passed state using bindActionCreator.
        - 'bindActionCreaators' from 'redux'.
            - Is used to bind all the actions created by 'ActionCreators' with dispacth and later maped to props.
                - So the component can use the functions in the component from 'props'.
        - CUSTOME FUNCTION 'ActionCreators' from 'redux/action'.
            - Combines all the actions.
    1. Every action is passed dispatched which is then used to chance state.

# 10: Airbnb Clone using React Native - Add Navigation
## Note: WARNING: Configuration 'compile' is obsolete and has been replaced with 'implementation' and 'api'.

- We'll connect everything.
    - Using react-nativation and react-navigation-redux-helper to connect the navigation to the redux store.
- react-navigation-redux-helper:
    1. How it works:
        1. Any navigator can be passed a navigation prop to turn it into a "controlled" component, which defers state management to its parent. This mechanism is used in React Navigation to nest navigators, but it can also be used to customize state management.
        1. A Redux middleware is used so that any events that mutate the navigation state properly trigger React Navigation's event listeners.
        1. Finally, a reducer enables React Navigation actions to mutate the Redux state.
    1. Note:
        - Most projects that are using both Redux and React Navigation don't need this library.
        - And passing navigation to the root navigator means that you will have to handle state persistance and BackHandler behavior yourself.
        
## Next:
1. npm install:
    - **react-navigation**
    - **react-navigation-redux-helpers**
1. Restart the server.
1. Add to directory structure.
    - root:
        - src
            - containers
            - components
                - buttons
                    - RoundedButtons.js
                    - NextArrowButton.js
                    - **NavBarButton.js**
                - form
                    - InputField.js
                - Notification.js
                - Loader.js
            - styles
                - colors
                    - index.js
                - **navigator.js**
            - screens
                - LoggedOut.js
                - LogIn.js  
                - ForgotPassword.js
            - img
                - airbnb-logo.png
            - redux
                - store.js
                - reducer
                    - loggedOut.js
                    - index.js
                    - **navigation.js**
                - action
                    - types.js
                    - loggedOut.js
                    - index.js
                - helpers
                    - createReducer.js
            - data
                - user.json
            - **navigators**
                - **AppNavigator.js**
                - **AppRouteConfigs.js**
        - App.js

1. We will have two navigators. One-stack navigator-which will takre care of the navigation for when the user is loged out. The other-tab navigator-which will be used once the user logged in.
1. Now let's create a reducer which we will use to chance screen.
1. Let's add the app navigator.
1. We will need to add the react navigation redux middleware in store. 
    - To dissable yellow waring:
        - console.disableYellowBox = true;
        - In App.js before App class.
1. Style the Top bar:
    - create a NavBar button Component.
    - Need to style the header for every screen.

# 10-1 Code Refactoring:
- I just completely refactor the code for redux for my convinience.

## Error: undefined is not an object (evaluating 'RNGestureHandlerModule.State')
- remove node_modules and package-lock.json
- npm install --save react-native-gesture-handler
- react-native link

## Error: Native module com.oblador.vectoricons.VectorIconsModule tried to override com.oblador.vectoricons.VectorIconsModule for module name RNVectorIconsModule. Check the getPackages() method in MainApplication.java, it might be that module is being created twice.
I solve the issue modifying the MainActivity.java file. Vector module was declarated several time. Just remove the import and it works

- Much better so I did the following this specifically:
    1. Moved the store to seperate file.
    1. Simplify the syntax of action and reducer.
    1. Placed header on all the 3 screen we currently have.
        - Added styles.
        - Navigation button.

## Progress so far
- Logged Out Screen:
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/10-1.1.LoggedOutScreen.png" width="250">

- Log In Screen:
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/10-1.2.LogInScreen.png" width="250">

- Forgot Password Screen:
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/10-1.3.ForgotPasswordScreen.png" width="250">

# 11: Airbnb Clone using React Native - Add Logged In Screen
- In this section we'll create the Logged In screen which will contain the tab navigator.

1. Add to directory structure.
    - root:
        - src
            - containers
                - **ExploreContainer.js**
                - **SavedContainer.js**
                - **ProfileContainer.js**
                - **TripsContainer.js**
                - **InboxContainer.js**
            - components
                - buttons
                    - RoundedButtons.js
                    - NextArrowButton.js
                    - NavBarButton.js
                - form
                    - InputField.js
                - Notification.js
                - Loader.js
            - styles
                - colors
                    - index.js
                - navigator.js
            - screens
                - LoggedOut.js
                - LogIn.js  
                - ForgotPassword.js
                - **LoggedIn.js**
            - img
                - airbnb-logo.png
            - redux
                - store.js
                - reducer
                    - loggedOut.js
                    - index.js
                    - navigation.js
                - action
                    - types.js
                    - loggedOut.js
                    - index.js
                - helpers
                    - createReducer.js
            - data
                - user.json
            - navigators
                - AppNavigator.js
                - AppRouteConfigs.js
                - **LoggedInTabsNavigator.js**
        - App.js

1. Style all the currently created Tabs.
1. For Ionicons:
    1. Import:
        - import Icon from 'react-native-vector-icons/Ionicons';
    1. Find: https://ionicons.com/
1. Change to this screen when we log in.
1. Disable the back button so that user can'r go back to login screen after Logging in.

## Progress so far
- Logged In Screen:
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/11.LoggedInScreen.png" width="250">

# 12: Airbnb Clone using React Native - Turn On Notifications Screen
- In this section we'll build the notifications screen which will show for the first time users when they log in.

1. Add to directory structure.
    - root:
        - src
            - containers
                - ExploreContainer.js
                - SavedContainer.js
                - ProfileContainer.js
                - TripsContainer.js
                - InboxContainer.js
            - components
                - buttons
                    - RoundedButtons.js
                    - NextArrowButton.js
                    - NavBarButton.js
                - form
                    - InputField.js
                - Notification.js
                - Loader.js
            - styles
                - colors
                    - index.js
                - navigator.js
            - screens
                - LoggedOut.js
                - LogIn.js  
                - ForgotPassword.js
                - LoggedIn.js
                - **TurnOnNotification.js**
            - img
                - airbnb-logo.png
            - redux
                - store.js
                - reducer
                    - loggedOut.js
                    - index.js
                    - navigation.js
                - action
                    - types.js
                    - loggedOut.js
                    - index.js
                - helpers
                    - createReducer.js
            - data
                - user.json
            - navigators
                - AppNavigator.js
                - AppRouteConfigs.js
                - LoggedInTabsNavigator.js
        - App.js

## Progress so far
- Turn On Notifications Screen:
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/12.TurnOnNotificationsScreen.png" width="250">

# 13: Airbnb Clone using React Native - Explore Tab - Part 1
1. Add to directory structure.
    - root:
        - src
            - containers
                - ExploreContainer.js
                - SavedContainer.js
                - ProfileContainer.js
                - TripsContainer.js
                - InboxContainer.js
            - components
                - **SearchBar.js**
                - **explore**
                    - **Categories.js**
                    - **Listings.js**
                - buttons
                    - RoundedButtons.js
                    - NextArrowButton.js
                    - NavBarButton.js
                - form
                    - InputField.js
                - Notification.js
                - Loader.js
            - styles
                - colors
                    - index.js
                - navigator.js
            - screens
                - LoggedOut.js
                - LogIn.js  
                - ForgotPassword.js
                - LoggedIn.js
                - TurnOnNotification.js
            - img
                - airbnb-logo.png
            - redux
                - store.js
                - reducer
                    - loggedOut.js
                    - index.js
                    - navigation.js
                - action
                    - types.js
                    - loggedOut.js
                    - index.js
                - helpers
                    - createReducer.js
            - data
                - user.json
                - **Categories.js**
            - navigators
                - AppNavigator.js
                - AppRouteConfigs.js
                - LoggedInTabsNavigator.js
        - App.js

1. Starting with Search component.

## Progress so far
- Explore Container Part 1:
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/13.ExploreContainerP1.png" width="250">

# 14: Airbnb Clone using React Native - Explore Tab | Part 2
- We will build the list of listtings.
    - We have 2 types:
        - Experiences
        - Popular Reservations.
    - They contain different elements:
        - Experiences has a star rating.
        - Favorite icon.

1. Add to directory structure.
    - root:
        - src
            - containers
                - ExploreContainer.js
                - SavedContainer.js
                - ProfileContainer.js
                - TripsContainer.js
                - InboxContainer.js
            - components
                - SearchBar.js
                - explore
                    - Categories.js
                    - Listings.js
                - buttons
                    - RoundedButtons.js
                    - NextArrowButton.js
                    - NavBarButton.js
                - form
                    - InputField.js
                - Notification.js
                - Loader.js
            - styles
                - colors
                    - index.js
                - navigator.js
            - screens
                - LoggedOut.js
                - LogIn.js  
                - ForgotPassword.js
                - LoggedIn.js
                - TurnOnNotification.js
            - img
                - airbnb-logo.png
            - redux
                - store.js
                - reducer
                    - loggedOut.js
                    - index.js
                    - navigation.js
                - action
                    - types.js
                    - loggedOut.js
                    - index.js
                - helpers
                    - createReducer.js
            - data
                - user.json
                - Categories.js
                - **listings.js**
            - navigators
                - AppNavigator.js
                - AppRouteConfigs.js
                - LoggedInTabsNavigator.js
        - App.js

## Progress so far
- Explore Container Part 2:
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/14.ExploreContainerP2.png" width="250">

# 15: Airbnb Clone using React Native - Star Rating and Favourite Components
- Continue styling rest of the Explore tab.
- There are two types of heading:
    - Regular
    - Bold

1. Add to directory structure.
    - root:
        - src
            - containers
                - ExploreContainer.js
                - SavedContainer.js
                - ProfileContainer.js
                - TripsContainer.js
                - InboxContainer.js
            - components
                - **Stars.js**
                - SearchBar.js
                - explore
                    - Categories.js
                    - Listings.js
                - buttons
                    - RoundedButtons.js
                    - NextArrowButton.js
                    - NavBarButton.js
                    - **HeartButton.js**
                - form
                    - InputField.js
                - Notification.js
                - Loader.js
            - styles
                - colors
                    - index.js
                - navigator.js
            - screens
                - LoggedOut.js
                - LogIn.js  
                - ForgotPassword.js
                - LoggedIn.js
                - TurnOnNotification.js
            - img
                - airbnb-logo.png
            - redux
                - store.js
                - reducer
                    - loggedOut.js
                    - index.js
                    - navigation.js
                - action
                    - types.js
                    - loggedOut.js
                    - index.js
                - helpers
                    - createReducer.js
            - data
                - user.json
                - Categories.js
                - listings.js
            - navigators
                - AppNavigator.js
                - AppRouteConfigs.js
                - LoggedInTabsNavigator.js
        - App.js


## Progress so far
- Star Rating and Favourite Components:
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/15.StarRatingandFavouriteComponents.png" width="250">

# 16: Airbnb Clone using React Native - Fixing some gaps
- There is no button from the Login screen to go to Forgot Password screen.
- Color of the Status bar. (iOS)
    - First let's make it white by default instead of black.
        1. Edit: **root\ios\AirbnbClone\Info.plist**
            - Add:
            ```xml
            </array>
        	<key>UIViewControllerBasedStatusBarAppeareance</key>
	        <true/>
            </dist>
            ```
        1. Then add **StatusBar.setBarStyle('dark-content', true);** in the desired places. 
- Since I am not using react-navigation-redux-helper and this is for my Android. I am skipping over it. 
- Since android has a seperate StatusBar from the screen.

# 17: Airbnb Clone using React Native - Responsive design
- Things to fix:
    - Big Screen: Notification, Categories list.
    - Small Screen: Text on Logged Out screen, Categories list <Done>.

1. Add to directory structure.
    - root:
        - src
            - **helpers**
                - **utils.js**
            - containers
                - ExploreContainer.js
                - SavedContainer.js
                - ProfileContainer.js
                - TripsContainer.js
                - InboxContainer.js
            - components
                - Stars.js
                - SearchBar.js
                - explore
                    - Categories.js
                    - Listings.js
                - buttons
                    - RoundedButtons.js
                    - NextArrowButton.js
                    - NavBarButton.js
                    - HeartButton.js
                - form
                    - InputField.js
                - Notification.js
                - Loader.js
            - styles
                - colors
                    - index.js
                - navigator.js
            - screens
                - LoggedOut.js
                - LogIn.js  
                - ForgotPassword.js
                - LoggedIn.js
                - TurnOnNotification.js
            - img
                - airbnb-logo.png
            - redux
                - store.js
                - reducer
                    - loggedOut.js
                    - index.js
                    - navigation.js
                - action
                    - types.js
                    - loggedOut.js
                    - index.js
                - helpers
                    - createReducer.js
            - data
                - user.json
                - Categories.js
                - listings.js
            - navigators
                - AppNavigator.js
                - AppRouteConfigs.js
                - LoggedInTabsNavigator.js
        - App.js

1. First we'll create a utility function to determine what phone we're using.

# 18: Airbnb Clone using React Native - No Saved Listings
- We'll create the No Result component for the **Saved** tab.
1. Add to directory structure.
    - root:
        - src
            - helpers
                - utils.js
            - containers
                - ExploreContainer.js
                - SavedContainer.js
                - ProfileContainer.js
                - TripsContainer.js
                - InboxContainer.js
            - components
                - **saved**
                    - **NoResults.js**
                - Stars.js
                - SearchBar.js
                - explore
                    - Categories.js
                    - Listings.js
                - buttons
                    - RoundedButtons.js
                    - NextArrowButton.js
                    - NavBarButton.js
                    - HeartButton.js
                - form
                    - InputField.js
                - Notification.js
                - Loader.js
            - styles
                - colors
                    - index.js
                - navigator.js
            - screens
                - LoggedOut.js
                - LogIn.js  
                - ForgotPassword.js
                - LoggedIn.js
                - TurnOnNotification.js
            - img
                - airbnb-logo.png
            - redux
                - store.js
                - reducer
                    - loggedOut.js
                    - index.js
                    - navigation.js
                - action
                    - types.js
                    - loggedOut.js
                    - index.js
                - helpers
                    - createReducer.js
            - data
                - user.json
                - Categories.js
                - listings.js
            - navigators
                - AppNavigator.js
                - AppRouteConfigs.js
                - LoggedInTabsNavigator.js
        - App.js

## Progress so far
- No Results Component for Saved Screen:
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/18.NoResultsComponent.png" width="250">

# 19: Airbnb Clone using React Native - Fix Android App Styling
- Remove ugly buttons on press in Logged Out Screen.
    - Replace TouchableHighlight for TouchableOpacity.
    - We need to chance how much opacity to use.
- Put whole screen inside a ScrollView because Android has all kind of devices compared to iPhone. We want to make sure the user can see everything.

# 20: Airbnb Clone using React Native - Create a List | Part 1
1. Add to directory structure.
    - root:
        - src
            - helpers
                - utils.js
            - containers
                - ExploreContainer.js
                - SavedContainer.js
                - ProfileContainer.js
                - TripsContainer.js
                - InboxContainer.js
            - components
                - saved
                    - NoResults.js
                - Stars.js
                - SearchBar.js
                - explore
                    - Categories.js
                    - Listings.js
                - buttons
                    - RoundedButtons.js
                    - NextArrowButton.js
                    - NavBarButton.js
                    - HeartButton.js
                - form
                    - InputField.js
                - Notification.js
                - Loader.js
            - styles
                - colors
                    - index.js
                - navigator.js
            - screens
                - **CreateList.js**
                - LoggedOut.js
                - LogIn.js  
                - ForgotPassword.js
                - LoggedIn.js
                - TurnOnNotification.js
            - img
                - airbnb-logo.png
            - redux
                - store.js
                - reducer
                    - loggedOut.js
                    - index.js
                    - navigation.js
                - action
                    - types.js
                    - loggedOut.js
                    - index.js
                - helpers
                    - createReducer.js
            - data
                - user.json
                - Categories.js
                - listings.js
            - navigators
                - AppNavigator.js
                - AppRouteConfigs.js
                - LoggedInTabsNavigator.js
        - App.js

1. Update the navigation from like button to screen.

## Error: A tab navigator contains a stack and you want to hide the tab bar on specific screens
- Similar to the example above where a stack contains a tab navigator, we can solve this in two ways: add navigationOptions to our tab navigator to set the tab bar to hidden depending on which route is active in the child stack, or we can move the tab navigator inside of the stack.

Imagine the following configuration:
```
const FeedStack = createStackNavigator({
  FeedHome: FeedScreen,
  Details: DetailsScreen,
});

const TabNavigator = createBottomTabNavigator({
  Feed: FeedStack,
  Profile: ProfileScreen,
});

const AppNavigator = createSwitchNavigator({
  Auth: AuthScreen,
  Home: TabNavigator,
});
```

If we want to hide the tab bar when we navigate from the feed home to a details screen without shuffling navigators, we cannot set the tabBarVisible: false configuration in navigationOptions on DetailsScreen, because those options will only apply to the FeedStack. Instead, we can do the following:

```
const FeedStack = createStackNavigator({
  FeedHome: FeedScreen,
  Details: DetailsScreen,
});

FeedStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};
```

## Progress so far
- Creating List Screen:
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/20.CreatingListScreen-P1.png" width="250">

# 21: Airbnb Clone using React Native - Create a List | Part 2
- Start by adding Title input filed. We can reuse the one from Login Screen.
    - But need to make it flexible.

1. Create a new form component:
1. Add to directory structure.
    - root:
        - src
            - helpers
                - utils.js
            - containers
                - ExploreContainer.js
                - SavedContainer.js
                - ProfileContainer.js
                - TripsContainer.js
                - InboxContainer.js
            - components
                - saved
                    - NoResults.js
                - Stars.js
                - SearchBar.js
                - explore
                    - Categories.js
                    - Listings.js
                - buttons
                    - RoundedButtons.js
                    - NextArrowButton.js
                    - NavBarButton.js
                    - HeartButton.js
                - form
                    - InputField.js
                    - **RadioInput.js**
                - Notification.js
                - Loader.js
            - styles
                - colors
                    - index.js
                - navigator.js
            - screens
                - CreateList.js
                - LoggedOut.js
                - LogIn.js  
                - ForgotPassword.js
                - LoggedIn.js
                - TurnOnNotification.js
            - img
                - airbnb-logo.png
            - redux
                - store.js
                - reducer
                    - loggedOut.js
                    - index.js
                    - navigation.js
                - action
                    - types.js
                    - loggedOut.js
                    - index.js
                - helpers
                    - createReducer.js
            - data
                - user.json
                - Categories.js
                - listings.js
            - navigators
                - AppNavigator.js
                - AppRouteConfigs.js
                - LoggedInTabsNavigator.js
        - App.js

## Progress so far
- Public Radio Button:
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/21.1.PublicRadioButton.png" width="250">

- Private Radio Button:
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/21.2.PrivateRadioButton.png" width="250">

# 22: Airbnb Clone using React Native - Create a List | Part 3

## Progress so far
- Create List Screen .
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/22.1.CreateListScreen.png" width="250">

- Disabled buttom when no text.
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/22.2.DisabledButton.png" width="250">

- Loading.
<img src="https://github.com/thisis-Shitanshu/airbnb-clone-react-native-apollo-client-frontend/blob/master/screenshots/22.3.LoadingButton.png" width="250">

# 26: Airbnb Clone using React Native - Connecting to GraphQL backend using Apollo Client
- In this section we'll add apollo to the react native app and try to get some listings from the simple qraphql backend we created.

1. First we need to ad couple of dependencies.
1. Let's start the server and run the backend containers.
1. Integrate apollo into our application.

- Adding to dir:
    - root
        - src
            - **config**
                - **index.js**

- Add apollo provider in App.js
- Now let's see if we can run somr GraphQL queries to fetch some listings.

- GraphQL Queries:
1. Get lists.
    ```javascript
    query {
        multipleListings {
            id,
            title,
            description
        }
    }
    ```
1. Mutation addListing:
    ```javascript
    mutation addListing {
        addListing(data: {
            title: "My fourth listing",
            description: "Sample description"
        }) {
        title,
        description
      }
    }
    //... till fourth
    ```

- Let's try to fetch the list inside the app.
    - *ExploreContainer.js*
- Check data avilability in the app.
