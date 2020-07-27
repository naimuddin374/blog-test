const fs = require("fs")
const path = require("path")


module.exports = {
    actionSuccess(res, message = 'Success', data = null) {
        res.status(200).json({
            message,
            data,
        })
    },
    createdSuccess(res, data = null, message = 'Created Successful!') {
        res.status(201).json({
            message,
            data,
        })
    },
    updatedSuccess(res, data = null, message = 'Update Successful!') {
        res.status(201).json({
            message,
            data,
        })
    },
    dataFound(res, data = null) {
        res.status(302).json({
            message: 'Data Found!',
            data,
        })
    },
    badRequest(res, error, message = "Bad Request!") {
        res.status(400).json({
            message,
            error
        })
    },
    validationError(res, error) {
        res.status(406).json({
            message: 'Validation Error!',
            error
        })
    },
    serverError(res, error) {
        res.status(500).json({
            message: 'Server Error Occurred!',
            error
        })
    },
    makeRand(length) {
        var result = '';
        var characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    },
    uniqueCode(num) {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1
        if (month < 10) {
            month = "0" + month
        }
        let day = String(date.getDate()).padStart(2, '0');
        let uniqueCode = year + month + day + (num + 1)
        return uniqueCode;
    },
    filterText(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    },
    copyFile(fileName) {
        if (fileName.substring(0, 9) === '/uploads/') {
            fileName = fileName.substring(9)
        }
        const pathToFile = path.join(__dirname, `/../client/public/uploads/${fileName}`)
        const pathToNewDestination = path.join(__dirname, `../client/build/uploads`, fileName)
        fs.copyFile(pathToFile, pathToNewDestination, function (err) {
            if (err) {
                console.log('Copy err', err)
            } else {
                console.log("Successfully copied and moved the file!")
            }
        })
    },
    removeFile(file) {
        if (fs.existsSync(`${__dirname}/../client/public${file}`)) {
            fs.unlink(`${__dirname}/../client/public${file}`, (err) => {
                if (err) console.log('unlink error', err)

                fs.unlink(`${__dirname}/../client/build${file}`, (err) => {
                    if (err) console.log('unlink error', err)
                    console.log('This file has been removed from build successfully.')
                });
                console.log('This file has been removed successfully.')
            });
        }
    }
}