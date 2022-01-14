// Description
(function(){
const data = [
  [14],
  ['A45'],
  [2460],
  [50],
];

const rowHeaders = [
  'Vehicle Average Baro Pressure Input', 
  'Select Engine Type', 
  'Boost Ciling Table(HPA)',
  'Ambient Temp Average in deg C',
];
const colHeaders = ['Input'];
const engineType = ['A47', 'B48', 'C46', 'A54'];

const container = document.getElementById('boost0');

setTimeout(() => {
  const boost = new Handsontable(container, {
    data: data,
    rowHeaders: rowHeaders,
    colHeaders: colHeaders,
    className: "htRight htBottom ",
    rowHeaderWidth: 300,
    colWidths:100,
    fillHandle: false,
    afterGetColHeader: function(col, TH){
    	if(col < 0){
      	TH.innerHTML = 'Description'
      }
    },
    cells: function(row, col){
      let cp = {}
      switch (row) {
        case 0:
          cp.type = 'numeric';
          cp.numericFormat = {pattern: '0.00'};
          break;
        case 1:
          cp.type = 'dropdown';
          cp.source = engineType;
          break;
        case 2:
          cp.type = 'numeric';
          cp.numericFormat = {pattern: '0.00'};
          cp.editor = false;
          break;
        case 3:
          cp.type = 'numeric';
          cp.numericFormat = {pattern: '0.0'};
          break;
        default:
          break;
      } 
      
      return cp;
    },
    licenseKey: 'non-commercial-and-evaluation' // for non-commercial use only
  });
}, 2000);
})();

// DME Calculated MAF LB/MIN
(function(){
const data = [
  [16, 16, 16, 16, 16, 16, 20, 21, 17, 18],
  [1.51, 2.01, 2.51, 3.52, 4.27, 5.02, 6.28, 7.54, 8.79, 10.05],
  [50, 60, 70, 100, 120, 140, 180, 210, 240, 280],
];

const rowHeaders = [
  'Enter Desired Boost Target Relative',
  'DME Calculated MAF LB/MIN',
  'DME Calculated MAF LB/MIN converted to KG/H',
];
const colHeaders = [];
const engineType = ['A47', 'B48', 'C46', 'A54'];

const container = document.getElementById('boost1');

(function init(){
  var x = 500;
  for(var i = 0 ; i < 10 ; i ++) colHeaders.push(x + i*250);
})();

setTimeout(() => {
  const boost = new Handsontable(container, {
    data: data,
    rowHeaders: rowHeaders,
    colHeaders: colHeaders,
    className: "htRight htBottom ",
    rowHeaderWidth: 300,
    colWidths:100,
    fillHandle: false,
    afterGetColHeader: function(col, TH){
    	if(col < 0){
      	TH.innerHTML = 'Target RPM'
      }
    },
    cells: function(row, col){
      let cp = {}
      switch (row) {
        case 0:
          cp.type = 'numeric';
          cp.numericFormat = {pattern: '0.00'};
          break;
        case 1:
          cp.type = 'numeric';
          cp.numericFormat = {pattern: '0.00'};
          cp.editor = false;
          break;
        case 2:
          cp.type = 'numeric';
          cp.numericFormat = {pattern: '0.00'};
          cp.editor = false;
          break;
        default:
          break;
      } 
      
      return cp;
    },
    licenseKey: 'non-commercial-and-evaluation' // for non-commercial use only
  });
}, 2000);
})();

// VE Ceiling
(function(){
  const data = [
    [16, 16, 16, 16, 16, 16, 20, 21, 17, 18],
    [14, 15, 16, 14, 15, 16, 14, 15, 16, 14],
  ];
  
  const rowHeaders = [
    'VE Ceiling (Used as a Cap on Cyl Fill calc)',
    'DME Calculated Load', 
  ];
  const colHeaders = [];
  const engineType = ['A47', 'B48', 'C46', 'A54'];
  
  const container = document.getElementById('boost2');
  
  (function init(){
    var x = 500;
    for(var i = 0 ; i < 10 ; i ++) colHeaders.push(x + i*250);
  })();
  
  setTimeout(() => {
    const boost = new Handsontable(container, {
      data: data,
      rowHeaders: rowHeaders,
      colHeaders: colHeaders,
      className: "htRight htBottom ",
      rowHeaderWidth: 300,
      colWidths:100,
      fillHandle: false,
      afterGetColHeader: function(col, TH){
        if(col < 0){
          TH.innerHTML = 'Target RPM'
        }
      },  
      cells: function(row, col){
        let cp = {}
        cp.type = 'numeric';
        cp.numericFormat = {pattern: '0.00'};
        return cp;
      },
      licenseKey: 'non-commercial-and-evaluation' // for non-commercial use only
    });
  }, 3000);
})();

