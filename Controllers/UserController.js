const mongoose= require('mongoose');
const focoModel= require('../models/Focos');
var focoC={};

focoC.getAll=(function(req, res){
    focoModel.find({}, function(err, datos){
        if(err){
            res.status(500).json({status:500, err});
        }else{
            console.log('Data obtenidad con exito')
            res.status(200).json({status:200, datos});
        }
    })
})

focoC.registrar=(function(req, res){
    var obj= new focoModel({
        marca: req.body.marca,
        tipo: req.body.tipo,
        consumo: req.body.consumo,
        eficiencia: req.body.eficiencia
    });
    obj.save(function(err){
        if(err){
            res.status(500).json({status:500, err})
        }else{
            console.log('Se registro con exito');
            res.status(200).json({status:200, obj});
        }
    })

})
focoC.buscarporId= (function(req, res){
    //console.log(req);
    var id= req.params.id;
    focoModel.findById(id, function(err, juego){
        if(err || juego==null){
            res.status(500).json({
                msj:'No fue encontrado el foco',
                err,
                status:500
            })
        }else{
            res.status(200).json({status:200, juego});
        }
    })
});

focoC.actualizar= (function(req, res){
    //console.log(req);
    var id= req.params.id;
    var actualizado={
        marca: req.body.marca,
        tipo: req.body.tipo,
        consumo: req.body.consumo,
        eficiencia: req.body.eficiencia
    }
    focoModel.findByIdAndUpdate(id, actualizado, function(err){
        if(err){
            res.status(500).json({msj:'No se pudo actualizar', err, status:500});
        }else{
            res.status(200).json({status:200, actualizado});
        }
    })
});

focoC.deletear= (function(req, res){
    //console.log(req);
    var id= req.params.id;

    focoModel.findByIdAndDelete(id, function(err, eliminado){
        if(err){
            res.status(500).json({msj:'No se pudo eliminar ', err, status:500});
        }else{
            res.status(200).json({status:200, eliminado});
        }
    })
});


module.exports=focoC;