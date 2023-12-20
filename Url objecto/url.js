const url= new URL("http://www.libre.com.mx/SS2025?colecciones=1&compras=2000");

console.log(url.hostname);
console.log(url.pathname);
console.log(url.searchParams.get("colecciones"));