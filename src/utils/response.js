// Todo -> Buat respon untuk menghandle response http di controller

module.exports = () => {

    // Todo -> create response sucess
    const successMessage = (code, msg, data) => ({
        code: code,
        message: msg,
        data: data
    })

    // Todo -> create response error
    const errorMessage = (code, msg) => ({
        code: code,
        message: msg
    })

    // Todo -> create response pagination
    const pagination = (code, msg, data, keyword, page, totalItem, size, sortBy, sortType) => {
        if (isNaN(page) || isNaN(size)) {
            page = 1
            size = 10
        }
        return {
            code: code,
            message: msg,
            data: data,
            keyword: keyword,
            sortBy: sortBy,
            sortType: sortType,
            paging: {
                page: page,
                totalPage: Math.ceil(totalItem / size),
                totalRows: totalItem,
                rowsPerPage: Number(size)
            }
        }
    }
    return {successMessage, errorMessage, pagination}
}