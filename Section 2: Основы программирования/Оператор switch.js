// Оператор switch
let status = "idel";

switch (status) {
  case "idel": {
    console.log("status is idel");
    break;
  }
  case "loading": {
    console.log("Data is loading");
    break;
  }
  case "respond": {
    console.log("We have date");
    break;
  }
  case "error": {
    console.log("Something went wrong");
    break;
  }
  default:{
    console.log('Error');
    break;
  }
}
