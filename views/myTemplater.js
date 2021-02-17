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
        dynamic += '<tr>';
            dynamic += `<td>${bookslibrary.title}</td>`
            dynamic += `<td>${bookslibrary.edition}</td>`
            dynamic += `<td>${bookslibrary.firstname}</td>`
            dynamic += `<td>${bookslibrary.lastname}</td>`
            dynamic += `<td>${bookslibrary.publisher}</td>`
            dynamic += `<td>${bookslibrary.pubYear}</td>`
            dynamic += `<td>${bookslibrary.pubPlace}</td>`
            dynamic += `<td>${bookslibrary.pages}</td>`
            dynamic += `<td>${bookslibrary.isbn}</td>`
            dynamic += `<td>${bookslibrary.price}</td>`
            dynamic += `<td>${bookslibrary.currency}</td>`
            dynamic += `<td>${bookslibrary.comment}</td>`;
            dynamic += '</tr>';
        dyndata += '</tr>';
    }
    dyndata += '</table>';
    return htmltop(obj) + dyndata + htmlbot();
};

exports.authorlibrary = function (obj) {
    let dynamic = "<table>";
    for (let authorlibrary of obj.data) {
            dynamic += '<tr>';
            dynamic += `<td>${authorlibrary.firstname}</td>`
            dynamic += `<td>${authorlibrary.lastname}</td>`
            dynamic += `<td>${authorlibrary.birthyear}</td>`
            dynamic += `<td>${authorlibrary.deathyear}</td>`
            dynamic += `<td>${authorlibrary.birthplace}</td>`
            dynamic += `<td>${authorlibrary.country}</td>`
            dynamic += `<td>${authorlibrary.language}</td>`
            dynamic += `<td>${authorlibrary.bio}</td>`;
            dynamic += '</tr>';
    }
    dynamic += "</table>";
    return htmltop(obj) + dynamic + htmlbot();
};

exports.xslt = function (obj) {
    return htmltopx(obj) + htmlbot();
}
