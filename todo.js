function addtolist()
        {
           var item= document.getElementById("ip");
           const para = document.createElement("li");
           const cross = document.createElement("button");
           cross.setAttribute("type", "submit");
           para.setAttribute("id", "listtype");
           cross.innerText = "X";
           para.innerText=item.value;
           document.getElementById("finallist").appendChild(para);
           document.getElementById("listtype").appendChild(cross);
           const breakk = document.createElement("br");
           document.getElementById("finallist").appendChild(breakk);
            item.value="";
            cross.onclick=function(){
                    para.setAttribute("class", "boom");
            }
            para.setAttribute("id", "gone");
        }