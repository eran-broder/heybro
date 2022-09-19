"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var PORT = process.env.PORT || 3001;
var app = (0, express_1["default"])();
app.use(express_1["default"].static(path_1["default"].resolve(__dirname, '../client/build')));
// Handle GET requests to /api route
app.get("/api", function (req, res) {
    res.json({ message: "Hello from server!" });
});
// All other GET requests not handled before will return our React app
app.get('*', function (req, res) {
    res.sendFile(path_1["default"].resolve(__dirname, '../client/build', 'index.html'));
});
app.listen(PORT, function () {
    console.log("Server listening on ".concat(PORT));
});
