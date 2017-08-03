const fightersData = require('./fighters.json');

const orderBy = (list, attName) => {
  return list.reduce((curr, prev) => {
    let attr = prev[attName];
    if (attr !== null) {
      if (!curr[attr]) {
        curr[attr] = [];
      }
      curr[attr].push(prev);
    }
    return curr;
  }, {});
};

const sortByWins = (fighterList) => {
  Object.keys(fighterList).map(key => {
    const weightClassList = fighterList[key];
    weightClassList.sort((a, b) => b.wins - a.wins);
  });
  return fighterList;
}

const moveChampionToTheTop = (fighterList) => {
  Object.keys(fighterList).map(key => {
    const weightClassList = fighterList[key];

    let championIndex;
    
    const champion = weightClassList.find((fighter, index) => {
      if (fighter.title_holder) {
        championIndex = index;
        return true;
      }
      return false;
    });
    
    weightClassList.splice(championIndex, 1);
    weightClassList.splice(0, 0, champion);
  });

  return fighterList;
}

const getFighters = ((response, {
  orderByfn,
  sortByWinsfn,
  moveChampionToTheTopfn
 }) => {
  return moveChampionToTheTopfn(
    sortByWinsfn(
      orderByfn(response, 'weight_class')
    )
  );
});

const fighters = getFighters(
  fightersData,
  { 
    orderByfn: orderBy,
    sortByWinsfn: sortByWins,
    moveChampionToTheTopfn: moveChampionToTheTop
  }
);

Object.keys(fighters).map(weightClass => {
  const fightersByWeightClass = fighters[weightClass];
  console.log(`Current champion at ${fightersByWeightClass[0].weight_class} class:`);
  console.log(`${fightersByWeightClass[0].first_name} ${fightersByWeightClass[0].last_name}`);
  console.log('----------------------------');
});