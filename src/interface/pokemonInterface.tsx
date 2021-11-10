export default interface pokemon {

    count: number | null

    next: string | null,

    previous: string | null,

    results: { name: string, url: string }[] | null
    
}