  const data1 = [
    [14.7, 22.5, 29.6, 37.9, 48.4, 64.8, 89.7, 108.3, 137.4, 157.4, 178.2, 223.5, 246.2, 293.3, 344.9, 394.1, 442.6, 520.6],
    [15.5, 26.6, 35.7, 44.5, 54.6, 74, 97.8, 121.4, 158.6, 184.2, 203.4, 251.3, 273.9, 325, 372.3, 423.8, 475.5, 553.2],
    [15.9, 27.9, 37.7, 46.3, 58.2, 76.8, 99.5, 126.5, 166.4, 192, 212.3, 258.5, 281, 331.5, 383.4, 432.3, 485.3, 559],
    [16.7, 30.1, 39.3, 48, 62.3, 79.6, 103.9, 130.7, 167.4, 197, 215.5, 259.6, 283, 333, 385, 435, 486, 562.3],
    [18, 30.2, 40.3, 49.3, 62.4, 81.7, 108, 132, 167.4, 197, 216.3, 262.4, 284.9, 336, 385.5, 436.7, 488.6, 564],
    [18, 31.4, 41.5, 51, 63.8, 83.4, 108.7, 134.2, 168.9, 198, 219.9, 268.5, 291.5, 343.1, 394.1, 444.3, 497.6, 576.8],
    [18, 31.8, 42.6, 51.2, 64.8, 85.2, 109.2, 134.2, 172, 198, 217.9, 264, 291.3, 343, 400.5, 452, 506.1, 585.2],
    [18, 32.4, 42.6, 52.7, 64.8, 84.9, 109.7, 135.3, 172.7, 199.1, 217, 264.9, 291.6, 343, 401.5, 453.7, 508.1, 588.4],
    [18, 32.6, 42.8, 52.9, 65.2, 85.2, 110.8, 135.3, 174.6, 200, 218, 267.7, 292.2, 343, 402.4, 454.1, 510.3, 589.7],
    [18, 32.9, 43, 53.9, 65.2, 86.3, 111.1, 135.3, 175.6, 200.7, 219, 270.5, 292, 343.9, 402.5, 454.6, 511, 589.8],
    [18, 32.9, 43, 54.1, 65.2, 85.7, 110.9, 136.8, 176.6, 201.2, 221.1, 271.5, 293.9, 344.8, 402.5, 454.9, 511, 590.1],
    [18, 32.9, 43, 53.6, 65.2, 85.7, 110.9, 136.8, 177.6, 201.7, 222.1, 271.5, 293.9, 344.8, 402.9, 455.9, 511.8, 593.3],
    [18, 32.7, 43, 53.6, 65.2, 85.7, 111.9, 136.8, 177.6, 202.1, 224.1, 271, 294.8, 345.7, 404.9, 455.9, 511.8, 595.6],
    [18, 33.1, 43.2, 53.6, 65.2, 87.3, 112.9, 138.8, 179.7, 202.1, 224.1, 273, 299.9, 352.3, 405.9, 456.8, 513.4, 596.8],
    [18, 33.1, 43.4, 53.5, 65.2, 87.3, 113.9, 138.8, 179.7, 202.2, 225.1, 275, 301.8, 358.8, 405.8, 460.3, 513.9, 597.3],
    [18, 33.1, 43.4, 53.5, 65.2, 87.3, 113.9, 138.9, 179.7, 203, 225.6, 278.6, 309.1, 363.8, 406.9, 462.3, 515.9, 602.2],
    [18, 33.1, 43.4, 53.5, 65.2, 87.3, 113.9, 140, 179.7, 203.5, 225.6, 280.9, 312.1, 363.8, 407.5, 464.1, 518.4, 602.3],
    [18, 33.1, 43.4, 53.5, 65.2, 87.3, 113.9, 140, 179.7, 203.2, 227.1, 285, 312.1, 363.7, 409.4, 465.1, 518.4, 605.3],
    [18, 33.1, 43.4, 53.5, 65.2, 87.3, 113.8, 139.8, 179.7, 203.2, 228, 285, 312.6, 363.7, 409.5, 466.1, 520.4, 607.4],
    [19, 33.1, 43.4, 55.5, 67.3, 89.3, 113.8, 139.8, 179.7, 203.2, 229.1, 286, 313.2, 363.7, 409.5, 466.1, 520.6, 608.4],
  ];
  
  const rowHeaders1 = [500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500, 2750, 3000, 3250, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000];
  const colHeaders1 = [8,14,18,22,27,35,45,55,70,80,90,110,120,140,160,180,200,230];
  
  const container1 = document.getElementById('base1');
  const hyperformulaInstance = HyperFormula.buildEmpty({
    // to use an external HyperFormula instance,
    // initialize it with the `'internal-use-in-handsontable'` license key
    licenseKey: 'internal-use-in-handsontable',
  });
  const table = new Handsontable(container1, {
    data: data1,
    rowHeaders: rowHeaders1,
    colHeaders: colHeaders1,
    className: "htRight htBottom ",
    rowHeaderWidth: 100,
    colWidths:70,
    fillHandle: false,
    afterGetColHeader: function(col, TH){
      if(col < 0){
        TH.innerHTML = "X Axis = Load<br>Y Axis = RPM";
      }
    },
    cells: function(row, col){
      let cp = {}
      cp.type = 'numeric';
      cp.numericFormat = {pattern: '0.00'};
      cp.editor = false;
      return cp;
    },
    formulas: {
      engine: hyperformulaInstance,
      sheetName: 'Sheet1'
    },
    licenseKey: 'non-commercial-and-evaluation' // for non-commercial use only
  });

  const data2 = [];
  const rowHeaders2 = rowHeaders1;
  const colHeaders2 = colHeaders1;
  
  for(var i = 0 ; i < rowHeaders1.length ; i ++){
    const row = [];
    for(var j = 0 ; j < colHeaders1.length ; j ++){
      let charCode = "A".charCodeAt(0) + j;
      let char = String.fromCharCode(charCode);
      row[j] = "=SHEET1!"+char+(i+1);
    }
    data2[i] = row;
  }
  const container2 = document.getElementById('base2');
  
  setTimeout(()=>{
    const table2 = new Handsontable(container2, {
      data: data2,
      rowHeaders: rowHeaders2,
      colHeaders: colHeaders2,
      className: "htRight htBottom ",
      rowHeaderWidth: 100,
      colWidths:70,
      fillHandle: false,
      copyPaste: false,
      afterGetColHeader: function(col, TH){
        if(col < 0){
          TH.innerHTML = "X Axis = Load<br>Y Axis = RPM";
        }
      },
      cells: function(row, col){
        if(col === colHeaders2.length-1) return;
        let cp = {}
        cp.type = 'numeric';
        cp.numericFormat = {pattern: '0.0'};
        cp.editor = false;
        return cp;
      },
      formulas: {
        engine: hyperformulaInstance,
        sheetName: 'Sheet2'
      },
      licenseKey: 'non-commercial-and-evaluation' // for non-commercial use only
    });
  }, 1500);
    

