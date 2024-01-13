
const NUMBER_OF_ELEMENTS_TO_BE_REMOVED = 1000;
const NUMBER_OF_ELEMENTS_LIMIT_IN_ARRAY = 5000;

const reduceChatArray = (aChatArray) => {
    // console.log("inside reduceChatArray()");
    if(aChatArray.length > NUMBER_OF_ELEMENTS_LIMIT_IN_ARRAY){
        // console.log("more than 10 elements");
        //remove first 1000 msgs
        aChatArray = aChatArray.slice(-NUMBER_OF_ELEMENTS_TO_BE_REMOVED);
        // console.log("now has : ");
        // console.log(aChatArray);
    }
    
}


module.exports = {
    reduceChatArray: reduceChatArray
}