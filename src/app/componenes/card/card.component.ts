import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  listCards:any[]= [
    {
    nome: "Pod ",
    preco: 2.50,
    categoria: "Papelaria",
    emEstoque: true,
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa93SOty2xM2676gL1NtkFpXSmHM3B0z8rFahV95fur9Y_0Wdz9jHFxbjgr8-3MOyGY6o&usqp=CAU'
    },
    {
    nome: "Caderno Universitário",
    preco: 15.90,
    categoria: "Papelaria",
    emEstoque: true,
    img:'https://www.victoriastore.com.br/storage/images/products/1637756248Y2ylKlea.png'
    },
    {
    nome: "Mochila Escolar",
    preco: 89.99,
    categoria: "Acessórios",
    emEstoque: false,
    img: 'https://images.tcdn.com.br/img/img_prod/1329322/pod_descartavel_ignite_v250_25000_puffs_2153_1_2b7ca61bb53ab099a73072e787728f5e.jpg'
    },
    {
    nome: "Lápis de Cor 24 Cores",
    preco: 22.00,
    categoria: "Arte",
    emEstoque: true,
    img:'https://cdn.sistemawbuy.com.br/arquivos/61793d4f71e57473a93a378e72c4df88/produtos/6749d31f751fb/7b56eb7c50d8bebb1eb6fb95e6897f8f-6841c62152363.jpg'
    },
    {
    nome: "Apontador com Depósito",
    preco: 3.75,
    categoria: "Papelaria",
    emEstoque: true,
    img:'https://cdn.sistemawbuy.com.br/arquivos/61793d4f71e57473a93a378e72c4df88/produtos/66c5c00f08e0b/pod-black-sheep-20000-66c62ad2adaee.jpg'
    },
    {
    nome: "grafite",
    preco: 3.75,
    categoria: "Papelaria",
    emEstoque: true,
    img:'https://cdn.sistemawbuy.com.br/arquivos/61793d4f71e57473a93a378e72c4df88/produtos/6615434dbde6e/bb9970950233811f7393495cdfaf41a6-6615434e0fc80.jpg'
    },
    {
    nome: "cigarro",
    preco: 3.75,
    categoria: "Papelaria",
    emEstoque: true,
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrcJIM1Rli6UGF2IZ9g4LSBstlDYeOUDoBAQ&s'
    },
    {
    nome: "esqueiro",
    preco: 3.75,
    categoria: "Papelaria",
    emEstoque: true,
    img:'https://cdn.shoppub.io/cdn-cgi/image/w=600,h=600,q=80,f=auto/lojapen/media/uploads/produtos/foto/yymzztly/310db4f6-2450-4534-8f6c-903989f3d00c.png'
    }
  ]
}