(function(){
  const data = [
    [16, 16, 16, 16, 16, 16, 20, 21, 17, 18],
  ];
  
  const rowHeaders = [
    'TQ Request (NM)'
  ];
  const colHeaders = [];
  const engineType = ['A47', 'B48', 'C46', 'A54'];
  
  const container = document.getElementById('boost3');
  
  (function init(){
    var x = 500;
    for(var i = 0 ; i < 10 ; i ++) colHeaders.push(x + i*250);
  })();
  
  setTimeout(() => {
    const boost = new Handsontable(container, {
      data: data,
      rowHeaders: rowHeaders,
      colHeaders: colHeaders,
      className: "htRight htBottom ",
      rowHeaderWidth: 300,
      colWidths:100,
      fillHandle: false,
      afterGetColHeader: function(col, TH){
        if(col < 0){
          TH.innerHTML = 'Target RPM'
        }
      },  
      cells: function(row, col){
        let cp = {}
        switch (row) {
          case 2:
            cp.type = 'dropdown';
            cp.source = engineType;
            break;
          default:
            cp.type = 'numeric';
            cp.numericFormat = {pattern: '0.00'};
            cp.editor = false;
            break;
        } 
        
        return cp;
      },
      licenseKey: 'non-commercial-and-evaluation' // for non-commercial use only
    });
  }, 4000);
})();

// Max TQ Limit / Country Dependant TQ Limit / MAX Internal TQ / MAX TQ LIMIT POWER Tables
(function(){
  const data = [
    [16, 16, 16, 16, 16, 16, 20, 21, 17, 18],
  ];
  
  const rowHeaders = ['TQ Request (NM)'];
  const colHeaders = [];
  const engineType = ['A47', 'B48', 'C46', 'A54'];
  
  const container = document.getElementById('boost4');
  
  (function init(){
    var x = 1500;
    for(var i = 0 ; i < 10 ; i ++) colHeaders.push(x + i*250);
  })();
  
  setTimeout(() => {
    const boost = new Handsontable(container, {
      data: data,
      rowHeaders: rowHeaders,
      colHeaders: colHeaders,
      className: "htRight htBottom ",
      rowHeaderWidth: 300,
      colWidths:100,
      fillHandle: false,
      afterGetColHeader: function(col, TH){
        if(col < 0){
          TH.innerHTML = 'Target RPM'
        }
      },   
      cells: function(row, col){
        let cp = {}
        switch (row) {
          case 0:
            cp.type = 'numeric';
            cp.numericFormat = {pattern: '0.00'};
            break;
          default:
            cp.type = 'numeric';
            cp.numericFormat = {pattern: '0.00'};
            break;
        } 
        
        return cp;
      },
      licenseKey: 'non-commercial-and-evaluation' // for non-commercial use only
    });
  }, 4000);
})();

// Optiaml Characteristic Torque Curve Tables
(function(){
  const data = [
    [16, 16, 16, 16, 16, 16, 20, 21, 17, 18],
  ];
  
  const rowHeaders = ['TQ Request (NM)'];
  const colHeaders = [];
  const engineType = ['A47', 'B48', 'C46', 'A54'];
  
  const container = document.getElementById('boost5');
  
  (function init(){
    var x = 1500;
    for(var i = 0 ; i < 10 ; i ++) colHeaders.push(x + i*250);
  })();
  
  setTimeout(() => {
    const boost = new Handsontable(container, {
      data: data,
      rowHeaders: rowHeaders,
      colHeaders: colHeaders,
      className: "htRight htBottom ",
      rowHeaderWidth: 300,
      colWidths:100,
      fillHandle: false,  
      afterGetColHeader: function(col, TH){
        if(col < 0){
          TH.innerHTML = 'Target RPM'
        }
      },
      cells: function(row, col){
        let cp = {}
        switch (row) {
          case 0:
            cp.type = 'numeric';
            cp.numericFormat = {pattern: '0.00'};
            break;
          default:
            break;
        } 
        
        return cp;
      },
      licenseKey: 'non-commercial-and-evaluation' // for non-commercial use only
    });
  }, 4000);
})();

// Load Ceiling Tables KR
(function(){
  const data = [
    [16, 16, 16, 16, 16, 16, 20, 21, 17, 18],
    [16, 16, 16, 16, 16, 16, 20, 21, 17, 18],
    [16, 16, 16, 16, 16, 16, 20, 21, 17, 18],
    [16, 16, 16, 16, 16, 16, 20, 21, 17, 18],
    [16, 16, 16, 16, 16, 16, 20, 21, 17, 18],
    [16, 16, 16, 16, 16, 16, 20, 21, 17, 18],
  ];
  
  const rowHeaders = [-15, -14, -13, -12, -11];
  const colHeaders = [];
  
  const container = document.getElementById('boost6');
  
  (function init(){
    var x = 1500;
    for(var i = 0 ; i < 10 ; i ++) colHeaders.push(x + i*250);
  })();
  
  setTimeout(() => {
    const boost = new Handsontable(container, {
      data: data,
      rowHeaders: rowHeaders,
      colHeaders: colHeaders,
      className: "htRight htBottom ",
      rowHeaderWidth: 300,
      colWidths:100,
      fillHandle: false,  
      cells: function(row, col){
        let cp = {}
        cp.type = 'numeric';
        cp.numericFormat = {pattern: '0.00'};
        return cp;
      },
      licenseKey: 'non-commercial-and-evaluation' // for non-commercial use only
    });
  }, 4000);
})();

