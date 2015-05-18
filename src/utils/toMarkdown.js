// LICENSE : MIT
"use strict";
import Handlebars from "handlebars"
Handlebars.registerHelper('auto_format_md', function (text) {
    return text.trim();
});
Handlebars.registerHelper('format_tags', function (tags) {
    return tags.map(function (tag) {
        return '<span class="jser-tag">' + tag + '</span>';
    }).join(" ");
});
Handlebars.registerHelper('escape_md', function (text) {
    var markdown_literal = /[\\`\*_\{\}\[\]]/g;
    return text.replace(markdown_literal, "\\$&");
});
Handlebars.registerHelper('ttp', function (text) {
    return text.replace(/https?:\/\//i, "");
});

function isEmpty() {

}
export function toMarkdown(json) {
    var fs = require("fs");
    var source = fs.readFileSync(__dirname + "/article.handlebars", "utf-8");
    var template = Handlebars.compile(source);
    var result = template({
        Groups: json.filter(function (groups) {
            var keys = Object.keys(groups);
            if (keys.length === 0) {
                return false;
            }
            var key = keys[0];
            var items = groups[key];
            if (Array.isArray(items) && items.length > 0) {
                return false;
            }
        })
    });
    console.log(result);
}