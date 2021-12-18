const JsonResponse = (
    data = [], 
    success = 'false', 
    message = 'something went wrong', 
    status = 200
    ) => {
    return {
        "success": success,
        "message": message,
        "status": status,
        "data": data
    }
}

// let unsuccessful = () => {
//     return {
//         "success": false,
//         "message": "",
//         "status": 404,
//         "data": []
//     }
// }

// let successful = () => {
//     return {
//         "success": true,
//         "message": "",
//         "status": 200,
//         "data": []
//     }
// }

module.exports = JsonResponse
// module.exports.successful = successful