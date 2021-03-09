// var express = require('express');
const Menu = require('../models/menu');
const Role = require('../models/role')
// const bodyParser = require('body-parser')
let creatMenu = (req, res) =>{
    Role.findOne({_id: req.body.roleId},(err,role)=>{
        if(role != null){
            const menu = new Menu(req.body)
            menu.save((e,result)=>{
                if(e){
                    return res.json({e})
                }
                res.json({menu: result})
            })
        }else{
            res.json({err: 'Not Role'})
        }
    })
}

let listMenu = (req, res) =>{
    var roleId = req.params.roleId;
    let listMenu = [];
    Menu.find().then((list) => {
        list.map((item)=>{
            if(item.roleId == roleId){
                listMenu.push(item);
            }
        })
        res.send(listMenu);
    }, (e) => {
        res.status(400).send(e);
    })
}

let menuController = {
    creatMenu: creatMenu,
    listMenu: listMenu,
};

module.exports = {menuController};