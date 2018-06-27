const model1 = '{"nodes":[{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":0},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":1},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":2},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":3},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":4},{"bias":-0.08772571452926035,"type":"hidden","squash":"IDENTITY","mask":1,"index":5},{"bias":0.04021228355766521,"type":"hidden","squash":"TANH","mask":1,"index":6},{"bias":0.46572747381655466,"type":"output","squash":"RELU","mask":1,"index":7}],"connections":[{"weight":-0.03961081996832836,"from":6,"to":7,"gater":null},{"weight":0.08155474098348053,"from":5,"to":6,"gater":null},{"weight":1.6886713414538976,"from":3,"to":7,"gater":null},{"weight":1.417228192570337,"from":2,"to":7,"gater":7},{"weight":-0.07860360136408527,"from":4,"to":5,"gater":null},{"weight":-0.17794638983423106,"from":0,"to":7,"gater":7},{"weight":-0.09535098542013715,"from":1,"to":5,"gater":null},{"weight":0.07848037646236236,"from":1,"to":7,"gater":null}],"input":5,"output":1,"dropout":0}';

const model2 = '{"nodes":[{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":0},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":1},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":2},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":3},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":4},{"bias":0.27739365918814596,"type":"hidden","squash":"STEP","mask":1,"index":5},{"bias":-0.33902093544931144,"type":"hidden","squash":"RELU","mask":1,"index":6},{"bias":0.7746724444001809,"type":"hidden","squash":"IDENTITY","mask":1,"index":7},{"bias":0.07760736164176671,"type":"hidden","squash":"RELU","mask":1,"index":8},{"bias":0.07760736164176671,"type":"hidden","squash":"IDENTITY","mask":1,"index":9},{"bias":0.054131844328336814,"type":"hidden","squash":"SOFTSIGN","mask":1,"index":10},{"bias":0.08963018791233535,"type":"output","squash":"BENT_IDENTITY","mask":1,"index":11}],"connections":[{"weight":-0.045595206703711894,"from":9,"to":10,"gater":null},{"weight":-0.029052395144311793,"from":4,"to":9,"gater":null},{"weight":-0.08074110039170002,"from":3,"to":9,"gater":11},{"weight":-0.043816400662769,"from":5,"to":6,"gater":null},{"weight":-0.8875068122032546,"from":3,"to":7,"gater":9},{"weight":0.6822165202876207,"from":4,"to":5,"gater":null},{"weight":-0.004084711037015687,"from":0,"to":8,"gater":7},{"weight":-0.05410297478379218,"from":1,"to":6,"gater":null},{"weight":0.6493039761736062,"from":2,"to":11,"gater":11},{"weight":0.8164532301912863,"from":4,"to":11,"gater":11},{"weight":0.08205323160975328,"from":6,"to":11,"gater":null},{"weight":-0.06671247036001243,"from":7,"to":11,"gater":11},{"weight":0.5222183958136907,"from":8,"to":11,"gater":null},{"weight":0.05927830904441975,"from":10,"to":11,"gater":null}],"input":5,"output":1,"dropout":0}';

const model3 = '{"nodes":[{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":0},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":1},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":2},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":3},{"bias":0,"type":"input","squash":"LOGISTIC","mask":1,"index":4},{"bias":0.11605920197892533,"type":"hidden","squash":"INVERSE","mask":1,"index":5},{"bias":0.004033729810071496,"type":"hidden","squash":"INVERSE","mask":1,"index":6},{"bias":0.004033729810071496,"type":"hidden","squash":"INVERSE","mask":1,"index":7},{"bias":0.08533197418005192,"type":"hidden","squash":"SELU","mask":1,"index":8},{"bias":0.027146040270655675,"type":"hidden","squash":"SELU","mask":1,"index":9},{"bias":0.027146040270655675,"type":"hidden","squash":"SELU","mask":1,"index":10},{"bias":0.828185084326658,"type":"output","squash":"IDENTITY","mask":1,"index":11},{"bias":-0.5837708282756243,"type":"output","squash":"TANH","mask":1,"index":12},{"bias":0.2620931992997457,"type":"output","squash":"STEP","mask":1,"index":13}],"connections":[{"weight":1.5620682048100325,"from":7,"to":7,"gater":null},{"weight":1,"from":8,"to":8,"gater":null},{"weight":-0.08536162668439409,"from":11,"to":13,"gater":null},{"weight":-0.08536162668439409,"from":10,"to":12,"gater":null},{"weight":-0.025720941327676175,"from":8,"to":13,"gater":null},{"weight":0.053691261249957906,"from":9,"to":12,"gater":null},{"weight":-0.4710701017408451,"from":12,"to":8,"gater":null},{"weight":-0.004292524723790783,"from":13,"to":7,"gater":null},{"weight":0.08297743489579243,"from":7,"to":12,"gater":null},{"weight":0.3122763269997086,"from":5,"to":13,"gater":null},{"weight":0.022933731388944348,"from":7,"to":11,"gater":5},{"weight":0.017890855727256127,"from":8,"to":10,"gater":null},{"weight":-0.4710701017408451,"from":11,"to":7,"gater":null},{"weight":0.005786064084444001,"from":13,"to":5,"gater":5},{"weight":-0.08891426578117775,"from":4,"to":13,"gater":null},{"weight":-0.00742237347661949,"from":5,"to":12,"gater":null},{"weight":0.005786064084444001,"from":12,"to":5,"gater":null},{"weight":-0.04316095661423232,"from":5,"to":11,"gater":null},{"weight":-0.32620656490083777,"from":2,"to":13,"gater":null},{"weight":-0.08891426578117775,"from":4,"to":11,"gater":null},{"weight":-0.04316095661423232,"from":5,"to":10,"gater":null},{"weight":0.03738567068377882,"from":6,"to":7,"gater":null},{"weight":-0.08974755539610851,"from":3,"to":9,"gater":12},{"weight":-0.028063133712295102,"from":0,"to":11,"gater":null},{"weight":0.06037296994877339,"from":0,"to":10,"gater":null},{"weight":-1.169498704321942,"from":3,"to":6,"gater":null},{"weight":-1.169498704321942,"from":3,"to":5,"gater":null},{"weight":2.748836388728127,"from":1,"to":5,"gater":null},{"weight":0.03344083215653909,"from":0,"to":5,"gater":12}],"input":5,"output":3,"dropout":0}';