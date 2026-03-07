import res from './app.js'

var h1 = React.createElement("h1", { id: "heading" }, 'hello world')
var h2 = React.createElement("h2", { id: "subheading" }, res)

var root = ReactDOM.createRoot(document.querySelector('#container'))


root.render([h1,h2])
