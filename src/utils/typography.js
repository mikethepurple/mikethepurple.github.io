import Typography from "typography"
// import kirkhamTheme from "typography-theme-kirkham"

const typography = new Typography({
  googleFonts: [
    {
      name: "Roboto",
      styles: ["regular"],
    },
    {
      name: "Roboto Condensed",
      styles: ["bold"],
    },
  ],
  headerFontFamily: ["Roboto Condensed"],
  bodyFontFamily: ["Roboto"],
})

export default typography
// export const rhythm = typography.rhythm
