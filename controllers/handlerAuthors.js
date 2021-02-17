'use strict';
/*
 * handlersContacts.js
 * Requesthandlers to be called by the routing mechanism
 * About Contacts
 */
const httpStatus = require("http-status-codes");
const lib = require("./utilities/libWebUtil");          // home grown utilities
const tmpl = require("../views/myTemplater");            // highly experimental template
const mod = require("../models/jsonAuthors");          // models


module.exports = {
    updAuthors (req, res, data) {
        let obj = lib.makeWebArrays(req, data);         // home made GET and POST objects
    },

    dispAuthor (req, res) {
        mod.getC()
            .then( function (author) {
                res.writeHead(httpStatus.OK, {                  // yes, write relevant header
                    "Content-Type": "text/html; charset=utf-8"
                });
                let jsn = {
                            title: "Rainbow warriors author",
                            head: "Author",
                            data: author
                        }
                res.write(tmpl.author(jsn));                                   // home made templating for native node
                res.end();
            })
            .catch( function (err) {
                console.log(err)
            })
    }
}
