
window.onload = function(){
      ajax({
        method: 'get',
        url: './data/data.json',
        data: {},
        success: function (data) {
            var data = data[0];
            console.log(data);
            var div = document.getElementsByClassName('data')[0];

            for(i of data.entries){
                  var div0 = document.createElement('div');
                  div0.setAttribute('class','div0');
                  div0.setAttribute('data-id',i.id);
                  var h3 = document.createElement('h3');
                  h3.innerHTML = i.name;
                  var p = document.createElement('p');
                  p.innerHTML = i.description;
                  //拼接
                  div0.append(h3);
                  div0.append(p);
                  div.append(div0);
                  //逻辑
                  div0.onclick = function(){
                      var dataId = this.getAttribute("data-id");
                      ajax({
                          method: 'get',
                          url: './data/food.json',
                          data: {},
                          success:function(res){
                              res.forEach(function(el,index){
                                  let coverAll = document.getElementsByClassName('coverBac')[0];
                                  let coverDiv = document.getElementsByClassName('cover')[0];
                                  coverAll.style.display = 'block';
                                  let h4 = coverDiv.getElementsByTagName('h4')[0];
                                  let img = coverDiv.getElementsByTagName('img')[0];
                                  let a = coverDiv.getElementsByTagName('a')[0];
                                  if(dataId == el.id){
                                      h4.innerHTML = el.word;
                                      img.src = el.src;
                                      a.onclick = function(){
                                          a.href = el.url;
                                          coverAll.style.display = 'none';
                                      }
                                      h4.onclick = function(){
                                          window.location.href = el.url;
                                          coverAll.style.display = 'none';
                                      }
                                  }
                              })
                          }
                      });
                  }
            }

            // 点击查看data
            var mainData = document.getElementsByClassName('main_data')[0];
            button.onclick = function(e){
                let coverAll = document.getElementsByClassName('coverBac')[0];
                coverAll.style.display = 'none';
            }
            closeSpan.onclick = function(e){
                button.onclick();
            }
        }

      });

      let h1 = document.getElementsByTagName('h1');
      let h2 = document.getElementsByTagName('h2');
      var button = document.getElementById("button");
      var closeSpan = document.getElementById("close");


}
