export default interface gameInterface {

    weight: number,

    moves: { move: { name: string, url: string }, version_group_details: any }[],

    types: { slot: number, type: { name: string, url: string } }[],

    stats: { base_stat: number, effort: number, stat: { name: string, url: string } }[],

    species: { name: string, url: string }

}