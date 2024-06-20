export function formatDate(orDate){
    const date = new Date(orDate);
    const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

    return formattedDate;
}