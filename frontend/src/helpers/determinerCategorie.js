export  const determinerCategorie = (categorie) => {
        switch (categorie) {
          case 'Utilitaires':
           return 'utilitaire'
          case 'Alimentation':
            return 'alimentation';

          case 'Education':
            return 'education';
          case 'Transport':
            return 'transport';
            ;
          case 'Santé':
            return 'santé';

          case 'Epargne':
            return 'epargne';

          case 'Loisirs':
            return 'loisirs';

          case 'Sport':
            return 'sport';

          case 'Autres':
            return 'autre';

          default:
            return null;
        }
  
  };
  