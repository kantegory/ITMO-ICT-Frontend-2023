export function useDate(openDate){
    const date = new Date(openDate)
    const dd = date.getDate();
    const mm = date.getMonth() + 1
    const yyyy = date.getFullYear();
    let hh = date.getHours();
    let min = date.getMinutes();
    if(min < 10){
        min = '0'+min;
    }
    const strDate = dd + '.' + mm + '.' + yyyy + '  ' + hh + ':' + min;
    //console.log(strDate)
    return strDate;
}