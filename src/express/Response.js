module.exports.send = (res, data) => {
    res.set('Content-type', 'text/html');
    res.write(data);
    res.send();
}