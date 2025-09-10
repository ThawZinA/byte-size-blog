import { post as cssFontSize, content as cssFontSizeContent } from "./css-font-size"
import { post as javascriptClosures, content as javascriptClosuresContent } from "./javascript-closures"
import { post as javascriptModulo, content as javascriptModuloContent } from "./javascript-modulo-operator"
import { post as reactAndCss, content as reactAndCssContent } from "./react-and-css"

export const BLOG_POSTS = [cssFontSize, javascriptClosures, javascriptModulo, reactAndCss]

export const BLOG_CONTENT = {
  "css-font-size": cssFontSizeContent,
  "javascript-closures": javascriptClosuresContent,
  "javascript-modulo-operator": javascriptModuloContent,
  "react-and-css": reactAndCssContent,
}
