import { CountryHistorical, HistoricalValue } from './covid19-data.types';

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