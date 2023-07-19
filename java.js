let x = [2, 3, 4, 5, 6];
    let y = [4, 3, 6, 7, 8];
    let z = []
    for (var i = 0; i < x.length; i++) {
      for (var j = 0; j < y.length; j++) {
        if (x[i] == y[j]) {
          z.push(x[i]);

        }
      }
    }
    console.log(z);