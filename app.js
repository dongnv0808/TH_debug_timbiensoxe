const checkLicensePlateInHaNoi = (licensePlate) => {
    const array = ['29', '30', '31', '32', '33', '40'];
    for(let i = 0; i < array.length; i++){
        if(licensePlate.startsWith(array[i])){
            return true;
        }
    }
    return false;
}

const listLicensePlates = ["29P1-124123", "30L9-63568", "17B3-29013", "33H2-21231"];

let listLicensePlateInHaNois = [];

// for(let i = 0; i < listLicensePlates.length; i++){
//     if(checkLicensePlateInHaNoi(listLicensePlates[i])){
//         listLicensePlateInHaNois.push(listLicensePlates[i]);
//     }
// }

for(const value of listLicensePlates){
    if(checkLicensePlateInHaNoi(value)){
        listLicensePlateInHaNois.push(value);
    }
}

console.log(`Cac bien so xe: ${listLicensePlateInHaNois}`);