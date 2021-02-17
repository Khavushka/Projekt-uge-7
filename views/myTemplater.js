/* myTemplater.js Home made experimental templating */
"use strict";

const htmltop = function (obj) {
    let html = `<!doctype html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>${obj.title}</title> 
        <script type='module' src="/script.js"></script>
    </head>
    <body>
        <header>
            <h1>${obj.head}</h1>
            <nav id='menu'></nav>
        </header>
        <main>`;
    return html;
};

const htmltopx = function (obj) {
    let html = `<!doctype html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>${obj.title}</title> 
        <script type='module' src="/script.js"></script>
    </head>
    <body>
        <header>
            <h1>${obj.head}</h1>
            <nav id='menu'></nav>
        </header>
        <main>
            <nav id='navmenu'></nav>
            <article id='content'></article>
`;
    return html;
};


const htmlbot = function () {
    let html = `        </main>
    </body>
</html>`;
    return html;
};

exports.contacts = function (obj) {
    let dyndata = '<table>';
    for (let contact of obj.data) {
        dyndata += '<tr>';
        dyndata += `<td>${contact.name}</td>`;
        dyndata += `<td>${contact.email}</td>`;
        dyndata += `<td>${contact.tstamp.slice(0,10)}</td>`;
        dyndata += '</tr>';
    }
    dyndata += '</table>';
    return htmltop(obj) + dyndata + htmlbot();
};

exports.bookslibrary = function (obj) {
    let dyndata = '<table>';
    for (let bookslibrary of obj.data) {
        dyndata += '<tr>';
            dyndata += `<td>${bookslibrary.title}</td>`
            dyndata += `<td>${bookslibrary.edition}</td>`
            dyndata += `<td>${bookslibrary.firstname}</td>`
            dyndata += `<td>${bookslibrary.lastname}</td>`
            dyndata += `<td>${bookslibrary.publisher}</td>`
            dyndata += `<td>${bookslibrary.pubYear}</td>`
            dyndata += `<td>${bookslibrary.pubPlace}</td>`
            dyndata += `<td>${bookslibrary.pages}</td>`
            dyndata += `<td>${bookslibrary.isbn}</td>`
            dyndata += `<td>${bookslibrary.price}</td>`
            dyndata += `<td>${bookslibrary.currency}</td>`
            dyndata += `<td>${bookslibrary.comment}</td>`;
            dyndata += '</tr>';
        dyndata += '</tr>';
    }
    dyndata += '</table>';
    return htmltop(obj) + dyndata + htmlbot();
};

exports.authorlibrary = function (obj) {
    let dyndata = "<table>";
    for (let authorlibrary of obj.data) {
            dyndata += '<tr>';
            dyndata += `<td>${authorlibrary.firstname}</td>`
            dyndata += `<td>${authorlibrary.lastname}</td>`
            dyndata += `<td>${authorlibrary.birthyear}</td>`
            dyndata += `<td>${authorlibrary.deathyear}</td>`
            dyndata += `<td>${authorlibrary.birthplace}</td>`
            dyndata += `<td>${authorlibrary.country}</td>`
            dyndata += `<td>${authorlibrary.language}</td>`
            dyndata += `<td>${authorlibrary.bio}</td>`;
            dyndata += '</tr>';
    }
    dyndata += "</table>";
    return htmltop(obj) + dyndata + htmlbot();
};

exports.xslt = function (obj) {
    return htmltopx(obj) + htmlbot();
}
