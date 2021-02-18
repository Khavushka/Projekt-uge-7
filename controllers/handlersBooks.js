'use strict';
/*
 * handlersContacts.js
 * Requesthandlers to be called by the routing mechanism
 * About Contacts
 */
const fs = require("fs"); 
const FILENAME = __dirname + '../public/booksCanon.xml';
const convert = require("xml-js");
const httpStatus = require("http-status-codes");
const lib = require("./utilities/libWebUtil");          // home grown utilities
const tmpl = require("../views/myTemplater");            // highly experimental template
const mod = require("../models/jsonBooks");          // models

module.exports = {

    async updBooks (req, res, data) {
        let obj = lib.makeWebArrays(req, data);         // home made GET and POST object
        
        await fs.readFile(FILENAME, 'utf-8', function(err, data) {
            if (err) {
                console.log("error loading file");
            } else {
                let booksjson = convert.xml2json(data, {compact: true, spaces: 4});
                console.log(booksjson);
            }
        });

        //let booksjson = convert.xml2json(xmlstring, {compact: true, spaces: 4});//
        

        res.writeHead(httpStatus.MOVED_PERMANENTLY, {"Location": "htttp://localhost:3000/books"});
        res.end();
    },

    dispBooks (req, res) {
        mod.getC()
            .then( function (bookslibrary) {
                res.writeHead(httpStatus.OK, {                  // yes, write relevant header
                    "Content-Type": "text/html; charset=utf-8"
                });
                let jsn = {
                            title: "Rainbow warriors books",
                            head: "Books",
                            data: bookslibrary
                        }
                res.write(tmpl.bookslibrary(jsn));                                   // home made templating for native node
                res.end();
            })
            .catch( function (err) {
                console.log(err)
            })
    }
}