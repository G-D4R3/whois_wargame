module.exports = {
    "devServer": {
        "proxy": {
            "/api/*": {
                "target": "http://192.168.200.138:3000/"
            }
        }
    },

}