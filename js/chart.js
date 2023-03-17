//Make an array of numbers from 1800, 1801, 1802... 2000
const arr = Array.from({length : 200}, (_, v) => v+1801);
console.log(arr);

// Our labels along the x-axis
var years = arr;
// For drawing the lines
var albertEinstein = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.2634588364999217e-09, 3.2634588364999217e-09, 3.2634588364999217e-09, 3.2634588364999217e-09, 3.2634588364999217e-09, 3.2634588364999217e-09, 3.2634588364999217e-09, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 5.120651839060234e-10, 5.120651839060234e-10, 1.0004033791842305e-09, 1.0004033791842305e-09, 1.0004033791842305e-09, 1.0004033791842305e-09, 1.0004033791842305e-09, 4.883381952782071e-10, 4.883381952782071e-10, 0.0, 0.0, 0.0, 0.0, 0.0, 7.290454589232403e-10, 7.290454589232403e-10, 7.290454589232403e-10, 7.290454589232403e-10, 7.290454589232403e-10, 8.618318757060348e-10, 8.618318757060348e-10, 1.327864167827946e-10, 2.573339795221484e-10, 2.573339795221484e-10, 2.573339795221484e-10, 2.573339795221484e-10, 1.2454756273935378e-10, 2.3340109210425094e-10, 2.3340109210425094e-10, 3.045529860047834e-10, 3.045529860047834e-10, 3.045529860047834e-10, 3.933271565591058e-10, 9.004839493112879e-10, 2.1480761693202867e-09, 2.223950833015108e-09, 2.176692921145624e-09, 2.244391902487105e-09, 2.3770171307470532e-09, 2.410836950707461e-09, 1.9036801579552787e-09, 5.472344085813826e-10, 6.648877797538993e-10, 1.6789827147637278e-09, 2.9526257550038792e-09, 4.520124377968163e-09, 7.0609059393029435e-09, 1.2556225694103164e-08, 1.9850293012499013e-08, 2.997956232470804e-08, 4.571683920318037e-08, 5.613782873479879e-08, 6.387219591325837e-08, 8.656876257110266e-08, 1.0919078416041625e-07, 1.273702545339412e-07, 1.3766871274713465e-07, 1.3684953208732103e-07, 1.4380515368981962e-07, 1.5341959677276202e-07, 1.4166113361722766e-07, 1.2545448616460168e-07, 1.2147537375994943e-07, 1.1836419336727236e-07, 1.2306232731264443e-07, 1.1896807450284541e-07, 1.176099837201556e-07, 1.2008236792228543e-07, 1.2443793601895387e-07, 1.1098878463907827e-07, 1.0261184714620088e-07, 9.517247180821999e-08, 9.118858760156659e-08, 8.268389655492164e-08, 7.612388687659535e-08, 6.866182086387848e-08, 6.903453047308566e-08, 7.113177653244357e-08, 8.208793441813863e-08, 1.6134497014620918e-07, 1.9253549408761372e-07, 2.1560095271005203e-07, 2.5806556992945063e-07, 2.88557909503392e-07, 3.078163664278171e-07, 3.123899087345957e-07, 2.5908755065172174e-07, 2.820507083762485e-07, 3.299820921906108e-07, 3.6238888664489164e-07, 4.001139757292549e-07, 4.3274093286527204e-07, 4.7413923149568813e-07, 5.180020009122797e-07, 5.292885946671179e-07, 5.197253715648133e-07, 5.122706170368474e-07, 5.198755599979319e-07, 5.448620510963207e-07, 5.762811383647204e-07, 5.967912833122162e-07, 6.069361282763046e-07, 6.305949682428036e-07, 6.28566575804663e-07, 6.286165005673996e-07, 6.394859529531718e-07, 6.168025704157896e-07, 6.113812755107315e-07, 5.981145087779234e-07, 5.903416259960588e-07, 6.067562594580522e-07, 6.278230963679172e-07, 8.352476470463444e-07, 8.885680569749508e-07, 9.183863036404156e-07, 9.849500608132594e-07, 1.0295927706595518e-06, 1.0765023960500133e-06, 1.0882497463171603e-06, 8.932456856720299e-07, 9.094519555219449e-07, 9.36219294089824e-07, 9.292506563594673e-07, 9.483013140457583e-07, 9.303786896452948e-07, 9.431195167053374e-07, 9.799679544032967e-07, 9.882967008577128e-07, 9.864621038754455e-07, 9.8508212431625e-07, 9.727466963990343e-07, 9.872250075204647e-07, 9.81233500039837e-07, 1.0031358052791411e-06, 1.0232940894638887e-06, 1.0043731728209032e-06, 1.0130059097588986e-06, 1.0295175424549337e-06, 1.2639412066814008e-06, 1.3406527971580675e-06, 1.329556750663739e-06, 1.3101065243452986e-06, 1.328881418365719e-06, 1.346448763277814e-06, 1.3433376417586779e-06, 1.1124061692109016e-06, 1.032249891912735e-06, 1.0097238519587596e-06, 9.899908702339287e-07, 9.90069541525632e-07, 9.57528641265526e-07, 9.391111949038791e-07, 9.42998521428048e-07, 9.59687658526794e-07, 9.604959473108464e-07, 9.59411138978794e-07];
var sherlockHolmes = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.3326224251082e-10, 1.3326224251082e-10, 1.3326224251082e-10, 1.3326224251082e-10, 1.3326224251082e-10, 1.3326224251082e-10, 1.3326224251082e-10, 1.481497305785443e-10, 1.481497305785443e-10, 1.481497305785443e-10, 1.481497305785443e-10, 1.481497305785443e-10, 1.481497305785443e-10, 2.809361473613389e-10, 2.6011600016774747e-10, 2.6011600016774747e-10, 2.6011600016774747e-10, 6.14879964404886e-10, 2.4715249608802434e-09, 4.243884997391843e-09, 7.814444274207538e-09, 1.2476670109760692e-08, 1.2579479561189037e-08, 1.3264427659428638e-08, 1.3569014745140606e-08, 1.1988062043055692e-08, 1.0393250347652736e-08, 7.112535314681066e-09, 2.7219345428391203e-09, 4.212493068652837e-09, 4.418194239035651e-09, 5.654414634927361e-09, 9.689042060731116e-09, 2.170959605735894e-08, 4.1617353182691174e-08, 6.025811792399947e-08, 7.505012427395335e-08, 8.81099127626937e-08, 1.1208308084828137e-07, 1.1602151062106714e-07, 1.1613412250913565e-07, 1.2158946662209148e-07, 1.1432445644134401e-07, 1.0733398779296164e-07, 1.0890634070749781e-07, 9.60028988369491e-08, 9.505015542897257e-08, 9.246075295875147e-08, 7.151573555574942e-08, 6.685439148311292e-08, 7.073832465818799e-08, 6.038430860095495e-08, 5.2458459671405374e-08, 5.039727517847885e-08, 4.650516873182044e-08, 4.7030810991697895e-08, 4.730615442229334e-08, 5.0759165759473035e-08, 5.020789473064724e-08, 5.184448324614875e-08, 5.643790806126552e-08, 6.221760478248533e-08, 6.031215476249535e-08, 5.935966511978157e-08, 5.1234040502176215e-08, 5.159657666199889e-08, 4.956336826670135e-08, 4.40730273863567e-08, 3.82300974369595e-08, 4.052578006508156e-08, 3.7396626240138175e-08, 3.5426536371119255e-08, 3.6925309540184314e-08, 4.496024200558882e-08, 5.0342647384127304e-08, 5.543644603684632e-08, 7.275082200156443e-08, 8.750261467785744e-08, 9.222094377037138e-08, 9.86769837904181e-08, 1.508480664824674e-07, 1.551020117420064e-07, 1.5728270597037408e-07, 1.4951672458859582e-07, 1.4435565682496027e-07, 1.6403215040229823e-07, 1.7326434483980586e-07, 1.2662115876439982e-07, 1.254868960489018e-07, 1.3402412995284457e-07, 1.3339360244961946e-07, 1.35105448098979e-07, 1.1549792284475708e-07, 1.1559631068231673e-07, 1.2278906983250897e-07, 1.252822079728893e-07, 1.223223691226849e-07, 1.2196814935805378e-07, 1.530219851783191e-07, 1.6767632717216786e-07, 1.7641313019924253e-07, 1.7526623098871953e-07, 1.917306359392309e-07, 2.1661563311324373e-07, 2.440757965262362e-07, 2.512933353468075e-07, 2.623991792104009e-07, 2.7620862194258476e-07, 2.830564877090832e-07, 2.8184111248005396e-07, 2.837631021585756e-07, 2.882860071297598e-07, 2.937913612705805e-07, 3.100725791682635e-07, 3.3122634590654343e-07, 3.5233783738216775e-07, 3.6976514853189914e-07, 3.8942852143009077e-07, 3.9920655175202615e-07, 3.873241334011774e-07, 3.791797423348596e-07, 3.603030376910153e-07, 3.6072356124350335e-07, 3.638574526121374e-07, 3.531985685510465e-07, 3.815130956549443e-07, 3.855409106888276e-07, 3.8636662631168814e-07, 3.8766204316483967e-07, 3.929762653699852e-07, 4.0686021764356285e-07, 4.056083996926775e-07, 3.790076894867005e-07, 3.8680769063960595e-07, 3.824483120037517e-07, 4.051752609614466e-07, 4.4972675336144417e-07, 4.3572462362005483e-07, 4.685364193132305e-07, 5.031456363927386e-07, 5.274651714769009e-07, 6.92286464852389e-07, 7.767565080030181e-07, 8.159943994152335e-07, 9.150740213824195e-07, 9.81713136687696e-07, 1.0295222036152803e-06, 1.104682723962469e-06, 1.0363679621150368e-06, 1.0231929366000259e-06];
var frankenstein = [3.921014268826184e-07, 4.2789030203493893e-07, 4.909365619217473e-07, 4.474980548658485e-07, 4.961862783505109e-07, 5.075378360126186e-07, 5.267384344571318e-07, 4.934275170041604e-07, 4.720431649372715e-07, 4.0922332646329907e-07, 4.467733804501352e-07, 4.016805397506167e-07, 3.4450392303954557e-07, 3.434627627387142e-07, 3.758830737459513e-07, 3.9962962716799666e-07, 4.1498928331813137e-07, 4.131809114531799e-07, 4.833481962610417e-07, 5.162014044149796e-07, 5.027159001461509e-07, 4.856111672779662e-07, 5.185112123789233e-07, 5.027277601194718e-07, 4.940236887510505e-07, 4.6992632616950557e-07, 4.791690132930983e-07, 4.809062293783686e-07, 5.216895674818391e-07, 5.294255913668167e-07, 5.436843366624089e-07, 5.363847200052467e-07, 4.874573034742622e-07, 5.300217367221194e-07, 5.751582778300092e-07, 5.303742349432079e-07, 4.711869507900701e-07, 4.779825977558565e-07, 4.833428225278372e-07, 4.997542321559325e-07, 4.639324840484603e-07, 4.5160768585057145e-07, 4.955214316331486e-07, 4.835456439065768e-07, 5.046300048304277e-07, 5.215329638628776e-07, 5.245431071086517e-07, 5.080480645704353e-07, 5.522589836865726e-07, 5.260737948122239e-07, 5.981940692631074e-07, 5.873658121150324e-07, 5.931532760834151e-07, 6.541609423038608e-07, 6.861987620660719e-07, 6.373032631147777e-07, 6.55484606275942e-07, 6.274085779166074e-07, 6.191971481582316e-07, 6.0164453381211e-07, 5.472391413669746e-07, 5.34334946321126e-07, 5.339369530637279e-07, 5.177986841837472e-07, 5.171756153491255e-07, 5.709253636203877e-07, 6.333054208036109e-07, 6.480481147264072e-07, 6.413587081104717e-07, 6.787983823284906e-07, 7.167326673749943e-07, 7.08487488866792e-07, 6.757817832944316e-07, 6.141211120588455e-07, 5.990832830450797e-07, 6.040781792242862e-07, 5.664327155890143e-07, 5.466265439021559e-07, 5.335374047327994e-07, 5.320767806032174e-07, 5.459365541225582e-07, 5.675532699050174e-07, 5.840203454811541e-07, 5.888632342378384e-07, 6.028661882088013e-07, 6.419849845380148e-07, 6.929261076038529e-07, 7.347051759357523e-07, 7.357245246047179e-07, 7.453853153752529e-07, 7.81988814781341e-07, 8.16894368784103e-07, 8.344276238858583e-07, 8.96190597034417e-07, 9.058614247286252e-07, 9.390260597034025e-07, 9.370444656399611e-07, 9.405442499753138e-07, 9.359370827561569e-07, 9.259488089290764e-07, 8.575731759005326e-07, 8.448473717440461e-07, 8.082639461853043e-07, 8.133192263163178e-07, 7.969792607452421e-07, 7.709650406338499e-07, 7.540486178316184e-07, 7.15477215505546e-07, 7.219705529288538e-07, 7.4409523774323e-07, 7.920589187701157e-07, 8.079355617545454e-07, 8.46223250456595e-07, 8.211217813628277e-07, 8.13677859566399e-07, 7.681724209110794e-07, 7.289559878894838e-07, 6.501962153444245e-07, 6.055570379105899e-07, 5.290124330973153e-07, 5.310056069772275e-07, 5.238831184734798e-07, 5.510079371820861e-07, 6.016286298355616e-07, 5.937261034562522e-07, 6.114650424089112e-07, 7.130575698153864e-07, 7.304957421183644e-07, 7.363588565567625e-07, 7.587047678368566e-07, 7.496592421115825e-07, 7.688934065949329e-07, 7.714431019069577e-07, 6.869641993034747e-07, 6.655760752697201e-07, 6.359189066123301e-07, 5.820583055538009e-07, 5.142269766825589e-07, 4.839843857748097e-07, 4.7170222826155494e-07, 4.427717783528351e-07, 5.06487152409006e-07, 4.5807540211788886e-07, 4.1356650776996115e-07, 4.173673795142869e-07, 4.0663038853543707e-07, 3.8628733075743836e-07, 4.1644870054012374e-07, 3.551346442317741e-07, 5.398553213353807e-07, 6.086731900722953e-07, 6.318536520666385e-07, 6.376296336644113e-07, 7.713442268400936e-07, 7.397386769168537e-07, 7.177450405444168e-07, 5.737616675105528e-07, 5.441277396909885e-07, 5.838648787305698e-07, 5.997795012392868e-07, 5.195914647109541e-07, 5.404328281396634e-07, 5.59126639083323e-07, 5.788429656864277e-07, 6.027207421409133e-07, 5.758639239112589e-07, 6.863892524831629e-07, 6.566651872422621e-07, 6.914935722436764e-07, 7.574755451449684e-07, 7.959668144914238e-07, 8.135399005888238e-07, 8.172739122918366e-07, 7.084349493067878e-07, 7.102072215405184e-07, 7.289298926999826e-07, 6.809464951272406e-07, 6.706074568033468e-07, 6.706217569834345e-07, 7.106714698628431e-07, 7.822542491859557e-07, 8.212186181871013e-07, 7.854201190379431e-07, 8.114425164811629e-07, 8.108463751861044e-07, 8.093398134535943e-07, 8.228584858573283e-07, 7.874184088255529e-07, 7.821996064194536e-07, 8.029479983763719e-07, 8.020161154880563e-07, 8.430113455558188e-07, 8.799476388178716e-07, 8.812261285129352e-07, 9.311088514810503e-07, 9.129044461328054e-07, 9.531495866862574e-07, 9.661159034684324e-07, 9.846641384163895e-07, 1.003195628917248e-06, 9.808691418454276e-07, 9.492620246679248e-07, 9.885369536277722e-07, 9.971798817787203e-07, 9.941549998464844e-07, 9.305476120451723e-07, 9.105887508147654e-07, 8.890701792552136e-07, 8.437030243970054e-07, 8.203558812575855e-07, 7.42077726759557e-07, 7.154412336214071e-07, 7.223236723673056e-07, 6.99755487078489e-07, 7.057716808438792e-07, 7.475450891953577e-07, 7.28902818991628e-07, 7.556330103852815e-07, 7.61601086196606e-07, 7.692685102256291e-07];

new Chart("myChart", {
  type: 'line',
  data: {
    labels: years,
    //datasets can be an array of objects
    datasets: [
      { 
        data: albertEinstein,
        //Add label for the data africa
        label: "Albert Einstein",
        borderColor: "#3e95cd",
        fill: false
      },
      { 
        data: sherlockHolmes,
        label: "Sherlock Holmes",
        borderColor: "#8e5ea2",
        fill: false
      },
      { 
        data: frankenstein,
        label: "Frankenstein",
        borderColor: "#3cba9f",
        fill: false
      }
    ]
  },
  options: { 
       scales: {
        yAxes: [{
            display: true,
            ticks: {
                min: 0,    // minimum will be 0, unless there is a lower value.
                max: 0.0000014,
        }
        }]
    }
}
});