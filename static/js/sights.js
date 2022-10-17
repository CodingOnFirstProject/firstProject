var box3BigImg = document.querySelector("#box3BigImg");
        var smallPics = document.querySelectorAll('.smallImg');

        for(let i = 0; i < smallPics.length; i++){
            smallPics[i].addEventListener('click', changePic);
        }

        function changePic(){
            var newPic = this.src;
            box3BigImg.setAttribute('src', newPic);
        }