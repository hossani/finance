export  const calculateCategoryTotals = (transactions) => {
    const categoryTotals = {
      utilitaire: 0,
      alimentation: 0,
      education: 0,
      transport: 0,
      santé: 0,
      epargne: 0,
      loisirs: 0,
      sport: 0,
      autre: 0
    };
  
    transactions.forEach((transaction) => {
        switch (transaction.categorie) {
          case 'Utilitaires':
            categoryTotals.utilitaire += transaction.montant;
            break;
          case 'Alimentation':
            categoryTotals.alimentation += transaction.montant;
            break;
          case 'Education':
            categoryTotals.education += transaction.montant;
            break;
          case 'Transport':
            categoryTotals.transport += transaction.montant;
            break;
          case 'Santé':
            categoryTotals.santé += transaction.montant;
            break;
          case 'Epargne':
            categoryTotals.epargne += transaction.montant;
            break;
          case 'Loisirs':
            categoryTotals.loisirs += transaction.montant;
            break;
          case 'Sport':
            categoryTotals.sport += transaction.montant;
            break;
          case 'Autres':
            categoryTotals.autre += transaction.montant;
            break;
          default:
            break;
        }
    });
  
    return categoryTotals;
  };
  