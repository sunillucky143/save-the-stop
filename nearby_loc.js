const {fetch}=require('./fetch.js');



(async ()=>
{
    const query=[

        {
            $geoNear: {
                near: { type: "Point", coordinates: [-1.97, 82.32] },
                distanceField: "distance",
                spherical: true,
                key: "stops.location"
            }
        },{
            $unwind: "$stops"
        },

        {
            $project: {
                _id: 0,
                stop_id: "$stops.stop_id",
                stop_name: "$stops.stop_name",
                latitude: "$stops.location.coordinates[0]",
                longitude: "$stops.location.coordinates[1]",
                distance: 1
            }
        },
        {
            $sort: { distance: 1 }
        },
        {
            $limit: 3
        }
    ];
    const res=await fetch(query);
    console.log(res);
})();





