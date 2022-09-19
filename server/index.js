"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var PORT = process.env.PORT || 3001;
var app = (0, express_1["default"])();
app.get("/api", function (req, res) {
    res.json({ message: "Hello from server!" });
});
app.listen(PORT, function () {
    console.log("Server listening on " + PORT);
});
