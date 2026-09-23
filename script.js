//your code here
const imgClasses=['img1','img2','img3','img4','img5'];
let selectedImages = [];

const container = document.getElementById('img-container');
const resetBtn = document.getElementById('reset');
const verifyBtn = document.getElementById('verify');
const para = document.getElementById('para');

function init(){
	container.innerHTML='';
	selectedImages=[];
	para.innerText='';
	resetBtn.style.display='none';
	verifyBtn.style.display='none';

	const duplicateclass=imgClasses[Math.floor(Math.random()*imgClasses.length)];
	const allImages=[...imgClasses,duplicateclass];
	allImages.sort(()=>Math.random()-0.5);
	allImages.forEach((cls)=>{
		const img=document.createElement('img');
		img.className=cls;
		img.addEventListener('click',()=>handleImageClick(img));
		container.appendChild(img);
	});
}
function handleImageClick(img){
	if(selectedImages.length>=2||selectedImages.includes(img)) return;

	img.classList.add('selected');
	selectedImages.push(img);

	if(selectedImages.length>=1){
		resetBtn.style.display='inline-block';
	}

	if(selectedImages.length===2){
		verifyBtn.style.display='inline-block';
	}
}

resetBtn.addEventListener('click',()=>{
	selectedImages.forEach(img=>img.classList.remove('selected'));
	selectedImages=[];
	resetBtn.style.display='none';
	verifyBtn.style.display='none';
	para.innerText='';
});

verifyBtn.addEventListener('click',()=>{
	verifyBtn.style.display='none';

	const[first,second]=selectedImages;
	if(first.className===second.className){
		para.innerText="You are a human.Congrulations!";
	}else {
		para.innerText="We can't verify you as a human.you Selected the non-identical tiles"
	}
});

init();