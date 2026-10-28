import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    // custom hook
    return useContext(ThemeContext);
}

/*

This is the second way of writing the create context , provide the context and use them

earlier we are creating seperatly and import inot a provider and again providing the val which it should have
but here, we are creating the context and in that only we are providing what should it contain and we are assigning the Themecontext.provider a variable
finally, we wrote the custom Hook 

ONE FILE CONTAINS EVERY THING

*/
