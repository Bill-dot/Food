import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer xJ6y8JxydQEFccAKDY17DhJ18bSs6nW6uzK_GI_81v1Sjp4_6TgiiUO2xs01Ir3gPEv4vdkha8AArI48J-y3t-gwDr2WLNBrOg1Qc9nbMIUQeFAFK2QB3PWlfZEJXnYx'
    }
})