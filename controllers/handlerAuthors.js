'use strict';
/*
 * handlersContacts.js
 * Requesthandlers to be called by the routing mechanism
 * About Contacts
 */

const fs = require("fs"); 
const FILENAME = __dirname + '/../public/authors.xml';
const xml2js = require("xml2js");
const httpStatus = require("http-status-codes");
const lib = require("./utilities/libWebUtil");          // home grown utilities
const tmpl = require("../views/myTemplater");            // highly experimental template
const mod = require("../models/jsonAuthors");          // models


module.exports = {
    async updAuthors (req, res, data) {
        let obj = lib.makeWebArrays(req, data);     // home made GET and POST object

        await fs.readFile(FILENAME, 'utf-8', function(err, data) {

            if (err) {
                console.log("error loading file");
            } else {
                xml2js.parseString(data, (err, result) => {
                if (err) {
                    throw err;
                }
                let xmlarr = [result];

                let authorobj = {
                    author: obj
                }
                xmlarr.push(authorobj);
                console.log(xmlarr);

                const builder = new xml2js.Builder();
                const updxml = builder.buildObject(xmlarr);

                    fs.writeFile(FILENAME, updxml, (err) => {
                        if(err) {
                            throw err;
                        }
                    });

                });
            }
        });
        res.writeHead(httpStatus.MOVED_PERMANENTLY, {"Content-Type": "text/xml; charset=utf-8","Location":"http://localhost:3000/authorlibrary"});
        res.end();
    },

    dispAuthor (req, res) {
        mod.getC()
            .then( function (authorlibrary) {
                res.writeHead(httpStatus.OK, {                  // yes, write relevant header
                    "Content-Type": "text/html; charset=utf-8"
                });
                let jsn = {
                            title: "Rainbow warriors author",
                            head: "Author",
                            data: authorlibrary
                        }
                res.write(tmpl.authorlibrary(jsn));                                   // home made templating for native node
                res.end();
            })
            .catch( function (err) {
                console.log(err)
            })
    }
}
