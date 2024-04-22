var records = {
    "id": "239uvfj" {
        "artist": "Billie Eilish",
        "album": "Depression",
        "title": "Bad Guy",
        "likes": "1000000000",
        "release_year": "2019"
    }
}

var redordsCopy = JSON.parse(JSON.stringify(records));

function addRecord(id, prop, value) {
    records.addRecord
};

function updateRecords(id, prop, value) {
    if (value === "") {
        delete records[id][prop];
    }
}

function addRecord(id, prop, value) {
        records[id][prop] = value;
}

addRecord("qwi232", "artist", "Biggie");
console.log(records)