const searchBtn = document.getElementById('search-btn');
const search = document.getElementById('search');
const tip = document.getElementById('tip')
const tagContainer = document.querySelector('.tag-container');
const input = document.querySelector('.tag-container input');
let tags = [];
var i = 0;
var message = '  Search A Keyword';
var speed = 40;
var html;

 
window.onload = function () {
searchBtn.addEventListener('click', () =>{
    search.style.width = '50vh';
    search.style.paddingLeft = '50px';
    search.style.cursor = 'text';
    search.focus();
    typewriter();
   
})
}

function getSearchableData() {
    if(subject == null) {
     
    } else {
         var toAdd = [];
         for( i = 0; i < subset.length; i++) {
              words = subset[i].keywords;  
  
              for(k=0;k<words.length;k++) {
                  if(toAdd.includes(`${words[k]}`)) {
                      continue;
                  } else {
                      toAdd.push(words[k]);
                  }
          }
          
      }
      toAdd.forEach(function(word) {
        html+='<option value="'+word+'">';
    });
    $("#list").append(html);
}

}
function typewriter() {
    if (i < message.length) {
        msg = search.getAttribute('placeholder') + message.charAt(i);
        search.setAttribute('placeholder', msg); 
        i++;
        setTimeout(typewriter, speed);
    }
    
}
search.addEventListener('keydown', () => {
    tip.style.visibility = 'visible';
    tip.style.opacity = '1';
})

search.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
    var input = document.getElementById('search').value;    
    if(subject === null) {
        selectSubject(input); 
    } else {
        selectKeyword(input);        
        } 

    getSearchableData();
    
}

})

function createTag(label) {
  const div = document.createElement('div');
  div.setAttribute('class', 'tag');
  const span = document.createElement('span');
  span.innerHTML = label;
  const closeIcon = document.createElement('i');
  closeIcon.innerHTML = 'close';
  closeIcon.setAttribute('data-item', label);
  div.appendChild(span);
  div.appendChild(closeIcon);
  return div;
}

function clearTags() {
  document.querySelectorAll('.tag').forEach(tag => {
    tag.parentElement.removeChild(tag);
  });
}

function addTags() {
  clearTags();
  tags.slice().reverse().forEach(tag => {
    tagContainer.prepend(createTag(tag));
  });
}

input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      e.target.value.split(',').forEach(tag => {
        tags.push(tag);  
      });
      
      addTags();
      input.value = '';
    }
});
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'I') {
    const tagLabel = e.target.getAttribute('data-item');
    const index = tags.indexOf(tagLabel);
    tags = [...tags.slice(0, index), ...tags.slice(index+1)];
    unselectKeyword(tagLabel);
    addTags();    

  }
})


