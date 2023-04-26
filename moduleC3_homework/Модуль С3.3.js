// Задание 1 Модуль С3.3
function printMyObject (myObj) {
    for (var myProp in myObj) {
      if (myObj.hasOwnProperty(myProp)) {
        console.log(myProp, myObj[myProp]);
      }
    }
  }

function checkMyPropInObj (myStr, myObj) {
    return (myStr in myObj);
  }

function createMyObjWithoutProto() {
  var myObj = Object.create(null);
  return myObj;
}