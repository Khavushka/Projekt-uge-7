"use strict";
/*
 * check if routed handler function exists
 * if yes call it, else complain
 */
const handlers = require("../controllers/handlers");  // handlers module
const handlersB = require("../controllers/handlersBooks");
const handlersX = require("../controllers/handlersXslt");
const handlersA = require("../controllers/handlerAuthors");
const requestHandlers = {                             // application urls here
    GET: {
        "/": handlers.home,
        "/start": handlers.home,
        "/side": handlers.home,
        "/about": handlers.home,
        "/bookslibrary": handlers.home,
        "/authorlibrary": handlers.home,
        "/notfound": handlers.notfound,
        "js": handlers.js,
        "css": handlers.css,
        "png": handlers.png,
        "/xslt": handlersX.xsltCS,
        "xsl": handlers.xsl,
        "xml": handlers.xml,
        "author":handlers.dispAuthor,
        "books":handlers.dispBooks
    },
    POST: {
        "/bookslibrary": handlersB.updBooks,
        "/authorlibrary": handlersA.updAuthors
    }
}

module.exports = {
    route(req, res, bodydata) {
        let arr = req.url.split(".");
        let ext = arr[arr.length - 1];
        if (typeof requestHandlers[req.method][req.url] === 'function') {  // look for route
            requestHandlers[req.method][req.url](req, res, bodydata);      // if found use it
        } else if (typeof requestHandlers[req.method][ext] === "function") {
            requestHandlers[req.method][ext](req, res);
        } else {
            requestHandlers.GET["/notfound"](req, res);        // use notfound
        }
    }
}