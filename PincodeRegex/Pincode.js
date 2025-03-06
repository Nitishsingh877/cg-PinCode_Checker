const pinCode = Number(process.argv[2]);
const pinCodeRegex = RegExp("[0-9]{6}")

if(pinCodeRegex.test(pinCode)){
  console.log("Pin code is valid !!!")
}else{
  console.log("Pin code is not valid !!!")
}