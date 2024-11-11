MUI에서 권장하는 방법은 예시 파일들중 〈MUI2_3〉, 〈MUI2_4〉

MUI의 search에 palette, breakpoint

-  palette
   https://mui.com/material-ui/customization/palette/\

   > theme :{\
   >  　　 palette : {\
   >  　　　　 primary : { main, light, dark, contrastText},\
   >  　　　　 secondary : { main, light, dark, contrastText},\
   >  　　　　 seuccess : { main, light, dark, contrastText},\
   >  　　　　 error : { main, light, dark, contrastText},\
   >  　　　　 warning : { main, light, dark, contrastText},\
   >  　　　　 info : { main, light, dark, contrastText},\
   > 　　　　}\
   > 　　　}
   >
   > ```
   > const colorPalette = {
   > primary: { main: "#1976d2", light: "#63a4ff", dark: "#004ba0", contrastText: "#fff" },
   > secondary: { main: "#dc004e", light: "#ff3d72", dark: "#9a0036", contrastText: "#fff" },
   > success: { main: "#28a745", light: "#6fcf97", dark: "#1e7e34", contrastText: "#fff" },
   > error: { main: "#dc3545", light: "#ff6b81", dark: "#c82333", contrastText: "#fff" },
   > warning: { main: "#ffc107", light: "#ffe082", dark: "#e0a800", contrastText: "#000" },
   > info : { main: "#0288d1", light: "#03a9f4", dark: "#01579b", contrastText: "#fff"},
   > };
   > ```

           primary - for primary interface elements.

           secondary - for secondary interface elements.
           error - for elements that the user should be made aware of.
           warning - for potentially dangerous actions or important messages.
           info - for highlighting neutral information.
           success - for indicating the successful completion of an action that the user triggered.


               {
               main: The main shade of the color
               light: A lighter shade of main
               dark: A darker shade of main
               contrastText: Text color, intended to contrast with main }

-  breakpoints\
    https://mui.com/material-ui/customization/breakpoints/\
   가로길이 관련 키워드

        xs, extra-small: 0px
        sm, small: 600px
        md, medium: 900px
        lg, large: 1200px
        xl, extra-large: 1536px
