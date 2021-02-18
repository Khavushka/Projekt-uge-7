'use strict';
/*
 * handlers.js
 * Requesthandlers to be called by the routing mechanism
 */
const fs = require("fs");                                   // file system access
const httpStatus = require("http-status-codes");
const lib = require("./utilities/libWebUtil");              // home grown utilities
const experimental = require("../views/myTemplater");       // highly experimental template
/*const templaterV09 = require("../views/myTemplaterV09");    // highly experimental template*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
const getAndServe = async function (res, path, content) {   // asynchronous
    await fs.readFile(path, function(err, data) {           // awaits async read
        if (err) {
            console.log(`Not found file: ${path}`);
        } else {
            res.writeHead(httpStatus.OK, {          // yes, write header
                "Content-Type": content
            });
            res.write(data);
            res.end();
        }
    });
};

module.exports = {
    home(req, res) {
        let path = req.url;
        if (path === "/" || path === "/start") {
            path = "/index";
        }
        path = "views" + path + ".html";
        let content = "text/html; charset=utf-8";
        getAndServe(res, path, content);
    },
    js(req, res) {
        let path = "public/javascripts" + req.url;
        let content = "application/javascript; charset=utf-8";
        getAndServe(res, path, content);
    },
    css(req, res) {
        let path = "public/stylesheets" + req.url;
        let content = "text/css; charset=utf-8";
        getAndServe(res, path, content);
    },
    png(req, res) {
        let path = "public/images" + req.url;
        let content = "image/png";
        getAndServe(res, path, content);
    },
    xsl(req, res) {
        let path = "public" + req.url;
        let content = "text/xml";
        getAndServe(res, path, content);
    },
    xml(req, res) {
        let path = "public" + req.url;
        let content = "text/xml";
        getAndServe(res, path, content);
    },
    ico(req, res) {
        let path = "public" + req.url;
        let content = "image/x-icon";
        getAndServe(res, path, content);
    },

    updBooks (req, res, data) {
        let obj = lib.makeWebArrays(req, data);         // home made GET and POST objects
        res.writeHead(httpStatus.OK, {                  // yes, write relevant header
            "Content-Type": "text/html; charset=utf-8"
        });
        res.write(experimental.receipt(obj));           // home made templating for native node
        res.end();
    },

    updAuthors (req, res, data) {
        let obj = lib.makeWebArrays(req, data);         // home made GET and POST objects
        res.writeHead(httpStatus.OK, {                  // yes, write relevant header
            "Content-Type": "text/html; charset=utf-8"
        });
        res.write(experimental.receipt(obj));           // home made templating for native node
        res.end();
    },
    
    xsltCS(req, res) {
        res.writeHead(httpStatus.OK, {                                                  // yes, write relevant header
            "Content-Type": "text/html; charset=utf-8"
        });
        res.write(templaterV09.xslt({title: "Kilroy's Pages", head: "Kilroy's XSLT"})); // home made templating for native node
        res.end();
    },

    notfound(req, res) {
        res.writeHead(httpStatus.NOT_FOUND, {                  // yes, write relevant header
                    "Content-Type": "text/html; charset=utf-8"
                });
                res.write(`<h1>${httpStatus.NOT_FOUND} Not Found</h1>`);                // home made templating for native node
                res.end();
        console.log(`Handler 'notfound' was called for route ${req.url}`);
        res.end();
    },
}
