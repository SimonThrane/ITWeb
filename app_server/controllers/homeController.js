"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomeController {
    index(req, res, next) {
        res.render('index', { title: 'Express' });
    }
}
exports.HomeController = HomeController;
