import Game, { GameState } from './Game'

interface BellGameState extends GameState {
    pressed: boolean
}

const times = [
    {"start":7.407475,"end":7.747561},
{"start":8.205126,"end":8.656282},
{"start":9.076137,"end":9.507021},
{"start":9.947079,"end":10.363997},
{"start":10.846587,"end":11.26554},
{"start":11.743552,"end":12.184627},
{"start":12.593719,"end":13.050691},
{"start":14.456814,"end":14.69002},
{"start":15.259734,"end":15.651368},
{"start":16.156688,"end":16.243053},
{"start":16.407626,"end":16.540128},
{"start":16.978136,"end":17.164572},
{"start":17.870272,"end":17.92894},
{"start":18.775085,"end":19.089121},
{"start":19.644923,"end":20.07921},
{"start":20.584187,"end":20.956287},
{"start":21.413544,"end":21.836704},
{"start":22.320215,"end":22.755535},
{"start":23.208213,"end":23.278815},
{"start":23.447201,"end":23.538849},
{"start":24.024094,"end":24.160357},
{"start":24.945189,"end":25.183714},
{"start":25.874129,"end":25.95757},
{"start":26.750598,"end":26.791953},
{"start":27.709121,"end":27.76211},
{"start":28.58679,"end":28.653291},
{"start":28.781319,"end":28.850923},
{"start":28.99941,"end":29.043025},
{"start":29.180463,"end":29.250003},
{"start":29.397008,"end":29.47801},
{"start":30.272265,"end":30.34556},
{"start":30.520609,"end":30.576469},
{"start":30.726372,"end":30.782459},
{"start":30.956752,"end":31.009892},
{"start":31.143589,"end":31.206032},
{"start":32.077911,"end":32.480442},
{"start":32.896215,"end":33.376245},
{"start":33.820893,"end":34.278237},
{"start":34.687196,"end":34.998591},
{"start":35.603153,"end":35.680766},
{"start":35.821128,"end":35.871222},
{"start":36.029089,"end":36.085142},
{"start":36.224064,"end":36.29437},
{"start":36.471835,"end":36.542623},
{"start":37.364989,"end":37.414578},
{"start":37.57783,"end":37.634749},
{"start":37.805216,"end":37.867083},
{"start":38.023565,"end":38.081765},
{"start":38.249326,"end":38.412071},
{"start":39.111615,"end":39.435849},
{"start":39.966488,"end":40.401188},
{"start":40.879707,"end":41.021656},
{"start":41.732364,"end":42.121932},
{"start":42.644694,"end":42.716646},
{"start":42.852548,"end":42.908205},
{"start":43.05763,"end":43.145841},
{"start":43.542165,"end":43.589062},
{"start":43.725045,"end":43.786478},
{"start":43.954554,"end":44.046514},
{"start":44.394305,"end":44.466411},
{"start":44.828217,"end":44.897611},
{"start":45.292283,"end":45.366752},
{"start":45.531798,"end":45.581598},
{"start":45.74698,"end":45.805497},
{"start":45.994137,"end":46.061909},
{"start":46.19771,"end":46.249294},
{"start":46.442011,"end":46.490923},
{"start":46.66861,"end":46.713444},
{"start":46.847287,"end":46.910059},
{"start":47.07175,"end":47.115984},
{"start":47.285144,"end":47.364576},
{"start":47.503193,"end":47.560884},
{"start":47.734276,"end":47.778778},
{"start":47.962019,"end":48.027282},
{"start":48.174471,"end":48.235633},
{"start":48.384899,"end":48.4345},
{"start":48.591451,"end":48.654352},
{"start":48.84009,"end":48.963317},
{"start":49.695601,"end":49.756177},
{"start":49.915799,"end":49.985153},
{"start":50.157629,"end":50.215488},
{"start":50.376195,"end":50.438632},
{"start":50.582283,"end":50.675016},
{"start":51.42989,"end":51.497926},
{"start":51.67678,"end":51.74147},
{"start":51.91253,"end":51.970956},
{"start":52.135761,"end":52.196275},
{"start":52.366264,"end":52.444951},
{"start":52.614044,"end":52.669449},
{"start":52.817671,"end":52.883271},
{"start":53.233453,"end":53.410049},
{"start":53.690153,"end":53.781775},
{"start":54.13108,"end":54.294801},
{"start":54.545875,"end":54.665428},
{"start":55.004742,"end":55.153076},
{"start":55.443135,"end":55.576987},
{"start":55.880916,"end":56.026184},
{"start":56.316733,"end":56.456224},
{"start":56.820248,"end":57.000246},
{"start":57.203259,"end":57.339641},
{"start":57.628457,"end":57.694567},
{"start":58.04698,"end":58.174678},
{"start":58.53239,"end":58.590928},
{"start":58.722074,"end":58.78258},
{"start":58.939823,"end":59.099097},
{"start":59.413904,"end":59.596656},
{"start":59.843175,"end":59.979935},
{"start":60.273569,"end":60.338827},
{"start":60.524695,"end":60.589546},
{"start":60.740033,"end":60.793201},
{"start":60.942849,"end":61.014683},
{"start":61.142518,"end":61.376854},
{"start":61.630256,"end":61.679101},
{"start":62.073853,"end":62.131529},
{"start":62.299375,"end":62.344282},
{"start":62.517796,"end":62.59744},
{"start":62.700622,"end":62.751553},
{"start":62.963276,"end":63.006471},
{"start":63.157328,"end":63.212191},
{"start":63.388546,"end":63.450549},
{"start":63.829092,"end":63.891126},
{"start":64.022954,"end":64.080954},
{"start":64.279878,"end":64.322501},
{"start":64.470314,"end":64.550839},
{"start":64.715553,"end":64.904562},
{"start":65.162196,"end":65.309941},
{"start":65.62269,"end":65.662872},
{"start":65.802959,"end":65.867633},
{"start":66.011618,"end":66.076641},
{"start":66.247215,"end":66.297293},
{"start":66.503043,"end":66.647413},
{"start":66.930327,"end":67.029284},
{"start":67.443633,"end":67.485093},
{"start":67.605793,"end":67.664687},
{"start":67.811025,"end":67.872702},
{"start":67.989224,"end":68.052271},
{"start":68.248458,"end":68.406365},
{"start":68.674439,"end":68.763409},
{"start":69.108724,"end":69.161232},
{"start":69.329399,"end":69.392541},
{"start":69.568291,"end":69.627972},
{"start":69.778375,"end":69.83357},
{"start":70.005832,"end":70.149542},
{"start":70.488033,"end":70.565483},
{"start":70.92657,"end":71.274522},
{"start":71.727828,"end":72.224271},
{"start":72.566094,"end":73.016661},
{"start":73.461115,"end":73.982841},
{"start":74.416811,"end":74.665606},
{"start":75.255012,"end":75.671478},
{"start":76.146005,"end":76.574735},
{"start":77.031956,"end":77.111703},
{"start":77.276298,"end":77.345528},
{"start":77.50211,"end":77.607714},
{"start":77.974259,"end":78.287258},
{"start":78.744546,"end":79.156035},
{"start":79.640002,"end":80.121169},
{"start":80.533902,"end":81.026423},
{"start":81.461283,"end":81.845714},
{"start":82.309325,"end":82.44945},
{"start":82.725691,"end":82.941948},
{"start":83.214661,"end":83.446393},
{"start":83.67926,"end":83.855313},
{"start":84.114929,"end":84.278828},
{"start":84.547373,"end":84.603722},
{"start":85.028823,"end":85.072616},
{"start":85.235011,"end":85.304401},
{"start":85.443672,"end":85.539459},
{"start":85.891967,"end":86.12477},
{"start":86.309648,"end":86.456775},
{"start":86.762767,"end":86.973113},
{"start":87.164182,"end":87.3661},
{"start":87.612631,"end":87.842744},
{"start":88.059855,"end":88.262185},
{"start":88.526453,"end":88.731567},
{"start":88.988784,"end":89.160438},
{"start":89.405927,"end":89.603116},
{"start":89.854724,"end":90.012691},
{"start":90.2884,"end":90.437418},
{"start":90.697267,"end":90.824481},
{"start":91.184599,"end":91.263379},
{"start":91.609441,"end":91.66045},
{"start":92.034241,"end":92.121147},
{"start":92.49607,"end":92.617191},
{"start":92.926289,"end":93.011333},
{"start":93.35187,"end":93.456379},
{"start":93.831804,"end":93.873719},
{"start":94.037062,"end":94.112106},
{"start":94.275053,"end":94.34727},
{"start":94.494524,"end":94.559062},
{"start":94.735817,"end":94.781014},
{"start":94.935853,"end":94.994686},
{"start":95.154691,"end":95.209551},
{"start":95.342311,"end":95.400975},
{"start":95.55357,"end":95.613422},
{"start":95.809483,"end":95.857905},
{"start":96.046137,"end":96.09674},
{"start":96.241818,"end":96.3049},
{"start":96.498464,"end":96.561906},
{"start":96.718263,"end":96.78098},
{"start":96.94954,"end":97.004595},
{"start":97.133886,"end":97.19183},
{"start":97.382127,"end":97.426651},
{"start":97.633931,"end":97.69212},
{"start":97.872569,"end":97.920734},
{"start":98.055889,"end":98.121196},
{"start":98.262781,"end":98.320842},
{"start":98.44632,"end":98.52673},
{"start":98.687486,"end":98.740226}
]
/*
{"start":8.29733,"end":8.360439},
{"start":9.092453,"end":9.172488},
{"start":9.90891,"end":10.003845},
{"start":10.817209,"end":10.888301},
{"start":11.715886,"end":11.796458},
{"start":12.595362,"end":12.686693},
{"start":13.12044,"end":13.194661},
{"start":13.573712,"end":13.644769},
{"start":14.01404,"end":14.080627},
{"start":14.437012,"end":14.846848},
{"start":15.255577,"end":15.72715},
{"start":16.13367,"end":16.6176},
{"start":16.93923,"end":17.497219},
{"start":17.851352,"end":18.50083},
{"start":18.878922,"end":19.36446},
{"start":19.678377,"end":20.183878},
{"start":20.559835,"end":20.903682},
{"start":25.068038,"end":25.112815},
{"start":25.451035,"end":25.530095},
{"start":25.898146,"end":25.965145},
{"start":26.336114,"end":26.415919},
{"start":26.73405,"end":26.820965},
{"start":27.204227,"end":27.267635},
{"start":27.702653,"end":27.774224},
{"start":28.588812,"end":28.649525},
{"start":28.781146,"end":28.837006},
{"start":28.996244,"end":29.054989},
{"start":29.225326,"end":29.273174},
{"start":29.429704,"end":29.503349},
{"start":29.877328,"end":29.931416},
{"start":30.300552,"end":30.349442},
{"start":30.493261,"end":30.559692},
{"start":30.720237,"end":30.784419},
{"start":30.943477,"end":30.998716},
{"start":31.17419,"end":31.233308},
{"start":31.624607,"end":31.680257},
{"start":32.093411,"end":32.13823},
{"start":32.284968,"end":32.322386},
{"start":32.485495,"end":32.533983},
{"start":32.669295,"end":32.730942},
{"start":32.926565,"end":32.987305},
{"start":33.841377,"end":33.888065},
{"start":34.034061,"end":34.09234},
{"start":34.250925,"end":34.330617},
{"start":34.709676,"end":34.766367},
{"start":35.159773,"end":35.195127},
{"start":35.598599,"end":35.650169},
{"start":35.80168,"end":35.85239},
{"start":36.039979,"end":36.088477},
{"start":36.238782,"end":36.30753},
{"start":36.464357,"end":36.51083},
{"start":36.920642,"end":36.968624},
{"start":37.380368,"end":37.421301},
{"start":37.571747,"end":37.621013},
{"start":37.770865,"end":37.823068},
{"start":38.057551,"end":38.096112},
{"start":38.240649,"end":38.302309},
{"start":38.67566,"end":38.726591},
{"start":39.151156,"end":39.208409},
{"start":39.33355,"end":39.3841},
{"start":39.542977,"end":39.595947},
{"start":39.750373,"end":39.804304},
{"start":40.430697,"end":40.489755},
{"start":40.608972,"end":40.665339},
{"start":40.847637,"end":40.929977},
{"start":41.327046,"end":41.37461},
{"start":41.518129,"end":41.604449},
{"start":41.98384,"end":42.044458},
{"start":42.195286,"end":42.33604},
{"start":42.639187,"end":42.685784},
{"start":42.82231,"end":42.906753},
{"start":43.063314,"end":43.142525},
{"start":43.293132,"end":43.353787},
{"start":43.54103,"end":43.656602},
{"start":43.981743,"end":44.082656},
{"start":44.437635,"end":44.518181},
{"start":44.828541,"end":44.986519},
{"start":45.271299,"end":45.395678},
{"start":45.703736,"end":45.853722},
{"start":46.647861,"end":46.715966},
{"start":47.067713,"end":47.148336},
{"start":47.428623,"end":47.512954},
{"start":47.918213,"end":47.996856},
{"start":48.355778,"end":48.429204},
{"start":48.834398,"end":48.901261},
{"start":49.278725,"end":49.339188},
{"start":49.72627,"end":49.764487},
{"start":49.91202,"end":49.981882},
{"start":50.119631,"end":50.189094},
{"start":50.561359,"end":50.646523},
{"start":51.00623,"end":51.080365},
{"start":51.455315,"end":51.540167},
{"start":51.868461,"end":51.965881},
{"start":52.827867,"end":52.895043},
{"start":53.723605,"end":53.793269},
{"start":54.120809,"end":54.1931},
{"start":54.549874,"end":54.599562},
{"start":55.022376,"end":55.083501},
{"start":55.380078,"end":55.461072},
{"start":56.322731,"end":56.374609},
{"start":56.810684,"end":56.869756},
{"start":56.992002,"end":57.066275},
{"start":57.192736,"end":57.264679},
{"start":57.423434,"end":57.478204},
{"start":57.628506,"end":57.702307},
{"start":58.07019,"end":58.133612},
{"start":58.302502,"end":58.375237},
{"start":58.705338,"end":58.775268},
{"start":58.941022,"end":59.037857},
{"start":59.390899,"end":59.462435},
{"start":59.845605,"end":59.904671},
{"start":60.037331,"end":60.093568},
{"start":60.274438,"end":60.349138},
{"start":60.775223,"end":60.840048},
{"start":60.940018,"end":61.009717},
{"start":61.14889,"end":61.244721},
{"start":61.674986,"end":61.749068},
{"start":62.056989,"end":62.126762},
{"start":62.296566,"end":62.422568},
{"start":62.733334,"end":62.788288},
{"start":62.909939,"end":62.997229},
{"start":63.127505,"end":63.179824},
{"start":63.371901,"end":63.418289},
{"start":63.554159,"end":63.619226},
{"start":63.801644,"end":63.885099},
{"start":64.231976,"end":64.292682},
{"start":64.424011,"end":64.487519},
{"start":64.657064,"end":64.74461},
{"start":65.119997,"end":65.203344},
{"start":65.620055,"end":65.689816},
{"start":65.80706,"end":65.881117},
{"start":66.082497,"end":66.14466},
{"start":66.527577,"end":66.61217},
{"start":66.921379,"end":66.986752},
{"start":67.130185,"end":67.187276},
{"start":67.333283,"end":67.399563},
{"start":67.574872,"end":67.6371},
{"start":67.779721,"end":67.843429},
{"start":68.036527,"end":68.09891},
{"start":68.229006,"end":68.293373},
{"start":68.474418,"end":68.528692},
{"start":68.7053,"end":68.759481},
{"start":68.883464,"end":68.951614},
{"start":69.116412,"end":69.161555},
{"start":69.347718,"end":69.412428},
{"start":69.563913,"end":69.626803},
{"start":69.780519,"end":69.837942},
{"start":70.027066,"end":70.081511},
{"start":70.207443,"end":70.277091},
{"start":70.398349,"end":70.463485},
{"start":70.676073,"end":70.743697},
{"start":70.901185,"end":70.963994},
{"start":71.135804,"end":71.193177},
{"start":71.328974,"end":71.386088},
{"start":71.572628,"end":71.630513},
{"start":71.785509,"end":71.854869},
{"start":71.97842,"end":72.036028},
{"start":72.200811,"end":72.273349},
{"start":72.426148,"end":72.481251},
{"start":72.652223,"end":72.716561},
{"start":72.845665,"end":72.910457},
{"start":73.07027,"end":73.134263},
{"start":73.269344,"end":73.33924},
{"start":73.979362,"end":74.041045},
{"start":74.178167,"end":74.264918},
{"start":74.455295,"end":74.524692},
{"start":74.664012,"end":74.714162},
{"start":74.897294,"end":74.959304},
{"start":75.094638,"end":75.164577},
{"start":75.331025,"end":75.404533},
{"start":75.537421,"end":75.588219},
{"start":75.714409,"end":75.78833},
{"start":75.936458,"end":75.99394},
{"start":76.19547,"end":76.252305},
{"start":76.40054,"end":76.466889},
{"start":76.623417,"end":76.687359},
{"start":76.830911,"end":76.900053},
{"start":77.074595,"end":77.143619},
{"start":77.306451,"end":77.381419},
{"start":77.517305,"end":77.586193},
{"start":77.95182,"end":78.004183},
{"start":78.182673,"end":78.240641},
{"start":78.390187,"end":78.464503},
{"start":78.591883,"end":78.639845},
{"start":78.777518,"end":78.85193},
{"start":78.990732,"end":79.059239},
{"start":79.222372,"end":79.278447},
{"start":79.447343,"end":79.51101},
{"start":79.715478,"end":79.774689},
{"start":79.907671,"end":79.971566},
{"start":80.138873,"end":80.19106},
{"start":80.381499,"end":80.446576},
{"start":80.574772,"end":80.65469},
{"start":80.778041,"end":80.840554},
{"start":80.995083,"end":81.064631},
{"start":81.216318,"end":81.274053},
{"start":81.491124,"end":81.552666},
{"start":81.928869,"end":82.007469},
{"start":82.106164,"end":82.17989},
{"start":82.373491,"end":82.432995},
{"start":82.576336,"end":82.639579},
{"start":82.773107,"end":82.833987},
{"start":83.235238,"end":83.313058},
{"start":83.449006,"end":83.50165},
{"start":83.673565,"end":83.732725},
{"start":83.913147,"end":83.97732},
{"start":84.143871,"end":84.209227},
{"start":84.320055,"end":84.39692},
{"start":84.527137,"end":84.569393},
{"start":84.698436,"end":84.758229},
{"start":85.006219,"end":85.051438},
{"start":85.200652,"end":85.262947},
{"start":85.443192,"end":85.487848},
{"start":85.621664,"end":85.692147},
{"start":85.874483,"end":85.936935},
{"start":86.099892,"end":86.157592},
{"start":86.287862,"end":86.349881},
{"start":86.507607,"end":86.577422},
{"start":86.774199,"end":86.835519},
{"start":86.95417,"end":87.016832},
{"start":87.177771,"end":87.242896},
{"start":87.402684,"end":87.471015},
{"start":87.625724,"end":87.681611},
{"start":87.853927,"end":87.924431},
{"start":88.071086,"end":88.142054},
{"start":88.253467,"end":88.320976},
{"start":88.514716,"end":88.591494},
{"start":88.996507,"end":89.064274},
{"start":89.170112,"end":89.242392},
{"start":89.372291,"end":89.445652},
{"start":89.609919,"end":89.672035},
{"start":89.875528,"end":89.946856},
{"start":90.277864,"end":90.340226},
{"start":90.469941,"end":90.543368},
{"start":90.700486,"end":90.79176},
{"start":91.103081,"end":91.173211},
{"start":91.331005,"end":91.394278},
{"start":91.555563,"end":91.617411},
{"start":91.787248,"end":91.861216},
{"start":92.014927,"end":92.099406},
{"start":92.284418,"end":92.341658},
{"start":92.487939,"end":92.550609},
{"start":92.671631,"end":92.740953},
{"start":92.932342,"end":93.016329},
{"start":93.356647,"end":93.417228},
{"start":93.561571,"end":93.617938},
{"start":93.745409,"end":93.810051},
{"start":93.967935,"end":94.054271},
{"start":94.180525,"end":94.250749},
{"start":94.419928,"end":94.511862},
{"start":94.642807,"end":94.723541},
{"start":94.862622,"end":94.920913},
{"start":95.0714,"end":95.144713},
{"start":95.346547,"end":95.41584},
{"start":95.597125,"end":95.660287},
{"start":95.807592,"end":95.871821},
{"start":96.015011,"end":96.077242},
{"start":96.198,"end":96.271604},
{"start":96.43897,"end":96.491307},
{"start":96.654326,"end":96.727585},
{"start":96.874254,"end":96.937183},
{"start":97.072646,"end":97.130848},
{"start":97.321837,"end":97.392834},
{"start":97.478308,"end":97.532929},
{"start":97.638746,"end":97.678294},
{"start":97.776342,"end":97.827852},
{"start":97.898147,"end":97.952502},
{"start":98.046344,"end":98.092861},
{"start":98.178913,"end":98.229824},
{"start":98.309753,"end":98.369187},
{"start":98.43922,"end":98.500077},
{"start":98.590308,"end":98.646877},
{"start":98.709572,"end":98.779581}
]*/

