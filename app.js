const inputColor = document.getElementById('color-picker')
const selectMode = document.getElementById('scheme-mod')

function render(colors){
    let colorsHtml = ``
    colors.forEach(color => {
        colorsHtml += `
        <div class="color-scheme">
            <div style="background:${color.hex.value}"></div>
            <p>${color.hex.value}</p>
        </div>
        `
    });
    document.querySelector('.color-schemes').innerHTML = colorsHtml
}

document.querySelector('.scheme-form').addEventListener('submit', (e)=>{
    e.preventDefault()
    const color = inputColor.value.slice(1, inputColor.value.length)
    const mode = selectMode.value


    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&format=json`)
        .then(res => res.json())
        .then(data => {
            const colors = data.colors
            render(colors)
        })
})



