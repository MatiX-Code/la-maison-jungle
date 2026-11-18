//Création du composant CareScale pour afficher les icônes de soleil et d'eau en fonction des valeurs de light et water des plantes
// 1. Déclaration du composant React "CareScale" (échelle de soin pour une plante).
// On utilise la "déstructuration" ({ scaleValue, careType }) pour récupérer directement
// les propriétés (props) envoyées par le composant parent.
const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}
const CareScale = ({ scaleValue, careType }) => {
    
    // 2. On crée un tableau de référence représentant les 3 niveaux possibles d'une échelle (de 1 à 3).
    const range = [1, 2, 3]

    // 3. Opérateur ternaire (un "if / else" raccourci) :
    // Si careType vaut 'light', on choisit l'émoji soleil '☀️', sinon (par défaut) l'émoji eau '💧'.
    const scaleType = careType === 'light' ? '☀️' : '💧'

    // 4. Ce que le composant va afficher à l'écran (en JSX, une syntaxe proche du HTML).
    return (
        <div className="icones"
			onClick={() =>alert(`Cette plante requiert ${quantityLabel[scaleValue]} ${
						careType === 'light' ? 'de lumière' : "d'arrosage"
					}`
				)
			}
		>
            {/* 5. Les accolades {} permettent d'écrire du JavaScript à l'intérieur du HTML/JSX.
                La méthode .map() parcourt chaque chiffre du tableau [1, 2, 3] un par un (rangeElem). */}
            {range.map((rangeElem) =>
                // 6. Pour chaque chiffre (1, puis 2, puis 3), on vérifie si la valeur demandée (scaleValue)
                // est supérieure ou égale au chiffre actuel.
                // Exemple : si scaleValue vaut 2, la condition est vraie pour 1 et 2, mais fausse pour 3.
                scaleValue >= rangeElem  ? (
                    // 7. Si c'est VRAI : on affiche l'émoji dans une balise <span>.
                    // L'attribut "key" est obligatoire en React dans une liste pour qu'il puisse identifier chaque élément.
                    <span key={rangeElem.toString()}>{scaleType}</span>
                ) : (
                    // 8. Si c'est FAUX : on retourne "null", ce qui dit à React de ne rien afficher.
                    null
                )
            )}
        </div>
    )
}
// 9. On exporte le composant pour pouvoir l'importer et l'utiliser dans d'autres fichiers du projet.
export default CareScale