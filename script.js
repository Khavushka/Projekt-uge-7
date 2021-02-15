'use strict';

import {$} from './modules/nQuery.js';
import {getSubjects} from './modules/pagexslt.js';

const MENUITEMS = [
    {"text": "Home", "url": "/"},
    {"text": "Cities", "url": "/cities"},
    {"text": "About", "url": "/about"},
    {"text": "Contacts", "url": "/contact"},
    {"text": "Test XSLT", "url": "/xslt"}
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