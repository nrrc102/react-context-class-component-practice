import React,{Component, createContext, useState} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component{
    state={
        isLightTheme: true,
        light: {syntax: '#555', ui: '#ddd', bg: '#eee'},
        dark: {syntax: '#ddd', ui: '#333', bg: '#555'}
    }

    toggleTheme = () => {
        this.setState({isLightTheme: !this.state.isLightTheme});
    }

    render(){
        return(
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

// const ThemeContextProvider = (props) => {
//     const [theme, setTheme] = useState({
//         isLightTheme: true,
//         light: {syntax: '#555', ui: '#ddd', bg: '#eee'},
//         dark: {syntax: '#ddd', ui: '#333', bg: '#555'}
//     })

//     const toggleTheme = () => {
//         setTheme(!theme);
//     }

//     return(
//         <ThemeContext.Provider value={{...theme, toggleTheme}}>
//             {props.children}
//         </ThemeContext.Provider>
//     )
// }

export default ThemeContextProvider;