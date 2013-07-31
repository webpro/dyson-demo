var g = require('dyson-generators');

var feature = {
    path: '/feature/:foo?',
    status: function(req, res) {
        if(req.params.foo === '999') {
            res.send(404, 'Feature not found');
        }
    },
    template: {
        id: g.id,
        cid: function() {
            return 'c' + this.id
        },
        user: g.name,
        time: g.time.time,
        memo: g.lorem.short,
        habitat: {
            zip: g.address.zipUS,
            city: g.address.city,
            country: 'Timbuctoo'
        }
    }
};

var features = {
    path: '/features/:bar?',
    collection: true,
    cache: false,
    size: function() {
		return Math.floor(Math.random() * 6) + 5;
    },
    template: feature.template,
    container: {
        meta: function(params, query, data) {
            return {
                path: this.path,
                size: data.length,
                bar: params.bar,
                query: query
            }
        },
        data: {
            here: function(params, query, data) {
                return data;
            }
        }
    }
};

module.exports = [feature, features];
