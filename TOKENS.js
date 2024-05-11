var tokens = {
    // Palabras reservadas
    "entera": { color: "#FFA533", tipo: "palabraReservada" },
    "gaseosa": { color: "#FFA533", tipo: "palabraReservada" },
    "almendra": { color: "#FFA533", tipo: "palabraReservada" },
    "descremada": { color: "#FFA533", tipo: "palabraReservada" },
    "cafe": { color: "#FFA533", tipo: "palabraReservada" },
    "deslactosada": { color: "#FFA533", tipo: "palabraReservada" },
    "carrito": { color: "#FFA533", tipo: "palabraReservada" },
    "caja": { color: "#FFA533", tipo: "palabraReservada" },
    "canasta-carrito": { color: "#FFA533", tipo: "palabraReservada" },
    "arroz": { color: "#FFA533", tipo: "palabraReservada" },
    "jabón": { color: "#FFA533", tipo: "palabraReservada" },
    "licor": { color: "#FFA533", tipo: "palabraReservada" },
    "papel": { color: "#FFA533", tipo: "palabraReservada" },
    "escaner": { color: "#FFA533", tipo: "palabraReservada" },
    "salida": { color: "#FFA533", tipo: "palabraReservada" },
    "muestra": { color: "#FFA533", tipo: "palabraReservada" },
    "muestrafin": { color: "#FFA533", tipo: "palabraReservada" },
    "producto": { color: "#FFA533", tipo: "palabraReservada" },
    "sucursal": { color: "#FFA533", tipo: "palabraReservada" },
    "marcas": { color: "#FFA533", tipo: "palabraReservada" },
    "gondola": { color: "#FFA533", tipo: "palabraReservada" },
    "botella": { color: "#FFA533", tipo: "palabraReservada" },
    "disponible": { color: "#FFA533", tipo: "palabraReservada" },
    "ocupado": { color: "#FFA533", tipo: "palabraReservada" },
    "guardia": { color: "#FFA533", tipo: "palabraReservada" },
    "cantidad": { color: "#FFA533", tipo: "palabraReservada" },
    "bandaentera": { color: "#FFA533", tipo: "palabraReservada" },
    "#": { color: "#FFA533", tipo: "salto de linea" },
    "camaras": { color: "#FFA533", tipo: "palabraReservada" },
    "pasillo": { color: "#FFA533", tipo: "palabraReservada" },
    "porque": { color: "#FFA533", tipo: "palabraReservada" },
    "Factura": { color: "#FFA533", tipo: "palabraReservada" },
    // Modificadores de acceso
    "arroz": { color: "blue", tipo: "modificadorAcceso" },
    "jabon": { color: "blue", tipo: "modificadorAcceso" },
    "licor": { color: "blue", tipo: "modificadorAcceso" },
    "papel": { color: "blue", tipo: "modificadorAcceso" },
    // Operadores aritméticos
    "s+": { color: "purple", tipo: "operadorAritmetico" },
    "r-": { color: "purple", tipo: "operadorAritmetico" },
    "m+": { color: "purple", tipo: "operadorAritmetico" },
    "%": { color: "purple", tipo: "operadorAritmetico" },
    "~=~=": {color: "purple", tipo: "operadorAritmetico"},
    "~=": {color: "purple", tipo: "operadorAsignacion"},
    "d-": {color: "purple", tipo: "operadorAsignacion"},
    "_": {color: "purple", tipo: "operadorLogico"},
    "o": {color: "purple", tipo: "operadorLogico"},
    "p_": {color: "purple", tipo: "relacionales"},
    "g_": {color: "purple", tipo: "relacionales"},
    "p~": {color: "purple", tipo: "relacionales"},
    "g~": {color: "purple", tipo: "relacionales"},
    };
    
    // Exportar el objeto tokens para su uso en otros archivos
    window.TOKENS = tokens;