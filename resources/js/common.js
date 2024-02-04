const nl2br = (str) => {
    var res = str.replace(/\r\n/g, "<br />");
    str = res.replace(/(\n|\r)/g, "<br />");
    return str;
}

// 関数を別ファイルで使い回すための記述
export { nl2br }