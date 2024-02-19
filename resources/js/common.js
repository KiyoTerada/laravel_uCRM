const nl2br = (str) => {
    var res = str.replace(/\r\n/g, "<br />");
    str = res.replace(/(\n|\r)/g, "<br />");
    return str;
}

const getToday = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = ("0"+(today.getMonth()+1)).slice(-2);
    const dd = ("0"+today.getDate()).slice(-2);
    return yyyy+'-'+mm+'-'+dd;
}

// 関数を別ファイルで使い回すための記述
export { nl2br, getToday }