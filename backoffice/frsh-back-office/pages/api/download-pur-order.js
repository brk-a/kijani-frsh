import axios from "axios"

const downloadPurchaseOrder = async (req, res) => {
    if (req.method === "GET") {
        try {
            const { filename } = req.query
            const DUMMY_URL = ""
            const { data } = await axios.get(DUMMY_URL, {
                responseType: "stream",
            })
            res.setHeader("content-disposition", `attachment; filename=${filename}`)
            data.pipe(res)
            rs.send()
        } catch (error) {
            console.info("downloadPurchaseOrder: ", error)
            res.status(400).json({message: "downloadPurchaseOrder: Bad request"})
        }
    } else {
        res.status(405).json({ message: "downloadPurchaseOrder: Not allowed" })
    }
}