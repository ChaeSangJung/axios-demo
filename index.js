axios.get('http://localhost:5000/api/actions')
    .then(function(res) {
        console.log(JSON.stringify(res.data));
    })
    .catch(function(err) {
        console.log(err);
    });

