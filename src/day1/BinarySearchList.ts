export default function bs_list(haystack: number[], needle: number): boolean {
    // set low and high
    let low = 0, high = haystack.length;

    do {
        //  set mid point 
        let mid = Math.floor(low + (high - low) / 2)
        const v= haystack[mid]
        
        if (v === needle) return true
        else if (v > needle) {
           high = mid;
        }
        else {
            low = mid + 1
        }
    } while (low < high);


    return false
}
