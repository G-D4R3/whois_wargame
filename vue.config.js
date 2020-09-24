module.exports = {
    "devServer": {
        "proxy": {
            "/api/*": {
                "target": "http://192.168.200.138:3000/"
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