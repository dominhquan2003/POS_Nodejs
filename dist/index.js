"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const path_1 = __importDefault(require("path"));
const route_1 = __importDefault(require("./routes/route"));
Promise.resolve().then(() => __importStar(require('reflect-metadata')));
const app = (0, express_1.default)();
const port = 8000;
app.use((0, morgan_1.default)("combined"));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.engine("hbs", express_handlebars_1.default.engine({
    defaultLayout: "main",
    extname: "hbs",
    helpers: {
        sum: (a, b) => a + b,
    },
}));
app.set("view engine", "hbs");
app.set("views", path_1.default.join(__dirname, "resources", "views"));
(0, route_1.default)(app);
app.use((req, res, next) => {
    res.render('error/pages-error', { layout: false });
});
//127.0.0.1 -localhost
app.listen(port, () => {
    console.log(` App listening on port http://localhost:` + `${port}`);
});
//# sourceMappingURL=index.js.map