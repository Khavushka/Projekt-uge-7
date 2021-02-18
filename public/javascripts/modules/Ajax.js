'use strict';
/*
 * @author NML
 * @Date Apr 2020
 */
import {$} from './nQuery.js';
/*
 * method: AJaX:  getFileAjax
 * @param filename: url of wanted file
 * @param callback: function to handle response
 */
export const getFileAjax = function (url) {
    let promObj = new Promise(function (resolve, reject) {
        const ajax = new XMLHttpRequest();
        ajax.open('GET', url);
        ajax.send();
        ajax.addEventListener('load', function (ev) {
            if (! ev) {
                reject(ajax.status);
            }
            var resp = ajax.responseXML;
            resolve(resp);
        });
    });
    return promObj;
}

export const getAndXSLT = async function (xmlfile, xslfile, where, param) {
    let xml = await getFileAjax(xmlfile);
    let xsl = await getFileAjax(xslfile);

    let xsltProcessor = new XSLTProcessor(); // real browsers
    xsltProcessor.importStylesheet(xsl);
    xsltProcessor.setParameter(null, "param1", param);  // meant for xsl
    let resultDocument = await xsltProcessor.transformToFragment(xml, document);
    $(where).innerHTML = "";
    $(where).appendChild(resultDocument);
};