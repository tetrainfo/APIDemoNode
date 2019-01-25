const json_data = require('../mockdata/auto.leads.json');
//todo: add url / query string into path
const nadaZipZilch = {msg: "no data matched search criteria", path: "todo"};


var findBy = {
    Id: id => {
        console.log("find by id called =>", id);
        //var payload  = [];
        var found = json_data.find((item) => {
            if (item.id.toString() == id.toString()){
                return item;
            }  
        });
        
        if (!found) {
            return nadaZipZilch
        } else { return found}

/*
        //this old school JS 1.1 approach works with the id and item id being of different types
        for (var i=0; i < json_data.length; i++) {
            var item = json_data[i];
            if (item.id == id){
                return item;
            }
        }
        return nadaZipZilch;
*/
        

    },
    State: state => {
        //consumer can 1 profile
        console.log("find by state called => ", state);
        var hits = [];
        for (var i=0; i < json_data.length; i++) {
            var item = json_data[i];
            if ( item.consumer ){
                if ( item.consumer.state.toLowerCase() == state.toLowerCase() ) {
                    hits.push(item);
                }
            }
        }
        if (hits.length == 0) {
            return nadaZipZilch;
        }
        else {
            return hits;
        }
    },
    Make: make => {
        //consumer can have 0 .. many vehicles
        //todo: if * in path, only check the chars up to *
        console.log("find by make called => ", make);
        var hits = [];
        for (var i=0; i < json_data.length; i++) {
            var item = json_data[i];
            if ( item.vehicle ){
                var vehicles = item.vehicle;
                for ( var j = 0; j < vehicles.length; j++){
                    var vehicle = vehicles[j];
                    if ( vehicle.make.toLowerCase() == make.toLowerCase() ) {
                        hits.push(item);
                    }
                }
            }
        }
        if (hits.length == 0) {
            return nadaZipZilch;
        }
        else {
            return hits;
        }  
    },
    Former_Insurer: former_insurer => {
        console.log("find by former_insurer called => ", former_insurer);
        //todo: if * in path, only check the chars up to *
        var hits = [];
        for (var i=0; i < json_data.length; i++) {
            var item = json_data[i];
            if ( item.coverage ){
                if ( item.coverage.former_insurer.toLowerCase() == former_insurer.toLowerCase() ) {
                    hits.push(item);
                }
            }
        }
        if (hits.length == 0) {
            return nadaZipZilch;
        }
        else {
            return hits;
        }
    }
}

module.exports = {
    findById: id => {
        //console.log(`dataservice find by id called with ${id}`)
        try {
            var errors = [];
            var payload = findBy.Id(id);
        } catch (err) {
            errors.push = {description: "find by id error " + err};
        }

        return { errors, payload };
    },
    findByState: state => {
        //console.log(`dataservice find by state called with ${state}`);
        try {
            var errors = [];
            var payload = findBy.State(state);
        } catch (err) {
            errors.push = {description: "find by state error " + err};
        }
        return { errors, payload };
    },
    findByMake: make => {
        //console.log(`dataservice find by make called with ${make}`);
        try {
            var errors = [];
            var payload = findBy.Make(make);
        } catch (err) {
            errors.push = {description: "find by make error " + err};
        }
        return { errors, payload };
    },
    findByFormer_Insurer: former_insurer => {
        //console.log(`dataservice find by former_insurer called with ${former_insurer}`);
        try {
            var errors = [];
            var payload = findBy.Former_Insurer( former_insurer );
        } catch (err) {
            errors.push = {description: "find by former_insurer error " + err};
        }
        return { errors, payload };
    }

}