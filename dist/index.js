"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    return `hello ${name}`;
}
const username = "riya";
console.log(greet(username));
//union 
let apiresponse = 'pending';
apiresponse = 'rejected';
//type narrowing
function msg(kind) {
    if (typeof kind === "string") {
        return `msg ${kind} `;
    }
    return `msg ${kind}`;
}
//instanceof typenarrowing
class eat {
    breakfast() {
        return `i eat apple in breakfast`;
    }
}
class drink {
    breakfast() {
        return `i drunk water in breakfast`;
    }
}
function health(kind) {
    if (kind instanceof eat) {
        return kind.breakfast();
    }
    else {
        kind.breakfast();
    }
}
console.log(health(new eat()));
function beauty(kind) {
    return (typeof kind === "object" &&
        kind != null &&
        typeof kind.type === "string" &&
        typeof kind.syrum === "string");
}
/*You are building a notification system. A notification can be either:

a string message

a number error code

Write a function showNotification that handles both types safely:*/
function notifymsg(msg) {
    if (typeof msg === 'string') {
        console.log(`messge: ${msg}`);
    }
    else {
        console.log(`message:${msg}`);
    }
}
notifymsg("welcom");
notifymsg(404);
let response = "riya";
let numberlength = response.length;
console.log(numberlength);
//# sourceMappingURL=index.js.map