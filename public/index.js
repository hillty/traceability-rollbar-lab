console.log('front end java right here bby')

const sendInfo = () => {
    console.log('sent info')
    axios.get('/api/info').then(res => {
        alert(res.data)
    }).catch(err => console.log(err))
}

const sendCritical = () => {
    console.log('sent critical')
    axios.get('/api/critical').then(res => {
        alert(res.data)
    }).catch(err => console.log(err))
}

const sendWarning = () => {
    console.log('sent warning')
    axios.get('/api/warning').then(res => {
        alert(res.data)
    }).catch(err => console.log(err))
}

const sendError = () => {
    console.log('sent error')
    axios.get('/api/error').then(res => {
        alert(res.data)
    }).catch(err => console.log(err))
}

// buttons

document.getElementById('information').addEventListener('click', sendInfo)
document.getElementById('critical').addEventListener('click', sendCritical)
document.getElementById('warning').addEventListener('click', sendWarning)
document.getElementById('error').addEventListener('click', sendError)