"use strict"

function parsePartCode(code) {
    code = code.trim();
    
    let stop1 = code.indexOf(":");
    let stop2 = code.indexOf("-");

    let supplier = code.substring(0, stop1);
    let product = code.substring(stop1 + 1, stop2);
    let s = code.substring(stop2 + 1);

    let partCode = {
        supplierCode: supplier,
        productNumber: product,
        size: s
    }
    return partCode;
}

let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);
console.log("Supplier: " + part1.supplierCode + " Product Number: " + part1.productNumber + " Size: " + part1.size);