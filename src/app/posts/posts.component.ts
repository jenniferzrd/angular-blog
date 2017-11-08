import { Component, OnInit } from '@angular/core';

interface Item {
  name: string;
  img: string;
  resume: string;
}

const ITEMS = [
  {name: 'Le pompon is coming', img:'../assets/images/bonnet_winter.jpg', resume: "Hodor hodor, hodor. Hodor hodor hodor hodor, hodor, hodor hodor. Hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor - hodor?! Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?!"},
  {name: 'Il est frais mon melon', img:'../assets/images/chapeau_melon.jpg', resume: "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium."},
  {name: 'Woody m\'a dit que j\'peux', img:'../assets/images/chapeau_large.jpg', resume: "Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror."},
  {name: 'Aziz, lummiiière !', img:'../assets/images/interdit.jpg', resume: "Cum horribilem resurgere de sepulcris creaturis, sicut de iride et serpens. Pestilentia, ipsa screams. Pestilentia est haec ambulabat mortuos. Sicut malus voodoo."},
  {name: 'Sous les tropiques', img:'../assets/images/chapeau_ete.jpg', resume: "Aenean a dolor vulnerum aperire accedunt, mortui iam vivam. Qui tardius moveri, sed in magna copia sint terribiles legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi odores aere implent."},
  
];


@Component({
  moduleId: module.id,
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


items = ITEMS;

  constructor() { }

  ngOnInit() {
    this.items = ITEMS;
  }

}
