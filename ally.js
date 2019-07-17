const fs = require('fs');


filePath = '/Users/zachsoles/Downloads/June 2019 Tracking Sheet.csv';
var data = fs.readFileSync(filePath, 'utf8');
var dataArray = data.split(/\r?\n/);
var temp = dataArray.map(x => x.split(','));
var index = temp[0].findIndex(x => x.toLowerCase() === 'support type');
var support = temp.map(x => x[index]);
console.log(support)

var other = 0, office = 0, d2l = 0, resent = 0, ramcloud = 0, hardware = 0, adobe = 0, sap = 0, software = 0, multi = 0, purchase = 0, password = 0, lockout = 0, ramnet = 0;

support.map(x => {
    if(x === 'Other') other += 1;
    if(x === 'Office/Outlook') office += 1;
    if(x === 'D2L Transfer') d2l += 1;
    if(x === 'Hardware issue') hardware += 1;
    if(x === 'Software Support') software += 1;
    if(x === 'SAP Password Reset') sap += 1;
    if(x === 'Multimedia') multi += 1;
    if(x === 'Purchases/Upgrades') purchase += 1;
    if(x === 'Resnet Transfer') resent += 1;
    if(x === 'Account Lockout') lockout += 1;
    if(x === 'Password Reset') password += 1;
    if(x === 'Ramnet Configuration') ramnet += 1;
    if(x === 'RamCloud/Citrix') ramcloud += 1;
    if(x === 'Adobe') adobe += 1;
})

console.log(other);
console.log(office);
console.log(d2l);
console.log(resent);
console.log(ramcloud);
console.log(hardware);
console.log(sap);
console.log(software);
console.log(adobe);
console.log(multi);
console.log(purchase);
console.log(password);
console.log(lockout);
console.log(ramnet);
