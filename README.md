# rn-assignment5-11317254

## **Student ID**: 11317254

## Brief Description of each component's usage and their Screenshots


**HomeScreen.js**: The React Native component, HomeScreen, is crafted for a mobile application and includes a dark/light theme toggle through a custom hook, useTheme. The component presents a user profile section, a search icon, and a series of actions (Send, Receive, Loan, TopUp) each accompanied by corresponding icons and text. Beneath these actions, it displays transactions sourced from a hardcoded array, TransactionData, detailing transaction information such as company name, field, and amount (positive or negative) alongside company icons. These transactions are rendered using a FlatList to ensure efficient list management. The component's layout and styling adapt based on the current theme (dark or light), impacting background colors, text colors, and other UI elements to harmonize with the theme. The getStyles function dynamically creates styles according to the theme. Icons are managed using react-native-vector-icons/Ionicons, while the theme context is overseen by a custom ThemeContext.


**TabNavigator.js**: The TabNavigator component is designed for use in a mobile application built with React Native and the React Navigation library. It creates a bottom tab navigator that allows users to switch between different screens by tapping on the tabs at the bottom of the screen. The component employs createBottomTabNavigator from @react-navigation/bottom-tabs to set up the navigator and NavigationContainer from @react-navigation/native to manage the navigation tree. It includes four tabs, each corresponding to a different screen: HomeScreen, CardsScreen, StatisticsScreen, and SettingsScreen. Each tab is paired with a specific icon from @expo/vector-icons/MaterialCommunityIcons and is customized with options such as tabBarLabel for the tab label, headerShown to hide the header, and tabBarIcon to set the icon. The tab bar's appearance is customized using tabBarOptions, which define active and inactive tint colors, and style the tab bar's background color, height, and padding.


**SettingsScreen.js**:The React Native component, SettingsScreen, is designed to display a settings page in a mobile application, utilizing the useTheme custom hook to toggle between light and dark themes. It dynamically changes background and text colors based on the current theme and lists menu items such as Language, My Profile, Contact Us, Change Password, and Privacy Policy with corresponding icons in a vertical alignment. Additionally, it features a label indicating the current theme alongside a Switch component for theme toggling. The component's styles are defined using StyleSheet.create, ensuring consistency with design requirements, making it reusable and adaptable for various settings-related functionalities within the application.


**ThemeContext.js**: The ThemeContext.js file sets up theme management in a React application, enabling dynamic switching between light and dark themes. It creates a ThemeContext using React's createContext, allowing the theme state to be provided and consumed throughout the application. Additionally, it defines a custom hook, useTheme, which simplifies accessing the theme context's value (the current theme and the toggle function) within any component, utilizing React's useContext to retrieve the current context value.


**App.js**: The React Native component, App, functions as the root component of the application. It encapsulates the entire app within a ThemeProvider component, which likely offers theme-related context (like light or dark mode settings) to the rest of the app. The App component features a TabNavigator (imported from ./Components/TabNavigator) that manages the bottom tab navigation. It also uses the StatusBar component from expo-status-bar to control the status bar's appearance. Layout and styling are handled using React Native's StyleSheet and View components, with the container style defining the main view's flex layout and background color. 


## Screenshots

![HomeScreen Dark](https://github.com/MC-CLINT/rn-assignment5-11317254/commit/eeb77d85314f984c7f032b94972910cea082c843#diff-fb269f2dae65f2c08920ac134930f0cb1487e05cc373db23d9ff661bbe51f0f5)

![Settings Screen Light](https://github.com/MC-CLINT/rn-assignment5-11317254/commit/eeb77d85314f984c7f032b94972910cea082c843#diff-6bf71bfb36b487b116e20e112a7f2e977ae819b4cf7168548748b5231427661d)
