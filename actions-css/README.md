#DWM - Tips&Tricks

##Actions CSS

Ajout d'int�raction en CSS 

###target

Utilisation de la pseudo class `:target` pour le d�placement d'un objet.


div#demo:target {
	-webkit-transform: translateX(100px);
}


L'inconv�niant c'est que Le navigateur ne peut cibler qu'un �l�ment � la fois, il n'est donc pas possible de mettre en place plusieurs int�ractions cons�cutives.

###Input checked (checkbox / radio)

Pour mettre en place plusieurs int�ractions cons�cutives sur une m�me page on peut utiliser les input (checkbox ou radio).

`
#demo1:checked + 
#demo2:checked +
#demo3:checked ~ #bloc {
	-webkit-transform: translateX(100px);
}
`

Notez que les checkbox peuvent �tre coch�es et/ou d�coch�es,
si vous voulez emp�cher un utilisateur de d�cocher un input les boutons radio sont la solution.


-------------

_From the [DWM](http://dwm.re) team - [@pixeline](https://twitter.com/pixeline) [@boblemarin](https://twitter.com/boblemarin) [@lelipelip](https://twitter.com/lelipelip) [@aqro](https://twitter.com/aqro) [@remysaintcricq](https://twitter.com/remysaintcricq) [@fbourgaux](https://twitter.com/fbourgaux) [@chdelfosse](https://twitter.com/chdelfosse) [@teddytdk](https://twitter.com/teddytdk)_