export default class Bell extends Game {
    state: BellGameState
    bellAudio: HTMLAudioElement
    bellCowbellAudio: HTMLAudioElement
    bellB: HTMLDivElement
    bellBlocks: HTMLElement[]

    constructor() {
        super()

        this.bellAudio = document.querySelector('.JsBellAudio')
        this.bellCowbellAudio = document.querySelector('.JsBellCowbellAudio')
        this.bellB = document.querySelector('.JsBellB')
        this.bellBlocks = Array.prototype.slice.apply(document.querySelectorAll('.JsBellBlocks div'))

        this.state.pressed = false
    }

    gameOnStart() {     
        console.log('BELL START')
        super.gameOnStart()
        this.bellAudio.addEventListener('ended', this.onEnded)
        this.bellAudio.play()
        this.render()
    }

    gameOnTap() {
        this.state.pressed = true
        // times.push({start:this.curTime(), end:null})
        this.bellCowbellAudio.currentTime = 0
        this.bellCowbellAudio.play()
    }

    gameOnTapEnd() {
        this.state.pressed = false
        // if(times.length > 0) {
        //     times[times.length - 1].end = this.curTime()
        // }
        console.log(times.map(t => JSON.stringify(t)).join(',\n'))
    }

    gameFrame(frame: number, dt: number) {
        const curT = this.curTime()

        let i = 0;
        for (; i < times.length; i++) {
            if (times[i].end > curT) {
                break;
            }
        }

        for(let j = 0; j < this.bellBlocks.length; j++) {
            const bb = this.bellBlocks[j]
            const t = times[i + j]
            const pxPerSec = 100

            const botSecs = t == null ? 0 : t.start - curT
            const heightSecs = t == null ? 0 : t.end - t.start

            bb.style.bottom = `${botSecs * pxPerSec + 20}px`
            bb.style.height = `${heightSecs * pxPerSec}px`
        }

        const inBlock = times[i] != null && times[i].start < (curT + 0.1)

        if (this.state.pressed) {
            this.state.score = Math.max(0, this.state.score + (inBlock ? 1 : -2))
        }

        this.renderB(inBlock)

        super.render()
    }

    curTime() {
        return this.bellAudio.currentTime
    }

    onEnded = () => {
        console.log('ENDED')
        this.gameOnEnd('YEE HAW. SCORED ' + this.state.score)
    }

    renderB(inBlock: boolean) {
        const {pressed} = this.state
        this.bellB.classList.toggle('PgBellNone', !pressed)
        this.bellB.classList.toggle('PgBellGood', pressed && inBlock)
        this.bellB.classList.toggle('PgBellBad', pressed && !inBlock)
    }
}