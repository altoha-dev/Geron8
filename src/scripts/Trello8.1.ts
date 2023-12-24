// Первая Подзадача
type Tperiod = {
  closeProjects: number;
  income: number;
  hired: number;
  dismissed: number;
  newProjects: number;
};
type Tseason = {
  winter: Tperiod;
  spring: Tperiod;
  summer: Tperiod;
  autumn: Tperiod;
};                                                                          
const seasons: Tseason = {
  winter: {
    closeProjects: 10,
    income: 600000,
    hired: 10,
    dismissed: 10,
    newProjects: 10,
  },
  spring: {
    closeProjects: 10,
    income: 750000,
    hired: 10,
    dismissed: 10,
    newProjects: 10,
  },
  summer: {
    closeProjects: 10,
    income: 550000,
    hired: 10,
    dismissed: 13,
    newProjects: 10,
  },
  autumn: {
    closeProjects: 10,
    income: 900000,
    hired: 99,
    dismissed: 10,
    newProjects: 10,
  },
};
enum ETitleSeason {
winter ="зимний",
spring =  "весений",
summer =  "летний ",
autumn = "осенний "
}
type TdifferensSeason = {
    title:ETitleSeason,
    season : Tperiod
}
const getTitleSeason =(season:string)=>{
    switch(season){
        case"winter":   
        return ETitleSeason.winter
        case"spring":   
        return ETitleSeason.spring
        case"autumn":   
        return ETitleSeason.autumn
        default:
            return ETitleSeason.summer
    }
}
 export let maxIncomeSeason: TdifferensSeason |null = null;
export let minIncomeSeason:TdifferensSeason |null = null;
 export let maxHiredSeason: TdifferensSeason | null = null;
export let maxDismissedSeason: TdifferensSeason | null = null;
Object.entries(seasons).forEach(([seasonKey,seasonValues])=>{
 if(!maxIncomeSeason||seasonValues.income>maxIncomeSeason.season.income){
    maxIncomeSeason = {
        title:getTitleSeason(seasonKey),
        season:seasonValues
    }
}
if(!minIncomeSeason||seasonValues.income<minIncomeSeason.season.income){
    minIncomeSeason = {
        title:getTitleSeason(seasonKey),
        season:seasonValues
    }
}
if (!maxHiredSeason || seasonValues.hired > maxHiredSeason.season.hired) {
    maxHiredSeason = {
        title: getTitleSeason(seasonKey as keyof Tseason),
        season: seasonValues,
    };
}
if (!maxDismissedSeason || seasonValues.dismissed > maxDismissedSeason.season.dismissed) {
    maxDismissedSeason = {
        title: getTitleSeason(seasonKey as keyof Tseason),
        season: seasonValues,
    };
}

})


