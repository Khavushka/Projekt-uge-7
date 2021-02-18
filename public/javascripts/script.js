'use strict';

import {$} from '/modules/nQuery.js';
import {getSubjects} from '/modules/pagexslt.js';

const MENUITEMS = [
    {"text": "Home", "url": "/"},
    {"text": "Register Books", "url": "/bookslibrary"},
    {"text": "Register Authors", "url": "/authorlibrary"},
    {"text": "Show authors", "url": "/axslt"},
    {"text": "Show books", "url": "/xslt"}
];

const init = function () {
    let ul = document.createElement('ul');
    WHERE.appendChild(ul);
    for (let item of MENUITEMS) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute('href', item.url);
        let atx = document.createTextNode(item.text);
        a.appendChild(atx);
        li.appendChild(a);
        ul.appendChild(li);
    }
    WHERE.appendChild(document.createElement('hr'));
    
    if ($('navmenu') && $('content')) {   // on the xslt page?
        getSubjects();
    }
};


const WHERE = $('menu');
window.addEventListener('load', init);