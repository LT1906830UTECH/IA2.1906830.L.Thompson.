

 document.getElementById('form').addEventListener('submit', function(event) {
    const inputField=document.getElementById('GitHubUser');
    const inputValue=inputField.value;
    if(!inputValue.includes('@')){
        event.preventDefault();
        alert("!GitHubUsername must begin with '@' symbol.");
        
    }
 });


 document.getElementById('UploadAvatar').addEventListener('change',function(event) {
    const file=event.target.files[0];
    const errorDiv=document.getElementById('error');
    
    
    if(!file) return;
    const allowedTypes=['image/jpeg','image/png','image/jpg'];
    if(!allowedTypes.includes(file.type)){
        
        alert("Only JPEG and PNG allowed");
    event.target.value='';
    return;
    }
    const maxSizeInBytes=500*1024;
    if (file.size>maxSizeInBytes){
        
        alert("!File size must be less than 500KB");
        event.target.value='';
        return;
    };
    
 });
