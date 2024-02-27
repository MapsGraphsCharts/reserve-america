// campgroundMap.ts

interface Campground {
    campgroundId: string;
    campgroundName?: string;
}

interface StateCampgroundMap {
    [state: string]: Campground[]; // key: state, value: array of Campground objects
}

export const stateCampgroundMap: StateCampgroundMap = {
    "AK": [
    {
        "campgroundId": "1180730",
        "campgroundName": "afognak-island-state-park"
    },
    {
        "campgroundId": "1180151",
        "campgroundName": "birch-lake-state-recreation-site"
    },
    {
        "campgroundId": "1180731",
        "campgroundName": "buskin-river-state-recreation-site"
    },
    {
        "campgroundId": "1180319",
        "campgroundName": "caines-head-state-recreation-site"
    },
    {
        "campgroundId": "1180934",
        "campgroundName": "channel-islands-state-marine-park"
    },
    {
        "campgroundId": "1180178",
        "campgroundName": "chena-river-state-recreation-area"
    },
    {
        "campgroundId": "1180936",
        "campgroundName": "chilkat-state-park"
    },
    {
        "campgroundId": "1180246",
        "campgroundName": "chugach-state-park"
    },
    {
        "campgroundId": "1181800",
        "campgroundName": "clover-island-state-marine-park"
    },
    {
        "campgroundId": "1180395",
        "campgroundName": "decision-point-marine-park"
    },
    {
        "campgroundId": "1180443",
        "campgroundName": "denali-state-park"
    },
    {
        "campgroundId": "1180134",
        "campgroundName": "donnelly-creek-state-recreation-site"
    },
    {
        "campgroundId": "1180932",
        "campgroundName": "eagle-beach-state-recreation-area"
    },
    {
        "campgroundId": "1180124",
        "campgroundName": "fielding-lake-state-recreation-area"
    },
    {
        "campgroundId": "1180525",
        "campgroundName": "finger-lake-state-recreation-site"
    },
    {
        "campgroundId": "1180732",
        "campgroundName": "fort-abercrombie-state-historic-park"
    },
    {
        "campgroundId": "1180991",
        "campgroundName": "grindall-island-state-marine-park"
    },
    {
        "campgroundId": "1180179",
        "campgroundName": "harding-lake-state-recreation-area"
    },
    {
        "campgroundId": "1180392",
        "campgroundName": "johnson-lake-state-recreation-area"
    },
    {
        "campgroundId": "1181700",
        "campgroundName": "kesugi-ken-campground"
    },
    {
        "campgroundId": "1180316",
        "campgroundName": "kachemak-bay-state-park"
    },
    {
        "campgroundId": "1180135",
        "campgroundName": "lower-chatanika-state-recreation-area"
    },
    {
        "campgroundId": "1180523",
        "campgroundName": "nancy-lake-state-recreation-area"
    },
    {
        "campgroundId": "1180524",
        "campgroundName": "nancy-lake-state-recreation-site"
    },
    {
        "campgroundId": "1180986",
        "campgroundName": "oliver-inlet-state-marine-park"
    },
    {
        "campgroundId": "1182200",
        "campgroundName": "pasagshak-river-state-recreation-site"
    },
    {
        "campgroundId": "1180931",
        "campgroundName": "point-bridget-state-park"
    },
    {
        "campgroundId": "1180390",
        "campgroundName": "prince-william-sound"
    },
    {
        "campgroundId": "1180129",
        "campgroundName": "quartz-lake-state-recreation-area"
    },
    {
        "campgroundId": "1180154",
        "campgroundName": "salcha-river-state-recreation-site"
    },
    {
        "campgroundId": "1180990",
        "campgroundName": "settlers-cove-state-recreation-site"
    },
    {
        "campgroundId": "1180725",
        "campgroundName": "shuyak-island-state-park"
    },
    {
        "campgroundId": "1180933",
        "campgroundName": "st-james-bay-state-marine-park"
    },
    {
        "campgroundId": "1180970",
        "campgroundName": "taku-harbor-state-marine-park"
    },
    {
        "campgroundId": "1180345",
        "campgroundName": "thumb-cove-state-marine-park"
    },
    {
        "campgroundId": "1180600",
        "campgroundName": "woodtikchik-state-park"
    },
    {
        "campgroundId": "1182150",
        "campgroundName": "woody-island-state-recreation-site"
    }
],
    "CO": [
    {
        "campgroundId": "50067",
        "campgroundName": "arkansas-headwaters-recreation-area"
    },
    {
        "campgroundId": "50019",
        "campgroundName": "boyd-lake-state-park"
    },
    {
        "campgroundId": "53052",
        "campgroundName": "castlewood-canyon-state-park"
    },
    {
        "campgroundId": "50021",
        "campgroundName": "chatfield-state-park"
    },
    {
        "campgroundId": "50022",
        "campgroundName": "cherry-creek-state-park"
    },
    {
        "campgroundId": "50081",
        "campgroundName": "cheyenne-mountain-state-park"
    },
    {
        "campgroundId": "50023",
        "campgroundName": "crawford-state-park"
    },
    {
        "campgroundId": "50024",
        "campgroundName": "eleven-mile-state-park"
    },
    {
        "campgroundId": "52700",
        "campgroundName": "elkhead-reservoir-state-park"
    },
    {
        "campgroundId": "50025",
        "campgroundName": "golden-gate-canyon-state-park"
    },
    {
        "campgroundId": "50026",
        "campgroundName": "highline-lake-state-park"
    },
    {
        "campgroundId": "50028",
        "campgroundName": "jackson-lake-state-park"
    },
    {
        "campgroundId": "50069",
        "campgroundName": "james-m-robbcolorado-river-state-parkfruita-section"
    },
    {
        "campgroundId": "50027",
        "campgroundName": "james-m-robbcolorado-river-state-parkisland-acres-section"
    },
    {
        "campgroundId": "50072",
        "campgroundName": "john-martin-reservoir-state-park"
    },
    {
        "campgroundId": "64705",
        "campgroundName": "jumbo-reservoir-state-wildlife-area"
    },
    {
        "campgroundId": "50036",
        "campgroundName": "lake-pueblo-state-park"
    },
    {
        "campgroundId": "50029",
        "campgroundName": "lathrop-state-park"
    },
    {
        "campgroundId": "50030",
        "campgroundName": "lory-state-park"
    },
    {
        "campgroundId": "50031",
        "campgroundName": "mancos-state-park"
    },
    {
        "campgroundId": "50032",
        "campgroundName": "mueller-state-park"
    },
    {
        "campgroundId": "50033",
        "campgroundName": "navajo-state-park"
    },
    {
        "campgroundId": "50065",
        "campgroundName": "north-sterling-state-park"
    },
    {
        "campgroundId": "50034",
        "campgroundName": "paonia-state-park"
    },
    {
        "campgroundId": "50035",
        "campgroundName": "pearl-lake-state-park"
    },
    {
        "campgroundId": "50039",
        "campgroundName": "ridgway-state-park"
    },
    {
        "campgroundId": "50037",
        "campgroundName": "rifle-falls-state-park"
    },
    {
        "campgroundId": "50038",
        "campgroundName": "rifle-gap-state-park"
    },
    {
        "campgroundId": "50020",
        "campgroundName": "st-vrain-state-park"
    },
    {
        "campgroundId": "50040",
        "campgroundName": "stagecoach-state-park"
    },
    {
        "campgroundId": "50042",
        "campgroundName": "state-forest-state-park"
    },
    {
        "campgroundId": "56101",
        "campgroundName": "staunton-state-park"
    },
    {
        "campgroundId": "50041",
        "campgroundName": "steamboat-lake-state-park"
    },
    {
        "campgroundId": "50043",
        "campgroundName": "sylvan-lake-state-park"
    },
    {
        "campgroundId": "50044",
        "campgroundName": "trinidad-lake-state-park"
    },
    {
        "campgroundId": "50045",
        "campgroundName": "vega-state-park"
    },
    {
        "campgroundId": "50070",
        "campgroundName": "yampa-river-state-park"
    }
],
    "CT": [
    {
        "campgroundId": "100103",
        "campgroundName": "american-legion-sf-hawes"
    },
    {
        "campgroundId": "100602",
        "campgroundName": "black-rock-picnic-shelter"
    },
    {
        "campgroundId": "100102",
        "campgroundName": "black-rock-state-park"
    },
    {
        "campgroundId": "100125",
        "campgroundName": "burr-pond-picnic-shelter"
    },
    {
        "campgroundId": "100118",
        "campgroundName": "chatfield-hollow-picnic-shelter"
    },
    {
        "campgroundId": "100114",
        "campgroundName": "day-pond-picnic-shelter"
    },
    {
        "campgroundId": "100129",
        "campgroundName": "dennis-hill-picnic-shelter"
    },
    {
        "campgroundId": "100104",
        "campgroundName": "devils-hopyard"
    },
    {
        "campgroundId": "100127",
        "campgroundName": "devils-hopyard-picnic-shelter"
    },
    {
        "campgroundId": "100140",
        "campgroundName": "dinosaur-state-park-picnic-shelter"
    },
    {
        "campgroundId": "100951",
        "campgroundName": "gillette-castle-state-park-river-camping"
    },
    {
        "campgroundId": "100802",
        "campgroundName": "green-falls-campground"
    },
    {
        "campgroundId": "100101",
        "campgroundName": "hammonasset-beach-state-park"
    },
    {
        "campgroundId": "100116",
        "campgroundName": "hammonasset-picnic-shelter"
    },
    {
        "campgroundId": "101450",
        "campgroundName": "hopeville-pond-picnic-shelter"
    },
    {
        "campgroundId": "100100",
        "campgroundName": "hopeville-pond-state-park"
    },
    {
        "campgroundId": "100108",
        "campgroundName": "housatonic-meadows-state-park"
    },
    {
        "campgroundId": "101000",
        "campgroundName": "hurd-state-park-river-camping"
    },
    {
        "campgroundId": "100115",
        "campgroundName": "indian-well-picnic-shelter"
    },
    {
        "campgroundId": "100109",
        "campgroundName": "kettletown-state-park"
    },
    {
        "campgroundId": "100110",
        "campgroundName": "lake-waramaug-state-park"
    },
    {
        "campgroundId": "100126",
        "campgroundName": "macedonia-brook-picnic-shelter"
    },
    {
        "campgroundId": "100105",
        "campgroundName": "macedonia-brook-state-park"
    },
    {
        "campgroundId": "100106",
        "campgroundName": "mashamoquet-brook-state-park"
    },
    {
        "campgroundId": "100800",
        "campgroundName": "mount-misery-campground"
    },
    {
        "campgroundId": "100117",
        "campgroundName": "osbornedale-picnic-shelter"
    },
    {
        "campgroundId": "100119",
        "campgroundName": "penwood-picnic-shelter"
    },
    {
        "campgroundId": "100124",
        "campgroundName": "peoples-forest-picnic-shelter"
    },
    {
        "campgroundId": "100120",
        "campgroundName": "quaddick-picnic-shelter"
    },
    {
        "campgroundId": "100952",
        "campgroundName": "river-highlands-state-park-river-campground"
    },
    {
        "campgroundId": "100600",
        "campgroundName": "rocky-neck-picnic-shelter"
    },
    {
        "campgroundId": "100107",
        "campgroundName": "rocky-neck-state-park"
    },
    {
        "campgroundId": "100130",
        "campgroundName": "salmon-river-picnic-shelter"
    },
    {
        "campgroundId": "100128",
        "campgroundName": "salt-rock-campground"
    },
    {
        "campgroundId": "100950",
        "campgroundName": "selden-neck-state-park-river-camping"
    },
    {
        "campgroundId": "100121",
        "campgroundName": "sleeping-giant-picnic-shelter"
    },
    {
        "campgroundId": "100650",
        "campgroundName": "southford-picnic-shelter"
    },
    {
        "campgroundId": "100122",
        "campgroundName": "stratton-brook-picnic-shelter"
    },
    {
        "campgroundId": "100123",
        "campgroundName": "wharton-brook-picnic-shelter"
    }
],
    "DE": [
    {
        "campgroundId": "360246",
        "campgroundName": "alapocas-run-state-park"
    },
    {
        "campgroundId": "360105",
        "campgroundName": "bellevue-state-park"
    },
    {
        "campgroundId": "360107",
        "campgroundName": "brandywine-creek-state-park"
    },
    {
        "campgroundId": "360108",
        "campgroundName": "cape-henlopen-state-park"
    },
    {
        "campgroundId": "360109",
        "campgroundName": "delaware-seashore-state-park"
    },
    {
        "campgroundId": "360113",
        "campgroundName": "fort-delaware-state-park"
    },
    {
        "campgroundId": "360115",
        "campgroundName": "fox-point-state-park"
    },
    {
        "campgroundId": "360116",
        "campgroundName": "holts-landing-state-park"
    },
    {
        "campgroundId": "360000",
        "campgroundName": "indian-river-marina"
    },
    {
        "campgroundId": "360118",
        "campgroundName": "killens-pond-state-park"
    },
    {
        "campgroundId": "360119",
        "campgroundName": "lums-pond-state-park"
    },
    {
        "campgroundId": "360122",
        "campgroundName": "trap-pond-state-park"
    },
    {
        "campgroundId": "360131",
        "campgroundName": "white-clay-creek-state-park"
    }
],
    "GA": [
    {
        "campgroundId": "530145",
        "campgroundName": "a-h-stephens-state-historic-park"
    },
    {
        "campgroundId": "530146",
        "campgroundName": "black-rock-mountain-state-park"
    },
    {
        "campgroundId": "530483",
        "campgroundName": "chattahoochee-bend-state-park"
    },
    {
        "campgroundId": "530148",
        "campgroundName": "cloudland-canyon-state-park"
    },
    {
        "campgroundId": "530149",
        "campgroundName": "crooked-river-state-park"
    },
    {
        "campgroundId": "535300",
        "campgroundName": "dames-ferry"
    },
    {
        "campgroundId": "531350",
        "campgroundName": "don-carter-state-park"
    },
    {
        "campgroundId": "530151",
        "campgroundName": "elijah-clark-state-park"
    },
    {
        "campgroundId": "530153",
        "campgroundName": "f-d-roosevelt-state-park"
    },
    {
        "campgroundId": "530154",
        "campgroundName": "florence-marina-state-park"
    },
    {
        "campgroundId": "530156",
        "campgroundName": "fort-mcallister-state-historic-site"
    },
    {
        "campgroundId": "530157",
        "campgroundName": "fort-morris-state-historic-site"
    },
    {
        "campgroundId": "530158",
        "campgroundName": "fort-mountain-state-park"
    },
    {
        "campgroundId": "530159",
        "campgroundName": "fort-yargo-state-park"
    },
    {
        "campgroundId": "530160",
        "campgroundName": "general-coffee-state-park"
    },
    {
        "campgroundId": "530161",
        "campgroundName": "george-l-smith-state-park"
    },
    {
        "campgroundId": "530303",
        "campgroundName": "george-t-bagby-state-park"
    },
    {
        "campgroundId": "530165",
        "campgroundName": "hamburg-state-park"
    },
    {
        "campgroundId": "530166",
        "campgroundName": "hard-labor-creek-state-park"
    },
    {
        "campgroundId": "532200",
        "campgroundName": "hardman-farm-state-historic-site"
    },
    {
        "campgroundId": "530168",
        "campgroundName": "high-falls-state-park"
    },
    {
        "campgroundId": "530170",
        "campgroundName": "indian-springs-state-park"
    },
    {
        "campgroundId": "530164",
        "campgroundName": "jack-hill-state-park"
    },
    {
        "campgroundId": "530171",
        "campgroundName": "james-h-sloppy-floyd-state-park"
    },
    {
        "campgroundId": "530175",
        "campgroundName": "kolomoki-mounds-state-historic-park"
    },
    {
        "campgroundId": "530177",
        "campgroundName": "laura-s-walker-state-park"
    },
    {
        "campgroundId": "530179",
        "campgroundName": "magnolia-springs-state-park"
    },
    {
        "campgroundId": "530180",
        "campgroundName": "mistletoe-state-park"
    },
    {
        "campgroundId": "530181",
        "campgroundName": "moccasin-creek-state-park"
    },
    {
        "campgroundId": "530183",
        "campgroundName": "panola-mountain-state-park"
    },
    {
        "campgroundId": "530184",
        "campgroundName": "picketts-mill-battlefield-state-historic-site"
    },
    {
        "campgroundId": "530185",
        "campgroundName": "providence-canyon-state-park"
    },
    {
        "campgroundId": "530364",
        "campgroundName": "red-top-mountain-state-park"
    },
    {
        "campgroundId": "530186",
        "campgroundName": "reed-bingham-state-park"
    },
    {
        "campgroundId": "530187",
        "campgroundName": "reynolds-mansion"
    },
    {
        "campgroundId": "530188",
        "campgroundName": "richard-b-russell-state-park"
    },
    {
        "campgroundId": "530190",
        "campgroundName": "seminole-state-park"
    },
    {
        "campgroundId": "530191",
        "campgroundName": "skidaway-island-state-park"
    },
    {
        "campgroundId": "530192",
        "campgroundName": "smithgall-woods"
    },
    {
        "campgroundId": "530194",
        "campgroundName": "stephen-c-foster-state-park"
    },
    {
        "campgroundId": "530195",
        "campgroundName": "sweetwater-creek-state-park"
    },
    {
        "campgroundId": "530196",
        "campgroundName": "tallulah-gorge-state-park"
    },
    {
        "campgroundId": "530198",
        "campgroundName": "tugaloo-state-park"
    },
    {
        "campgroundId": "530200",
        "campgroundName": "victoria-bryant-state-park"
    },
    {
        "campgroundId": "530201",
        "campgroundName": "vogel-state-park"
    },
    {
        "campgroundId": "530202",
        "campgroundName": "watson-mill-bridge-state-park"
    }
],
    "ID": [
    {
        "campgroundId": "315053",
        "campgroundName": "bear-lake-state-park"
    },
    {
        "campgroundId": "313035",
        "campgroundName": "bruneau-dunes-state-park"
    },
    {
        "campgroundId": "315045",
        "campgroundName": "castle-rocks-state-park"
    },
    {
        "campgroundId": "325251",
        "campgroundName": "challis-hot-springs"
    },
    {
        "campgroundId": "315044",
        "campgroundName": "city-of-rocks-national-reserve"
    },
    {
        "campgroundId": "311022",
        "campgroundName": "dworshak-state-park"
    },
    {
        "campgroundId": "313032",
        "campgroundName": "eagle-island-state-park"
    },
    {
        "campgroundId": "311015",
        "campgroundName": "farragut-state-park"
    },
    {
        "campgroundId": "315061",
        "campgroundName": "harriman-state-park"
    },
    {
        "campgroundId": "311023",
        "campgroundName": "hells-gate-state-park"
    },
    {
        "campgroundId": "315062",
        "campgroundName": "henrys-lake-state-park"
    },
    {
        "campgroundId": "311018",
        "campgroundName": "heyburn-state-park"
    },
    {
        "campgroundId": "313011",
        "campgroundName": "idaho-city-yurts"
    },
    {
        "campgroundId": "313037",
        "campgroundName": "lake-cascade-state-park"
    },
    {
        "campgroundId": "315046",
        "campgroundName": "lake-walcott-state-park"
    },
    {
        "campgroundId": "315051",
        "campgroundName": "massacre-rocks-state-park"
    },
    {
        "campgroundId": "313031",
        "campgroundName": "ponderosa-state-park"
    },
    {
        "campgroundId": "311011",
        "campgroundName": "priest-lake-state-park"
    },
    {
        "campgroundId": "311013",
        "campgroundName": "round-lake-state-park"
    },
    {
        "campgroundId": "313041",
        "campgroundName": "thousand-springs-state-park"
    },
    {
        "campgroundId": "313036",
        "campgroundName": "three-island-crossing-state-park"
    },
    {
        "campgroundId": "311025",
        "campgroundName": "winchester-lake-state-park"
    }
],
    "IN": [
    {
        "campgroundId": "570023",
        "campgroundName": "brookville-lake"
    },
    {
        "campgroundId": "570043",
        "campgroundName": "brown-county-state-park"
    },
    {
        "campgroundId": "570034",
        "campgroundName": "chain-o-lakes-state-park"
    },
    {
        "campgroundId": "570044",
        "campgroundName": "charlestown-state-park"
    },
    {
        "campgroundId": "573000",
        "campgroundName": "clark-state-forest"
    },
    {
        "campgroundId": "570045",
        "campgroundName": "clifty-falls-state-park"
    },
    {
        "campgroundId": "570021",
        "campgroundName": "deam-lake-state-recreation-area"
    },
    {
        "campgroundId": "570024",
        "campgroundName": "fort-harrison-state-park"
    },
    {
        "campgroundId": "571350",
        "campgroundName": "greenesullivan-state-forest"
    },
    {
        "campgroundId": "570047",
        "campgroundName": "hardy-lake"
    },
    {
        "campgroundId": "570048",
        "campgroundName": "harmonie-state-park"
    },
    {
        "campgroundId": "570035",
        "campgroundName": "indiana-dunes-state-park"
    },
    {
        "campgroundId": "572400",
        "campgroundName": "interlake-state-recreation-area"
    },
    {
        "campgroundId": "570025",
        "campgroundName": "lieber-state-recreation-area"
    },
    {
        "campgroundId": "570049",
        "campgroundName": "lincoln-state-park"
    },
    {
        "campgroundId": "570026",
        "campgroundName": "mccormicks-creek-state-park"
    },
    {
        "campgroundId": "570036",
        "campgroundName": "mississinewa-lake"
    },
    {
        "campgroundId": "570050",
        "campgroundName": "monroe-lake"
    },
    {
        "campgroundId": "573200",
        "campgroundName": "morganmonroe-state-forest"
    },
    {
        "campgroundId": "570027",
        "campgroundName": "mounds-state-park"
    },
    {
        "campgroundId": "570051",
        "campgroundName": "obannon-woods-state-park"
    },
    {
        "campgroundId": "570037",
        "campgroundName": "ouabache-state-park"
    },
    {
        "campgroundId": "570052",
        "campgroundName": "patoka-lake"
    },
    {
        "campgroundId": "570038",
        "campgroundName": "pokagon-state-park"
    },
    {
        "campgroundId": "570039",
        "campgroundName": "potato-creek-state-park"
    },
    {
        "campgroundId": "570028",
        "campgroundName": "prophetstown-state-park"
    },
    {
        "campgroundId": "570029",
        "campgroundName": "raccoon-lake"
    },
    {
        "campgroundId": "572402",
        "campgroundName": "redbird-state-recreation-area"
    },
    {
        "campgroundId": "570041",
        "campgroundName": "salamonie-lake"
    },
    {
        "campgroundId": "570030",
        "campgroundName": "shades-state-park"
    },
    {
        "campgroundId": "570053",
        "campgroundName": "shakamak-state-park"
    },
    {
        "campgroundId": "570054",
        "campgroundName": "spring-mill-state-park"
    },
    {
        "campgroundId": "570022",
        "campgroundName": "starve-hollow-state-recreation-area"
    },
    {
        "campgroundId": "570031",
        "campgroundName": "summit-lake-state-park"
    },
    {
        "campgroundId": "570042",
        "campgroundName": "tippecanoe-river-state-park"
    },
    {
        "campgroundId": "571100",
        "campgroundName": "trine-state-recreation-area"
    },
    {
        "campgroundId": "570032",
        "campgroundName": "turkey-run-state-park"
    },
    {
        "campgroundId": "570055",
        "campgroundName": "versailles-state-park"
    },
    {
        "campgroundId": "570033",
        "campgroundName": "whitewater-memorial-state-park"
    },
    {
        "campgroundId": "574400",
        "campgroundName": "yellowwood-state-forest"
    }
],
    "IA": [
    {
        "campgroundId": "610120",
        "campgroundName": "ambrose-a-call-state-park"
    },
    {
        "campgroundId": "610105",
        "campgroundName": "backbone-state-park"
    },
    {
        "campgroundId": "610145",
        "campgroundName": "beeds-lake-state-park"
    },
    {
        "campgroundId": "610146",
        "campgroundName": "bellevue-state-park"
    },
    {
        "campgroundId": "610157",
        "campgroundName": "big-creek-state-park"
    },
    {
        "campgroundId": "610154",
        "campgroundName": "black-hawk-state-park"
    },
    {
        "campgroundId": "610108",
        "campgroundName": "brushy-creek-state-recreation-area"
    },
    {
        "campgroundId": "610121",
        "campgroundName": "clear-lake-state-park"
    },
    {
        "campgroundId": "610107",
        "campgroundName": "dolliver-memorial-state-park"
    },
    {
        "campgroundId": "610153",
        "campgroundName": "elinor-bedell-state-park"
    },
    {
        "campgroundId": "610155",
        "campgroundName": "elk-rock-state-park"
    },
    {
        "campgroundId": "610152",
        "campgroundName": "emerson-bay-state-recreation"
    },
    {
        "campgroundId": "610123",
        "campgroundName": "fairport-state-recreation-area"
    },
    {
        "campgroundId": "610156",
        "campgroundName": "fort-defiance-state-park"
    },
    {
        "campgroundId": "610124",
        "campgroundName": "geode-state-park"
    },
    {
        "campgroundId": "610125",
        "campgroundName": "george-wyth-state-park"
    },
    {
        "campgroundId": "610106",
        "campgroundName": "green-valley-state-park"
    },
    {
        "campgroundId": "610129",
        "campgroundName": "gull-point-state-park"
    },
    {
        "campgroundId": "610104",
        "campgroundName": "honey-creek-state-park"
    },
    {
        "campgroundId": "610103",
        "campgroundName": "laceykeosauqua-state-park"
    },
    {
        "campgroundId": "610149",
        "campgroundName": "lake-ahquabi-state-park"
    },
    {
        "campgroundId": "610150",
        "campgroundName": "lake-anita-state-park"
    },
    {
        "campgroundId": "610109",
        "campgroundName": "lake-darling-state-park"
    },
    {
        "campgroundId": "610143",
        "campgroundName": "lake-keomah-state-park"
    },
    {
        "campgroundId": "610119",
        "campgroundName": "lake-macbride-state-park"
    },
    {
        "campgroundId": "610144",
        "campgroundName": "lake-manawa-state-park"
    },
    {
        "campgroundId": "610110",
        "campgroundName": "lake-of-three-fires-state-park"
    },
    {
        "campgroundId": "610111",
        "campgroundName": "lake-wapello-state-park"
    },
    {
        "campgroundId": "610148",
        "campgroundName": "ledges-state-park"
    },
    {
        "campgroundId": "610142",
        "campgroundName": "lewis-and-clark-state-park"
    },
    {
        "campgroundId": "610127",
        "campgroundName": "maquoketa-caves-state-park"
    },
    {
        "campgroundId": "610151",
        "campgroundName": "marble-beach-state-recreation-area"
    },
    {
        "campgroundId": "610112",
        "campgroundName": "mcintosh-woods-state-park"
    },
    {
        "campgroundId": "610600",
        "campgroundName": "miniwakan-state-park"
    },
    {
        "campgroundId": "610128",
        "campgroundName": "nine-eagles-state-park"
    },
    {
        "campgroundId": "610159",
        "campgroundName": "okamanpedan"
    },
    {
        "campgroundId": "610113",
        "campgroundName": "palisadeskepler-state-park"
    },
    {
        "campgroundId": "610141",
        "campgroundName": "pikes-peak-state-park"
    },
    {
        "campgroundId": "610198",
        "campgroundName": "pikes-point-state-park"
    },
    {
        "campgroundId": "610140",
        "campgroundName": "pilot-knob-state-park"
    },
    {
        "campgroundId": "610114",
        "campgroundName": "pine-lake-state-park"
    },
    {
        "campgroundId": "610115",
        "campgroundName": "pleasant-creek-state-recreation-area"
    },
    {
        "campgroundId": "610139",
        "campgroundName": "prairie-rose-state-park"
    },
    {
        "campgroundId": "610138",
        "campgroundName": "red-haw-state-park"
    },
    {
        "campgroundId": "610160",
        "campgroundName": "rice-lake-state-park"
    },
    {
        "campgroundId": "610137",
        "campgroundName": "rock-creek-state-park"
    },
    {
        "campgroundId": "610136",
        "campgroundName": "shimek-forest-campground"
    },
    {
        "campgroundId": "610116",
        "campgroundName": "springbrook-state-park"
    },
    {
        "campgroundId": "610147",
        "campgroundName": "stephens-forest-campground"
    },
    {
        "campgroundId": "610117",
        "campgroundName": "stone-state-park"
    },
    {
        "campgroundId": "610199",
        "campgroundName": "templar-state-recreation-area"
    },
    {
        "campgroundId": "610158",
        "campgroundName": "twin-lakes"
    },
    {
        "campgroundId": "610126",
        "campgroundName": "union-grove-state-park"
    },
    {
        "campgroundId": "610135",
        "campgroundName": "viking-lake-state-park"
    },
    {
        "campgroundId": "610134",
        "campgroundName": "volga-river-state-recreation-area"
    },
    {
        "campgroundId": "610133",
        "campgroundName": "walnut-woods-state-park"
    },
    {
        "campgroundId": "610132",
        "campgroundName": "wapsipinicon-state-park"
    },
    {
        "campgroundId": "610131",
        "campgroundName": "waubonsie-state-park"
    },
    {
        "campgroundId": "610122",
        "campgroundName": "wildcat-den-state-park"
    },
    {
        "campgroundId": "610118",
        "campgroundName": "wilson-island-state-recreation-area"
    },
    {
        "campgroundId": "610130",
        "campgroundName": "yellow-river-state-forest"
    }
],
    "KS": [
    {
        "campgroundId": "519149",
        "campgroundName": "atchison-sfl"
    },
    {
        "campgroundId": "519115",
        "campgroundName": "cedar-bluff-state-park"
    },
    {
        "campgroundId": "519116",
        "campgroundName": "cheney-state-park"
    },
    {
        "campgroundId": "519117",
        "campgroundName": "clinton-state-park"
    },
    {
        "campgroundId": "519118",
        "campgroundName": "crawford-state-park"
    },
    {
        "campgroundId": "519121",
        "campgroundName": "cross-timbers-state-park"
    },
    {
        "campgroundId": "519126",
        "campgroundName": "eisenhower-state-park"
    },
    {
        "campgroundId": "519119",
        "campgroundName": "el-dorado-state-park"
    },
    {
        "campgroundId": "519120",
        "campgroundName": "elk-city-state-park"
    },
    {
        "campgroundId": "519143",
        "campgroundName": "fall-river-state-park"
    },
    {
        "campgroundId": "519122",
        "campgroundName": "glen-elder-state-park"
    },
    {
        "campgroundId": "519139",
        "campgroundName": "hillsdale-state-park"
    },
    {
        "campgroundId": "519131",
        "campgroundName": "historic-lake-scott-state-park"
    },
    {
        "campgroundId": "519123",
        "campgroundName": "kanopolis-state-park"
    },
    {
        "campgroundId": "519124",
        "campgroundName": "lovewell-state-park"
    },
    {
        "campgroundId": "519125",
        "campgroundName": "meade-state-park"
    },
    {
        "campgroundId": "519127",
        "campgroundName": "milford-state-park"
    },
    {
        "campgroundId": "519151",
        "campgroundName": "mined-land-wildlife-area"
    },
    {
        "campgroundId": "519128",
        "campgroundName": "perry-state-park"
    },
    {
        "campgroundId": "519129",
        "campgroundName": "pomona-state-park"
    },
    {
        "campgroundId": "519130",
        "campgroundName": "prairie-dog-state-park"
    },
    {
        "campgroundId": "511944",
        "campgroundName": "sand-hills-state-park"
    },
    {
        "campgroundId": "519152",
        "campgroundName": "state-fair-cabin"
    },
    {
        "campgroundId": "519132",
        "campgroundName": "tuttle-creek-state-park"
    },
    {
        "campgroundId": "519133",
        "campgroundName": "webster-state-park"
    },
    {
        "campgroundId": "519134",
        "campgroundName": "wilson-state-park"
    }
],
    "KY": [
    {
        "campgroundId": "91901",
        "campgroundName": "barren-river-lake-state-resort-park"
    },
    {
        "campgroundId": "91803",
        "campgroundName": "big-bone-lick-state-historic-site"
    },
    {
        "campgroundId": "91917",
        "campgroundName": "blue-licks-battlefield-state-resort-park"
    },
    {
        "campgroundId": "91833",
        "campgroundName": "carr-creek-state-park"
    },
    {
        "campgroundId": "91903",
        "campgroundName": "carter-caves-state-resort-park"
    },
    {
        "campgroundId": "91805",
        "campgroundName": "columbus-belmont-state-park"
    },
    {
        "campgroundId": "91904",
        "campgroundName": "cumberland-falls-state-resort-park"
    },
    {
        "campgroundId": "91916",
        "campgroundName": "dale-hollow-lake-state-resort-park"
    },
    {
        "campgroundId": "91810",
        "campgroundName": "fort-boonesborough-state-park"
    },
    {
        "campgroundId": "91811",
        "campgroundName": "general-burnside-state-park"
    },
    {
        "campgroundId": "91905",
        "campgroundName": "general-butler-state-resort-park"
    },
    {
        "campgroundId": "91812",
        "campgroundName": "grayson-lake-state-park"
    },
    {
        "campgroundId": "91813",
        "campgroundName": "green-river-lake-state-park"
    },
    {
        "campgroundId": "91906",
        "campgroundName": "greenbo-lake-state-resort-park"
    },
    {
        "campgroundId": "91907",
        "campgroundName": "jenny-wiley-state-resort-park"
    },
    {
        "campgroundId": "91801",
        "campgroundName": "john-james-audubon-state-park"
    },
    {
        "campgroundId": "91908",
        "campgroundName": "kenlake-state-resort-park"
    },
    {
        "campgroundId": "91909",
        "campgroundName": "kentucky-dam-village-state-resort-park"
    },
    {
        "campgroundId": "90800",
        "campgroundName": "kentucky-horse-park"
    },
    {
        "campgroundId": "91815",
        "campgroundName": "kincaid-lake-state-park"
    },
    {
        "campgroundId": "91910",
        "campgroundName": "lake-barkley-state-resort-park"
    },
    {
        "campgroundId": "91911",
        "campgroundName": "lake-cumberland-state-resort-park"
    },
    {
        "campgroundId": "91817",
        "campgroundName": "lake-malone-state-park"
    },
    {
        "campgroundId": "91820",
        "campgroundName": "my-old-kentucky-home-state-park"
    },
    {
        "campgroundId": "91912",
        "campgroundName": "natural-bridge-state-resort-park"
    },
    {
        "campgroundId": "91832",
        "campgroundName": "nolin-lake-state-park"
    },
    {
        "campgroundId": "91823",
        "campgroundName": "paintsville-lake-state-park"
    },
    {
        "campgroundId": "91913",
        "campgroundName": "pennyrile-forest-state-resort-park"
    },
    {
        "campgroundId": "91825",
        "campgroundName": "taylorsville-lake-state-park"
    },
    {
        "campgroundId": "91831",
        "campgroundName": "yatesville-lake-state-park"
    }
],
    "MA": [
    {
        "campgroundId": "35451",
        "campgroundName": "ashland-state-park"
    },
    {
        "campgroundId": "32602",
        "campgroundName": "beartown-state-forest"
    },
    {
        "campgroundId": "32603",
        "campgroundName": "boston-harbor-islands-sp"
    },
    {
        "campgroundId": "34000",
        "campgroundName": "camp-nihan"
    },
    {
        "campgroundId": "35001",
        "campgroundName": "castle-island"
    },
    {
        "campgroundId": "35201",
        "campgroundName": "chicopee-state-park"
    },
    {
        "campgroundId": "32604",
        "campgroundName": "clarksburg-state-park"
    },
    {
        "campgroundId": "32605",
        "campgroundName": "dar-state-forest"
    },
    {
        "campgroundId": "34600",
        "campgroundName": "dean-pond-recreation-area"
    },
    {
        "campgroundId": "34901",
        "campgroundName": "douglas-state-forest"
    },
    {
        "campgroundId": "35401",
        "campgroundName": "dunn-state-park"
    },
    {
        "campgroundId": "32606",
        "campgroundName": "erving-state-forest"
    },
    {
        "campgroundId": "35651",
        "campgroundName": "freetown-state-forest"
    },
    {
        "campgroundId": "32607",
        "campgroundName": "granville-state-forest"
    },
    {
        "campgroundId": "35101",
        "campgroundName": "great-brook-farm-state-park"
    },
    {
        "campgroundId": "34250",
        "campgroundName": "hopkinton-state-park"
    },
    {
        "campgroundId": "32609",
        "campgroundName": "horseneck-beach-state-reservation"
    },
    {
        "campgroundId": "35051",
        "campgroundName": "houghtons-pond-recreation-area"
    },
    {
        "campgroundId": "32610",
        "campgroundName": "lake-dennison-recreation-area"
    },
    {
        "campgroundId": "32608",
        "campgroundName": "loraine-campground-at-harold-parker-state-forest"
    },
    {
        "campgroundId": "32611",
        "campgroundName": "massasoit-state-park"
    },
    {
        "campgroundId": "32613",
        "campgroundName": "mohawk-trail-state-forest"
    },
    {
        "campgroundId": "32612",
        "campgroundName": "mt-greylock-state-reservation"
    },
    {
        "campgroundId": "34951",
        "campgroundName": "mt-sugarloaf-state-reservation"
    },
    {
        "campgroundId": "32614",
        "campgroundName": "myles-standish-state-forest"
    },
    {
        "campgroundId": "32601",
        "campgroundName": "nickerson-state-park"
    },
    {
        "campgroundId": "32615",
        "campgroundName": "october-mountain-state-forest"
    },
    {
        "campgroundId": "32616",
        "campgroundName": "otter-river-state-forest"
    },
    {
        "campgroundId": "32617",
        "campgroundName": "pearl-hill-state-park"
    },
    {
        "campgroundId": "32618",
        "campgroundName": "pittsfield-state-forest"
    },
    {
        "campgroundId": "34500",
        "campgroundName": "quinsigamond-state-park"
    },
    {
        "campgroundId": "35251",
        "campgroundName": "robinson-state-park"
    },
    {
        "campgroundId": "35351",
        "campgroundName": "rutland-state-park"
    },
    {
        "campgroundId": "32619",
        "campgroundName": "salisbury-beach-state-reservation"
    },
    {
        "campgroundId": "32622",
        "campgroundName": "savoy-mountain-state-forest"
    },
    {
        "campgroundId": "32620",
        "campgroundName": "scusset-beach-state-reservation"
    },
    {
        "campgroundId": "32621",
        "campgroundName": "shawme-crowell-state-forest"
    },
    {
        "campgroundId": "32623",
        "campgroundName": "tolland-state-forest"
    },
    {
        "campgroundId": "32624",
        "campgroundName": "waquoit-bay-nat-estuarine-res"
    },
    {
        "campgroundId": "35601",
        "campgroundName": "watson-pond-state-park"
    },
    {
        "campgroundId": "34952",
        "campgroundName": "webb-memorial-state-park"
    },
    {
        "campgroundId": "35501",
        "campgroundName": "wellfleet-hollow-state-campground"
    },
    {
        "campgroundId": "32625",
        "campgroundName": "wells-state-park"
    },
    {
        "campgroundId": "35801",
        "campgroundName": "wendell-state-forest"
    },
    {
        "campgroundId": "32626",
        "campgroundName": "willard-brook-state-forest"
    },
    {
        "campgroundId": "32627",
        "campgroundName": "windsor-state-forest"
    },
    {
        "campgroundId": "32628",
        "campgroundName": "wompatuck-state-park"
    }
],
    "MT": [
    {
        "campgroundId": "630310",
        "campgroundName": "bannack-state-park"
    },
    {
        "campgroundId": "630211",
        "campgroundName": "beavertail-hill-state-park"
    },
    {
        "campgroundId": "630110",
        "campgroundName": "big-arm-unit--flathead-lake-state-park"
    },
    {
        "campgroundId": "630312",
        "campgroundName": "black-sandy-state-park"
    },
    {
        "campgroundId": "632300",
        "campgroundName": "blackfoot-river-corridor"
    },
    {
        "campgroundId": "630411",
        "campgroundName": "brush-lake-state-park"
    },
    {
        "campgroundId": "630511",
        "campgroundName": "cooney-state-park"
    },
    {
        "campgroundId": "630111",
        "campgroundName": "finley-point-unit--flathead-lake-state-park"
    },
    {
        "campgroundId": "630413",
        "campgroundName": "giant-springs-state-park"
    },
    {
        "campgroundId": "630513",
        "campgroundName": "lake-elmo-state-park"
    },
    {
        "campgroundId": "630112",
        "campgroundName": "lake-mary-ronan-state-park"
    },
    {
        "campgroundId": "630315",
        "campgroundName": "lewis-and-clark-caverns-state-park"
    },
    {
        "campgroundId": "630114",
        "campgroundName": "logan-state-park"
    },
    {
        "campgroundId": "630711",
        "campgroundName": "makoshika-state-park"
    },
    {
        "campgroundId": "630317",
        "campgroundName": "missouri-headwaters-state-park"
    },
    {
        "campgroundId": "630217",
        "campgroundName": "painted-rocks-state-park"
    },
    {
        "campgroundId": "630218",
        "campgroundName": "placid-lake-state-park"
    },
    {
        "campgroundId": "630219",
        "campgroundName": "salmon-lake-state-park"
    },
    {
        "campgroundId": "630117",
        "campgroundName": "thompson-falls-state-park"
    },
    {
        "campgroundId": "630715",
        "campgroundName": "tongue-river-state-park"
    },
    {
        "campgroundId": "630118",
        "campgroundName": "wayfarers-unit--flathead-lake-state-park"
    },
    {
        "campgroundId": "630119",
        "campgroundName": "west-shore-unit--flathead-lake-state-park"
    },
    {
        "campgroundId": "630120",
        "campgroundName": "whitefish-lake-state-park"
    }
],
    "NE": [
    {
        "campgroundId": "234051",
        "campgroundName": "box-butte-reservoir-sra"
    },
    {
        "campgroundId": "230034",
        "campgroundName": "branched-oak-sra"
    },
    {
        "campgroundId": "230275",
        "campgroundName": "calamus-sra"
    },
    {
        "campgroundId": "230042",
        "campgroundName": "chadron-sp"
    },
    {
        "campgroundId": "233351",
        "campgroundName": "danish-alps-state-recreation-area"
    },
    {
        "campgroundId": "230273",
        "campgroundName": "eugene-t-mahoney-sp"
    },
    {
        "campgroundId": "230098",
        "campgroundName": "fort-kearny-sra"
    },
    {
        "campgroundId": "230077",
        "campgroundName": "fort-robinson-sp"
    },
    {
        "campgroundId": "230078",
        "campgroundName": "fremont-sra"
    },
    {
        "campgroundId": "230091",
        "campgroundName": "indian-cave-sp"
    },
    {
        "campgroundId": "230094",
        "campgroundName": "johnson-lake-sra"
    },
    {
        "campgroundId": "230099",
        "campgroundName": "lake-mcconaughy-sra"
    },
    {
        "campgroundId": "230121",
        "campgroundName": "lake-minatare-sra"
    },
    {
        "campgroundId": "230100",
        "campgroundName": "lake-ogallala-sra"
    },
    {
        "campgroundId": "230101",
        "campgroundName": "lewis-and-clark-sra"
    },
    {
        "campgroundId": "230111",
        "campgroundName": "louisville-sra"
    },
    {
        "campgroundId": "232150",
        "campgroundName": "medicine-creek-sra"
    },
    {
        "campgroundId": "232201",
        "campgroundName": "merritt-reservoir"
    },
    {
        "campgroundId": "230123",
        "campgroundName": "mormon-island-sra"
    },
    {
        "campgroundId": "230126",
        "campgroundName": "niobrara-state-park"
    },
    {
        "campgroundId": "230135",
        "campgroundName": "pawnee-sra"
    },
    {
        "campgroundId": "230224",
        "campgroundName": "platte-river-sp"
    },
    {
        "campgroundId": "230143",
        "campgroundName": "ponca-sp"
    },
    {
        "campgroundId": "230150",
        "campgroundName": "rock-creek-station-shp"
    },
    {
        "campgroundId": "235602",
        "campgroundName": "smith-falls-state-park"
    },
    {
        "campgroundId": "234101",
        "campgroundName": "summit-lake-state-recreation-area"
    },
    {
        "campgroundId": "230175",
        "campgroundName": "two-rivers-sra"
    },
    {
        "campgroundId": "230179",
        "campgroundName": "victoria-springs-sra"
    },
    {
        "campgroundId": "234201",
        "campgroundName": "wildcat-hills-state-recreation-area"
    },
    {
        "campgroundId": "230256",
        "campgroundName": "willow-creek-sra"
    },
    {
        "campgroundId": "230196",
        "campgroundName": "windmill-sra"
    }
],
    "NH": [
    {
        "campgroundId": "270003",
        "campgroundName": "bear-brook-state-park"
    },
    {
        "campgroundId": "270121",
        "campgroundName": "cannon-mountain-rv-park"
    },
    {
        "campgroundId": "270009",
        "campgroundName": "clough-state-park"
    },
    {
        "campgroundId": "270011",
        "campgroundName": "coleman-state-park"
    },
    {
        "campgroundId": "270016",
        "campgroundName": "deer-mountain-campground"
    },
    {
        "campgroundId": "270015",
        "campgroundName": "dry-river-campground"
    },
    {
        "campgroundId": "270021",
        "campgroundName": "ellacoya-state-park"
    },
    {
        "campgroundId": "270027",
        "campgroundName": "greenfield-state-park"
    },
    {
        "campgroundId": "270029",
        "campgroundName": "hampton-beach-state-park-south"
    },
    {
        "campgroundId": "270950",
        "campgroundName": "jericho-mountain-state-park"
    },
    {
        "campgroundId": "270044",
        "campgroundName": "lafayette-place-campground"
    },
    {
        "campgroundId": "270045",
        "campgroundName": "lake-francis-state-park"
    },
    {
        "campgroundId": "270047",
        "campgroundName": "milan-hill-state-park"
    },
    {
        "campgroundId": "270050",
        "campgroundName": "mollidgewock-state-park"
    },
    {
        "campgroundId": "271000",
        "campgroundName": "monadnock-hq"
    },
    {
        "campgroundId": "270051",
        "campgroundName": "monadnock-state-park-gilson-pond-area"
    },
    {
        "campgroundId": "270053",
        "campgroundName": "moose-brook-state-park"
    },
    {
        "campgroundId": "270061",
        "campgroundName": "pawtuckaway-state-park"
    },
    {
        "campgroundId": "270065",
        "campgroundName": "pillsbury-state-park"
    },
    {
        "campgroundId": "270075",
        "campgroundName": "sunapee-state-park"
    },
    {
        "campgroundId": "271600",
        "campgroundName": "the-lodges-at-coleman-state-park"
    },
    {
        "campgroundId": "270082",
        "campgroundName": "umbagog-lake-state-park"
    },
    {
        "campgroundId": "270083",
        "campgroundName": "wadleigh-state-park"
    },
    {
        "campgroundId": "270091",
        "campgroundName": "wellington-state-park"
    },
    {
        "campgroundId": "270097",
        "campgroundName": "white-lake-state-park"
    },
    {
        "campgroundId": "270099",
        "campgroundName": "winslow-state-park"
    }
],
    "NM": [
    {
        "campgroundId": "430001",
        "campgroundName": "bluewater-lake"
    },
    {
        "campgroundId": "430002",
        "campgroundName": "bottomless-lakes"
    },
    {
        "campgroundId": "430039",
        "campgroundName": "brantley-lake"
    },
    {
        "campgroundId": "430003",
        "campgroundName": "caballo-lake"
    },
    {
        "campgroundId": "430950",
        "campgroundName": "cerrillos-hills-state-park-visitor-center--cerrillos"
    },
    {
        "campgroundId": "430023",
        "campgroundName": "cimarron-canyon"
    },
    {
        "campgroundId": "430005",
        "campgroundName": "city-of-rocks"
    },
    {
        "campgroundId": "430006",
        "campgroundName": "clayton-lake-state-park-and-dinosaur-trackways"
    },
    {
        "campgroundId": "430007",
        "campgroundName": "conchas-lake"
    },
    {
        "campgroundId": "430009",
        "campgroundName": "coyote-creek"
    },
    {
        "campgroundId": "430008",
        "campgroundName": "eagle-nest-lake"
    },
    {
        "campgroundId": "430011",
        "campgroundName": "el-vado-lake"
    },
    {
        "campgroundId": "430010",
        "campgroundName": "elephant-butte-lake"
    },
    {
        "campgroundId": "430014",
        "campgroundName": "fenton-lake-state-park"
    },
    {
        "campgroundId": "430012",
        "campgroundName": "heron-lake"
    },
    {
        "campgroundId": "430850",
        "campgroundName": "heron-lake-visitor-center-great-room"
    },
    {
        "campgroundId": "430013",
        "campgroundName": "hyde-memorial"
    },
    {
        "campgroundId": "430016",
        "campgroundName": "leasburg-dam"
    },
    {
        "campgroundId": "430018",
        "campgroundName": "manzano-mountains"
    },
    {
        "campgroundId": "430020",
        "campgroundName": "navajo-lake"
    },
    {
        "campgroundId": "430021",
        "campgroundName": "oasis"
    },
    {
        "campgroundId": "430037",
        "campgroundName": "oliver-lee-memorial"
    },
    {
        "campgroundId": "430022",
        "campgroundName": "pancho-villa"
    },
    {
        "campgroundId": "431500",
        "campgroundName": "pecos-canyon-state-park"
    },
    {
        "campgroundId": "430015",
        "campgroundName": "percha-dam"
    },
    {
        "campgroundId": "430026",
        "campgroundName": "rockhound"
    },
    {
        "campgroundId": "430027",
        "campgroundName": "santa-rosa-lake"
    },
    {
        "campgroundId": "430030",
        "campgroundName": "storrie-lake"
    },
    {
        "campgroundId": "430038",
        "campgroundName": "sugarite-canyon"
    },
    {
        "campgroundId": "430031",
        "campgroundName": "sumner-lake"
    },
    {
        "campgroundId": "430032",
        "campgroundName": "ute-lake"
    },
    {
        "campgroundId": "430034",
        "campgroundName": "villanueva"
    }
],
    "NY": [
    {
        "campgroundId": "695",
        "campgroundName": "alger-island"
    },
    {
        "campgroundId": "31",
        "campgroundName": "allegany-state-park"
    },
    {
        "campgroundId": "4435",
        "campgroundName": "allegany-state-park-parallelbovacain-hollow-cottages"
    },
    {
        "campgroundId": "567",
        "campgroundName": "ausable-point-campground"
    },
    {
        "campgroundId": "13",
        "campgroundName": "bear-spring-mountain"
    },
    {
        "campgroundId": "2114",
        "campgroundName": "beaver-island-state-park"
    },
    {
        "campgroundId": "392",
        "campgroundName": "beaver-pond-state-park"
    },
    {
        "campgroundId": "90",
        "campgroundName": "beaverkill"
    },
    {
        "campgroundId": "2108",
        "campgroundName": "belmont-lake-state-park"
    },
    {
        "campgroundId": "2109",
        "campgroundName": "bethpage-state-park"
    },
    {
        "campgroundId": "1001",
        "campgroundName": "betty-and-wilbur-davis-state-park"
    },
    {
        "campgroundId": "19",
        "campgroundName": "bowman-lake-state-park"
    },
    {
        "campgroundId": "625",
        "campgroundName": "brown-tract-pond-campground"
    },
    {
        "campgroundId": "572",
        "campgroundName": "buck-pond-campground"
    },
    {
        "campgroundId": "2115",
        "campgroundName": "buffalo-harbor-state-park"
    },
    {
        "campgroundId": "343",
        "campgroundName": "burnham-point-state-park"
    },
    {
        "campgroundId": "182",
        "campgroundName": "buttermilk-falls-state-park"
    },
    {
        "campgroundId": "755",
        "campgroundName": "canoe-point-state-park"
    },
    {
        "campgroundId": "627",
        "campgroundName": "caroga-lake-campground"
    },
    {
        "campgroundId": "210",
        "campgroundName": "cayuga-lake-state-park"
    },
    {
        "campgroundId": "753",
        "campgroundName": "cedar-island-state-park"
    },
    {
        "campgroundId": "347",
        "campgroundName": "cedar-point-state-park"
    },
    {
        "campgroundId": "44",
        "campgroundName": "chenango-valley-state-park"
    },
    {
        "campgroundId": "761",
        "campgroundName": "cherry-plain-state-park"
    },
    {
        "campgroundId": "2103",
        "campgroundName": "chittenango-falls-state-park"
    },
    {
        "campgroundId": "409",
        "campgroundName": "clarence-fahnestock-state-park"
    },
    {
        "campgroundId": "2104",
        "campgroundName": "clark-reservation-state-park"
    },
    {
        "campgroundId": "361",
        "campgroundName": "coles-creek-state-park"
    },
    {
        "campgroundId": "706",
        "campgroundName": "cranberry-lake-campground"
    },
    {
        "campgroundId": "573",
        "campgroundName": "crown-point-campground"
    },
    {
        "campgroundId": "2121",
        "campgroundName": "crown-point-state-historic-site"
    },
    {
        "campgroundId": "439",
        "campgroundName": "cumberland-bay-state-park"
    },
    {
        "campgroundId": "386",
        "campgroundName": "darien-lakes-state-park"
    },
    {
        "campgroundId": "56",
        "campgroundName": "delta-lake-state-park"
    },
    {
        "campgroundId": "2116",
        "campgroundName": "deveaux-woods-state-park"
    },
    {
        "campgroundId": "27",
        "campgroundName": "devils-tombstone-campground"
    },
    {
        "campgroundId": "331",
        "campgroundName": "dewolf-point-state-park"
    },
    {
        "campgroundId": "500",
        "campgroundName": "eagle-point"
    },
    {
        "campgroundId": "445",
        "campgroundName": "eel-weir-state-park"
    },
    {
        "campgroundId": "636",
        "campgroundName": "eighth-lake-campground"
    },
    {
        "campgroundId": "4835",
        "campgroundName": "empire-rv-park-at-the-ny-state-fairgrounds"
    },
    {
        "campgroundId": "302",
        "campgroundName": "evangola-state-park"
    },
    {
        "campgroundId": "175",
        "campgroundName": "fair-haven-beach-state-park"
    },
    {
        "campgroundId": "186",
        "campgroundName": "fillmore-glen-state-park"
    },
    {
        "campgroundId": "574",
        "campgroundName": "fish-creek-pond-campground"
    },
    {
        "campgroundId": "641",
        "campgroundName": "forked-lake-campground"
    },
    {
        "campgroundId": "2117",
        "campgroundName": "fort-niagara-state-park"
    },
    {
        "campgroundId": "336",
        "campgroundName": "four-mile-creek-state-park"
    },
    {
        "campgroundId": "2128",
        "campgroundName": "franklin-d-roosevelt-state-park"
    },
    {
        "campgroundId": "6235",
        "campgroundName": "frontier-town-campground"
    },
    {
        "campgroundId": "64",
        "campgroundName": "gilbert-lake-state-park"
    },
    {
        "campgroundId": "140",
        "campgroundName": "glen-island-lake-george-is"
    },
    {
        "campgroundId": "78",
        "campgroundName": "glimmerglass-state-park"
    },
    {
        "campgroundId": "642",
        "campgroundName": "golden-beach-campground"
    },
    {
        "campgroundId": "317",
        "campgroundName": "golden-hill-state-park"
    },
    {
        "campgroundId": "2122",
        "campgroundName": "grafton-lakes-state-park"
    },
    {
        "campgroundId": "447",
        "campgroundName": "grass-point-state-park"
    },
    {
        "campgroundId": "165",
        "campgroundName": "green-lakes-state-park"
    },
    {
        "campgroundId": "269",
        "campgroundName": "hamlin-beach-state-park"
    },
    {
        "campgroundId": "505",
        "campgroundName": "hearthstone-point"
    },
    {
        "campgroundId": "277",
        "campgroundName": "heckscher-state-park"
    },
    {
        "campgroundId": "2110",
        "campgroundName": "hempstead-lake-state-park"
    },
    {
        "campgroundId": "420",
        "campgroundName": "higley-flow-state-park"
    },
    {
        "campgroundId": "297",
        "campgroundName": "hither-hills-state-park"
    },
    {
        "campgroundId": "649",
        "campgroundName": "indian-lake-islands-campground"
    },
    {
        "campgroundId": "452",
        "campgroundName": "jacques-cartier-state-park"
    },
    {
        "campgroundId": "2129",
        "campgroundName": "james-baird-state-park"
    },
    {
        "campgroundId": "2118",
        "campgroundName": "joseph-davis-state-park"
    },
    {
        "campgroundId": "456",
        "campgroundName": "keewaydin-state-park"
    },
    {
        "campgroundId": "117",
        "campgroundName": "kenneth-l-wilson"
    },
    {
        "campgroundId": "228",
        "campgroundName": "keuka-lake-state-park"
    },
    {
        "campgroundId": "459",
        "campgroundName": "kring-point-state-park"
    },
    {
        "campgroundId": "653",
        "campgroundName": "lake-durant"
    },
    {
        "campgroundId": "594",
        "campgroundName": "lake-eaton-campground"
    },
    {
        "campgroundId": "368",
        "campgroundName": "lake-erie-state-park"
    },
    {
        "campgroundId": "122",
        "campgroundName": "lake-george-battleground"
    },
    {
        "campgroundId": "10885",
        "campgroundName": "lake-george-islands-day-use"
    },
    {
        "campgroundId": "593",
        "campgroundName": "lake-harris-campground"
    },
    {
        "campgroundId": "404",
        "campgroundName": "lake-taghkanic-state-park"
    },
    {
        "campgroundId": "280",
        "campgroundName": "lakeside-state-park"
    },
    {
        "campgroundId": "375",
        "campgroundName": "letchworth-state-park"
    },
    {
        "campgroundId": "657",
        "campgroundName": "lewey-lake"
    },
    {
        "campgroundId": "661",
        "campgroundName": "limekiln-lake"
    },
    {
        "campgroundId": "602",
        "campgroundName": "lincoln-pond-campground"
    },
    {
        "campgroundId": "495",
        "campgroundName": "little-pond-campground"
    },
    {
        "campgroundId": "2106",
        "campgroundName": "lodi-point-marine-state-park"
    },
    {
        "campgroundId": "111",
        "campgroundName": "long-island-lake-george-is"
    },
    {
        "campgroundId": "484",
        "campgroundName": "long-point-state-park"
    },
    {
        "campgroundId": "3485",
        "campgroundName": "long-point-state-park--finger-lakes"
    },
    {
        "campgroundId": "2101",
        "campgroundName": "long-point-state-park-on-lake-chautauqua"
    },
    {
        "campgroundId": "529",
        "campgroundName": "luzerne"
    },
    {
        "campgroundId": "433",
        "campgroundName": "macomb-reservation"
    },
    {
        "campgroundId": "759",
        "campgroundName": "mary-island-state-park"
    },
    {
        "campgroundId": "308",
        "campgroundName": "max-v-shaul-state-park"
    },
    {
        "campgroundId": "608",
        "campgroundName": "meacham-lake-campground"
    },
    {
        "campgroundId": "618",
        "campgroundName": "meadowbrook-public-campground"
    },
    {
        "campgroundId": "2102",
        "campgroundName": "midway-state-park"
    },
    {
        "campgroundId": "401",
        "campgroundName": "millsnorrie-state-park"
    },
    {
        "campgroundId": "2124",
        "campgroundName": "mine-kill-state-park"
    },
    {
        "campgroundId": "673",
        "campgroundName": "moffitt-beach-campground"
    },
    {
        "campgroundId": "100",
        "campgroundName": "mongaup-pond"
    },
    {
        "campgroundId": "311",
        "campgroundName": "moreau-lake-state-park"
    },
    {
        "campgroundId": "131",
        "campgroundName": "narrow-island-lake-george-is"
    },
    {
        "campgroundId": "1835",
        "campgroundName": "newtown-battlefield-state-park"
    },
    {
        "campgroundId": "2119",
        "campgroundName": "niagara-falls-state-park"
    },
    {
        "campgroundId": "699",
        "campgroundName": "nicks-lake-campground"
    },
    {
        "campgroundId": "5",
        "campgroundName": "northsouth-lake-campground"
    },
    {
        "campgroundId": "681",
        "campgroundName": "northampton-beach-campground"
    },
    {
        "campgroundId": "72",
        "campgroundName": "oquaga-creek-state-park"
    },
    {
        "campgroundId": "2111",
        "campgroundName": "orient-beach-state-park"
    },
    {
        "campgroundId": "619",
        "campgroundName": "paradox-lake-campground"
    },
    {
        "campgroundId": "2125",
        "campgroundName": "peebles-island-state-park"
    },
    {
        "campgroundId": "5935",
        "campgroundName": "peekamoose-blue-hole"
    },
    {
        "campgroundId": "11135",
        "campgroundName": "piseco-lake-campground"
    },
    {
        "campgroundId": "2142",
        "campgroundName": "pixley-falls-state-park"
    },
    {
        "campgroundId": "2130",
        "campgroundName": "point-au-roche-state-park"
    },
    {
        "campgroundId": "540",
        "campgroundName": "putnam-pond"
    },
    {
        "campgroundId": "2120",
        "campgroundName": "reservoir-state-park"
    },
    {
        "campgroundId": "1152",
        "campgroundName": "robert-g-wehle-state-park"
    },
    {
        "campgroundId": "221",
        "campgroundName": "robert-h-treman-state-park"
    },
    {
        "campgroundId": "427",
        "campgroundName": "robert-moses-state-park"
    },
    {
        "campgroundId": "515",
        "campgroundName": "rogers-rock-campground"
    },
    {
        "campgroundId": "547",
        "campgroundName": "rollins-pond-campground"
    },
    {
        "campgroundId": "716",
        "campgroundName": "sacandaga-campground"
    },
    {
        "campgroundId": "2131",
        "campgroundName": "sackets-harbor-battlefield-state-historic-site"
    },
    {
        "campgroundId": "232",
        "campgroundName": "sampson-state-park"
    },
    {
        "campgroundId": "2105",
        "campgroundName": "sandy-island-beach"
    },
    {
        "campgroundId": "562",
        "campgroundName": "saranac-lake-islands"
    },
    {
        "campgroundId": "2126",
        "campgroundName": "saratoga-spa-state-park"
    },
    {
        "campgroundId": "3386",
        "campgroundName": "scaroon-manor"
    },
    {
        "campgroundId": "4335",
        "campgroundName": "schodack-island-state-park"
    },
    {
        "campgroundId": "2127",
        "campgroundName": "schoharie-crossing-state-historic-site"
    },
    {
        "campgroundId": "326",
        "campgroundName": "sebago-cabins-state-park"
    },
    {
        "campgroundId": "82",
        "campgroundName": "selkirk-shores-state-park"
    },
    {
        "campgroundId": "6585",
        "campgroundName": "seneca-lake-state-park"
    },
    {
        "campgroundId": "560",
        "campgroundName": "sharp-bridge"
    },
    {
        "campgroundId": "2107",
        "campgroundName": "silver-lake-state-park"
    },
    {
        "campgroundId": "474",
        "campgroundName": "southwick-beach-state-park"
    },
    {
        "campgroundId": "2424",
        "campgroundName": "stoney-pond-state-forest-camping-area"
    },
    {
        "campgroundId": "261",
        "campgroundName": "stony-brook-state-park"
    },
    {
        "campgroundId": "2112",
        "campgroundName": "sunken-meadow-state-park"
    },
    {
        "campgroundId": "410",
        "campgroundName": "taconic-state-park-copake-falls"
    },
    {
        "campgroundId": "418",
        "campgroundName": "taconic-state-park-rudd-pond"
    },
    {
        "campgroundId": "218",
        "campgroundName": "taughannock-falls-state-park"
    },
    {
        "campgroundId": "537",
        "campgroundName": "taylor-pond-campground"
    },
    {
        "campgroundId": "2123",
        "campgroundName": "thacher-state-park"
    },
    {
        "campgroundId": "322",
        "campgroundName": "thompsons-lake-campground-at-thacher-state-park"
    },
    {
        "campgroundId": "692",
        "campgroundName": "tioga-point-campground"
    },
    {
        "campgroundId": "2113",
        "campgroundName": "valley-stream-state-park"
    },
    {
        "campgroundId": "170",
        "campgroundName": "verona-beach-state-park"
    },
    {
        "campgroundId": "254",
        "campgroundName": "watkins-glen-state-park"
    },
    {
        "campgroundId": "240",
        "campgroundName": "wellesley-island-state-park"
    },
    {
        "campgroundId": "468",
        "campgroundName": "westcott-beach-state-park"
    },
    {
        "campgroundId": "479",
        "campgroundName": "whetstone-gulf-state-park"
    },
    {
        "campgroundId": "2132",
        "campgroundName": "whirlpool-state-park"
    },
    {
        "campgroundId": "288",
        "campgroundName": "wildwood-state-park"
    },
    {
        "campgroundId": "561",
        "campgroundName": "wilmington-notch"
    },
    {
        "campgroundId": "2133",
        "campgroundName": "wilsontuscarora-state-park"
    },
    {
        "campgroundId": "489",
        "campgroundName": "woodland-valley"
    }
],
    "NC": [
    {
        "campgroundId": "552806",
        "campgroundName": "carolina-beach-state-park"
    },
    {
        "campgroundId": "552807",
        "campgroundName": "cliffs-of-the-neuse-state-park"
    },
    {
        "campgroundId": "552852",
        "campgroundName": "crowders-mountain-state-park"
    },
    {
        "campgroundId": "552867",
        "campgroundName": "elk-knob-state-park"
    },
    {
        "campgroundId": "552831",
        "campgroundName": "eno-river-state-park"
    },
    {
        "campgroundId": "552902",
        "campgroundName": "falls-lake-state-recreation-area"
    },
    {
        "campgroundId": "552808",
        "campgroundName": "fort-fisher-state-recreation-area"
    },
    {
        "campgroundId": "552810",
        "campgroundName": "goose-creek-state-park"
    },
    {
        "campgroundId": "552865",
        "campgroundName": "gorges-state-park"
    },
    {
        "campgroundId": "552824",
        "campgroundName": "grandfather-mountain-state-park"
    },
    {
        "campgroundId": "552811",
        "campgroundName": "hammocks-beach-state-park"
    },
    {
        "campgroundId": "552854",
        "campgroundName": "hanging-rock-state-park"
    },
    {
        "campgroundId": "552817",
        "campgroundName": "haw-river-state-park"
    },
    {
        "campgroundId": "552812",
        "campgroundName": "jockeys-ridge-state-park"
    },
    {
        "campgroundId": "552832",
        "campgroundName": "jones-lake-state-park"
    },
    {
        "campgroundId": "552903",
        "campgroundName": "jordan-lake-state-rec-area"
    },
    {
        "campgroundId": "552904",
        "campgroundName": "kerr-lake-state-recreation-area"
    },
    {
        "campgroundId": "552855",
        "campgroundName": "lake-james-state-park"
    },
    {
        "campgroundId": "552853",
        "campgroundName": "lake-norman-state-park"
    },
    {
        "campgroundId": "552833",
        "campgroundName": "lake-waccamaw-state-park"
    },
    {
        "campgroundId": "552840",
        "campgroundName": "lumber-river-state-park"
    },
    {
        "campgroundId": "552818",
        "campgroundName": "mayo-river-state-park"
    },
    {
        "campgroundId": "552834",
        "campgroundName": "medoc-mountain-state-park"
    },
    {
        "campgroundId": "552813",
        "campgroundName": "merchants-millpond-state-park"
    },
    {
        "campgroundId": "552856",
        "campgroundName": "morrow-mountain-state-park"
    },
    {
        "campgroundId": "552857",
        "campgroundName": "mount-jefferson-state-natural-area"
    },
    {
        "campgroundId": "552858",
        "campgroundName": "mount-mitchell-state-park"
    },
    {
        "campgroundId": "552859",
        "campgroundName": "new-river-state-park"
    },
    {
        "campgroundId": "552814",
        "campgroundName": "pettigrew-state-park"
    },
    {
        "campgroundId": "552860",
        "campgroundName": "pilot-mountain-state-park"
    },
    {
        "campgroundId": "552835",
        "campgroundName": "raven-rock-state-park"
    },
    {
        "campgroundId": "557510",
        "campgroundName": "rendezvous-mountain"
    },
    {
        "campgroundId": "552861",
        "campgroundName": "south-mountains-state-park"
    },
    {
        "campgroundId": "552862",
        "campgroundName": "stone-mountain-state-park"
    },
    {
        "campgroundId": "552837",
        "campgroundName": "weymouth-woods-state-natural-area"
    },
    {
        "campgroundId": "552839",
        "campgroundName": "william-b-umstead-state-park"
    }
],
    "OR": [
    {
        "campgroundId": "409402",
        "campgroundName": "ainsworth-state-park"
    },
    {
        "campgroundId": "405326",
        "campgroundName": "alfred-a-loeb-state-park"
    },
    {
        "campgroundId": "411602",
        "campgroundName": "arizona-beach-state-rec-area"
    },
    {
        "campgroundId": "402155",
        "campgroundName": "beachside-state-recreation-site"
    },
    {
        "campgroundId": "402247",
        "campgroundName": "benson-state-recreation-area"
    },
    {
        "campgroundId": "402126",
        "campgroundName": "beverly-beach-state-park"
    },
    {
        "campgroundId": "412052",
        "campgroundName": "browns-camp-ohv-campground"
    },
    {
        "campgroundId": "402398",
        "campgroundName": "bullards-beach-state-park"
    },
    {
        "campgroundId": "402385",
        "campgroundName": "cape-blanco-state-park"
    },
    {
        "campgroundId": "402146",
        "campgroundName": "cape-lookout-state-park"
    },
    {
        "campgroundId": "402348",
        "campgroundName": "carl-g-washburne-memorial-state-park"
    },
    {
        "campgroundId": "402497",
        "campgroundName": "catherine-creek-state-park"
    },
    {
        "campgroundId": "405213",
        "campgroundName": "champoeg-state-heritage-area"
    },
    {
        "campgroundId": "405422",
        "campgroundName": "clyde-holliday-state-recreation-site"
    },
    {
        "campgroundId": "402488",
        "campgroundName": "collier-memorial-state-park"
    },
    {
        "campgroundId": "409102",
        "campgroundName": "cottonwood-canyon-state-park"
    },
    {
        "campgroundId": "402446",
        "campgroundName": "cove-palisades-state-park"
    },
    {
        "campgroundId": "402251",
        "campgroundName": "dabney-state-recreation-area"
    },
    {
        "campgroundId": "402465",
        "campgroundName": "deschutes-river-state-recreation-area"
    },
    {
        "campgroundId": "402241",
        "campgroundName": "detroit-lake-state-recreation-area"
    },
    {
        "campgroundId": "402130",
        "campgroundName": "devils-lake-state-recreation-area"
    },
    {
        "campgroundId": "405225",
        "campgroundName": "elijah-bristow-state-park"
    },
    {
        "campgroundId": "402499",
        "campgroundName": "emigrant-springs-state-heritage-area"
    },
    {
        "campgroundId": "405228",
        "campgroundName": "fall-creek-state-recreation-area"
    },
    {
        "campgroundId": "405413",
        "campgroundName": "farewell-bend-state-recreation-area"
    },
    {
        "campgroundId": "402178",
        "campgroundName": "fort-stevens-state-park"
    },
    {
        "campgroundId": "402478",
        "campgroundName": "goose-lake-state-recreation-area"
    },
    {
        "campgroundId": "402257",
        "campgroundName": "guy--w-talbot-state-park"
    },
    {
        "campgroundId": "405331",
        "campgroundName": "harris-beach-state-park"
    },
    {
        "campgroundId": "405401",
        "campgroundName": "hat-rock-state-park"
    },
    {
        "campgroundId": "402388",
        "campgroundName": "humbug-mountain-state-park"
    },
    {
        "campgroundId": "412354",
        "campgroundName": "illinois-river-forks-sp"
    },
    {
        "campgroundId": "402450",
        "campgroundName": "jasper-point-state-park"
    },
    {
        "campgroundId": "405229",
        "campgroundName": "jasper-state-recreation-site"
    },
    {
        "campgroundId": "402334",
        "campgroundName": "jessie-m-honeyman-memorial-state-park"
    },
    {
        "campgroundId": "412104",
        "campgroundName": "jones-creek-campground"
    },
    {
        "campgroundId": "402294",
        "campgroundName": "ll-stub-stewart-memorial-state-park"
    },
    {
        "campgroundId": "405415",
        "campgroundName": "lake-owyhee-state-park"
    },
    {
        "campgroundId": "402479",
        "campgroundName": "lapine-state-park"
    },
    {
        "campgroundId": "405231",
        "campgroundName": "lowell-state-recreation-site"
    },
    {
        "campgroundId": "405202",
        "campgroundName": "maud-williamson-state-recreation-site"
    },
    {
        "campgroundId": "402267",
        "campgroundName": "memaloose-state-park"
    },
    {
        "campgroundId": "402284",
        "campgroundName": "milo-mciver-state-park"
    },
    {
        "campgroundId": "405214",
        "campgroundName": "molalla-river-state-park"
    },
    {
        "campgroundId": "402191",
        "campgroundName": "nehalem-bay-state-park"
    },
    {
        "campgroundId": "412154",
        "campgroundName": "nehalem-falls-campground"
    },
    {
        "campgroundId": "402243",
        "campgroundName": "north-santiam-state-recreation-area"
    },
    {
        "campgroundId": "411502",
        "campgroundName": "northrup-creek-horse-camp"
    },
    {
        "campgroundId": "402461",
        "campgroundName": "prineville-reservoir-state-park"
    },
    {
        "campgroundId": "402270",
        "campgroundName": "rooster-rock-state-park"
    },
    {
        "campgroundId": "411802",
        "campgroundName": "santiam-horse-camp"
    },
    {
        "campgroundId": "405203",
        "campgroundName": "sarah-helmick-state-recreation-site"
    },
    {
        "campgroundId": "402235",
        "campgroundName": "silver-falls-state-park"
    },
    {
        "campgroundId": "410852",
        "campgroundName": "smith-rock-state-park"
    },
    {
        "campgroundId": "402165",
        "campgroundName": "south-beach-state-park"
    },
    {
        "campgroundId": "402382",
        "campgroundName": "sunset-bay-state-park"
    },
    {
        "campgroundId": "410302",
        "campgroundName": "touvelle-state-recreation-site"
    },
    {
        "campgroundId": "402486",
        "campgroundName": "tumalo-state-park"
    },
    {
        "campgroundId": "402343",
        "campgroundName": "umpqua-lighthouse-state-park"
    },
    {
        "campgroundId": "405428",
        "campgroundName": "unity-lake-state-recreation-site"
    },
    {
        "campgroundId": "402363",
        "campgroundName": "valley-of-the-rogue-state-park"
    },
    {
        "campgroundId": "409502",
        "campgroundName": "viento-state-park"
    },
    {
        "campgroundId": "405408",
        "campgroundName": "wallowa-lake-state-park"
    },
    {
        "campgroundId": "405209",
        "campgroundName": "willamette-mission-state-park"
    },
    {
        "campgroundId": "402346",
        "campgroundName": "william-m-tugman-state-park"
    }
],
    "PA": [
    {
        "campgroundId": "880266",
        "campgroundName": "bald-eagle-state-forest"
    },
    {
        "campgroundId": "880133",
        "campgroundName": "bald-eagle-state-park"
    },
    {
        "campgroundId": "880433",
        "campgroundName": "beltzville-state-park"
    },
    {
        "campgroundId": "880101",
        "campgroundName": "bendigo-state-park"
    },
    {
        "campgroundId": "880102",
        "campgroundName": "black-moshannon-state-park"
    },
    {
        "campgroundId": "880302",
        "campgroundName": "blue-knob-state-park"
    },
    {
        "campgroundId": "880263",
        "campgroundName": "buchanan-state-forest"
    },
    {
        "campgroundId": "880323",
        "campgroundName": "buchanans-birthplace-state-park"
    },
    {
        "campgroundId": "880303",
        "campgroundName": "caledonia-state-park"
    },
    {
        "campgroundId": "880318",
        "campgroundName": "canoe-creek-state-park"
    },
    {
        "campgroundId": "880104",
        "campgroundName": "chapman-state-park"
    },
    {
        "campgroundId": "880143",
        "campgroundName": "cherry-springs-state-park"
    },
    {
        "campgroundId": "880268",
        "campgroundName": "clear-creek-state-forest"
    },
    {
        "campgroundId": "880201",
        "campgroundName": "clear-creek-state-park"
    },
    {
        "campgroundId": "880316",
        "campgroundName": "codorus-state-park"
    },
    {
        "campgroundId": "880304",
        "campgroundName": "colonel-denning-state-park"
    },
    {
        "campgroundId": "880105",
        "campgroundName": "colton-point-state-park"
    },
    {
        "campgroundId": "880202",
        "campgroundName": "cook-forest-state-park"
    },
    {
        "campgroundId": "880269",
        "campgroundName": "cornplanter-state-forest"
    },
    {
        "campgroundId": "880305",
        "campgroundName": "cowans-gap-state-park"
    },
    {
        "campgroundId": "880251",
        "campgroundName": "delaware-state-forest"
    },
    {
        "campgroundId": "880258",
        "campgroundName": "elk-state-forest"
    },
    {
        "campgroundId": "880434",
        "campgroundName": "evansburg-state-park"
    },
    {
        "campgroundId": "880267",
        "campgroundName": "forbes-state-forest"
    },
    {
        "campgroundId": "880405",
        "campgroundName": "fort-washington-state-park"
    },
    {
        "campgroundId": "880321",
        "campgroundName": "fowlers-hollow-state-park"
    },
    {
        "campgroundId": "880401",
        "campgroundName": "frances-slocum-state-park"
    },
    {
        "campgroundId": "880406",
        "campgroundName": "french-creek-state-park"
    },
    {
        "campgroundId": "880306",
        "campgroundName": "gifford-pinchot-state-park"
    },
    {
        "campgroundId": "880408",
        "campgroundName": "gouldsboro-state-park"
    },
    {
        "campgroundId": "880307",
        "campgroundName": "greenwood-furnace-state-park"
    },
    {
        "campgroundId": "880409",
        "campgroundName": "hickory-run-state-park"
    },
    {
        "campgroundId": "880109",
        "campgroundName": "hills-creek-state-park"
    },
    {
        "campgroundId": "880110",
        "campgroundName": "hyner-run-state-park"
    },
    {
        "campgroundId": "880203",
        "campgroundName": "jennings-environmental-education-center"
    },
    {
        "campgroundId": "880112",
        "campgroundName": "kettle-creek-state-park"
    },
    {
        "campgroundId": "880205",
        "campgroundName": "keystone-state-park"
    },
    {
        "campgroundId": "880320",
        "campgroundName": "kings-gap-environmental-education-center"
    },
    {
        "campgroundId": "880206",
        "campgroundName": "kooser-state-park"
    },
    {
        "campgroundId": "880429",
        "campgroundName": "lackawanna-state-park"
    },
    {
        "campgroundId": "880207",
        "campgroundName": "laurel-hill-state-park"
    },
    {
        "campgroundId": "880219",
        "campgroundName": "laurel-ridge-state-park"
    },
    {
        "campgroundId": "880240",
        "campgroundName": "laurel-summit-state-park"
    },
    {
        "campgroundId": "880113",
        "campgroundName": "leonard-harrison-state-park"
    },
    {
        "campgroundId": "880208",
        "campgroundName": "linn-run-state-park"
    },
    {
        "campgroundId": "880317",
        "campgroundName": "little-buffalo-state-park"
    },
    {
        "campgroundId": "880114",
        "campgroundName": "little-pine-state-park"
    },
    {
        "campgroundId": "880428",
        "campgroundName": "locust-lake-state-park"
    },
    {
        "campgroundId": "880254",
        "campgroundName": "loyalsock-state-forest"
    },
    {
        "campgroundId": "880115",
        "campgroundName": "lyman-run-state-park"
    },
    {
        "campgroundId": "880215",
        "campgroundName": "maurice-k-goddard-state-park"
    },
    {
        "campgroundId": "880209",
        "campgroundName": "mcconnells-mill-state-park"
    },
    {
        "campgroundId": "880424",
        "campgroundName": "memorial-lake-state-park"
    },
    {
        "campgroundId": "883550",
        "campgroundName": "michaux-state-forest"
    },
    {
        "campgroundId": "880308",
        "campgroundName": "mont-alto-state-park"
    },
    {
        "campgroundId": "880210",
        "campgroundName": "moraine-state-park"
    },
    {
        "campgroundId": "880255",
        "campgroundName": "moshannon-state-forest"
    },
    {
        "campgroundId": "880132",
        "campgroundName": "mt-pisgah-state-park"
    },
    {
        "campgroundId": "880410",
        "campgroundName": "neshaminy-state-park"
    },
    {
        "campgroundId": "880422",
        "campgroundName": "nockamixon-state-park"
    },
    {
        "campgroundId": "880211",
        "campgroundName": "ohiopyle-state-park"
    },
    {
        "campgroundId": "880221",
        "campgroundName": "oil-creek-state-park"
    },
    {
        "campgroundId": "880116",
        "campgroundName": "ole-bull-state-park"
    },
    {
        "campgroundId": "880117",
        "campgroundName": "parker-dam-state-park"
    },
    {
        "campgroundId": "880154",
        "campgroundName": "patterson-state-park"
    },
    {
        "campgroundId": "880252",
        "campgroundName": "pinchot-state-forest"
    },
    {
        "campgroundId": "880310",
        "campgroundName": "pine-grove-furnace-state-park"
    },
    {
        "campgroundId": "880155",
        "campgroundName": "poe-paddy-state-park"
    },
    {
        "campgroundId": "880118",
        "campgroundName": "poe-valley-state-park"
    },
    {
        "campgroundId": "880220",
        "campgroundName": "presque-isle-state-park"
    },
    {
        "campgroundId": "880311",
        "campgroundName": "prince-gallitzin-state-park"
    },
    {
        "campgroundId": "880414",
        "campgroundName": "promised-land-state-park"
    },
    {
        "campgroundId": "880226",
        "campgroundName": "pymatuning-state-park"
    },
    {
        "campgroundId": "880213",
        "campgroundName": "raccoon-creek-state-park"
    },
    {
        "campgroundId": "880416",
        "campgroundName": "ralph-stover-state-park"
    },
    {
        "campgroundId": "880119",
        "campgroundName": "ravensburg-state-park"
    },
    {
        "campgroundId": "880120",
        "campgroundName": "raymond-b-winter-state-park"
    },
    {
        "campgroundId": "880121",
        "campgroundName": "reeds-gap-state-park"
    },
    {
        "campgroundId": "880417",
        "campgroundName": "ricketts-glen-state-park"
    },
    {
        "campgroundId": "880427",
        "campgroundName": "ridley-creek-state-park"
    },
    {
        "campgroundId": "880264",
        "campgroundName": "rothrock-state-forest"
    },
    {
        "campgroundId": "880214",
        "campgroundName": "ryerson-station-state-park"
    },
    {
        "campgroundId": "880448",
        "campgroundName": "salt-springs-state-park"
    },
    {
        "campgroundId": "880312",
        "campgroundName": "samuel-s-lewis-state-park"
    },
    {
        "campgroundId": "880313",
        "campgroundName": "shawnee-state-park"
    },
    {
        "campgroundId": "880131",
        "campgroundName": "shikellamy-state-park"
    },
    {
        "campgroundId": "880127",
        "campgroundName": "simon-b-elliott-state-park"
    },
    {
        "campgroundId": "880123",
        "campgroundName": "sinnemahoning-state-park"
    },
    {
        "campgroundId": "880124",
        "campgroundName": "sizerville-state-park"
    },
    {
        "campgroundId": "880256",
        "campgroundName": "sproul-state-forest"
    },
    {
        "campgroundId": "880259",
        "campgroundName": "susquehannock-state-forest"
    },
    {
        "campgroundId": "880319",
        "campgroundName": "susquehannock-state-park"
    },
    {
        "campgroundId": "880134",
        "campgroundName": "the-nature-inn-at-bald-eagle"
    },
    {
        "campgroundId": "880257",
        "campgroundName": "tiadaghton-state-forest"
    },
    {
        "campgroundId": "880260",
        "campgroundName": "tioga-state-forest"
    },
    {
        "campgroundId": "880420",
        "campgroundName": "tobyhanna-state-park"
    },
    {
        "campgroundId": "880314",
        "campgroundName": "trough-creek-state-park"
    },
    {
        "campgroundId": "880261",
        "campgroundName": "tuscarora-state-forest"
    },
    {
        "campgroundId": "880413",
        "campgroundName": "tuscarora-state-park"
    },
    {
        "campgroundId": "880425",
        "campgroundName": "tyler-state-park"
    },
    {
        "campgroundId": "880309",
        "campgroundName": "warriors-path-state-park"
    },
    {
        "campgroundId": "883250",
        "campgroundName": "washington-crossing-historic-park"
    },
    {
        "campgroundId": "880253",
        "campgroundName": "weiser-state-forest"
    },
    {
        "campgroundId": "880315",
        "campgroundName": "whipple-dam-state-park"
    },
    {
        "campgroundId": "880423",
        "campgroundName": "worlds-end-state-park"
    },
    {
        "campgroundId": "880216",
        "campgroundName": "yellow-creek-state-park"
    }
],
    "RI": [
    {
        "campgroundId": "254300",
        "campgroundName": "arcadia-backpack-area"
    },
    {
        "campgroundId": "252711",
        "campgroundName": "burlingame-state-park"
    },
    {
        "campgroundId": "254200",
        "campgroundName": "burlingame-state-park-picnic-area"
    },
    {
        "campgroundId": "252741",
        "campgroundName": "charlestown-breachway"
    },
    {
        "campgroundId": "252761",
        "campgroundName": "east-beach"
    },
    {
        "campgroundId": "252611",
        "campgroundName": "fishermens-memorial-state-park"
    },
    {
        "campgroundId": "254250",
        "campgroundName": "frosty-hollow-shelter-camping-area"
    },
    {
        "campgroundId": "253123",
        "campgroundName": "george-washington-campground"
    },
    {
        "campgroundId": "254301",
        "campgroundName": "legrand-reynolds-horsemens-camping-area"
    },
    {
        "campgroundId": "253124",
        "campgroundName": "pulaski-park"
    }
],
    "TX": [
    {
        "campgroundId": "1200091",
        "campgroundName": "abilene-state-park"
    },
    {
        "campgroundId": "1200111",
        "campgroundName": "atlanta-state-park"
    },
    {
        "campgroundId": "1200011",
        "campgroundName": "balmorhea-state-park"
    },
    {
        "campgroundId": "1200012",
        "campgroundName": "barton-warnock-visitor-center"
    },
    {
        "campgroundId": "1200052",
        "campgroundName": "bastrop-state-park"
    },
    {
        "campgroundId": "1200031",
        "campgroundName": "bentsenrio-grande-valley-state-park"
    },
    {
        "campgroundId": "1200013",
        "campgroundName": "big-bend-ranch-state-park"
    },
    {
        "campgroundId": "1200014",
        "campgroundName": "big-spring-state-park"
    },
    {
        "campgroundId": "1200053",
        "campgroundName": "blanco-state-park"
    },
    {
        "campgroundId": "1200112",
        "campgroundName": "bonham-state-park"
    },
    {
        "campgroundId": "1200072",
        "campgroundName": "brazos-bend-state-park"
    },
    {
        "campgroundId": "1200054",
        "campgroundName": "buescher-state-park"
    },
    {
        "campgroundId": "1200113",
        "campgroundName": "caddo-lake-state-park"
    },
    {
        "campgroundId": "1200092",
        "campgroundName": "caprock-canyons-state-park-and-trailway"
    },
    {
        "campgroundId": "1200114",
        "campgroundName": "cedar-hill-state-park"
    },
    {
        "campgroundId": "1200032",
        "campgroundName": "choke-canyon-state-park"
    },
    {
        "campgroundId": "1200093",
        "campgroundName": "cleburne-state-park"
    },
    {
        "campgroundId": "1200055",
        "campgroundName": "colorado-bend-state-park"
    },
    {
        "campgroundId": "1200115",
        "campgroundName": "cooper-lake-state-park-doctors-creek"
    },
    {
        "campgroundId": "1200116",
        "campgroundName": "cooper-lake-state-park-south-sulphur"
    },
    {
        "campgroundId": "1200094",
        "campgroundName": "copper-breaks-state-park"
    },
    {
        "campgroundId": "1200117",
        "campgroundName": "daingerfield-state-park"
    },
    {
        "campgroundId": "1200016",
        "campgroundName": "davis-mountains-state-park"
    },
    {
        "campgroundId": "1200018",
        "campgroundName": "devils-river-state-natural-area"
    },
    {
        "campgroundId": "1200095",
        "campgroundName": "dinosaur-valley-state-park"
    },
    {
        "campgroundId": "1200118",
        "campgroundName": "eisenhower-state-park"
    },
    {
        "campgroundId": "1200056",
        "campgroundName": "enchanted-rock-state-natural-area"
    },
    {
        "campgroundId": "1200033",
        "campgroundName": "estero-llano-grande-state-park"
    },
    {
        "campgroundId": "1200096",
        "campgroundName": "fairfield-lake-state-park"
    },
    {
        "campgroundId": "1200034",
        "campgroundName": "falcon-state-park"
    },
    {
        "campgroundId": "1200074",
        "campgroundName": "fort-boggy-state-park"
    },
    {
        "campgroundId": "1200097",
        "campgroundName": "fort-parker-state-park"
    },
    {
        "campgroundId": "1200098",
        "campgroundName": "fort-richardson-state-park-hist-site-and-trailway"
    },
    {
        "campgroundId": "1200020",
        "campgroundName": "franklin-mountains-state-park"
    },
    {
        "campgroundId": "1200075",
        "campgroundName": "galveston-island-state-park"
    },
    {
        "campgroundId": "1200057",
        "campgroundName": "garner-state-park"
    },
    {
        "campgroundId": "1200035",
        "campgroundName": "goliad-state-park"
    },
    {
        "campgroundId": "1200036",
        "campgroundName": "goose-island-state-park"
    },
    {
        "campgroundId": "1200058",
        "campgroundName": "government-canyon-state-natural-area"
    },
    {
        "campgroundId": "1200059",
        "campgroundName": "guadalupe-river-state-park"
    },
    {
        "campgroundId": "1200060",
        "campgroundName": "hill-country-state-natural-area"
    },
    {
        "campgroundId": "1200021",
        "campgroundName": "hueco-tanks-state-park-and-historic-site"
    },
    {
        "campgroundId": "1200076",
        "campgroundName": "huntsville-state-park"
    },
    {
        "campgroundId": "1200022",
        "campgroundName": "indian-lodge-state-park"
    },
    {
        "campgroundId": "1200062",
        "campgroundName": "inks-lake-state-park"
    },
    {
        "campgroundId": "1200023",
        "campgroundName": "kickapoo-cavern-state-park"
    },
    {
        "campgroundId": "1200099",
        "campgroundName": "lake-arrowhead-state-park"
    },
    {
        "campgroundId": "1200119",
        "campgroundName": "lake-bob-sandlin-state-park"
    },
    {
        "campgroundId": "1200100",
        "campgroundName": "lake-brownwood-state-park"
    },
    {
        "campgroundId": "1200039",
        "campgroundName": "lake-casa-blanca-international-state-park"
    },
    {
        "campgroundId": "1200024",
        "campgroundName": "lake-colorado-city-state-park"
    },
    {
        "campgroundId": "1200038",
        "campgroundName": "lake-corpus-christi-state-park"
    },
    {
        "campgroundId": "1200077",
        "campgroundName": "lake-livingston-state-park"
    },
    {
        "campgroundId": "1200101",
        "campgroundName": "lake-mineral-wells-state-park-and-trailway"
    },
    {
        "campgroundId": "1200078",
        "campgroundName": "lake-somerville-state-park-birch-creek"
    },
    {
        "campgroundId": "1200079",
        "campgroundName": "lake-somerville-state-park-nails-creek"
    },
    {
        "campgroundId": "1200120",
        "campgroundName": "lake-tawakoni-state-park"
    },
    {
        "campgroundId": "1200102",
        "campgroundName": "lake-whitney-state-park"
    },
    {
        "campgroundId": "1200040",
        "campgroundName": "lockhart-state-park"
    },
    {
        "campgroundId": "1200064",
        "campgroundName": "lost-maples-state-natural-area"
    },
    {
        "campgroundId": "1200065",
        "campgroundName": "lyndon-b-johnson-state-park-and-historic-site"
    },
    {
        "campgroundId": "1200121",
        "campgroundName": "martin-creek-lake-state-park"
    },
    {
        "campgroundId": "1200080",
        "campgroundName": "martin-dies-jr-state-park"
    },
    {
        "campgroundId": "1200066",
        "campgroundName": "mckinney-falls-state-park"
    },
    {
        "campgroundId": "1200103",
        "campgroundName": "meridian-state-park"
    },
    {
        "campgroundId": "1200081",
        "campgroundName": "mission-tejas-state-park"
    },
    {
        "campgroundId": "1200025",
        "campgroundName": "monahans-sandhills-state-park"
    },
    {
        "campgroundId": "1200104",
        "campgroundName": "mother-neff-state-park"
    },
    {
        "campgroundId": "1200042",
        "campgroundName": "mustang-island-state-park"
    },
    {
        "campgroundId": "1200043",
        "campgroundName": "palmetto-state-park"
    },
    {
        "campgroundId": "1200105",
        "campgroundName": "palo-duro-canyon-state-park"
    },
    {
        "campgroundId": "1200068",
        "campgroundName": "pedernales-falls-state-park"
    },
    {
        "campgroundId": "1200107",
        "campgroundName": "possum-kingdom-state-park"
    },
    {
        "campgroundId": "1200122",
        "campgroundName": "purtis-creek-state-park"
    },
    {
        "campgroundId": "1200123",
        "campgroundName": "ray-roberts-lake-state-park-isle-du-bois"
    },
    {
        "campgroundId": "1200124",
        "campgroundName": "ray-roberts-lake-state-park-johnson-branch"
    },
    {
        "campgroundId": "1200045",
        "campgroundName": "resaca-de-la-palma-state-park"
    },
    {
        "campgroundId": "1200026",
        "campgroundName": "san-angelo-state-park"
    },
    {
        "campgroundId": "1200083",
        "campgroundName": "sea-rim-state-park"
    },
    {
        "campgroundId": "1200027",
        "campgroundName": "seminole-canyon-state-park-and-historic-site"
    },
    {
        "campgroundId": "1200069",
        "campgroundName": "south-llano-river-state-park"
    },
    {
        "campgroundId": "1200085",
        "campgroundName": "stephen-f-austin-state-park"
    },
    {
        "campgroundId": "1200125",
        "campgroundName": "tyler-state-park"
    },
    {
        "campgroundId": "1200086",
        "campgroundName": "village-creek-state-park"
    }
],
    "UT": [
    {
        "campgroundId": "343031",
        "campgroundName": "antelope-island-state-park"
    },
    {
        "campgroundId": "343061",
        "campgroundName": "bear-lake-state-park"
    },
    {
        "campgroundId": "343121",
        "campgroundName": "camp-floyd-stagecoach-inn-group"
    },
    {
        "campgroundId": "345131",
        "campgroundName": "coral-pink-sand-dunes-state-park"
    },
    {
        "campgroundId": "344161",
        "campgroundName": "dead-horse-point-state-park"
    },
    {
        "campgroundId": "342171",
        "campgroundName": "deer-creek-state-park"
    },
    {
        "campgroundId": "342191",
        "campgroundName": "east-canyon-state-park"
    },
    {
        "campgroundId": "349750",
        "campgroundName": "echo-state-park"
    },
    {
        "campgroundId": "345221",
        "campgroundName": "escalante-petrified-forest-state-park"
    },
    {
        "campgroundId": "342801",
        "campgroundName": "fred-hayes-state-park-at-starvation"
    },
    {
        "campgroundId": "345271",
        "campgroundName": "fremont-indian-state-park"
    },
    {
        "campgroundId": "344291",
        "campgroundName": "goblin-valley-state-park"
    },
    {
        "campgroundId": "346808",
        "campgroundName": "great-salt-lake-state-park"
    },
    {
        "campgroundId": "344341",
        "campgroundName": "green-river-state-park"
    },
    {
        "campgroundId": "346810",
        "campgroundName": "gunlock-state-park"
    },
    {
        "campgroundId": "344391",
        "campgroundName": "huntington-state-park"
    },
    {
        "campgroundId": "343401",
        "campgroundName": "hyrum-state-park"
    },
    {
        "campgroundId": "342472",
        "campgroundName": "jordanelle--rock-cliff-area"
    },
    {
        "campgroundId": "342471",
        "campgroundName": "jordanelle-state-park"
    },
    {
        "campgroundId": "345501",
        "campgroundName": "kodachrome-basin-state-park"
    },
    {
        "campgroundId": "344551",
        "campgroundName": "millsite-state-park"
    },
    {
        "campgroundId": "345611",
        "campgroundName": "otter-creek-state-park"
    },
    {
        "campgroundId": "344641",
        "campgroundName": "palisade-state-park"
    },
    {
        "campgroundId": "345711",
        "campgroundName": "quail-creek-state-park"
    },
    {
        "campgroundId": "342741",
        "campgroundName": "red-fleet-state-park"
    },
    {
        "campgroundId": "342751",
        "campgroundName": "rockport-state-park"
    },
    {
        "campgroundId": "345761",
        "campgroundName": "sand-hollow-state-park"
    },
    {
        "campgroundId": "344771",
        "campgroundName": "scofield-state-park"
    },
    {
        "campgroundId": "345781",
        "campgroundName": "snow-canyon-state-park"
    },
    {
        "campgroundId": "342811",
        "campgroundName": "steinaker-state-park"
    },
    {
        "campgroundId": "343871",
        "campgroundName": "utah-lake-state-park"
    },
    {
        "campgroundId": "348150",
        "campgroundName": "wasatch-mountain--little-deer-creek"
    },
    {
        "campgroundId": "342921",
        "campgroundName": "wasatch-mountain-state-park"
    },
    {
        "campgroundId": "343941",
        "campgroundName": "willard-bay-state-park"
    },
    {
        "campgroundId": "343961",
        "campgroundName": "yuba-lake-state-park"
    }
]
}

