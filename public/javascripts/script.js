'use strict';

import {$} from '/modules/nQuery.js';
import {getSubjects} from '.../controllers/pagexslt.js';

const MENUITEMS = [
    {"text": "Home", "url": "/"},
    {"text": "Books", "url": "/bookslibrary"},
    {"text": "Authors", "url": "/authorlibrary"}
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