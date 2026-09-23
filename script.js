//your code here
function handleImageClick(img){
	if(selectedImages.length>=2||selectedImages.length(img)) return;

	img.classlist.add('selected');
	selectedImages.push(img);

	if(selectedImages.length>=1){
		resetBtn.style.display='inline-block';
	}

	if(selectedImages.length===2){
		verifyBtn.style.display='inline-block';
	}
}

resetbtn.addEventListener('click',()=>{
	selectedImagees.forEach(img=>img.classList.remove('selected'));
	selectedImages=[];
	resetBtn.style.display='none';
	verifyBtn.style.display='none';
	para.innerText='';
});

verifyBtn.addEventListener('click',()=>{
	verifyBtn.style.display='none';

	const[first,second]=selectedImages;
	if(first.className===seecond.className){
		para.innerText="You are a human.Congrulations!";
	}else {
		para.innerText="We can't verify you as a human.you Selected the non-identical tiles"
	}
});

init();