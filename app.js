class Url {
    constructor () {
        this.url = window.location;
        this.host = window.location.host;
        this.hostname = window.location.hostname;
        this.origin = window.location.origin;
        this.pathname = window.location.pathname;
        this.port = window.location.port;
        this.search = window.location.search;
        this.searchStrToObj(this.search);
    }

    searchStrToObj(searchStr) {
        let prev = [];
        let searchArr = searchStr.substr(1).split("&");
        for (let each of searchArr) {
            let pair = each.split("=");
            if (prev.includes(pair[0])) {
                let temp = this[pair[0]];
                this[pair[0]] = [];
                if (Array.isArray(temp)) {
                    for (let eachTemp of temp) {
                        this[pair[0]].push(eachTemp);
                    }
                    this[pair[0]].push(pair[1]);
                }
                else {
                    this[pair[0]].push(temp);
                    this[pair[0]].push(pair[1]);
                }
            }
            else {
                this[pair[0]] = pair[1];
                prev.push(pair[0]);
            }
        }
    }
}
