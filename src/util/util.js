
/*分秒倒计时*/
const countTime = () => {
  var m = 0;  //分
  var s = 59;  //秒
  let timer = setInterval(() => {
    if( m == 0 && s == 0 ){
       clearInterval(this.state.timer)
       this.timeOutAlert()
       m = 15;
       s = 59;
     }else if( m >= 0 ){
      if( s > 0 ){
        s--;
      }else if( s == 0 ){
        m--;
        s = 59;
      }
    }
    m = m < 10 ? (0 + m):m
    s = s < 10 ? ('0' + s):s
    let cou = m+':'+s
    })
}
