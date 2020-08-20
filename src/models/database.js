const mongoose = require('mongoose');
const { stringify } = require('uuid');
const {Schema} = mongoose;

const Data = new Schema({
    
    /*-----index-----*/
    ipart:String,
    iparc:String,
    
    /*----- Noticias---- */
    noticias:String,

    /*------ Comentarios -----*/
    comhead: String,
    combody: String,
    comhead1: String,
    combody1: String,

    /*---- Jugadores ----- */
    jnombre: String,
    jimg: String,
    japellido: String,
    jcedula: String,
    jgenero: String,
    jgoles: String,
    jtarjetasam: String,
    jtarjestasroj: String,
    jamonestaciones: String,
    jequipo: String,
    jdivision: String,

    /*------ Equipos ----- */
    enombre: String,
    eescudo: String,
    egenero: String,
    edivision: String,
    edelegado: String,
    edelcedula: String,
    epuntos: String,
    epartidosj: String,
    epartidosg: String,
    epartidosempatados: String,
    epartidosperdidos: String,
    egolesmas: String,
    egolesmenos: String,
    esaldo: String,
    efairplay: String,

    /*------- Torneos ------*/
    tnombre: String,
    tdivisional: String,


    /*------- Fechas -------*/
    fnombre: String,
    ftorneo: String,


    /*------- Partidos ------*/
    ptorneo: String,
    pfecha: String,
    pfechaid: String,
    pdate: String,
    ptime: String,
    pequipoa: String,
    pequipob: String,
    peamarcador: Number,
    pebmarcador: Number,
    peagoles: String,
    pebgoles: String,
    pamarillasa: String,
    pamarillasb: String,
    projasa: String,
    projasb: String,
    pfpa: String,
    pfpb: String,
    parbitro: String,
    pobservaciones: String,
    pcancha: String,
    pid: String,
    pjugador: String,
    ppuntualidad: String,
    pfairplay: String,
    ppelota: String,
    pindumentaria: String,
    pformulario: String,

    /*---- Seguridad------*/
    paneladmin: String,
    delegado:String,

    /*----- Mensaje ----*/
    msgemail: String,
    msgbody: String,

    /*---- Kaygua ----*/
    msgname: String,
    msgmail: String,
    msgtel: String,
    msgtext: String,
    
    /*------ imagenes ----- */
    imgid: String,
    imgurl: String,
    imgpath: String,


    title: String,
    description: String,
    imageURL: String,
    public_id: String



});

module.exports= mongoose.model('Data', Data);
