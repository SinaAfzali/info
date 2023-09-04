const wordContainer1 = document.getElementById("engineer");
const words1 = ['م','مه','مهن','مهند','مهندس','مهندس ک','مهندس کا','مهندس کام','مهندس کامپ','مهندس کامپی','مهندس کامپیو','مهندس کامپیوت','مهندس کامپیوتر','مهندس کامپیوتر','مهندس کامپیوتر',
'مهندس کامپیوتر','مهندس کامپیوتر','مهندس کامپیوتر','مهندس کامپیوتر','مهندس کامپیوتر','مهندس کامپیوتر','مهندس کامپیوتر','مهندس کامپیوتر','مهندس کامپیوتر','مهندس کامپیوتر'
,'مهندس کامپیوتر','مهندس کامپیوتر','مهندس کامپیوتر','مهندس کامپیوتر','مهندس کامپیوتر','مهندس کامپیوتر','مهندس کامپیوتر','مهندس کامپیوتر','مهندس کامپیوتر','مهندس کامپیوتر',
'ط','طر','طرا','طراح','طراح س','طراح سا','طراح سای','طراح سایت','طراح سایت','طراح سایت','طراح سایت','طراح سایت','طراح سایت','طراح سایت','طراح سایت','طراح سایت','طراح سایت','طراح سایت'
,'طراح سایت','طراح سایت','طراح سایت','طراح سایت','طراح سایت','طراح سایت','طراح سایت','طراح سایت','طراح سایت','طراح سایت','طراح سایت'
,'طراح سایت','طراح سایت','طراح سایت','طراح سایت','طراح سایت','طراح سایت','طراح سایت','طراح سایت','طراح سایت','طراح سایت','طراح سایت',
'ب','بر','برن','برنا','برنام','برنامه','برنامه ن','برنامه نو','برنامه نوی','برنامه نویس','برنامه نویس','برنامه نویس','برنامه نویس','برنامه نویس'
,'برنامه نویس','برنامه نویس','برنامه نویس','برنامه نویس','برنامه نویس','برنامه نویس','برنامه نویس','برنامه نویس','برنامه نویس','برنامه نویس'
,'برنامه نویس','برنامه نویس','برنامه نویس','برنامه نویس','برنامه نویس','برنامه نویس','برنامه نویس','برنامه نویس','برنامه نویس','برنامه نویس','برنامه نویس'];


const wordContainer2 = document.getElementById('span-hello');
const words2 = ['س','سل','سلا','سلام','سلام !','سلام !!','سلام !!','سلام !!','سلام !!','سلام !!'];

const wordContainer3 = document.getElementById('span-i');
const words3 = ['م','من','من','من'];

const wordContainer4 = document.getElementById('span-name');
const words4 = ['س','سی','سین','سینا','سینا ا','سینا اف','سینا افض','سینا افضل','سینا افضلی','سینا افضلی'];

const wordContainer5 = document.getElementById('span-is');
const words5 = ['ه','هس','هست','هستم','هستم'];

function animateWords(words,wordContainer,time,repiet) {
  let index = 0;
  setInterval(() => {
    wordContainer.textContent = words[index];
    index = (index + 1) % words.length;
    if(index>=words.length - 1 && repiet == false)index-=1;
  }, time);
}



    animateWords(words2,wordContainer2,200,false);
      setTimeout(() => { 
        animateWords(words3, wordContainer3,200,false);
        setTimeout(() => { 
          animateWords(words4, wordContainer4,200,false);
          setTimeout(() => { 
            animateWords(words5, wordContainer5,200,false);
            setTimeout(() => { 
              animateWords(words1, wordContainer1,250,true);
            }, 2000);
          }, 2000);
        }, 400);
      }, 2000);




function deleteDiv(){
  var div = document.getElementById('img');
  div.remove();
}


window.addEventListener("resize", function() {
  if (window.innerWidth < 768) {
    var div = document.getElementById("img");
    div.remove();
  }
});
