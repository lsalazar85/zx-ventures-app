import { ROOT_URL } from '../../constants'
import axios from "axios"

// Generic fetch function
export const getData = async (setState, urlRoute) => {
    try {
        let res = await axios.get(`${ROOT_URL}${urlRoute}`)
        setState(res.data)
    } catch(e) {
        console.log(e)
    }
}

// get recommendations products by selected product
export const getProductRecommendation = async (setState, productId) => {
    try {
        let res = await axios.get(`${ROOT_URL}/recommendations?product_id=${productId}`)

        const requests = res.data[0].recommendations.map(id => {
            return axios.get(`${ROOT_URL}/products?product_id=${id}`)
        })

        Promise.all(requests).then(results => setState(results.flatMap(item => item.data)));

    } catch (e) {
        console.log(e)
    }
}



