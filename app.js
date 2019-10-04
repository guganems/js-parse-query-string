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
        let searchArr = searchStr.substr(1).split("&");
        for (let each of searchArr) {
            let pair = each.split("=");
            this[pair[0]] = pair[1];
        }
    }
}
