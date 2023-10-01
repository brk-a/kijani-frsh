const termsOptions = [
    {
        id: 0,
        initials: "",
        full: "Select one -",
        description: "",
        value: "",
    },
    {
        id: 1,
        initials: "EXW",
        full: "Ex works",
        description: "seller is only required to make the goods available for pickup at the seller’s business location or another specified location",
        value: "exWorks",
    },
    {
        id: 2,
        initials: "FCA",
        full: "Free carrier",
        description: " seller of goods is responsible for the delivery of those goods to a destination specified by the buyer",
        value: "freeCarrier",
    },
    {
        id: 3,
        initials: "CPT",
        full: "Carriage paid to",
        description: "seller delivers the goods at their expense to a carrier or another person nominated by the seller",
        value: "carriagePaidTo",
    },
    {
        id: 4,
        initials: "CIP",
        full: "Carriage and insurance paid to",
        description: "seller pays freight and insurance to deliver goods to a seller-appointed party at an agreed-upon location",
        value: "carriageInsurancePaid",
    },
    {
        id: 5,
        initials: "DAP",
        full: "Delivered at place",
        description: "seller agrees to pay all costs and suffer any potential losses of moving goods sold to a specific location",
        value: "deliveredAtPlace",
    },
    {
        id: 6,
        initials: "DPU",
        full: "Delivered at place unloaded",
        description: "seller is responsible for moving the goods from origin until their delivery at the disposal place agreed unloaded at destination",
        value: "deleiveredPlaceUnloaded",
    },
    {
        id: 7,
        initials: "DDP",
        full: "Delivered duty paid",
        description: "seller assumes all of the responsibility, risk and costs associated with transporting goods until the buyer receives or transfers them at the destination port",
        value: "deliveredDutyPaid",
    },
]

export default termsOptions