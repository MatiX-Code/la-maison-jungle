/*Consigne :     Vous allez créer un composant  PlantItem  qui sera un composant enfant de  ShoppingList.

PlantItem  prend en props :

    name pour le nom de la plante ;

    cover pour l'image correspondante ;

    id qui correspond à l'item de chaque élément ;

    light;

    water.

    Les props  name  et  cover  seront utilisées directement dans  PlantItem  .

    light  et  water  , que nous avons déjà créées ensemble, seront passées au composant  CareScale  dans  PlantItem  .

    Vous trouverez dans  styles/PlantItem.css  les classes CSS  lmj-plant-item-cover  et  lmj-plant-item  qui vous aideront à créer de beaux composants.

    Je vous propose également de remplacer nos emojis par les icônes 'sun' et 'water' que vous trouverez dans  /assets  .*/

    import '../styles/PlantItem.css'
    
    import CareScale from './CareScale'

// Création d'une fenêtre popup lors d'un clique sur la liste produit

    const handleClick = (plantName) => {
        alert(`Vous voulez acheter 1 ${plantName} ? Vous avez des goûts de chiottes `)

    }

    function PlantItem({ name, cover, light, water }) {
        return(
            <li className='lmj-plant-item' >
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} onClick = {() => {handleClick(name)}}/>
            {name}
            <>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </>
            </li>
        )
    }
    export default PlantItem


    
