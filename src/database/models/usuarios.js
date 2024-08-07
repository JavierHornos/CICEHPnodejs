function usuarios (sequelize, Datatypes){

    let a = 'usuarios';

    let b = {
      Id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      Nombre: {type: Datatypes.STRING},
      Apellido: {type: Datatypes.STRING(50)},
      Email: {type: Datatypes.STRING(100)},
      Password: {type: Datatypes.STRING(150)},
      Administrador: {type: Datatypes.INTEGER},
    }
  
    let c = {camelCase: false, timestamps: false}; 
  
    const usuarios = sequelize.define(a,b,c)
  
    return usuarios;
  }
  
  
  module.exports = usuarios;