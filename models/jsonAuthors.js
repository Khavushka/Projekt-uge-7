'use strict';
const fs = require('fs').promises;
const PATH = __dirname + '/json/authors.json';
const ENC = 'utf-8';

module.exports = {
    async getC() {
        let re = [];
        try {
            let data = await fs.readFile(PATH);
            console.log(data);
            re = JSON.parse(data);
        } catch(e) {
            console.log(e.message);
        }
        return re;
    },

    updC() {
        return true;
    }
}