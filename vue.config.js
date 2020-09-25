module.exports = {
    "devServer": {
        "proxy": {
            "/api/*": {
                "target": "http://localhost:3000/"
            }
        }
    },
    "configureWebpack": {
        "entry": {
            "app": "./src/main.js",
            "style": [
                "bootstrap/dist/css/bootstrap.min.css"
            ]
        }
    },

}