const dataString = prompt("Digite uma data no formato dd/mm/aaaa: ");

const data = new Date(dataString.split("/").reverse().join("-"));

if (isNaN(data.getTime())) {
  alert("Data inválida");
} else {
  alert("Data válida");
}
