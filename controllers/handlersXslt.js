'use strict';
/*
 * handlersXslt.js
 * Requesthandlers to be called by the routing mechanism
 * About providing for FE xslt
 */
const fs = require("fs");                                   // file system access
const httpStatus = require("http-status-codes");
const lib = require("./utilities/libWebUtil");              // home grown utilities
const tmpl = require("../views/myTemplater");    // highly experimental template


module.exports = {
    xsltCS(req, res) {
        res.writeHead(httpStatus.OK, {                                                  // yes, write relevant header
            "Content-Type": "text/html; charset=utf-8"
        });
        res.write(tmpl.xslt({title: "Rainbow warriors", head: "Rainbow warriors XSLT"})); // home made templating for native node
        res.end();
    }
}
