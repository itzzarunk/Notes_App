const adbtn=document.querySelector('add');
adbtn.addEventListener('click',()=> new());

function new(){
    document.selectElementbyId('note').innerHTML="
    <div class="notes">
  <div class="tools">
    <button class="edit">
      <i class="fas fa-edit"></i>
    </button>
    <button class="delete">
      <i class="fas fa-trash-alt"></i>
    </button>
  </div>
  <div class="area">
    <textarea></textarea>
  </div>
</div>";
}
