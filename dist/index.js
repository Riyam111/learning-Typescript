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
//# sourceMappingURL=index.js.map