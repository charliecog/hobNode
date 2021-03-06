let validateBiscuit = (biscuit) => {
    let { name, img, RDT } = biscuit

    //forces RDT to be a string
    RDT += ''

    if(
        name.match(/\w+(\s+\w+)*/) &&
        name.length < 50 &&
        img.match(/(https?:\/\/)+([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/) &&
        RDT.match(/^\d{1,2}$/)
    ){
        return true
    } else {
        return false
    }
}

let validateObjectId = (id) => {
    let reg = /^[a-fA-F0-9]{24}$/
    return (id.match(reg)? true : false);
}

module.exports.validateBiscuit = validateBiscuit
module.exports.validateObjectId = validateObjectId