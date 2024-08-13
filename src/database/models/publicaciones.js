function publicaciones (sequelize, Datatypes){

    let a = 'publicaciones';

    let b = {
      Id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      titulo: {type: Datatypes.STRING},
      categoria: {type: Datatypes.INTEGER(50)},
      fecha_creacion: {type: Datatypes.DATE},
      descripcion: {type: Datatypes.STRING(2000)},
      link: {type: Datatypes.STRING(150)},
      imagen: {type: Datatypes.STRING(100)},
      tituloLeerMas: {type: Datatypes.STRING},
      subTituloLeerMas: {type: Datatypes.STRING},
      parrafoUnoLeerMas: {type: Datatypes.STRING(4000)},
      parrafoDosLeerMas: {type: Datatypes.STRING(4000)},
      tema: {type: Datatypes.STRING(50)},
      nombre: {type: Datatypes.STRING(50)},
      fuente: {type: Datatypes.STRING(50)},
    }
  
    let c = {camelCase: false, timestamps: false}; 
  
    const publicaciones = sequelize.define(a,b,c)
  
    return publicaciones;
  }
  
  
  module.exports = publicaciones;