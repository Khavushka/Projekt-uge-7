import {getFileAjax} from './Ajax.js';
import {getAndXSLT} from './Ajax.js';

const getContent = async function(ev) {
    await getAndXSLT("http://localhost:3000/booksCanon.xml",
                     "http://localhost:3000/booksCanon.xsl",
                     "content",
                     ev.target.innerText);
};
const getHeaders = async function (ev) {
    await getAndXSLT("http://localhost:3000/booksCanon.xml",
                     "http://localhost:3000/booksCanon.xsl",
                     "content",
                     ev.target.innerText);
    let btns = document.getElementsByClassName("butthead");
    for (let butt of btns) {
        butt.addEventListener("click", getContent);
    }
};
export const getSubjects = async function () {
    await getAndXSLT("http://localhost:3000/booksCanon.xml",
                     "http://localhost:3000/booksCanon.xsl",
                     "navmenu",
                     "");
    let btns = document.getElementsByClassName("buttsub");
    for (let butt of btns) {
        butt.addEventListener("click", getHeaders);
    }
};