// Boost Set Limit
(function(){
  const data = [
    [16, 16, 16, 16, 16, 16, 20, 21, 17, 18],
  ];
  
  const rowHeaders = [
    'X axis = kg/h, Z axis Pressure Ratio'
  ];
  const colHeaders = [];
  const container = document.getElementById('boost7');
  
  (function init(){
    var x = 1500;
    for(var i = 0 ; i < 10 ; i ++) colHeaders.push(x + i*250);
  })();
  
  setTimeout(() => {
    const boost = new Handsontable(container, {
      data: data,
      rowHeaders: rowHeaders,
      colHeaders: colHeaders,
      className: "htRight htBottom ",
      rowHeaderWidth: 300,
      colWidths:100,
      fillHandle: false,  
      cells: function(row, col){
        let cp = {}
        cp.type = 'numeric';
        cp.numericFormat = {pattern: '0.00'};
        return cp;
      },
      licenseKey: 'non-commercial-and-evaluation' // for non-commercial use only
    });
  }, 5000);
})();

// Boost Limit Multiplier
(function(){
  const data = [
    [2.608, 2.608, 2.608, 2.608, 2.608, 2.608, 2.608, 2.608],
    [2.608, 2.608, 2.608, 2.608, 2.608, 2.608, 2.608, 2.608],
    [2.608, 2.608, 2.608, 2.608, 2.608, 2.608, 2.608, 2.608],
    [2.608, 2.608, 2.608, 2.608, 2.608, 2.608, 2.608, 2.608],
    [2.347, 2.347, 2.347, 2.347, 2.347, 2.347, 2.347, 2.347],
    [1.826, 1.826, 1.826, 1.826, 1.826, 1.826, 1.826, 1.826],
  ];
  
  const rowHeaders = [0, 10, 30, 55, 60, 80];
  const colHeaders = [684, 718, 787, 848, 900, 958, 1100, 1221];
  
  const container = document.getElementById('boost8');
  
  setTimeout(() => {
    const boost = new Handsontable(container, {
      data: data,
      rowHeaders: rowHeaders,
      colHeaders: colHeaders,
      className: "htRight htBottom ",
      rowHeaderWidth: 100,
      colWidths:100,
      fillHandle: false,
      afterGetColHeader: function(col, TH){
        if(col < 0){
          TH.innerHTML = 'Target RPM'
        }
      },
      cells: function(){
        let cp = {}
        cp.type = 'numeric';
        cp.numericFormat = {pattern: '0.00'};
        cp.editor = false;
        return cp;
      },
      licenseKey: 'non-commercial-and-evaluation' // for non-commercial use only
    });
  }, 5000);
})();

// Modelled TQ Table
(function(){
  const data = [
    [540.31, 582.40, 576.24, 570.08, 572.29, 573.45, 573.93, 578.64, 578.73, 581.61, 583.63, 584.59],
    [540.31, 582.40, 576.24, 570.08, 572.29, 573.45, 573.93, 578.64, 578.73, 581.61, 583.63, 584.59],
    [540.31, 582.40, 576.24, 570.08, 572.29, 573.45, 573.93, 578.64, 578.73, 581.61, 583.63, 584.59],
    [540.31, 582.40, 576.24, 570.08, 572.29, 573.45, 573.93, 578.64, 578.73, 581.61, 583.63, 584.59],
    [540.31, 582.40, 576.24, 570.08, 572.29, 573.45, 573.93, 578.64, 578.73, 581.61, 583.63, 584.59],
    [540.31, 582.40, 576.24, 570.08, 572.29, 573.45, 573.93, 578.64, 578.73, 581.61, 583.63, 584.59],
    [540.31, 582.40, 576.24, 570.08, 572.29, 573.45, 573.93, 578.64, 578.73, 581.61, 583.63, 584.59],
    [540.31, 582.40, 576.24, 570.08, 572.29, 573.45, 573.93, 578.64, 578.73, 581.61, 583.63, 584.59],
    [540.31, 582.40, 576.24, 570.08, 572.29, 573.45, 573.93, 578.64, 578.73, 581.61, 583.63, 584.59],
    [540.31, 582.40, 576.24, 570.08, 572.29, 573.45, 573.93, 578.64, 578.73, 581.61, 583.63, 584.59],
  ];
  
  const rowHeaders = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const colHeaders = [2875, 3000, 3125, 3250, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000];
  
  const container = document.getElementById('boost9');
  
  setTimeout(() => {
    const boost = new Handsontable(container, {
      data: data,
      rowHeaders: rowHeaders,
      colHeaders: colHeaders,
      className: "htRight htBottom ",
      rowHeaderWidth: 100,
      colWidths:100,
      fillHandle: false,
      afterGetColHeader: function(col, TH){
        if(col < 0){
          TH.innerHTML = 'Target RPM'
        }
      },
      cells: function(){
        let cp = {}
        cp.type = 'numeric';
        cp.numericFormat = {pattern: '0.00'};
        cp.editor = false; 
        return cp;
      },
      licenseKey: 'non-commercial-and-evaluation' // for non-commercial use only
    });
  }, 5000);
})();
