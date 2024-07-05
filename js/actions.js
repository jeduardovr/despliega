function despliega() {
    let messageDiv = document.getElementById('message')
    let span = document.createElement('span')
    span.style = 'font-size: 30px'
    span.innerHTML = 'Bienvenido al Sistema'
    messageDiv.append(span)
}