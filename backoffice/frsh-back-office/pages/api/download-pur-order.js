import axios from "axios"

const downloadPurchaseOrder = async (req, res) => {
    if (req.method === "GET") {
        try {
            const { orderDate, deliveryDate, supplierName, shippingAddress, terms, csv, csvName  } = req.query
            const FILE_URL = req.body.fuleUrl
            const { data } = await axios.get(FILE_URL, {
                responseType: "stream",
            })
            res.setHeader("content-disposition", `attachment; filename=${csv}`)
            data.pipe(res)
            res.send()
        } catch (error) {
            console.info("downloadPurchaseOrder: ", error)
            res.status(400).json({message: "downloadPurchaseOrder: Bad request"})
        }
    } else {
        res.status(405).json({ message: "downloadPurchaseOrder: Not allowed" })
    }
}
downloadPurchaseOrder()