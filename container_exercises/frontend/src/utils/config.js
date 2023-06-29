// Emailjs Service Variables
// export const EMAIL_SERVICE_ID = '(PUT_SERVICE_ID)'
// export const EMAIL_TEMPLATE_ID = '(PUT_TEMPLATE_ID)'
// export const PUBLIC_API_KEY = '(PUT_PUBLIC_API_KEY)'
export const EMAIL_SERVICE_ID = 'service_lcp53nu'
export const EMAIL_TEMPLATE_ID = 'template_1gumj1e'
export const PUBLIC_API_KEY = 'Bgn7EOGkCKW87zLNw'

// Status of the Backend ['local', 'online']
// const STATUS='(PUT_STATUS)'
const STATUS='online'

//  Backend url for local
const BACKEND_URL_LOC = 'http://localhost:4000'
const WS_URL_LOC = 'ws://localhost:4000'

//  Backend url for cloud
// const BACKEND_URL_ONL = '(PUT_ONL_GQL_URL)'
// const WS_URL_ONL = '(PUT_ONL_WS_URL)'
const BACKEND_URL_ONL = 'https://library-31bw.onrender.com'
const WS_URL_ONL = 'wss://library-31bw.onrender.com'

const status = process.env.STATUS || STATUS

let BACKEND_URL = null
let WS_URL = null

if (status === 'local') {
    BACKEND_URL = BACKEND_URL_LOC
    WS_URL = WS_URL_LOC
} else if (status === 'online') {
    BACKEND_URL = BACKEND_URL_ONL
    WS_URL = WS_URL_ONL
}

const uri = {BACKEND_URL, WS_URL}

export default uri