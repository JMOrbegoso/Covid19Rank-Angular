import { Country, CountryHistorical, HistoricalValue, RankValueEnum, RankHistoricalValue } from './covid19-data.types';

function sortCountriesByRankValue(rankValueEnum : RankValueEnum, countries : Country[]) : [string, number][] {
    switch(rankValueEnum){
        case RankValueEnum.Infected:
            return countries.sort((c1, c2) => c2.cases - c1.cases).map(c => [c.country, c.cases]);

        case RankValueEnum.Recovered:
            return countries.sort((c1, c2) => c2.recovered - c1.recovered).map(c => [c.country, c.recovered]);

        case RankValueEnum.Deceased:
            return countries.sort((c1, c2) => c2.deaths - c1.deaths).map(c => [c.country, c.deaths]);

        case RankValueEnum.Tests:
            return countries.sort((c1, c2) => c2.tests - c1.tests).map(c => [c.country, c.tests]);

        case RankValueEnum.Lethality:
            return countries.sort((c1, c2) => (c2.deaths / c2.cases) - (c1.deaths / c1.cases)).map(c => [c.country, (c.deaths / c.cases)]);

        case RankValueEnum.CasesPerOneMillion:
            return countries.sort((c1, c2) => c2.casesPerOneMillion - c1.casesPerOneMillion).map(c => [c.country, c.casesPerOneMillion]);

        case RankValueEnum.DeathsPerOneMillion:
            return countries.sort((c1, c2) => c2.deathsPerOneMillion - c1.deathsPerOneMillion).map(c => [c.country, c.deathsPerOneMillion]);

        case RankValueEnum.TestsPerOneMillion:
            return countries.sort((c1, c2) => c2.testsPerOneMillion - c1.testsPerOneMillion).map(c => [c.country, c.testsPerOneMillion]);
    }
}

export function GetRankHistoricalValue(countries : Country[], availableCountries : string []) : Map<RankValueEnum, Map<string, number>> {
    const rankValueEnums: RankValueEnum[] = [ RankValueEnum.Infected,
                                              RankValueEnum.Deceased,
                                              RankValueEnum.Recovered,
                                              RankValueEnum.Tests,
                                              RankValueEnum.Lethality,
                                              RankValueEnum.CasesPerOneMillion,
                                              RankValueEnum.DeathsPerOneMillion,
                                              RankValueEnum.TestsPerOneMillion, ];
    
    const validCountries = countries.filter(c => availableCountries.includes(c.country.toLowerCase()));
    
    return new Map<RankValueEnum, Map<string, number>>(rankValueEnums.map(rankValue => [ rankValue, new Map<string, number>(sortCountriesByRankValue(rankValue, validCountries).map(c => [c[0], c[1]]))]));
}

export function GetHistoricalData(countryHistorical: CountryHistorical) : Map<string, HistoricalValue> {

    const casesArray : [string, number][] = Object.entries(countryHistorical.timeline.cases);
    const deathsArray : [string, number][] = Object.entries(countryHistorical.timeline.deaths);
    const recoveredArray : [string, number][]= Object.entries(countryHistorical.timeline.recovered);		

    const casesMap = new Map(casesArray);
    const deathsMap = new Map(deathsArray);
    const recoveredMap = new Map(recoveredArray);		
    
    const validDatesCases : string[] = [...[...casesArray].filter((c,d) => d !== 0).map(c => c[0])];			
    const validDatesDeaths: string[] = [...[...deathsArray].filter((c,d) => d !== 0).map(c => c[0])];
    const validDatesRecovered: string[] = [...[...recoveredArray].filter((c,d) => d !== 0).map(c => c[0])];	

    const validDates = [...new Set([...validDatesCases ,...validDatesRecovered, ...validDatesDeaths])];
    
    return new Map<string, HistoricalValue>(validDates.map(date => [date, new HistoricalValue(
        casesMap.has(date)? <number>casesMap.get(date) : 0,
        deathsMap.has(date)? <number>deathsMap.get(date) : 0,
        recoveredMap.has(date)? <number>recoveredMap.get(date) : 0,
    )]));
};

export function GetLethalityHistoricalData(countryHistorical: CountryHistorical) : Map<string, number> {

    const casesArray : [string, number][] = Object.entries(countryHistorical.timeline.cases);
    const deathsArray : [string, number][] = Object.entries(countryHistorical.timeline.deaths);

    const casesMap = new Map(casesArray);
    const deathsMap = new Map(deathsArray);
    
    const validDatesCases : string[] = [...[...casesArray].filter((c,d) => d !== 0).map(c => c[0])];			
    const validDatesDeaths: string[] = [...[...deathsArray].filter((c,d) => d !== 0).map(c => c[0])];

    const validDates = [...new Set([...validDatesCases , ...validDatesDeaths])];

    return new Map<string, number>(validDates.map(date =>
        [date, casesMap.has(date) && deathsMap.has(date) ? <number>casesMap.get(date) !== 0 ? 100 * <number>deathsMap.get(date) / <number>casesMap.get(date) : 0 : 0]));
};