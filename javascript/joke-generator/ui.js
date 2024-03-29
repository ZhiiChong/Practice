document.getElementById('cn').onclick = () => {
  document.title = '笑话生成器';
  document.getElementById('lbl-customname').textContent = '请输入自定义的名字：';
  document.getElementById('lbl-cn').textContent = '中国';
  document.getElementById('lbl-us').textContent = '美国';
  document.getElementById('lbl-uk').textContent = '英国';
  document.getElementById('customname').placeholder = '李雷';
  document.querySelector('.randomize').textContent = '随机生成笑话';
};

document.getElementById('us').onclick =
document.getElementById('uk').onclick = () => {
  document.title = 'Silly story generator';
  document.getElementById('lbl-customname').textContent = 'Enter custom name:';
  document.getElementById('lbl-cn').textContent = 'CN';
  document.getElementById('lbl-us').textContent = 'US';
  document.getElementById('lbl-uk').textContent = 'UK';
  document.getElementById('customname').placeholder = 'Bob';
  document.querySelector('.randomize').textContent = 'Generate random story';
};

// 定义变量和函数
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

// 纯文本字串
let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

let insertx = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let inserty = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertz = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// 事件监听器和函数定义
randomize.addEventListener('click', result);

function replaceText(string, childStr, replaceStr) {
  while(string!==string.replace(childStr, replaceStr)) {
    string = string.replace(childStr, replaceStr);
  }
  return string;
}

function result() {
  let newStory = storyText;
  xItem = randomValueFromArray(insertx);
  yItem = randomValueFromArray(inserty);
  zItem = randomValueFromArray(insertz);
  
  if(customName.value !== '') {
    var name = customName.value;
    newStory = replaceText(newStory, 'Bob', name);
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300/14);
    var temperature =  Math.round((94-32)/1.8);
    var temString = temperature.toString();
    var weiString = weight.toString();
    newStory = replaceText(newStory, '94 fahrenheit', temString + ' centigrade');
    newStory = replaceText(newStory, '300 pounds', weiString + ' stones');
  }

  newStory = replaceText(newStory, ':insertx:', xItem);
  newStory = replaceText(newStory, ':inserty:', yItem);
  newStory = replaceText(newStory, ':insertz:', zItem);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

