const mostrarReloj = () =>{
    let fecha = new Date();
    let hr = fecha.getHours();
    let min = fecha.getMinutes();
    let sec = fecha.getSeconds();

    if (hr.toString().length < 2) hr = '0' + hr;
    if (min.toString().length < 2) min = '0' + min;
    if (sec.toString().length < 2) sec = '0' + sec;

    document.getElementById('hora').innerHTML = `${hr}:${min}:${sec}`;


    let meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Nov', 'Dic'];
    let dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    
    let dia_name = dias[fecha.getDay()];
    let mes = meses[fecha.getMonth()];
    let dia = fecha.getDate();

    let fechaTexto = `${dia_name}, ${dia} ${mes}`;

    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');

};

setInterval(mostrarReloj, 1000);