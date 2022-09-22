angular
  .module("MiPrimeraAPP", [])
  .controller("PrimerController",["$scope", function (a) {
    a.nombre = "david";
    a.nuevoComentario = {};
    a.coment = [
      {
        comentario: "buen tuto",
        username: "usuario1",
      },
      {
        comentario: "hola k ase",
        username: "usuario222",
      },
    ];
    a.agregarComentario = function () {
      a.coment.push(a.nuevoComentario);
      a.nuevoComentario = {};
    };
  }]);
