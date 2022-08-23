module.exports.send = (res, data) => {
    res.set('Content-type', 'text/html');
    res.write(data);
    res.send();
}

module.exports.sendIconUrl = (res, data) => {
    res.status(200).json(data);
}