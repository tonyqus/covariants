import regionCountryJson from 'src/../data/region_country.json'

export function getRegionsRaw(): Record<string, string[]> {
  return regionCountryJson
}

export interface RegionState {
  regionName: string
  countries: string[]
  enabled: boolean
}

export function getRegions(): RegionState[] {
  return Object.entries(regionCountryJson).map(([regionName, countries]) => ({ regionName, countries, enabled: true }))
}

export function isCountryRegionEnabled(country: string, regions: RegionState[]) {
  return regions.some((region) => region.enabled && region.countries.includes(country))
}
