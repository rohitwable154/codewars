function persistence(num) {
    let times = 0;
    while(num.toString().length > 1) {
        times++;
        num = num.toString().split("").reduce( (a,b) => a * b);
    }
    return times;
  }