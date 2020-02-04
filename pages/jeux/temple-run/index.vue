<template lang="html">
  <div class="">
    <h1>Temple Run</h1>
    <span class="icon">&#xfd4a;</span>
    <p>1-2 joueurs</p>
    10-15 mn
    <h2>Matériel</h2>
    <ul>
      <li>1 carte plateau de jeu</li>
      <li>6 dés, idéalement de 6 couleurs différentes (rouge, orange, jaune, vert, bleu, violet)</li>
    </ul>
    <h2>Mise en place</h2>
    <p>Installez le plateau de jeu à portée des joueurs.</p>
    <p>Chaque joueur choisit un dé pour représenter son personnage et le place sur une case porte (<span class="icon">&#xf1d2;</span>) libre, face 6 visible. La valeur de ce dé représente les points de vie du personnage</p>
    <p>Choisissez ensuite 3 dés qui serviront pour les pièges, lancez en 2 pour déterminer les coordonnées du premier piège en les plaçant dans les zones correspondantes du plateau, orientés selon les indications de leurs emplacements respectifs.</p>
    <p>Placez ensuite le dé piège restant à l'intersection de la colonne et de la ligne ainsi déterminée en l'orientant de manière à ce qu'il affecte le plus équitablement possible les joueurs.</p>
    <p>Placez un dé sur l'emplacement trésor (<span class="icon">&#xf6ba;</span>), il représentera la relique</p>
    <p>Si vous jouez en solo, le dé restant servira à représenter le degré d'ouverture de la sortie, placez le au niveau de l'icône porte ouverte à côté du plateau de jeu.</p>
    <h2>But du jeu</h2>
    Le joueur qui réussi à atteindre la porte du temple avant qu'elle se referme en possession de la relique gagne la partie.
    <h2>Tour de jeu</h2>
    <ol>
      <li>Choisissez un des dés de coordonnée comme dé de mouvement.</li>
      <li>Mettez votre personnage sur une des cases accessibles en fonction du dé choisi (les points visibles sur la face du dé représentent les cases accessibles à votre personnage si il était au centre de la face du dé)</li>
      <li>Si votre personnage est sur une case affectée par le piège, subissez en les effets</li>
      <li>Déterminez quel dé de coordonnée va servir de dé piège en prenant en compte les critères suivants :
        <ul>
          <li>si vous jouez à deux, ce sera votre dé de mouvement</li>
          <li>si vous jouez en solo
            <ul>
              <li>et que vous n'avez pas encore déplacé la relique, il s'agira du dé de plus petite valeur</li>
              <li>et que vous avez déjà déplacé la relique, il s'agira du dé de plus grande valeur</li>
            </ul>
            en cas d'égalité il s'agira du dé de coordonnée déjà présent au tour précédent
          </li>
        </ul>
      </li>
      <li>retirez ce dé de sa ligne de coordonnée</li>
      <li>mettez l'ancien dé piège sur la ligne de coordonnée libre, à l'emplacement déterminé par sa valeur, en l'orientant en fonction des indications de l'emplacement</li>
      <li>lancez le nouveau dé piège et placez le aux coordonnées indiquées selon les indication d'orientation de la ligne de coordonnée qui vient de changer</li>
      <li>appliquez les effets du piège aux joueurs qui seraient sur une case affectée</li>
    </ol>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.icon {
  font-family: "game-icons-net-20190512"
}
@font-face {
  font-family: "game-icons-net-20190512";
  src: url("/game-icons-net-20190512.eot");
  src: url("/game-icons-net-20190512.eot?#iefix") format("embedded-opentype"),
       url("/game-icons-net-20190512.woff2") format("woff2"),
       url("/game-icons-net-20190512.woff") format("woff"),
       url("/game-icons-net-20190512.ttf") format("truetype"),
       url("/game-icons-net-20190512.svg#game-icons-net-20190512") format("svg");
  font-weight: normal;
  font-style: normal;
}
</style>
